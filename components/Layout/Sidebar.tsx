import Link from "next/link";
import React from "react";
import { Home } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="bg-pink-50 h-screen fixed top-0 left-0 ">
      <nav className="p-3 space-y-8 mt-12">
        <div>
          <Link href={"#"}>
            <Home /> Home
          </Link>
        </div>
        <div>
          <Link href={"#"}>About</Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
