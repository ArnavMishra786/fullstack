"use client";

/**
 * ============================================
 * ASK LEGAL AI SECTION - STUNNING CHAT UI
 * ============================================
 * BOOTSTRAP 5: Container, row, col grid system
 * MATERIAL UI: Card, TextField, Avatar, Chip, Snackbar
 * CUSTOM: Glassmorphism, gradient effects, animations
 * ============================================
 */

import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnimatedAILogo from "@/components/effects/AnimatedAILogo";

interface Message {
  id: number;
  type: "user" | "ai";
  text: string;
}

const dummyResponses: Record<string, string> = {
  default: "I understand your legal question. Based on general legal principles, I can provide educational information about this topic. For specific advice, always consult a qualified attorney.",
  rights: "Every citizen has fundamental rights protected by the Constitution, including the right to due process, equal protection under the law, freedom of speech, and the right to legal representation.",
  contract: "A valid contract requires: offer, acceptance, consideration, capacity, and legality. If any element is missing, the contract may be voidable or void.",
  employment: "Employment law covers hiring practices, workplace safety, discrimination, wages, and termination. Employees have rights to fair treatment and a safe working environment.",
  tenant: "As a tenant, you have rights including the right to a habitable dwelling, privacy, proper notice before entry, return of security deposit, and protection from illegal eviction.",
};

const suggestedQuestions = [
  "What are my tenant rights?",
  "How do contracts work?",
  "Explain employment law",
  "What is due process?",
];

