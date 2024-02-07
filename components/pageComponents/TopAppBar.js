"use client";
import { GlobalContext } from "@/services/globalContext";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const TopAppBar = () => {
  const path = usePathname();
  const isPath = path === "/login" || path === "/signup" ? false : true;

  const { logout, isAuthenticated } = useContext(GlobalContext);

  return (
    isPath && (
      <div className="bg-zinc-700 text-white px-8 py-8">
        <nav className="flex justify-between">
          <Link href={`/`}>booktome.</Link>
          <div className="flex gap-6">
            <Link href={`/search`}>
              <FontAwesomeIcon icon={faSearch} />
            </Link>

            {isAuthenticated ? (
              <div className="flex gap-6">
                <Link href={`/profile`}>Profile</Link>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <div className="flex gap-6">
                <Link href={`/login`}>Login</Link>
                <Link href={`/signup`}>Sign up</Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    )
  );
};

export default TopAppBar;
