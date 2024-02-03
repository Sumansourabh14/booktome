"use client";
import { createContext, useEffect, useState } from "react";
import { loginApi } from "./globalApi";
import { useCookies } from "react-cookie";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [cookie, setCookie, removeCookie] = useCookies();
  const [token, setToken] = useState(cookie.token);

  const login = async (email, password) => {
    try {
      const response = await loginApi(email, password);

      if (response.status === 200) {
        setToken(response.data.token);
        setCookie("token", response.data.token, { secure: true });
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    setToken(null);
    removeCookie("token");
  };

  useEffect(() => {
    console.log(cookie);
  }, []);

  return (
    <GlobalContext.Provider value={{ login, logout, token }}>
      {children}
    </GlobalContext.Provider>
  );
};
