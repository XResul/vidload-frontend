"use client";
import React from "react";

interface VideoCardProps {
  title?: string;
  description?: string;
  videoUrlHref?: string;
  channelName: string;
}

export default function VideoCard({
  title,
  description,
  videoUrlHref,
  channelName,
}: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transform transition duration-300 cursor-pointer">
      {/* Video oynatıcı */}
      <div className="w-full h-48 ">
        <iframe
          className="w-full h-full rounded-t-lg"
          src={videoUrlHref?.replace("watch?v=", "embed/")}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          allowFullScreen
        ></iframe>
      </div>

      {/* İçerik */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-gray-600 mt-1">{channelName}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  );
}
