"use client";

import React from "react"

/**
 * ============================================
 * HERO SECTION - STUNNING ANIMATED LANDING
 * ============================================
 * BOOTSTRAP 5: Container, grid, spacing utilities
 * MATERIAL UI: Chip, Button, Fade, Grow animations
 * CUSTOM: Gradient text, glassmorphism, floating elements
 * ============================================
 */

import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import AnimatedAILogo from "@/components/effects/AnimatedAILogo";

// Animated counter
function AnimatedCounter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

// Feature card component
function FeatureCard({ icon, title, delay }: { icon: React.ReactNode; title: string; delay: number }) {
  return (
    <div
      className="glass-card glass-card-hover rounded-4 p-3 d-flex align-items-center gap-3"
      style={{ animation: `fadeInUp 0.8s ease-out ${delay}s both`, minWidth: "180px" }}
    >
      <div className="rounded-3 p-2" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))" }}>
        {icon}
      </div>
      <span className="text-white fw-medium" style={{ fontSize: "14px" }}>{title}</span>
    </div>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="position-relative overflow-hidden" style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Animated gradient orbs */}
      <div className="position-absolute animate-morph" style={{ width: "700px", height: "700px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)", top: "-15%", right: "-15%", filter: "blur(80px)" }} />
      <div className="position-absolute animate-pulse-soft" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)", bottom: "5%", left: "-10%", filter: "blur(100px)", animationDelay: "1s" }} />
      <div className="position-absolute" style={{ width: "300px", height: "300px", background: "radial-gradient(circle, rgba(217, 70, 239, 0.06) 0%, transparent 70%)", top: "40%", left: "20%", filter: "blur(60px)", animation: "float 8s ease-in-out infinite" }} />

      {/* BOOTSTRAP: Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start">
            {/* MATERIAL UI: Animated Chip */}
            <Fade in={mounted} timeout={800}>
              <div className="mb-4">
                <Chip
                  icon={<AutoAwesomeIcon sx={{ fontSize: 16, color: "#a5b4fc !important" }} />}
                  label="AI-Powered Legal Education"
                  sx={{
                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))",
                    border: "1px solid rgba(99, 102, 241, 0.3)",
                    color: "#a5b4fc",
                    py: 2.5,
                    px: 1,
                    backdropFilter: "blur(10px)",
                    "& .MuiChip-label": { fontWeight: 500 },
                  }}
                />
              </div>
            </Fade>

            {/* Main heading */}
            <h1 className="display-3 fw-bold mb-4" style={{ animation: "fadeInUp 0.8s ease-out 0.2s both", lineHeight: 1.1 }}>
              <span className="text-white">Understand Your </span>
              <span className="gradient-text-vibrant">Legal Rights</span>
              <span className="text-white"> with AI</span>
            </h1>

            {/* Subtitle */}
            <p className="fs-5 mb-5" style={{ color: "rgba(255, 255, 255, 0.65)", animation: "fadeInUp 0.8s ease-out 0.4s both", maxWidth: "520px" }}>
              Navigate complex legal concepts through interactive scenarios, AI-powered explanations, and personalized learning paths designed for everyone.
            </p>

            {/* CTA Buttons */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-5" style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
              {/* MATERIAL UI: Primary Button */}
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => scrollTo("ask-ai")}
                sx={{
                  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  px: 4,
                  py: 1.5,
                  boxShadow: "0 8px 32px rgba(99, 102, 241, 0.4)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 16px 48px rgba(99, 102, 241, 0.5)",
                  },
                }}
              >
                Start Learning
              </Button>

              {/* MATERIAL UI: Secondary Button */}
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrowIcon />}
                onClick={() => scrollTo("scenarios")}
                sx={{
                  borderRadius: "14px",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: "16px",
                  px: 4,
                  py: 1.5,
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.03)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    borderColor: "rgba(99, 102, 241, 0.5)",
                    background: "rgba(99, 102, 241, 0.1)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                View Scenarios
              </Button>
            </div>

            {/* Stats */}
            <div className="d-flex flex-wrap gap-5 justify-content-center justify-content-lg-start" style={{ animation: "fadeInUp 0.8s ease-out 0.8s both" }}>
              {[
                { value: 10000, suffix: "+", label: "Users Educated" },
                { value: 500, suffix: "+", label: "Legal Topics" },
                { value: 98, suffix: "%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center text-lg-start">
                  <div className="fs-2 fw-bold gradient-text-vibrant">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: "rgba(255, 255, 255, 0.45)", fontSize: "13px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Animated Logo & Cards */}
          <div className="col-lg-6">
            <Grow in={mounted} timeout={1200}>
              <div className="d-flex flex-column align-items-center">
                {/* Floating AI Logo */}
                <div className="position-relative mb-5" style={{ animation: "float 5s ease-in-out infinite" }}>
                  <AnimatedAILogo size="hero" />
                </div>

                {/* Feature cards */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                  <FeatureCard icon={<SecurityIcon sx={{ color: "#a5b4fc" }} />} title="Know Your Rights" delay={1.2} />
                  <FeatureCard icon={<SpeedIcon sx={{ color: "#c4b5fd" }} />} title="Instant AI Answers" delay={1.4} />
                </div>
              </div>
            </Grow>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="position-absolute start-50 translate-middle-x text-center d-none d-lg-block" style={{ bottom: "-60px", animation: "bounce 2s ease-in-out infinite" }}>
          <div style={{ color: "rgba(255, 255, 255, 0.35)", fontSize: "13px", marginBottom: "8px" }}>Scroll to explore</div>
          <div className="mx-auto" style={{ width: "24px", height: "40px", border: "2px solid rgba(255, 255, 255, 0.15)", borderRadius: "12px", position: "relative" }}>
            <div style={{ width: "4px", height: "8px", background: "linear-gradient(180deg, #6366f1, #8b5cf6)", borderRadius: "2px", position: "absolute", left: "50%", top: "8px", transform: "translateX(-50%)", animation: "float 1.5s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
