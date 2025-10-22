"use client";
import React, { useState } from "react";
import VideoCard from "../../components/Video/VideoCard";
import SearchBar from "../../components/Search/SearchBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const videos = [
    {
      id: 1,
      title: "Zeynep Bastık - Lan (Official Video)",
      description:
        "Yönetmen: Ulaş İnaç Yapım: Ozan Çolakoğlu, Zeynep Bastık Prodüksiyon: Aref Production Yapım Yılı: 2024",
      channelName: "Zeynep Bastık",
      videoUrlHref:
        "https://www.youtube.com/embed/-O22D3EV6G0?list=RDwkJXTQXmIbY",
    },
    {
      id: 2,
      title: "Ati242 - Yalan (Official Video)",
      description:
        "Ati242 - Yalan (Official Video) | Yapım: Ozan Çolakoğlu, Ati242 | Prodüksiyon: Aref Production | 2024",
      channelName: "Ati242",
      videoUrlHref:
        "https://www.youtube.com/embed/24NJx5NyXfk?list=RD24NJx5NyXfk",
    },
    {
      id: 3,
      title: "JavaScript",
      description:
        "JavaScript Öğrenme Rehberi | Başlangıçtan İleri Seviyeye | 2025 | Resul Binici",
      channelName: "Resul Binici",
      videoUrlHref: "https://www.youtube.com/embed/RGaW82k4dK4",
    },
    {
      id: 4,
      title: "Barış Özcan",
      description: "Barış Özcan | Yeni Video Yayında! | 2025",
      channelName: "Resul Binici",
      videoUrlHref: "https://www.youtube.com/embed/qji-iQHeaRA",
    },
  ];

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Üstte search bar ekleniyor */}
      <div className="mt-10 bg-[#095f79] p-4 flex justify-center shadow-md">
        <div className="w-full max-w-3xs ">
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      {/* Video kartlarının olduğu kısım */}
      <div
        className={`pt-24 sm:pt-28 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              channelName={video.channelName}
              videoUrlHref={video.videoUrlHref}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            Aradığın video bulunamadı.
          </p>
        )}
      </div>
    </>
  );
}
