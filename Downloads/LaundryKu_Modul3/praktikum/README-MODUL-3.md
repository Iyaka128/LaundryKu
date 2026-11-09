# LaundryKu — Pengembangan Assignment Modul 3

## Fitur baru
- Mengambil contoh data pelanggan dari endpoint eksternal JSONPlaceholder.
- Mendefinisikan bentuk data pelanggan menggunakan TypeScript `interface`.
- Menampilkan indikator loading, data pelanggan, dan pesan error di halaman Beranda.
- Menyediakan tombol untuk memuat ulang data.

## File baru
- `src/types/customer.ts`: interface `Customer` untuk struktur respons API.
- `src/services/customerService.ts`: fungsi asynchronous `fetchCustomers()` dan fungsi Promise `fetchCustomersWithPromise()`.

## Konsep Modul 3 yang diterapkan
1. Endpoint GET: `https://jsonplaceholder.typicode.com/users`.
2. Custom async function: `fetchCustomers()` menggunakan `async/await`.
3. Built-in asynchronous function: `fetch()` dan `response.json()`.
4. Promise: `fetchCustomersWithPromise()` menggunakan `new Promise()`.
5. `resolve()` menyelesaikan Promise ketika data berhasil diperoleh.
6. `reject()` digunakan ketika request atau pemrosesan data gagal.
7. `.then()`, `.catch()`, dan `.finally()` digunakan pada aksi muat ulang.

## Menjalankan aplikasi
Dari root proyek (folder yang berisi `package.json`):

```bash
npx expo start --go
```

Pastikan perangkat/emulator memiliki koneksi internet. Data JSONPlaceholder adalah data contoh, bukan data pelanggan nyata LaundryKu.
