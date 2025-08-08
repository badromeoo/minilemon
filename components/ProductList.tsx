// components/ProductList.tsx
"use client"; // <-- Tandai ini sebagai Client Component

import { useState } from 'react';
import Image from 'next/image';

// Kita butuh tipe data yang sama seperti di halaman produk
type CombinedData = {
  id: string;
  description: string;
  url_logo: string;
  price: string;
  volume: string;
};

// Komponen ini menerima daftar produk sebagai 'props'
export default function ProductList({ items }: { items: CombinedData[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data berdasarkan 'searchQuery'
  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Cari aset kripto..."
        className="w-full p-2 mb-6 border rounded-lg"
      />

      {/* Tampilkan hasil yang sudah difilter */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((crypto) => (
            <div key={crypto.id} className="border p-4 rounded-lg shadow flex flex-col items-center text-center">
              <Image
                src={crypto.url_logo}
                alt={`Logo ${crypto.description}`}
                width={50}
                height={50}
                className="mb-3"
              />
              <h2 className="text-lg font-semibold">{crypto.description}</h2>
              <div className="text-left w-full mt-2 text-sm">
                <p>
                  <strong>Harga:</strong> Rp {Number(crypto.price).toLocaleString('id-ID')}
                </p>
                <p>
                  <strong>Volume:</strong> Rp {Number(crypto.volume).toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Aset tidak ditemukan.</p>
      )}
    </div>
  );
}