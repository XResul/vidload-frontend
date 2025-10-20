"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Home,
  Tv,
  SquarePlay,
  ChevronRight,
  History,
  ListVideo,
  ThumbsUp,
  ArrowDownToLine,
  User,
  Film,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menü */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-2 z-50 p-2 bg-[#095f79] text-white rounded-lg"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-[#095f79] text-white transition-all duration-300 z-40
          ${isOpen ? "w-64" : "w-16"}`}
      >
        <nav className="flex flex-col mt-12 p-2 space-y-2">
          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <Home size={20} />
              {isOpen && <span>Home</span>}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <Tv size={20} />
              {isOpen && <span>Shorts</span>}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <SquarePlay size={20} />
              {isOpen && <span>Videolar</span>}
            </div>
          </Link>

          <div className="h-[1px] bg-white opacity-70 my-2"></div>

          <Link href={"#"}>
            <div className="flex items-center justify-between p-2 hover:bg-[#cedb91] rounded-2xl">
              <div className="flex items-center gap-2">
                <User size={20} />
                {isOpen && <span>Siz</span>}
              </div>
              {isOpen && <ChevronRight size={16} />}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <History size={20} />
              {isOpen && <span>Geçmiş</span>}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <ListVideo size={20} />
              {isOpen && <span>Oynatma Listeleri</span>}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <Film size={20} />
              {isOpen && <span>Videolarınız</span>}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <ThumbsUp size={20} />
              {isOpen && <span>Beğendiğim Videolar</span>}
            </div>
          </Link>

          <Link href={"#"}>
            <div className="flex items-center gap-2 p-2 hover:bg-[#cedb91] rounded-2xl">
              <ArrowDownToLine size={20} />
              {isOpen && <span>İndirilenler</span>}
            </div>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
