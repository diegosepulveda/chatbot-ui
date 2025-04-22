import { api } from './axios';
import { ChatResponse, HistoryResponse } from '../types/chat';

export const sendUserMessage = async (text: string) => {
  const { data } = await api.post<ChatResponse>('/chat', { message: text });
  return data;
};

export const fetchHistory = async () => {
  const { data } = await api.get<HistoryResponse>('/history');
  return data.history;
};
