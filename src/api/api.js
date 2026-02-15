import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

// ✅ إنشاء instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    lang: localStorage.getItem("lang") || "en",
  },
});

export default api;
