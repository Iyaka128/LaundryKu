import { Link } from "expo-router"; // Task 1
import { Pressable, Text, View } from "react-native";

import type { LaundryItem } from "../constants/laundry";
import { laundryStyles as styles } from "../styles/laundry";

type Props = {
  laundry: LaundryItem;
};

export default function LaundryCard({ laundry }: Props) {
  const statusColor =
    laundry.status === "Selesai"
      ? "#166534"
      : laundry.status === "Sedang Dicuci"
        ? "#1D4ED8"
        : "#92400E";

  return (
    <View style={styles.card}>
      <Text style={styles.itemName}>🧺 {laundry.name}</Text>
      <Text style={styles.quantity}>
        Jumlah: {laundry.quantity} buah
      </Text>

      <Text
        style={{
          color: statusColor,
          backgroundColor:
            laundry.status === "Selesai"
              ? "#DCFCE7"
              : laundry.status === "Sedang Dicuci"
                ? "#DBEAFE"
                : "#FEF3C7",
          padding: 8,
          borderRadius: 8,
          overflow: "hidden",
          alignSelf: "flex-start",
        }}
      >
        {laundry.status}
      </Text>

      <Link
      href={{
        pathname: "/laundry/[id]",
        params: { id: laundry.id },
      }}
      asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Lihat Detail</Text>
          </Pressable>
        </Link>

      
    
    </View>
  );
}