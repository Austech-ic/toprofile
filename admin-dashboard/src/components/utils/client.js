import axios from "axios";
import { getTokenTOLocalStorage } from "./storage";

let URL = "https://toprofile-backend.onrender.com/api/v1/";
const client = axios.create({
  baseURL: URL,
});

client.interceptors.request.use(
  async (config) => {
    const token = getTokenTOLocalStorage();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;