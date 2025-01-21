import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1",
  params: {
    apiKey: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
