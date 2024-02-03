import { API_URL } from "@/config/config";
import axios from "axios";

export const signUpApi = async (email, password) => {
  try {
    const name = "hero";
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
