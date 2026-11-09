import { StyleSheet } from "react-native";

export const laundryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FB",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#17324D",
  },
  subtitle: {
    color: "#64748B",
    fontSize: 15,
    marginTop: 6,
    marginBottom: 22,
  },
  summary: {
    backgroundColor: "#DBEAFE",
    padding: 18,
    borderRadius: 16,
    marginBottom: 22,
  },
  summaryLabel: {
    color: "#1D4ED8",
    fontSize: 14,
  },
  summaryNumber: {
    color: "#1D4ED8",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#17324D",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#17324D",
  },
  quantity: {
    color: "#64748B",
    marginTop: 6,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#E2E8F0",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  secondaryButtonText: {
    color: "#17324D",
    fontWeight: "bold",
  },
  detailCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    marginTop: 12,
  },
});