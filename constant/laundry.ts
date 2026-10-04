export type LaundryItem = {
  id: number;
  name: string;
  quantity: number;
  status: string;
};

export const laundryItems: LaundryItem[] = [
  {
    id: 1,
    name: "Kaos",
    quantity: 3,
    status: "Sedang Dicuci",
  },
  {
    id: 2,
    name: "Celana",
    quantity: 2,
    status: "Siap Diambil",
  },
  {
    id: 3,
    name: "Jaket",
    quantity: 1,
    status: "Sedang Dicuci",
  },
  {
    id: 4,
    name: "Kemeja",
    quantity: 2,
    status: "Selesai",
  },
];