"use client";

import React from "react"

/**
 * ============================================
 * INTERACTIVE FLOATING BACKGROUND
 * Google Antigravity-style floating elements
 * Mouse-reactive physics simulation
 * ============================================
 */

import { useEffect, useRef, useState, useCallback } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  type: "circle" | "square" | "triangle" | "ring" | "dot";
  color: string;
  opacity: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const [elements, setElements] = useState<FloatingElement[]>([]);
  const [mounted, setMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colors = [
    "rgba(99, 102, 241, 0.6)",   // Indigo
    "rgba(139, 92, 246, 0.6)",   // Violet
    "rgba(217, 70, 239, 0.5)",   // Fuchsia
    "rgba(59, 130, 246, 0.5)",   // Blue
    "rgba(14, 165, 233, 0.5)",   // Sky
    "rgba(168, 85, 247, 0.5)",   // Purple
  ];

  // Initialize elements
  useEffect(() => {
    setMounted(true);
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({ width, height });

    const types: FloatingElement["type"][] = ["circle", "square", "triangle", "ring", "dot"];
    const newElements: FloatingElement[] = [];

    for (let i = 0; i < 35; i++) {
      newElements.push({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 40 + 15,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        type: types[Math.floor(Math.random() * types.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    setElements(newElements);

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Physics animation loop
  const animate = useCallback(() => {
    setElements((prevElements) =>
      prevElements.map((el) => {
        let { x, y, vx, vy, rotation, rotationSpeed } = el;
        const { width, height } = dimensions;

        // Mouse repulsion effect
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 150;

        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          const angle = Math.atan2(dy, dx);
          vx += Math.cos(angle) * force * 0.5;
          vy += Math.sin(angle) * force * 0.5;
        }

        // Apply velocity with damping
        x += vx;
        y += vy;
        vx *= 0.995;
        vy *= 0.995;

        // Add gentle random drift
        vx += (Math.random() - 0.5) * 0.02;
        vy += (Math.random() - 0.5) * 0.02;

        // Speed limit
        const maxSpeed = 2;
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > maxSpeed) {
          vx = (vx / speed) * maxSpeed;
          vy = (vy / speed) * maxSpeed;
        }

        // Bounce off edges with padding
        const padding = el.size;
        if (x < padding) {
          x = padding;
          vx = Math.abs(vx) * 0.8;
        }
        if (x > width - padding) {
          x = width - padding;
          vx = -Math.abs(vx) * 0.8;
        }
        if (y < padding) {
          y = padding;
          vy = Math.abs(vy) * 0.8;
        }
        if (y > height - padding) {
          y = height - padding;
          vy = -Math.abs(vy) * 0.8;
        }

        // Rotation
        rotation += rotationSpeed;

        return { ...el, x, y, vx, vy, rotation };
      })
    );

    animationRef.current = requestAnimationFrame(animate);
  }, [dimensions]);

  useEffect(() => {
    if (mounted && dimensions.width > 0) {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted, animate, dimensions]);

  // Render shape based on type
  const renderShape = (el: FloatingElement) => {
    const style: React.CSSProperties = {
      position: "absolute",
      left: el.x,
      top: el.y,
      transform: `translate(-50%, -50%) rotate(${el.rotation}deg)`,
      opacity: el.opacity,
      transition: "opacity 0.3s ease",
      willChange: "transform, left, top",
    };

    switch (el.type) {
      case "circle":
        return (
          <div
            key={el.id}
            style={{
              ...style,
              width: el.size,
              height: el.size,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${el.color}, transparent)`,
              boxShadow: `0 0 ${el.size / 2}px ${el.color}`,
            }}
          />
        );
      case "square":
        return (
          <div
            key={el.id}
            style={{
              ...style,
              width: el.size,
              height: el.size,
              borderRadius: el.size * 0.15,
              background: `linear-gradient(135deg, ${el.color}, transparent)`,
              border: `1px solid ${el.color.replace("0.6", "0.3").replace("0.5", "0.3")}`,
            }}
          />
        );
      case "triangle":
        return (
          <div
            key={el.id}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${el.size / 2}px solid transparent`,
              borderRight: `${el.size / 2}px solid transparent`,
              borderBottom: `${el.size}px solid ${el.color}`,
              filter: `drop-shadow(0 0 ${el.size / 3}px ${el.color})`,
            }}
          />
        );
      case "ring":
        return (
          <div
            key={el.id}
            style={{
              ...style,
              width: el.size,
              height: el.size,
              borderRadius: "50%",
              border: `2px solid ${el.color}`,
              boxShadow: `0 0 ${el.size / 3}px ${el.color}, inset 0 0 ${el.size / 4}px ${el.color}`,
            }}
          />
        );
      case "dot":
        return (
          <div
            key={el.id}
            style={{
              ...style,
              width: el.size / 3,
              height: el.size / 3,
              borderRadius: "50%",
              background: el.color,
              boxShadow: `0 0 ${el.size}px ${el.size / 2}px ${el.color}`,
            }}
          />
        );
      default:
        return null;
    }
  };

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{ background: "transparent" }}
    >
      {/* Large gradient orbs that also move slowly */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)",
          top: "-15%",
          left: "-10%",
          filter: "blur(80px)",
          animation: "floatOrb1 25s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          bottom: "5%",
          right: "-10%",
          filter: "blur(80px)",
          animation: "floatOrb2 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(217, 70, 239, 0.08) 0%, transparent 70%)",
          top: "40%",
          left: "50%",
          filter: "blur(100px)",
          animation: "floatOrb3 20s ease-in-out infinite",
        }}
      />

      {/* Floating interactive elements */}
      {elements.map(renderShape)}

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gridMove 60s linear infinite",
        }}
      />

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, 30px) scale(1.05); }
          50% { transform: translate(20px, 60px) scale(0.95); }
          75% { transform: translate(-30px, 20px) scale(1.02); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, -50px) scale(1.08); }
          66% { transform: translate(30px, -20px) scale(0.92); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-45%, -55%) scale(1.1); }
        }
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </div>
  );
}
