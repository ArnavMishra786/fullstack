"use client";

/**
 * ============================================
 * ANIMATED AI LOGO COMPONENT
 * Stunning multi-layered animated AI logo
 * Features: rotating rings, pulsing core, orbiting particles
 * ============================================
 */

import { useEffect, useState } from "react";

interface AnimatedAILogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  isThinking?: boolean;
}

export default function AnimatedAILogo({
  size = "md",
  isThinking = false,
}: AnimatedAILogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sizeMap = {
    sm: { container: 40, ring: 36, core: 20, icon: 12 },
    md: { container: 60, ring: 54, core: 30, icon: 16 },
    lg: { container: 80, ring: 72, core: 40, icon: 20 },
    xl: { container: 120, ring: 108, core: 60, icon: 28 },
    hero: { container: 200, ring: 180, core: 100, icon: 48 },
  };

  const s = sizeMap[size];

  if (!mounted) {
    return (
      <div
        style={{ width: s.container, height: s.container }}
        className="bg-muted rounded-full"
      />
    );
  }

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: s.container, height: s.container }}
    >
      {/* Outer glow */}
      <div
        className="absolute rounded-full animate-pulse-glow"
        style={{
          width: s.container,
          height: s.container,
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Outer rotating ring */}
      <div
        className="absolute rounded-full border-2 border-transparent"
        style={{
          width: s.ring,
          height: s.ring,
          borderTopColor: "rgba(99, 102, 241, 0.8)",
          borderRightColor: "rgba(139, 92, 246, 0.4)",
          animation: `spin ${isThinking ? "1s" : "4s"} linear infinite`,
        }}
      />

      {/* Middle rotating ring (reverse) */}
      <div
        className="absolute rounded-full border-2 border-transparent"
        style={{
          width: s.ring * 0.8,
          height: s.ring * 0.8,
          borderBottomColor: "rgba(139, 92, 246, 0.6)",
          borderLeftColor: "rgba(217, 70, 239, 0.3)",
          animation: `spin ${isThinking ? "0.8s" : "3s"} linear infinite reverse`,
        }}
      />

      {/* Inner pulsing ring */}
      <div
        className="absolute rounded-full animate-pulse"
        style={{
          width: s.ring * 0.6,
          height: s.ring * 0.6,
          border: "1px solid rgba(99, 102, 241, 0.3)",
        }}
      />

      {/* Orbiting particles */}
      {size !== "sm" && (
        <>
          <div
            className="absolute rounded-full bg-indigo-400"
            style={{
              width: size === "hero" ? 8 : 4,
              height: size === "hero" ? 8 : 4,
              animation: `orbit ${isThinking ? "2s" : "6s"} linear infinite`,
              animationDelay: "0s",
            }}
          />
          <div
            className="absolute rounded-full bg-purple-400"
            style={{
              width: size === "hero" ? 6 : 3,
              height: size === "hero" ? 6 : 3,
              animation: `orbit-reverse ${isThinking ? "2.5s" : "8s"} linear infinite`,
              animationDelay: "0.5s",
            }}
          />
          <div
            className="absolute rounded-full bg-fuchsia-400"
            style={{
              width: size === "hero" ? 5 : 2,
              height: size === "hero" ? 5 : 2,
              animation: `orbit ${isThinking ? "1.8s" : "5s"} linear infinite`,
              animationDelay: "1s",
            }}
          />
        </>
      )}

      {/* Core gradient circle */}
      <div
        className="absolute rounded-full flex items-center justify-center"
        style={{
          width: s.core,
          height: s.core,
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",
          boxShadow: isThinking
            ? "0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)"
            : "0 0 20px rgba(99, 102, 241, 0.5)",
          animation: isThinking ? "pulse 0.5s ease-in-out infinite" : "none",
        }}
      >
        {/* AI Icon */}
        <svg
          width={s.icon}
          height={s.icon}
          viewBox="0 0 24 24"
          fill="none"
          className={isThinking ? "animate-pulse" : ""}
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Thinking indicator dots */}
      {isThinking && (
        <div className="absolute -bottom-6 flex gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-indigo-400"
              style={{
                animation: "typing-dot 1.4s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
