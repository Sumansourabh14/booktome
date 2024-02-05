"use client";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
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
          <Link href={`/`}>booktome.</Link>
          <div className="flex gap-4">
            <Link href={`/profile`}>Profile</Link>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
      </div>
    )
  );
};

export default TopAppBar;
