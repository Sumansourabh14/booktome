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
      <div className="backdrop-blur-lg bg-black/10 text-black px-8 py-4 fixed w-full">
        <nav className="flex justify-between items-center">
          <Link href={`/`} className="text-2xl font-dmSerifText">
            booktome.
          </Link>
          <div className="flex gap-6 items-center">
            <Link href={`/search`}>
              <FontAwesomeIcon icon={faSearch} size="xl" />
            </Link>

            {isAuthenticated ? (
              <div className="flex gap-6">
                <Link href={`/profile`}>Profile</Link>
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <div className="flex gap-6">
                <Link href={`/login`} className="bg-black text-white px-6 py-2">
                  Login
                </Link>
                {/* <Link href={`/signup`}>Sign up</Link> */}
              </div>
            )}
          </div>
        </nav>
      </div>
    )
  );
};

export default TopAppBar;
