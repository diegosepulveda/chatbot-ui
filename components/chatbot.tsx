"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  X,
  Send,
  Minimize2,
  Maximize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/lib/store/chat";
import { ResultBadge } from "@/components/result-badge";
import ReactMarkdown from "react-markdown";

export function Chatbot() {
  /* ---------- responsive sizes ---------- */
  const SIZES = [
    { w: "md:w-[450px]", h: "md:h-[550px]" },
    { w: "md:w-[650px]", h: "md:h-[650px]" },
    { w: "md:w-[850px]", h: "md:h-[750px]" },
  ];

  /* ---------- UI state ---------- */
  const [sizeIndex, setSizeIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");
  const [sessionId, setSessionId] = useState<string>("");

  /* ---------- Chat state ---------- */
  const { messages, init, send } = useChatStore();

  /* ---------- refs ---------- */
  const bottomRef = useRef<HTMLDivElement>(null);

  /* ---------- load history once ---------- */
  useEffect(() => {
    init();
  }, []);

  /* ---------- autoscroll ---------- */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  /* ---------- helpers ---------- */
  const stripJsonBlock = (text: string) =>
    text.replace(/\{[\s\S]*?\}/g, (m) => {
      try {
        JSON.parse(m);
        return "";
      } catch {
        return m;
      }
    });

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    await send(text);
  };

  /* ---------- component ---------- */
  return (
    <>
      {/* FAB toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center",
          isOpen ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"
        )}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* chat wrapper */}
      <div
        className={cn(
          "fixed bottom-20 right-6 z-50 bg-card rounded-lg shadow-xl overflow-hidden transition-all duration-300 border flex flex-col",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12 pointer-events-none",
          "w-[320px] h-[400px]", // mobile fallback
          SIZES[isExpanded ? 1 : sizeIndex].w,
          SIZES[isExpanded ? 1 : sizeIndex].h,
        )}
      >
        {/* header */}
        <div className="bg-primary p-3 flex items-center justify-between text-primary-foreground">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8 bg-white">
              <Image
                src="/images/robot-icon.png"
                alt="Chat Assistant"
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            </Avatar>
            <div>
              <h3 className="font-medium text-sm">Asistente Inmobiliario</h3>
              <p className="text-xs text-primary-foreground/80">¿Cómo puedo ayudarte hoy?</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </Button>
          </div>
        </div>

        {/* body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((m, index) => (
            <div key={`${m.content}-${index}`} className={cn("space-y-1", m.role === "user" ? "text-right" : "text-left")}>
              <div
                className={cn(
                  "inline-block p-3 rounded-lg text-sm max-w-[85%] prose break-words",
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-none"
                    : "bg-muted rounded-bl-none"
                )}
              >
                {m.placeholder ? (
                  /* animated typing dots */
                  <span className="inline-block animate-pulse">...</span>
                ) : (
                  <>
                    <ReactMarkdown>{stripJsonBlock(m.content)}</ReactMarkdown>
                    {m.url && <ResultBadge url={m.url} count={m.count ?? 5} />}
                  </>
                )}
              </div>
              {/* centered timestamp */}
              {
                m.placeholder ? null : (
                  <div className="text-xs text-center text-muted-foreground">
                    {new Date(m.timestamp).toLocaleDateString([],{ hour: "2-digit", minute: "2-digit" })}
                  </div>
                )
              }
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t">
          <div className="flex space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje…"
              className="min-h-[40px] max-h-[120px] resize-none flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
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
    </>
  );
}
