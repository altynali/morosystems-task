import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_BASE_URL,
};

const todoApi = axios.create(config);

export default todoApi;
