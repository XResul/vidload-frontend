import React, { ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  isOpen: boolean;
}

export default function NavItem({ href, icon, label, isOpen }: NavItemProps) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-between p-2 hover:bg-[#cedb91] rounded-2xl text-white transition-colors cursor-pointer">
        <div className="flex items-center space-x-2">
          {icon}
          {isOpen && <span>{label}</span>}
        </div>
      </div>
    </Link>
  );
}
