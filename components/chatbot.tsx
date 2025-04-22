"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { useChatStore } from '@/lib/store/chat';
import { Message } from '@/lib/types/chat';

export function Chatbot() {
  /* ---------- UI state ---------- */
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');

  /* ---------- Chat state ---------- */
  const { messages, init, send } = useChatStore();

  /* ---------- refs ---------- */
  const messagesEndRef = useRef<HTMLDivElement>(null);

  /* ---------- load history once ---------- */
  useEffect(() => { init(); }, []);

  /* ---------- autoscroll ---------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  /* ---------- handlers ---------- */
  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    await send(text);
    setInput('');
  };

  return (
    <>
      {/* toggle button unchanged */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center',
          isOpen ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'
        )}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* chatbox UI – truncated for brevity, identical to yours except: */}
      {/*  - messages array comes from store
          - timestamp parsed from ISO */}
      <div
        className={cn(
          'fixed bottom-20 right-6 z-50 bg-card rounded-lg shadow-xl overflow-hidden transition-all duration-300 border',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none',
          isExpanded ? 'md:w-[450px] md:h-[550px]' : 'w-[320px] h-[400px] md:w-[350px] md:h-[450px]'
        )}
      >
        {/* header omitted for brevity */}
        <div className="flex flex-col h-[calc(100%-110px)]">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={cn('mb-3 max-w-[85%]', msg.role === 'user' ? 'ml-auto' : 'mr-auto')}
              >
                <div
                  className={cn(
                    'p-3 rounded-lg text-sm',
                    msg.role === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-none'
                      : 'bg-muted rounded-bl-none'
                  )}
                >
                  {msg.content}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t">
            <div className="flex space-x-2">
              <Textarea
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                className="min-h-[40px] max-h-[120px] resize-none"
                onKeyDown={e => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button type="submit" size="icon" className="shrink-0">
                <Send size={18} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
