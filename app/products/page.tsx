import axios from 'axios';
import ProductList from '@/components/ProductList';
import Navbar from '@/components/Navbar';
import DarkVeil from '@/components/DarkVeil';

// --- Tipe Data ---
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

// --- Fungsi Pengambilan Data ---
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


// --- Komponen Halaman ---
export default async function ProductPage() {
  const cryptoData = await getCombinedCryptoData();

  return (
    <>
     
      <DarkVeil
        className="fixed top-0 left-0 -z-10"
      />

      {/* Konten utama di lapisan depan */}
      <div className="relative z-0">
        <Navbar />
        <main className="container mx-auto p-4 bg-transparent mt-7">
          <h1 className="text-3xl font-bold text-center my-6 ">Daftar Pasar Kripto</h1>
          <ProductList items={cryptoData} />
        </main>
      </div>
    </>
  );
}