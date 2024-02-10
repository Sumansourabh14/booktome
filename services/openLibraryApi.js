import { OPEN_LIBRARY_API_URL } from "@/config/config";
import axios from "axios";

export const fetchBooksBySubjectsApi = async (subject) => {
  try {
    const response = await axios.get(
      `${OPEN_LIBRARY_API_URL}/subjects/${subject}.json`
    );

    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};

export const searchApi = async (query) => {
  try {
    const response = await axios.get(
      `${OPEN_LIBRARY_API_URL}/search.json?q=${query}&limit=10&offset=0`
    );

    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};

export const getBookDetailsApi = async (workId) => {
  try {
    const response = await axios.get(
      `${OPEN_LIBRARY_API_URL}/works/${workId}.json`
    );

    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};

export const getResourceApi = async (resource) => {
  try {
    const response = await axios.get(`${OPEN_LIBRARY_API_URL}${resource}.json`);

    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};

export const getAuthor = async (id) => {
  try {
    const response = await axios.get(
      `${OPEN_LIBRARY_API_URL}/authors/${id}.json`
    );

    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
    return error.response;
  }
};
