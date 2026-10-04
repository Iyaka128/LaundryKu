import { Alert, Pressable, Text, View } from "react-native";
import { LaundryItem } from "../constants/laundry";
import { laundryStyles } from "../styles/laundry";

type LaundryCardProps = {
  laundry: LaundryItem;
};

export function LaundryCard({ laundry }: LaundryCardProps) {
  const showDetail = () => {
    Alert.alert(
      "Detail Cucian",
      `${laundry.name}\nJumlah: ${laundry.quantity} buah\nStatus: ${laundry.status}`
    );
  };

  return (
    <View style={laundryStyles.card}>
      <Text style={laundryStyles.itemName}>
        👕 {laundry.name}
      </Text>

      <Text style={laundryStyles.quantity}>
        Jumlah: {laundry.quantity} buah
      </Text>

      {/* INLINE STYLE */}
      <Text
        style={{
          backgroundColor:
            laundry.status === "Selesai" ? "#D1FAE5" : "#FEF3C7",
          color:
            laundry.status === "Selesai" ? "#065F46" : "#92400E",
          padding: 8,
          borderRadius: 8,
        }}
      >
        Status: {laundry.status}
      </Text>

      <Pressable
        style={laundryStyles.button}
        onPress={showDetail}
      >
        <Text style={laundryStyles.buttonText}>
          Lihat Detail
        </Text>
      </Pressable>
    </View>
  );
}