export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: string;
  placeholder?: boolean; // for animated typing dots
  url?: string;          
  count?: number;        
}

export interface ChatResponse {
  response: string;
  session_id?: string;
  url?: string;
}

export interface HistoryResponse {
  history: Message[];
}
