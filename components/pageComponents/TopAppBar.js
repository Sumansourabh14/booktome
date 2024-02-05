"use client";
import { GlobalContext } from "@/services/globalContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const TopAppBar = () => {
  const path = usePathname();
  const isPath = path === "/login" || path === "/signup" ? false : true;

  const { logout, isAuthenticated } = useContext(GlobalContext);

  return (
    isPath && (
      <div className="bg-zinc-700 text-white px-8 py-4">
        <nav className="flex justify-between">
          <Link href={`/`}>booktome.</Link>
          {isAuthenticated ? (
            <div className="flex gap-4">
              <Link href={`/profile`}>Profile</Link>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href={`/login`}>Login</Link>
              <Link href={`/signup`}>Sign up</Link>
            </div>
          )}
        </nav>
      </div>
    )
  );
};

export default TopAppBar;