export default function AskAISection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { id: Date.now(), type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const lowerInput = input.toLowerCase();
      let response = dummyResponses.default;
      if (lowerInput.includes("right")) response = dummyResponses.rights;
      else if (lowerInput.includes("contract")) response = dummyResponses.contract;
      else if (lowerInput.includes("employ") || lowerInput.includes("work")) response = dummyResponses.employment;
      else if (lowerInput.includes("tenant") || lowerInput.includes("rent")) response = dummyResponses.tenant;

      setMessages((prev) => [...prev, { id: Date.now() + 1, type: "ai", text: response }]);
      setLoading(false);
      setSnackbarOpen(true);
    }, 1500);
  };

  return (
    <section id="ask-ai" className="py-5 position-relative" style={{ background: "linear-gradient(180deg, rgba(10, 10, 26, 0) 0%, rgba(99, 102, 241, 0.03) 50%, rgba(10, 10, 26, 0) 100%)" }}>
      {/* Background gradient orb */}
      <div className="position-absolute" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "blur(80px)", pointerEvents: "none" }} />

      {/* BOOTSTRAP: Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Header */}
            <Fade in={visible} timeout={800}>
              <div className="text-center mb-5">
                <div className="d-flex justify-content-center mb-4">
                  <AnimatedAILogo size="lg" isThinking={loading} />
                </div>
                <h2 className="display-5 fw-bold mb-3">
                  <span className="gradient-text">Ask Legal AI</span>
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>Get instant answers to your legal questions</p>
              </div>
            </Fade>

            {/* MATERIAL UI: Chat Card with glassmorphism */}
            <Grow in={visible} timeout={1000}>
              <Card
                sx={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                }}
              >
                <CardContent sx={{ p: 0 }}>
                  {/* Chat messages area */}
                  <div
                    style={{
                      height: "400px",
                      overflowY: "auto",
                      padding: "24px",
                      background: "linear-gradient(180deg, rgba(99, 102, 241, 0.02) 0%, transparent 100%)",
                    }}
                  >
                    {messages.length === 0 ? (
                      <div className="text-center py-5" style={{ animation: "fadeIn 0.6s ease-out" }}>
                        <AnimatedAILogo size="xl" />
                        <p className="mt-4" style={{ color: "rgba(255, 255, 255, 0.5)" }}>Ask me any legal question to get started!</p>
                      </div>
                    ) : (
                      messages.map((message, index) => (
                        <div
                          key={message.id}
                          className={`d-flex mb-3 ${message.type === "user" ? "justify-content-end" : "justify-content-start"}`}
                          style={{ animation: `${message.type === "user" ? "fadeInRight" : "fadeInLeft"} 0.4s ease-out` }}
                        >
                          {message.type === "ai" && (
                            <Avatar sx={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", mr: 1.5, width: 40, height: 40, boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)" }}>
                              <AutoAwesomeIcon fontSize="small" />
                            </Avatar>
                          )}
                          <div
                            style={{
                              maxWidth: "75%",
                              padding: "14px 18px",
                              borderRadius: message.type === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                              background: message.type === "user" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "rgba(255, 255, 255, 0.05)",
                              border: message.type === "ai" ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                              color: "white",
                              boxShadow: message.type === "user" ? "0 4px 20px rgba(99, 102, 241, 0.3)" : "none",
                            }}
                          >
                            <p className="mb-0" style={{ fontSize: "15px", lineHeight: 1.6 }}>{message.text}</p>
                          </div>
                          {message.type === "user" && (
                            <Avatar sx={{ background: "linear-gradient(135deg, #ec4899, #f43f5e)", ml: 1.5, width: 40, height: 40, boxShadow: "0 4px 15px rgba(236, 72, 153, 0.4)" }}>
                              <PersonIcon fontSize="small" />
                            </Avatar>
                          )}
                        </div>
                      ))
                    )}

                    {/* Typing indicator */}
                    {loading && (
                      <div className="d-flex align-items-center gap-2" style={{ animation: "fadeIn 0.3s ease-out" }}>
                        <Avatar sx={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", width: 40, height: 40 }}>
                          <AutoAwesomeIcon fontSize="small" />
                        </Avatar>
                        <div className="d-flex gap-1 px-4 py-3 rounded-pill" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                          {[0, 1, 2].map((i) => (
                            <div
                              key={i}
                              style={{
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                                animation: "typing-dot 1.4s ease-in-out infinite",
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested questions */}
                  <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
                    <p className="mb-2" style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.4)" }}>Try asking:</p>
                    <div className="d-flex flex-wrap gap-2">
                      {suggestedQuestions.map((q, i) => (
                        <Chip
                          key={i}
                          label={q}
                          size="small"
                          onClick={() => setInput(q)}
                          sx={{
                            background: "rgba(99, 102, 241, 0.1)",
                            border: "1px solid rgba(99, 102, 241, 0.2)",
                            color: "#a5b4fc",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            animation: `fadeInUp 0.4s ease-out ${0.1 * i}s both`,
                            "&:hover": { background: "rgba(99, 102, 241, 0.2)", transform: "translateY(-2px)", borderColor: "rgba(99, 102, 241, 0.4)" },
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Input area */}
                  <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", gap: "12px" }}>
                    {/* MATERIAL UI: TextField */}
                    <TextField
                      fullWidth
                      placeholder="Type your legal question..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          background: "rgba(255, 255, 255, 0.03)",
                          borderRadius: "14px",
                          color: "white",
                          "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                          "&:hover fieldset": { borderColor: "rgba(99, 102, 241, 0.3)" },
                          "&.Mui-focused fieldset": { borderColor: "#6366f1" },
                        },
                        "& .MuiInputBase-input::placeholder": { color: "rgba(255, 255, 255, 0.4)" },
                      }}
                    />

                    {/* MATERIAL UI: Send Button */}
                    <Button
                      variant="contained"
                      onClick={handleSend}
                      disabled={loading || !input.trim()}
                      sx={{
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                        borderRadius: "14px",
                        minWidth: "56px",
                        height: "40px",
                        boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
                        transition: "all 0.3s ease",
                        "&:hover": { transform: "scale(1.05)", boxShadow: "0 8px 30px rgba(99, 102, 241, 0.5)" },
                        "&:disabled": { background: "rgba(255, 255, 255, 0.1)", boxShadow: "none" },
                      }}
                    >
                      <SendIcon fontSize="small" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grow>

            {/* MATERIAL UI: Snackbar */}
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
              <Alert severity="success" sx={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9))", color: "white", backdropFilter: "blur(10px)" }}>
                AI response generated successfully!
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
    </section>
  );
}
