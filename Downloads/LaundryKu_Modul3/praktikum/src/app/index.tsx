import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import LaundryCard from "../components/LaundryCard";
import { useLaundry } from "../context/LaundryContext";
import { laundryStyles as styles } from "../styles/laundry";
import type { Customer } from "../types/customer";
import {
  fetchCustomers,
  fetchCustomersWithPromise,
} from "../services/customerService";

export default function HomeScreen() {
  const { items } = useLaundry();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const totalPieces = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Custom async function dipanggil saat halaman pertama kali dibuka.
  async function loadCustomers() {
    try {
      setIsLoading(true);
      setErrorMessage(null);
      const data = await fetchCustomers();
      setCustomers(data.slice(0, 5));
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Terjadi kesalahan tidak dikenal."
      );
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadCustomers();
  }, []);

  // Fungsi ini menggunakan Promise chain: .then(), .catch(), dan .finally().
  function refreshCustomers() {
    setIsLoading(true);
    setErrorMessage(null);

    fetchCustomersWithPromise()
      .then((data) => {
        setCustomers(data.slice(0, 5));
      })
      .catch((error: unknown) => {
        setErrorMessage(
          error instanceof Error ? error.message : "Gagal memuat data pelanggan."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>🧺 LaundryKu</Text>
        <Text style={styles.subtitle}>
          Pantau cucianmu dengan mudah.
        </Text>

        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>Total jenis cucian</Text>
          <Text style={styles.summaryNumber}>{items.length} jenis</Text>
          <Text style={styles.summaryLabel}>
            Total pakaian: {totalPieces} buah
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Daftar Cucian</Text>
        {items.map((item) => (
          <LaundryCard key={item.id} laundry={item} />
        ))}

        <View style={{ marginTop: 18 }}>
          <Text style={styles.sectionTitle}>Data Pelanggan dari API</Text>
          <Text style={{ color: "#64748B", marginBottom: 12 }}>
            Contoh data eksternal untuk latihan API Call Modul 3.
          </Text>

          {isLoading ? (
            <View style={{ padding: 20, alignItems: "center" }}>
              <ActivityIndicator size="large" color="#2563EB" />
              <Text style={{ marginTop: 8, color: "#64748B" }}>
                Mengambil data pelanggan...
              </Text>
            </View>
          ) : errorMessage ? (
            <View style={{ backgroundColor: "#FEE2E2", padding: 14, borderRadius: 12 }}>
              <Text style={{ color: "#991B1B", marginBottom: 10 }}>
                {errorMessage}
              </Text>
              <Pressable onPress={refreshCustomers} style={styles.button}>
                <Text style={styles.buttonText}>Coba Lagi</Text>
              </Pressable>
            </View>
          ) : (
            <>
              {customers.map((customer) => (
                <View
                  key={customer.id}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 12,
                    borderWidth: 1,
                    borderColor: "#E2E8F0",
                    padding: 14,
                    marginBottom: 10,
                  }}
                >
                  <Text style={styles.itemName}>{customer.name}</Text>
                  <Text style={styles.quantity}>Username: {customer.username}</Text>
                  <Text style={styles.quantity}>Email: {customer.email}</Text>
                  <Text style={styles.quantity}>Telepon: {customer.phone}</Text>
                  <Text style={styles.quantity}>
                    Perusahaan: {customer.company.name}
                  </Text>
                </View>
              ))}
              <Pressable onPress={refreshCustomers} style={styles.button}>
                <Text style={styles.buttonText}>Muat Ulang Data API</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
