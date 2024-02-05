"use client";
import { GlobalContext } from "@/services/globalContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return !!user && <div>{user.name}</div>;
};

export default Profile;
