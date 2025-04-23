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

  send: async (text) => {
    /* user bubble */
    const userMsg: Message = {
      id: nanoid(),
      content: text,
      role: 'user',
      timestamp: new Date().toISOString()
    };
    set(s => ({ messages: [...s.messages, userMsg] }));

    /* assistant typing placeholder */
    const placeholderId = nanoid();
    set(s => ({
      messages: [
        ...s.messages,
        {
          id: placeholderId,
          content: '...',          // will be animated in UI
          role: 'assistant',
          timestamp: new Date().toISOString(),
          placeholder: true        // ⟵ flag
        } as Message
      ]
    }));

    /* API call */
    const { response, url } = await sendUserMessage(text);

    /* replace placeholder with real answer */
    set(s => ({
      messages: s.messages.map(m =>
        m.id === placeholderId
          ? {
              ...m,
              content: response,
              placeholder: false,
              url,
              count: url ? Math.floor(Math.random() * 40) + 1 : undefined
            }
          : m
      )
    }));
  },
}));
