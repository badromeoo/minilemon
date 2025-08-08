# CryptoTracker - Landing Page Aset Kripto

Sebuah aplikasi web sederhana untuk melacak harga dan volume pasar aset kripto, dibangun sebagai bagian dari *front-end skill test*. Aplikasi ini mengambil data secara *live* dari API publik Indodax dan menampilkannya dalam antarmuka yang bersih dan responsif.

---

## 🚀 Live Demo

Aplikasi ini sudah di-deploy dan dapat diakses melalui link berikut:

cryptotract-ashy.vercel.app


---

## ✨ Fitur Utama

-   **Halaman Utama Dinamis**: Menampilkan 5 aset kripto teratas berdasarkan volume trading secara *real-time*.
-   **Daftar Produk Lengkap**: Halaman produk menampilkan semua pasangan aset yang tersedia dari API, lengkap dengan harga dan volume.
-   **Fitur Pencarian**: Pengguna dapat dengan mudah mencari aset kripto berdasarkan nama di halaman produk.
-   **Desain Responsif**: Tampilan dioptimalkan untuk berbagai ukuran layar, dari desktop hingga mobile, termasuk *hamburger menu* pada navbar.
-   **Latar Belakang Animasi**: Menggunakan WebGL untuk menciptakan latar belakang dinamis dan menarik tanpa mengganggu performa.
-   **Halaman Informatif**: Halaman "About" berisi *disclaimer* dan saran investasi yang relevan.

---

## 🛠️ Teknologi yang Digunakan

-   **Framework**: Next.js (React)
-   **Bahasa**: TypeScript
-   **Styling**: Tailwind CSS
-   **Pengambilan Data**: Axios
-   **Animasi**: OGL (untuk latar belakang WebGL)
-   **Linting**: ESLint

---

## ⚙️ Menjalankan Aplikasi Secara Lokal

Untuk menjalankan proyek ini di komputermu, ikuti langkah-langkah berikut:

**1. Clone Repositori**
   ```bash
   git clone [URL_REPOSITORY_ANDA]
   cd [NAMA_FOLDER_PROYEK]
   ```

**2. Instalasi Dependensi**
   Gunakan `npm` atau `yarn` untuk menginstal semua paket yang dibutuhkan.
   ```bash
   npm install
   ```
   atau
   ```bash
   yarn install
   ```

**3. Jalankan Server Pengembangan**
   Jalankan perintah di bawah ini untuk memulai aplikasi pada mode pengembangan.
   ```bash
   npm run dev
   ```

**4. Buka Aplikasi**
   Buka browser dan kunjungi `http://localhost:3000` untuk melihat hasilnya.

---

## 🔌 API

Aplikasi ini menggunakan API publik dari **Indodax**:
-   `https://indodax.com/api/pairs` untuk mendapatkan daftar semua aset.
-   `https://indodax.com/api/summaries` untuk mendapatkan data harga dan volume terbaru.