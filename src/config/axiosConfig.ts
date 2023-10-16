import axios, { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_BASE_URL,
}

const todoApi = axios.create(config)

export default todoApi
