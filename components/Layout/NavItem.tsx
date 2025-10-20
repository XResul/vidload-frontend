import React from "react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  open: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, open }) => {
  return (
    <button className="w-full flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg text-sm transition-colors">
      {icon}
      {open && <span>{label}</span>}
    </button>
  );
};

export default NavItem;
