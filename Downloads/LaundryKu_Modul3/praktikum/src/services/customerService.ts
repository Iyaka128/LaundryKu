import type { Customer } from "../types/customer";

const CUSTOMER_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

export async function fetchCustomers(): Promise<Customer[]> {
  const response = await fetch(CUSTOMER_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Gagal mengambil pelanggan. HTTP ${response.status}`);
  }

  const result: unknown = await response.json();

  if (!Array.isArray(result)) {
    throw new Error("Format data pelanggan dari API tidak sesuai.");
  }

  return result as Customer[];
}



export function fetchCustomersWithPromise(): Promise<Customer[]> {
  return new Promise<Customer[]>((resolve, reject) => {
    fetch(CUSTOMER_ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          reject(new Error(`Request gagal. HTTP ${response.status}`));
          return undefined;
        }

        return response.json() as Promise<Customer[]>;
      })
      .then((customers) => {
        if (customers !== undefined) {
          resolve(customers);
        }
      })
      .catch((error: unknown) => {
        reject(error);
      });
  });
}
