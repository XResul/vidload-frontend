"use client";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    // Boş olduğunda da çalışsın ama hatasız
    if (onSearch) onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Video ara..."
      value={query}
      onChange={handleChange}
      className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#0b7a99]"
    />
  );
}
