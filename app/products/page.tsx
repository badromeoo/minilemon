// app/product/page.tsx
import axios from 'axios';
import ProductList from '@/components/ProductList';

// --- Tipe Data (masih kita butuhkan di sini) ---
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

// --- Fungsi Pengambilan Data (tidak ada yang berubah di sini) ---
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

// --- Komponen Halaman (sekarang lebih sederhana) ---
export default async function ProductPage() {
  const cryptoData = await getCombinedCryptoData();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">Daftar Pasar Kripto</h1>
      {/* Panggil Client Component dan oper data lengkapnya */}
      <ProductList items={cryptoData} />
    </div>
  );
}