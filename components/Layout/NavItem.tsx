import React, { ReactNode } from "react";
import Link from "next/link";

interface NavItemProps {
  href: string;
  icon: ReactNode;
  label: string;
  isOpen: boolean;
  withArrow?: boolean;
}

export default function NavItem({
  href,
  icon,
  label,
  isOpen,
  withArrow,
}: NavItemProps) {
  return (
    <Link href={href}>
      <div className="flex items-center justify-between p-2 hover:bg-[#cedb91] rounded-2xl text-white transition-colors cursor-pointer">
        <div className="flex items-center space-x-2">
          {icon}
          {isOpen && <span>{label}</span>}
        </div>

        {/* Sağ ok simgesi (isteğe bağlı) */}
        {isOpen && withArrow && (
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>
    </Link>
  );
}
