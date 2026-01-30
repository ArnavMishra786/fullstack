"use client";

/**
 * ============================================
 * AI LEGAL AWARENESS PLATFORM - 3D COURTROOM
 * ============================================
 *
 * IMMERSIVE 3D EXPERIENCE - LIGHT ELEGANT THEME
 * 
 * React Three Fiber: 3D courtroom environment
 * Material UI: Chat panels, info cards, buttons
 * Bootstrap: Layout utilities, responsive design
 */

import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import ThemeProvider from "@/components/providers/ThemeProvider";
import AIChatPanel from "@/components/ui/AIChatPanel";
import RightsInfoPanel from "@/components/ui/RightsInfoPanel";
import {
  IconButton,
  Typography,
  Fade,
  Tooltip,
} from "@mui/material";
import {
  VolumeUp,
  VolumeOff,
  Fullscreen,
  Help,
  SmartToy,
} from "@mui/icons-material";

// Dynamic import for 3D scene (client-side only)
const CourtroomScene = dynamic(
  () => import("@/components/3d/CourtroomScene"),
  { 
    ssr: false,
    loading: () => (
      <div 
        className="w-100 vh-100 d-flex flex-column align-items-center justify-content-center"
        style={{ background: 'linear-gradient(180deg, #e8f4fc 0%, #f5f0e8 100%)' }}
      >
        <div 
          className="mb-4"
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            animation: 'pulse 2s infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 40px rgba(99, 102, 241, 0.3)',
          }}
        >
          <SmartToy sx={{ fontSize: 40, color: 'white' }} />
        </div>
        <Typography variant="h5" sx={{ color: '#1f2937', mb: 1, fontWeight: 600 }}>
          Loading Courtroom
        </Typography>
        <Typography variant="body2" sx={{ color: '#6b7280' }}>
          Preparing your immersive legal experience...
        </Typography>
        <div 
          className="mt-4"
          style={{
            width: 200,
            height: 4,
            background: 'rgba(99, 102, 241, 0.2)',
            borderRadius: 2,
            overflow: 'hidden',
          }}
        >
          <div 
            style={{
              width: '50%',
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
              animation: 'loading 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    ),
  }
);

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [showHelp, setShowHelp] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Hide help after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowHelp(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleSelectTopic = useCallback((topic: string) => {
    setSelectedTopic(topic);
    setIsAIChatOpen(false);
  }, []);

  const handleOpenAIChat = useCallback(() => {
    setIsAIChatOpen(true);
    setSelectedTopic(null);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedTopic(null);
  }, []);

  const handleCloseChat = useCallback(() => {
    setIsAIChatOpen(false);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <ThemeProvider>
      {/* Main 3D Scene Container */}
      <div 
        className="position-relative w-100 vh-100 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #e8f4fc 0%, #f5f0e8 100%)' }}
      >
        {/* 3D Courtroom Scene */}
        <CourtroomScene
          onSelectTopic={handleSelectTopic}
          onOpenAIChat={handleOpenAIChat}
          isAIChatOpen={isAIChatOpen}
        />

        {/* Header Overlay */}
        <div
          className="position-fixed top-0 start-0 w-100 p-3 p-md-4"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 100,
            pointerEvents: 'none',
          }}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col">
                <div style={{ pointerEvents: 'auto' }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#1f2937', 
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <span 
                      style={{
                        background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      AI Legal
                    </span>
                    <span style={{ color: '#1f2937' }}>Awareness</span>
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#6b7280' }}>
                    Interactive 3D Legal Education Platform
                  </Typography>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className="position-fixed bottom-0 end-0 p-3 p-md-4 d-flex gap-2"
          style={{ zIndex: 100 }}
        >
          <Tooltip title={soundEnabled ? "Mute" : "Unmute"}>
            <IconButton
              onClick={() => setSoundEnabled(!soundEnabled)}
              sx={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                color: '#4b5563',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                '&:hover': { background: 'white', color: '#6366f1' },
              }}
            >
              {soundEnabled ? <VolumeUp /> : <VolumeOff />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Fullscreen">
            <IconButton
              onClick={toggleFullscreen}
              sx={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                color: '#4b5563',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                '&:hover': { background: 'white', color: '#6366f1' },
              }}
            >
              <Fullscreen />
            </IconButton>
          </Tooltip>
          <Tooltip title="Help">
            <IconButton
              onClick={() => setShowHelp(!showHelp)}
              sx={{
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                color: '#4b5563',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                '&:hover': { background: 'white', color: '#6366f1' },
              }}
            >
              <Help />
            </IconButton>
          </Tooltip>
        </div>

        {/* Help Overlay */}
        <Fade in={showHelp}>
          <div
            className="position-fixed bottom-0 start-0 p-3 p-md-4"
            style={{ 
              zIndex: 100,
              maxWidth: 400,
            }}
          >
            <div
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: 16,
                padding: 20,
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            >
              <Typography variant="subtitle1" sx={{ color: '#6366f1', fontWeight: 600, mb: 1 }}>
                How to Navigate
              </Typography>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center gap-2">
                  <span 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      fontSize: '0.7rem',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    1
                  </span>
                  <Typography variant="body2" sx={{ color: '#4b5563' }}>
                    Click on courtroom objects to explore legal topics
                  </Typography>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      fontSize: '0.7rem',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    2
                  </span>
                  <Typography variant="body2" sx={{ color: '#4b5563' }}>
                    Click the floating AI orb to chat with your legal consultant
                  </Typography>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span 
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                      fontSize: '0.7rem',
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    3
                  </span>
                  <Typography variant="body2" sx={{ color: '#4b5563' }}>
                    Move your mouse to look around the courtroom
                  </Typography>
                </div>
              </div>
              <button
                onClick={() => setShowHelp(false)}
                className="btn btn-sm w-100 mt-3"
                style={{
                  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                  border: 'none',
                  color: 'white',
                  borderRadius: 8,
                  fontWeight: 500,
                  padding: '8px 16px',
                }}
              >
                Got it!
              </button>
            </div>
          </div>
        </Fade>

        {/* Topic Quick Access */}
        <div
          className="position-fixed top-50 end-0 translate-middle-y pe-2 d-none d-lg-flex flex-column gap-2"
          style={{ zIndex: 50 }}
        >
          {[
            { id: 'constitutional', label: 'Constitution', color: '#d4af37' },
            { id: 'criminal', label: 'Criminal', color: '#22c55e' },
            { id: 'employment', label: 'Employment', color: '#3b82f6' },
            { id: 'consumer', label: 'Consumer', color: '#f59e0b' },
          ].map((item) => (
            <Tooltip key={item.id} title={item.label} placement="left">
              <button
                onClick={() => handleSelectTopic(item.id)}
                className="border-0 d-flex align-items-center justify-content-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: selectedTopic === item.id 
                    ? `linear-gradient(135deg, ${item.color} 0%, ${item.color}cc 100%)`
                    : 'rgba(255,255,255,0.9)',
                  border: `2px solid ${item.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: selectedTopic === item.id 
                    ? `0 4px 20px ${item.color}40`
                    : '0 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                <div
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: selectedTopic === item.id ? 'white' : item.color,
                    boxShadow: `0 0 10px ${item.color}`,
                  }}
                />
              </button>
            </Tooltip>
          ))}
        </div>

        {/* AI Chat Panel */}
        <AIChatPanel isOpen={isAIChatOpen} onClose={handleCloseChat} />

        {/* Rights Info Panel */}
        <RightsInfoPanel topic={selectedTopic} onClose={handleClosePanel} />

        </div>

      {/* Loading animation styles */}
      <style jsx global>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes bounce {
          0%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </ThemeProvider>
  );
}
