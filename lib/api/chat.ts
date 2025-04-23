import { api } from './axios';
import { ChatResponse, HistoryResponse } from '../types/chat';

export const sendUserMessage = async (text: string) => {
  const { data } = await api.post<ChatResponse>('/api/v1/chat', { message: text });
  return data;
};

export const fetchHistory = async () => {
  const { data } = await api.get<HistoryResponse>('/api/v1/history');
  return data.history;
};
