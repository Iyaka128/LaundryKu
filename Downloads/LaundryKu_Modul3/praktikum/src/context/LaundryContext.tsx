import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  initialLaundryItems,
  type LaundryItem,
} from "../constants/laundry";

type LaundryContextType = {
  items: LaundryItem[];
  updateStatus: (id: string) => void;
};

const LaundryContext = createContext<LaundryContextType | undefined>(
  undefined
);

export function LaundryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LaundryItem[]>(initialLaundryItems);

  useEffect(() => {
    console.log("Data LaundryKu diperbarui:", items);
  }, [items]);

  const updateStatus = (id: string) => {
    setItems((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== id) return item;

        const nextStatus: LaundryItem["status"] =
          item.status === "Menunggu"
            ? "Sedang Dicuci"
            : item.status === "Sedang Dicuci"
              ? "Selesai"
              : "Menunggu";

        return { ...item, status: nextStatus };
      })
    );
  };

  return (
    <LaundryContext.Provider value={{ items, updateStatus }}>
      {children}
    </LaundryContext.Provider>
  );
}

export function useLaundry() {
  const context = useContext(LaundryContext);

  if (!context) {
    throw new Error("useLaundry harus digunakan di dalam LaundryProvider");
  }

  return context;
}