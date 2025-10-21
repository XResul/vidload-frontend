"use client";
import React from "react";
import { useState } from "react";
import VideoCard from "../../components/Video/VideoCard";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`pt-16 sm:pt-20 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-16"
      }`}
    >
      {/* Zeynep Bastık - Lan (Official Video) */}
      <VideoCard
        title="Zeynep Bastık - Lan (Official Video)"
        description="Yönetmen: Ulaş İnaç Yapım: Ozan Çolakoğlu, Zeynep Bastık Prodüksiyon: Aref Production Yapım Yılı: 2024 📱 Spotify: https://spoti.fi/3r0YH8D 🎧 iTunes: https://apple.co/3r0QX1E 📲 Diğer platformlar: https://ze.bz/lan #ZeynepBastık #Lan #OfficialVideo "
        channelName="Zeynep Bastık"
        videoUrlHref="https://www.youtube.com/embed/-O22D3EV6G0?list=RDwkJXTQXmIbY"
      />
      {/* Ati242 - Yalan (Official Video) */}
      <VideoCard
        title="Ati242 - Yalan (Official Video)"
        description="Ati242 - Yalan (Official Video) Yönetmen: Ulaş İnaç Yapım: Ozan Çolakoğlu, Ati242 Prodüksiyon: Aref Production Yapım Yılı: 2024 📱 Spotify: https://spoti.fi/3N6Y2b3 🎧 iTunes: https://apple.co/3N4t1b3 📲 Diğer platformlar: https://ati242.lnk.to/Yalan #Ati242 #Yalan #OfficialVideo "
        channelName="Ati242"
        videoUrlHref="https://www.youtube.com/embed/24NJx5NyXfk?list=RD24NJx5NyXfk"
      />
      {/* Don't waste your life */}
      <VideoCard
        title="JavaScript"
        description="JavaScript Öğrenme Rehberi | Başlangıçtan İleri Seviyeye | 2025  | Resul Binici "
        channelName="Resul Binici"
        videoUrlHref="https://www.youtube.com/embed/RGaW82k4dK4"
      />
      {/* 4 */}
      <VideoCard
        title="Barış özcan"
        description="Barış Özcan | Yeni Video Yayında! | 2025"
        channelName="Resul Binici"
        videoUrlHref="https://www.youtube.com/embed/qji-iQHeaRA"
      />
    </div>
  );
}
