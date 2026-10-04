import { StyleSheet } from "react-native";

export const laundryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 16,
    color: "#666666",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
  },

  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },

  quantity: {
    fontSize: 15,
    color: "#555555",
    marginBottom: 10,
  },

  button: {
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});