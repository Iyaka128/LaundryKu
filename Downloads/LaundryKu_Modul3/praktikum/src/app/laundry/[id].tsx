import { ScrollView, Text, View, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable } from "react-native";


import { useLaundry } from "../../context/LaundryContext";
import { laundryStyles as styles } from "../../styles/laundry";

export default function LaundryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { items, updateStatus } = useLaundry();

  const laundry = items.find((item) => item.id === id);

  if (!laundry) {
    return (
      <View style={styles.content}>
        <Text>Data cucian tidak ditemukan.</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.buttonText}>Kembali ke Beranda</Text>
        </Pressable>
      </View>
    );
  }

  const handleUpdateStatus = () => {
    updateStatus(laundry.id);

    Alert.alert(
      "Status diperbarui",
      "Status cucian berhasil diubah."
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Detail Cucian</Text>
        <Text style={styles.subtitle}>
          Informasi pesanan laundry kamu.
        </Text>

        <View style={styles.detailCard}>
          <Text style={styles.itemName}>{laundry.name}</Text>
          <Text style={styles.quantity}>
            ID pesanan: {laundry.id}
          </Text>
          <Text style={styles.quantity}>
            Jumlah: {laundry.quantity} buah
          </Text>
          <Text style={{ fontSize: 16, marginTop: 8 }}>
            Status saat ini:
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color:
                laundry.status === "Selesai"
                  ? "#166534"
                  : "#1D4ED8",
              marginTop: 6,
            }}
          >
            {laundry.status}
          </Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={handleUpdateStatus}
        >
          <Text style={styles.buttonText}>
            Perbarui Status
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton} // Task 1
          onPress={() => router.back()}
        >
          <Text style={styles.secondaryButtonText}>
            Kembali
          </Text>
        </Pressable>

        <Pressable
          style={styles.secondaryButton}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.secondaryButtonText}>
            Kembali ke Beranda
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}