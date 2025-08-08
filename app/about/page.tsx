import Navbar from "@/components/Navbar";
import DarkVeil from '@/components/DarkVeil';

export default function AboutPage() {
  return (
    <>
      {/* Latar Belakang di lapisan paling belakang */}
      <DarkVeil
        className="fixed top-0 left-0 -z-10"
      />

      {/* Konten utama di lapisan depan */}
      <div className="relative z-0">
        <Navbar />
        <main className="container mx-auto p-4 mt-15 flex justify-center">
          
          {/* Kontainer Glassmorphism */}
          <div className="w-full max-w-4xl bg-black/20 backdrop-blur-md p-8 md:p-10 rounded-xl border border-white/10">
            
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Tentang Aplikasi Ini
            </h1>

            {/* Bagian Disclaimer */}
            <div className="space-y-4 text-gray-200 leading-relaxed">
              <h2 className="text-2xl font-semibold text-yellow-400 border-b border-yellow-400/30 pb-2">
                Disclaimer
              </h2>
              <p>
                Selamat datang di CryptoTracker! Aplikasi ini dibuat sebagai proyek latihan dan portofolio untuk menunjukkan kemampuan pengembangan web. Anggap saja ini sebagai etalase, bukan sebagai toko.
              </p>
              <p>
                Semua data harga, volume, dan aset kripto yang ditampilkan di sini diambil langsung dari API publik Indodax. Kami berusaha menampilkan data seakurat mungkin sesuai dengan sumbernya, namun kami tidak bisa menjamin data tersebut 100% akurat atau *real-time* setiap saat. Aplikasi ini adalah alat pelacak, bukan platform trading.
              </p>
              <p className="font-bold text-white">
                Penting untuk diingat: Informasi apa pun di situs ini BUKAN merupakan nasihat keuangan.
              </p>
            </div>

            {/* Bagian Saran Investasi */}
            <div className="mt-10 space-y-4 text-gray-200 leading-relaxed">
              <h2 className="text-2xl font-semibold text-yellow-400 border-b border-yellow-400/30 pb-2">
                Beberapa Patah Kata Bijak
              </h2>
              <p>
                Dunia kripto itu menarik, penuh peluang, tapi juga penuh dengan tikungan tajam. Sebelum kamu memutuskan untuk terjun, ada baiknya kamu memegang beberapa prinsip ini:
              </p>
              <ul className="list-disc list-outside pl-5 space-y-3">
                <li>
                  <strong className="text-white">Do Your Own Research (DYOR):</strong> Ini adalah mantra utama. Jangan pernah berinvestasi pada sesuatu hanya karena ikut-ikutan. Pelajari teknologinya, tim di baliknya, dan tujuan dari proyek tersebut.
                </li>
                <li>
                  <strong className="text-white">Investasikan Uang Dingin:</strong> Gunakan hanya uang yang kamu siap untuk kehilangannya. Pasar kripto sangat volatil, harganya bisa naik dan turun secara drastis dalam waktu singkat. Jangan gunakan uang kebutuhan sehari-hari.
                </li>
                <li>
                  <strong className="text-white">Pikirkan Jangka Panjang:</strong> Hindari panik saat pasar sedang merah. Jika kamu percaya pada fundamental sebuah proyek, berinvestasi dengan horison jangka panjang seringkali lebih bijaksana daripada mencoba menebak pergerakan harga harian.
                </li>
                <li>
                  <strong className="text-white">Keamanan itu Nomor Satu:</strong> Jaga aset digitalmu dengan baik. Gunakan kata sandi yang kuat, aktifkan otentikasi dua faktor (2FA), dan waspada terhadap penipuan (*phishing*).
                </li>
              </ul>
              <p>
                Selamat belajar dan semoga beruntung dalam perjalanan investasimu. Selalu berinvestasi dengan bijak dan bertanggung jawab!
              </p>
            </div>

          </div>
        </main>
      </div>
    </>
  );
}