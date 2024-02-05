"use client";
import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { getSelfUserApi, loginApi, signUpApi } from "./globalApi";
import { useRouter } from "next/navigation";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [token, setToken] = useState(cookie.token);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const isLoggedIn = async () => {
    try {
      const response = await getSelfUserApi(token);

      if (response.status === 200) {
        setUser(response.data.self);
        setIsAuthenticated(true);
      }

      return response;
    } catch (error) {
      console.error(error);
      setIsAuthenticated(false);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await loginApi(email, password);

      if (response.status === 200) {
        setToken(response.data.token);
        setCookie("token", response.data.token, { secure: true });
        setIsAuthenticated(true);
      }

      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const signUp = async (name, email, password) => {
    try {
      setLoading(true);
      const response = await signUpApi(name, email, password);

      setLoading(false);
      return response;
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const logout = async () => {
    setToken(null);
    removeCookie("token");
    setUser(null);
    setIsAuthenticated(false);

    router.push("/login");
  };

  useEffect(() => {
    isLoggedIn();
  }, [isAuthenticated]);

  return (
    <GlobalContext.Provider
      value={{
        isAuthenticated,
        isLoggedIn,
        loading,
        signUp,
        login,
        logout,
        token,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
