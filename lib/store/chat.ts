import { create } from 'zustand';
import { Message } from '../types/chat';
import { sendUserMessage, fetchHistory } from '../api/chat';
import { nanoid } from 'nanoid';

interface ChatState {
  messages: Message[];
  init: () => Promise<void>;
  send: (text: string) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],

  // called once on first mount / refresh
  init: async () => {
    try {
      const history = await fetchHistory();   // sets cookie if absent
      set({ messages: history });
    } catch (err) {
      console.error('history fetch error', err);
    }
  },

  send: async (text: string) => {
    const userMsg: Message = {
      id: nanoid(),
      content: text,
      role: 'user',
      timestamp: new Date().toISOString()
    };
    set(s => ({ messages: [...s.messages, userMsg] }));

    try {
      const { response } = await sendUserMessage(text);
      const botMsg: Message = {
        id: nanoid(),
        content: response,
        role: 'assistant',
        timestamp: new Date().toISOString()
      };
      set(s => ({ messages: [...s.messages, botMsg] }));
    } catch (err) {
      console.error('chat error', err);
    }
  }
}));
