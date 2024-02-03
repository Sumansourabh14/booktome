"use client";
import { usePathname } from "next/navigation";

const TopAppBar = () => {
  const path = usePathname();
  const isPath = path === "/login" || path === "/signup" ? false : true;

  return isPath && <div>TopAppBar</div>;
};

export default TopAppBar;
