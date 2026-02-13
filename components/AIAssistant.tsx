
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Alex's AI twin. Want to know more about his skills, projects, or professional background? Ask me anything!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `
            You are "Alex Rivera AI", a sophisticated digital version of Alex Rivera, a senior 3D/Full-Stack Engineer.
            Your personality: Professional, creative, slightly tech-enthusiastic, and very helpful.
            Alex's Background:
            - Senior Full-Stack Engineer at MetaVerse Solutions.
            - Expertise in Three.js, React, Node.js, and Gemini API.
            - Passionate about WebGL performance and immersive UX.
            - Located in San Francisco, CA.
            - Projects include Celestial XR (Three.js), Vault AI (Financial SaaS), and Prism Design System.
            Guidelines:
            - Keep responses concise (under 3 sentences).
            - Always represent Alex's interests and professional values.
            - If asked for something you don't know, suggest they email the real Alex at hello@alexrivera.dev.
          `,
          temperature: 0.7,
        }
      });

      const aiResponse = response.text || "I'm having a bit of a glitch. Could you try rephrasing that?";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, my neural links are a bit busy right now. Please try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="glass w-[350px] md:w-[400px] h-[500px] rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-primary/20 animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Bot size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Alex's AI Twin</p>
                <p className="text-[10px] opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  Online
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 scroll-smooth"
          >
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-zinc-800' : 'bg-primary'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-white" /> : <Bot size={14} className="text-white" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center text-zinc-400 text-xs italic ml-10">
                  <Sparkles size={12} className="animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask Alex's AI..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-grow bg-zinc-100 dark:bg-zinc-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group relative"
        >
          <MessageSquare size={24} />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 glass px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with my AI
          </span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
