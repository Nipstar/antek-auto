import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { ChatMessage } from '../types';

const CHATBOT_WEBHOOK_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL || '';

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem('chatbot_visited');
    if (!hasVisited && !hasAutoOpened) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasAutoOpened(true);
        localStorage.setItem('chatbot_visited', 'true');

        const welcomeMessage: ChatMessage = {
          id: `msg_${Date.now()}`,
          sessionId,
          message: "Hello! I'm Antek AI. How can I help you automate your business today?",
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          source: 'website_chatbot',
          isBot: true,
        };
        setMessages([welcomeMessage]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened, sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `msg_${Date.now()}`,
      sessionId,
      message: inputMessage,
      timestamp: new Date().toISOString(),
      pageUrl: window.location.href,
      source: 'website_chatbot',
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      if (CHATBOT_WEBHOOK_URL) {
        const response = await fetch(CHATBOT_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            sessionId: userMessage.sessionId,
            message: userMessage.message,
            timestamp: userMessage.timestamp,
            pageUrl: userMessage.pageUrl,
            source: userMessage.source,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const botReply: ChatMessage = {
            id: `msg_${Date.now()}`,
            sessionId,
            message: data.reply || "Thanks for your message! We'll get back to you shortly.",
            timestamp: new Date().toISOString(),
            pageUrl: window.location.href,
            source: 'website_chatbot',
            isBot: true,
          };
          setMessages((prev) => [...prev, botReply]);
        } else {
          throw new Error('Webhook failed');
        }
      } else {
        const botReply: ChatMessage = {
          id: `msg_${Date.now()}`,
          sessionId,
          message: "Thanks for reaching out! Our team will respond soon. You can also email us at hello@antekautomation.co.uk",
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          source: 'website_chatbot',
          isBot: true,
        };
        setMessages((prev) => [...prev, botReply]);
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `msg_${Date.now()}`,
        sessionId,
        message: "Connection error. Please try again or email us at hello@antekautomation.co.uk",
        timestamp: new Date().toISOString(),
        pageUrl: window.location.href,
        source: 'website_chatbot',
        isBot: true,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-15 h-15 bg-terracotta border-3 border-charcoal shadow-brutal-sm rounded-sm flex items-center justify-center hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal transition-all duration-200 z-50"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-7 h-7 text-off-white" />
        ) : (
          <span className="text-2xl font-black text-off-white">C</span>
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-[400px] h-[600px] md:w-[400px] bg-off-white border-3 border-charcoal shadow-brutal-chat flex flex-col z-50 mx-4 md:mx-0">
          <div className="bg-warm-beige border-b-3 border-charcoal p-4 flex items-center justify-between">
            <div>
              <h3 className="font-black text-xl uppercase">Antek AI</h3>
              <p className="text-xs text-charcoal">Always here to help</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-off-white">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[70%] ${
                    msg.isBot
                      ? 'bg-white border-2 border-charcoal shadow-brutal-msg'
                      : 'bg-warm-beige border-2 border-charcoal shadow-brutal-msg'
                  } p-3 rounded-sm`}
                >
                  <p className="text-charcoal text-sm leading-normal">{msg.message}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border-2 border-charcoal shadow-brutal-msg p-3 rounded-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-charcoal rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-charcoal rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-charcoal rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t-3 border-charcoal p-4 flex gap-2 bg-off-white">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type message..."
              className="flex-1 border-3 border-charcoal px-3 py-2 focus:border-terracotta focus:outline-none bg-white text-charcoal"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="bg-terracotta text-off-white px-4 py-2 border-3 border-charcoal shadow-brutal-xs font-black hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-brutal-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
