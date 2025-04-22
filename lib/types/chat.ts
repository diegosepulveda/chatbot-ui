export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  content: string;
  role: Role;
  timestamp: string;   // ISO string from backend
}

export interface ChatResponse {
  response: string;
  session_id: string;
}

export interface HistoryResponse {
  history: Message[];
}
