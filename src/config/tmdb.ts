const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export const tmdbConfig = {
  apiKey: API_KEY,
  baseUrl: BASE_URL,
  imageBaseUrl: "https://image.tmdb.org/t/p/w500",
};
