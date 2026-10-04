import { Text, View } from "react-native";
import { LaundryCard } from "../components/LaundryCard";
import { laundryItems } from "../constants/laundry";
import { laundryStyles } from "../styles/laundry";

export default function Index() {
  return (
    <View style={laundryStyles.container}>
      <Text style={laundryStyles.title}>
        🧺 LaundryKu
      </Text>

      <Text style={laundryStyles.subtitle}>
        Daftar cucian kamu
      </Text>

      <Text style={{ marginBottom: 15 }}>
        Total cucian: {laundryItems.length} item
      </Text>

      {/* LOOP DENGAN MAP */}
      {laundryItems.map((laundry) => (
        <LaundryCard
          key={laundry.id}
          laundry={laundry}
        />
      ))}
    </View>
  );
}