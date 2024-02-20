import { API_URL, RECITE_API_URL } from "@/config/config";
import axios from "axios";

export const signUpApi = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/register`, {
      name,
      email,
      password,
    });

    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/api/v1/auth/login`, {
      email,
      password,
    });

    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const getSelfUserApi = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/api/v1/self`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};

export const getReciteQuoteApi = async () => {
  try {
    const response = await axios.get(`${RECITE_API_URL}/random/quote-from-db`);

    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

getReciteQuoteApi();
