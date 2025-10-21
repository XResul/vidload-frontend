"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import {
  Home,
  Tv,
  SquarePlay,
  History,
  ListVideo,
  ThumbsUp,
  ArrowDownToLine,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-0 left-0 w-full h-screen bg-black/30 z-30"
        ></div>
      )}

      {/* Hamburger Menü */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-2 z-50 p-2 bg-[#095f79] text-white rounded-lg cursor-pointer "
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-0 left-0 h-screen bg-[#095f79] text-white transition-all duration-300 z-40 cursor-pointer
          ${isOpen ? "w-64" : "w-12"}`}
      >
        <nav className="flex flex-col mt-12 p-2 space-y-2">
          <NavItem
            href="#"
            icon={<Home size={20} />}
            label="Home"
            isOpen={isOpen}
          />
          <NavItem
            href="#"
            icon={<Tv size={20} />}
            label="Shorts"
            isOpen={isOpen}
          />
          <NavItem
            href="#"
            icon={<SquarePlay size={20} />}
            label="Videolar"
            isOpen={isOpen}
          />
          {/* ... diğer NavItem’lar ... */}
          <div className="h-[2px] bg-gray-300 w-full  rounded"></div>

          {/* Geçmiş */}
          <NavItem
            href="#"
            icon={<History size={20} />}
            label="Geçmiş"
            isOpen={isOpen}
          />

          {/* Oynatma Listeleri*/}
          <NavItem
            href="#"
            icon={<ListVideo size={20} />}
            label="Oynatma Listeleri"
            isOpen={isOpen}
          />
          <NavItem
            href="#"
            icon={<SquarePlay size={20} />}
            label="Videolar"
            isOpen={isOpen}
          />

          {/* İndirilenler */}
          <NavItem
            href="#"
            icon={<ArrowDownToLine size={20} />}
            label="indirilenler"
            isOpen={isOpen}
          />
          {/* İndirilenler */}
          <NavItem
            href="#"
            icon={<ThumbsUp size={20} />}
            label="Beğendiğim Videolar"
            isOpen={isOpen}
          />
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
