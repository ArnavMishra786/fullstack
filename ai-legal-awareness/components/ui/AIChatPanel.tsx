"use client";

/**
 * ============================================
 * AI CHAT PANEL - LIGHT ELEGANT THEME
 * ============================================
 * 
 * Material UI components for the chat interface
 * Light glassmorphism design with animations
 */

import { useState, useRef, useEffect } from "react";
import {
  Card,
  TextField,
  IconButton,
  Typography,
  Avatar,
  Chip,
  Fade,
  CircularProgress,
} from "@mui/material";
import {
  Send,
  Close,
  SmartToy,
  Person,
  AutoAwesome,
} from "@mui/icons-material";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const suggestedQuestions = [
  "What are my Miranda rights?",
  "How do I file a small claims case?",
  "What is wrongful termination?",
  "Can my landlord evict me?",
];

const aiResponses: Record<string, string> = {
  "miranda": "Miranda rights include: 1) Right to remain silent - you do not have to answer any questions. 2) Anything you say can and will be used against you in court. 3) Right to an attorney - you can have a lawyer present during questioning. 4) If you cannot afford an attorney, one will be appointed for you. These rights MUST be read to you before any custodial interrogation begins.",
  "small claims": "To file a small claims case, follow these steps: 1) Verify your case qualifies - typically claims under $10,000. 2) Identify the correct court jurisdiction. 3) Complete the plaintiff's claim form with all details. 4) Pay the filing fees (usually $30-$75). 5) Serve the defendant with proper notice. 6) Gather all evidence and documentation. 7) Attend the hearing and present your case. No lawyers are typically allowed in small claims court.",
  "termination": "Wrongful termination occurs when an employer fires an employee in violation of legal protections. Common grounds include: 1) Discrimination based on race, gender, age, religion, or disability. 2) Retaliation for reporting workplace violations or harassment. 3) Breach of written or implied employment contract. 4) Violation of public policy (e.g., firing for jury duty). 5) Violation of FMLA or other leave protections. Document everything and consult an employment attorney.",
  "evict": "Landlords must follow strict legal procedures for eviction: 1) Must have valid legal grounds (non-payment, lease violation, etc.). 2) Must provide proper written notice (typically 3-30 days depending on reason). 3) Must wait for the notice period to expire. 4) Must file an unlawful detainer lawsuit if tenant doesn't leave. 5) Must attend court hearing. 6) Only a sheriff can physically remove a tenant. Self-help evictions (changing locks, removing belongings) are ILLEGAL and you can sue for damages.",
  "default": "Hello! I'm your AI Legal Consultant. I'm here to help you understand your legal rights and navigate the justice system. I can provide general information about:\n\n- Constitutional rights\n- Criminal justice procedures\n- Employment law\n- Consumer protection\n- Landlord-tenant law\n\nPlease note: I provide educational information only, not legal advice. For specific legal matters, always consult with a licensed attorney. What would you like to know?",
};

