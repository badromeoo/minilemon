// components/Navbar.tsx
"use client"; // 1. Tandai sebagai Client Component

import { useState } from "react"; // 2. Import useState
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import untuk link aktif

const Navbar = () => {
  // 3. State untuk mengontrol visibilitas menu mobile
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Dapatkan path halaman saat ini

  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-50 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo atau Brand Name */}
        <Link href="/" className="text-xl font-bold">
          CryptoTracker
        </Link>

        {/* 4. Menu untuk Desktop (tersembunyi di mobile) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={pathname === "/" ? "text-yellow-400" : "hover:text-gray-300"}>
            Home
          </Link>
          <Link href="/products" className={pathname === "/products" ? "text-yellow-400" : "hover:text-gray-300"}>
            Products
          </Link>
          <Link href="/about" className={pathname === "/about" ? "text-yellow-400" : "hover:text-gray-300"}>
            About
          </Link>
        </div>

        {/* 5. Tombol Hamburger (hanya muncul di mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Ikon hamburger (3 garis) */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* 6. Menu Mobile (muncul/hilang berdasarkan state 'isOpen') */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Home
          </Link>
          <Link href="/products" className="block py-2 px-4 text-sm hover:bg-gray-700">
            Products
          </Link>
          <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-700">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
