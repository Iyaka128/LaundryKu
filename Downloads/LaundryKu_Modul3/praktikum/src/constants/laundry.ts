export type LaundryItem = {
  id: string;
  name: string;
  quantity: number;
  status: "Menunggu" | "Sedang Dicuci" | "Selesai";
};

export const initialLaundryItems: LaundryItem[] = [
  { id: "1", name: "Kaos", quantity: 3, status: "Menunggu" },
  { id: "2", name: "Celana", quantity: 2, status: "Sedang Dicuci" },
  { id: "3", name: "Jaket", quantity: 1, status: "Selesai" },
  { id: "4", name: "Kemeja", quantity: 2, status: "Menunggu" },
];