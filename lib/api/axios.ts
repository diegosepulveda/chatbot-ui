import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CHAT_API_URL, //      ← .env.local
  withCredentials: true                           //      ← send/receive cookies
});
