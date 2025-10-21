"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      {/* Ana içerik */}
      <div
        className={`flex flex-col flex-1 min-h-screen bg-gray-50 transition-all duration-300
        ${isOpen ? "ml-64" : "ml-12"}`}
      >
        {/* Navbar */}
        <nav className="bg-[#095f79] text-white px-4 sm:px-6 py-3 flex justify-between items-center fixed top-0 left-0 right-0 z-30 transition-all duration-300">
          {/* Sol kısım - Menü butonu + logo */}
          <div className="flex items-center  pl-12">
            <h1 className="font-bold text-lg cursor-pointer">VidLoad</h1>
          </div>

          {/* Sağ kısım - Linkler */}
          <ul className="flex flex-wrap justify-end items-center space-x-5 sm:gap-6 text-sm sm:text-base">
            <li className="hover:underline cursor-pointer">
              <Link href="#">Ana Sayfa</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#">Hakkında</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link href="#">İletişim</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