function getAIResponse(input: string): string {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes("miranda") || lowerInput.includes("right to remain silent")) return aiResponses["miranda"];
  if (lowerInput.includes("small claim") || lowerInput.includes("sue")) return aiResponses["small claims"];
  if (lowerInput.includes("termination") || lowerInput.includes("fired") || lowerInput.includes("wrongful")) return aiResponses["termination"];
  if (lowerInput.includes("evict") || lowerInput.includes("landlord") || lowerInput.includes("tenant")) return aiResponses["evict"];
  return aiResponses["default"];
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Legal Consultant. I can help you understand your legal rights and navigate the justice system. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: getAIResponse(currentInput),
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestion = (question: string) => {
    setInput(question);
  };

  if (!isOpen) return null;

  return (
    <Fade in={isOpen} timeout={300}>
      <Card
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          width: 400,
          maxWidth: 'calc(100vw - 48px)',
          height: '70vh',
          maxHeight: 580,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          borderRadius: 4,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 25px 80px rgba(99, 102, 241, 0.2), 0 10px 40px rgba(0, 0, 0, 0.15)',
          zIndex: 1200,
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Avatar
              sx={{
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)',
                animation: 'pulse 2s infinite',
              }}
            >
              <SmartToy />
            </Avatar>
            <div>
              <Typography variant="subtitle1" sx={{ color: '#1f2937', fontWeight: 600 }}>
                AI Legal Consultant
              </Typography>
              <Typography variant="caption" sx={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <span style={{ 
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  background: '#22c55e',
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite',
                }} />
                Online & Ready to Help
              </Typography>
            </div>
          </div>
          <IconButton 
            onClick={onClose} 
            sx={{ 
              color: '#6b7280',
              '&:hover': { color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' },
            }}
          >
            <Close />
          </IconButton>
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            background: '#fafafa',
          }}
        >
          {messages.map((message, index) => (
            <Fade in key={message.id} timeout={300} style={{ transitionDelay: `${index * 50}ms` }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  alignItems: 'flex-start',
                  gap: 10,
                }}
              >
                {message.sender === 'ai' && (
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      boxShadow: '0 2px 10px rgba(99, 102, 241, 0.3)',
                    }}
                  >
                    <SmartToy sx={{ fontSize: 20 }} />
                  </Avatar>
                )}
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '14px 18px',
                    borderRadius: message.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: message.sender === 'user'
                      ? 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)'
                      : 'white',
                    border: message.sender === 'ai' ? '1px solid rgba(99, 102, 241, 0.15)' : 'none',
                    color: message.sender === 'user' ? 'white' : '#374151',
                    boxShadow: message.sender === 'user' 
                      ? '0 4px 15px rgba(99, 102, 241, 0.3)'
                      : '0 2px 10px rgba(0,0,0,0.05)',
                  }}
                >
                  <Typography variant="body2" sx={{ lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                    {message.text}
                  </Typography>
                </div>
                {message.sender === 'user' && (
                  <Avatar
                    sx={{
                      width: 36,
                      height: 36,
                      background: 'linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)',
                      color: '#4b5563',
                    }}
                  >
                    <Person sx={{ fontSize: 20 }} />
                  </Avatar>
                )}
              </div>
            </Fade>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Avatar
                sx={{
                  width: 36,
                  height: 36,
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                }}
              >
                <SmartToy sx={{ fontSize: 20 }} />
              </Avatar>
              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: '18px 18px 18px 4px',
                  background: 'white',
                  border: '1px solid rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  gap: 6,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      width: 10,
                      height: 10,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      borderRadius: '50%',
                      animation: 'bounce 1.4s infinite ease-in-out',
                      animationDelay: `${i * 0.16}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 2 && (
          <div style={{ 
            padding: '12px 16px', 
            borderTop: '1px solid rgba(99, 102, 241, 0.1)',
            background: 'white',
          }}>
            <Typography variant="caption" sx={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: 0.5, mb: 1 }}>
              <AutoAwesome sx={{ fontSize: 14, color: '#6366f1' }} /> Suggested questions
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {suggestedQuestions.map((q, i) => (
                <Chip
                  key={i}
                  label={q}
                  size="small"
                  onClick={() => handleSuggestion(q)}
                  sx={{
                    background: 'rgba(99, 102, 241, 0.08)',
                    border: '1px solid rgba(99, 102, 241, 0.2)',
                    color: '#4b5563',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      background: 'rgba(99, 102, 241, 0.15)',
                      borderColor: '#6366f1',
                      transform: 'translateY(-1px)',
                    },
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div
          style={{
            padding: '14px 16px',
            borderTop: '1px solid rgba(99, 102, 241, 0.1)',
            background: 'white',
            display: 'flex',
            gap: 10,
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Ask about your legal rights..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                background: '#f9fafb',
                borderRadius: 3,
                '& fieldset': {
                  borderColor: 'rgba(99, 102, 241, 0.2)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgba(99, 102, 241, 0.4)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6366f1',
                },
              },
            }}
          />
          <IconButton
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            sx={{
              background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
              color: 'white',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
              '&:hover': {
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                transform: 'scale(1.05)',
              },
              '&.Mui-disabled': {
                background: '#e5e7eb',
                color: '#9ca3af',
              },
              transition: 'all 0.2s ease',
            }}
          >
            {isTyping ? <CircularProgress size={20} color="inherit" /> : <Send />}
          </IconButton>
        </div>

        {/* Animation keyframes */}
        <style jsx global>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          @keyframes bounce {
            0%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-6px);
            }
          }
        `}</style>
      </Card>
    </Fade>
  );
}
