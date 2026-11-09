import { Stack } from "expo-router";
import { LaundryProvider } from "../context/LaundryContext";

export default function RootLayout() {
  return (
    <LaundryProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ title: "LaundryKu" }}
        />
        <Stack.Screen
          name="laundry/[id]"
          options={{ title: "Detail Cucian" }}
        />
      </Stack>
    </LaundryProvider>
  );
}