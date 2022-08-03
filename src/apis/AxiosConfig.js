import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BACKEND_API_BASE_URL

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: 0,
  responseType: 'json',
  headers:
  {
    'Accept': `application/json`,
    'Content-Type': `application/json`,
    'Access-Control-Allow-Origin': `*`,
  },
})