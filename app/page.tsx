import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import DarkVeil from '@/components/DarkVeil';

// --- Tipe Data (Sama seperti di halaman produk) ---
type TradingPair = {
  id: string;
  ticker_id: string;
  description: string;
  url_logo: string;
};

type TickerSummary = {
  last: string;
  vol_idr: string;
};

type CombinedData = TradingPair & {
  price: string;
  volume: string;
};

// --- Fungsi Pengambilan & Penggabungan Data ---
async function getCombinedCryptoData(): Promise<CombinedData[]> {
    const pairsUrl = 'https://indodax.com/api/pairs';
    const summariesUrl = 'https://indodax.com/api/summaries';
    try {
        const [pairsResponse, summariesResponse] = await Promise.all([
            axios.get<TradingPair[]>(pairsUrl),
            axios.get<{ tickers: { [key: string]: TickerSummary } }>(summariesUrl),
        ]);
        const pairs = pairsResponse.data;
        const summaries = summariesResponse.data.tickers;
        const combinedData = pairs.map((pair) => {
            const summaryData = summaries[pair.ticker_id];
            return {
                ...pair,
                price: summaryData ? summaryData.last : '0',
                volume: summaryData ? summaryData.vol_idr : '0',
            };
        });
        return combinedData;
    } catch (error) {
        console.error('Gagal mengambil atau menggabungkan data API:', error);
        return [];
    }
}

// --- Komponen Halaman Home (sekarang async) ---
export default async function Home() {
  const allCryptoData = await getCombinedCryptoData();

  // --- Logika untuk Mendapatkan Top 5 Kripto ---
  const topCryptos = allCryptoData
    // Urutkan berdasarkan volume (dari terbesar ke terkecil)
    .sort((a, b) => Number(b.volume) - Number(a.volume))
    // Ambil 5 data teratas
    .slice(0, 5);

  return (
    <>
      <DarkVeil
        className="fixed top-0 left-0 -z-10"
      />

      {/* Konten utama di lapisan depan */}
      <div className="relative z-0">
        <Navbar />
        <main className="container mx-auto p-4 mt-7 text-center">
          <h1 className="text-4xl md:text-5xl font-bold my-6">Selamat Datang di CryptoTracker</h1>
          <p className="text-lg mb-8">
            Lacak harga dan volume pasar kripto terbaru dengan mudah.
          </p>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-6">
              Top 5 Kripto Berdasarkan Volume
            </h2>
            
            {/* Tampilan Grid untuk Top Kripto */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
              {topCryptos.map((crypto) => (
                <div key={crypto.id} className="bg-transparent  bg-opacity-70 p-4 rounded-lg flex flex-col items-center justify-between shadow-lg hover:shadow-yellow-400/20 transition-shadow">
                  <Image
                    src={crypto.url_logo}
                    alt={`Logo ${crypto.description}`}
                    width={40}
                    height={40}
                    className="mb-3"
                  />
                  <div className="text-center">
                    <h3 className="font-bold">{crypto.description}</h3>
                    <p className="text-sm text-gray-300">
                      Rp {Number(crypto.price).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/products" className="mt-8 inline-block bg-yellow-400 text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
                Lihat Semua Pasar
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}