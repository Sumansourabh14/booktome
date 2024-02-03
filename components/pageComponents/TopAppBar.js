"use client";
import { GlobalContext } from "@/services/globalContext";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const TopAppBar = () => {
  const path = usePathname();
  const isPath = path === "/login" || path === "/signup" ? false : true;

  const { logout } = useContext(GlobalContext);

  return (
    isPath && (
      <div className="bg-gray-400 px-8 py-4">
        <nav className="flex justify-between">
          <p>booktome.</p>
          <button onClick={logout}>Logout</button>
        </nav>
      </div>
    )
  );
};

export default TopAppBar;
