import { OPEN_LIBRARY_API_URL } from "@/config/config";

export const OPEN_LIBRARY_COVER_API_URL = `https://covers.openlibrary.org/b/id`;

export const endPoints = {
  trendingBooks: `${OPEN_LIBRARY_API_URL}/trending/daily`,
  classicBooks: `${OPEN_LIBRARY_API_URL}/subjects/accessible_book`,
  sciFiBooks: `${OPEN_LIBRARY_API_URL}/subjects/science_fiction`,
};
