import { OPEN_LIBRARY_API_URL } from "@/config/config";
import axios from "axios";

export const fetchBooksBySubjectsApi = async (subject) => {
  try {
    const response = await axios.get(
      `${OPEN_LIBRARY_API_URL}/subjects/${subject}.json`
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};

export const searchApi = async (query) => {
  try {
    const response = await axios.get(
      `${OPEN_LIBRARY_API_URL}/search.json?q=${query}&limit=10&offset=0`
    );

    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
