"use client";

/**
 * ============================================
 * NAVBAR COMPONENT - STUNNING GLASSMORPHISM
 * ============================================
 * BOOTSTRAP 5: Navbar structure, container, responsive layout
 * MATERIAL UI: IconButton, Drawer, Avatar, Badge
 * CUSTOM: Glassmorphism effects, animations
 * ============================================
 */

import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AnimatedAILogo from "@/components/effects/AnimatedAILogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Ask AI", href: "#ask-ai" },
  { label: "Scenarios", href: "#scenarios" },
  { label: "Rights", href: "#rights" },
  { label: "Progress", href: "#progress" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* BOOTSTRAP: Fixed navbar with glassmorphism */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
        style={{
          background: scrolled ? "rgba(10, 10, 26, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
        }}
      >
        {/* BOOTSTRAP: Container */}
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="d-flex align-items-center gap-3 text-decoration-none"
            >
              <AnimatedAILogo size="sm" />
              <span className="fw-bold fs-5 text-white gradient-text">LegalAI</span>
            </a>

            {/* Desktop Navigation */}
            <div className="d-none d-lg-flex align-items-center gap-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="px-3 py-2 rounded-pill text-decoration-none transition-all position-relative"
                  style={{
                    color: activeSection === link.href.replace("#", "") ? "#a5b4fc" : "rgba(255, 255, 255, 0.7)",
                    background: activeSection === link.href.replace("#", "") ? "rgba(99, 102, 241, 0.15)" : "transparent",
                    animation: `fadeInDown 0.5s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side icons - Desktop */}
            <div className="d-none d-lg-flex align-items-center gap-2">
              {/* MATERIAL UI: Badge with notifications */}
              <Tooltip title="Notifications" arrow TransitionComponent={Zoom}>
                <IconButton
                  sx={{
                    color: "rgba(255,255,255,0.7)",
                    "&:hover": { color: "#a5b4fc", background: "rgba(99, 102, 241, 0.1)" },
                  }}
                >
                  <Badge badgeContent={3} color="error" sx={{ "& .MuiBadge-badge": { animation: "pulse 2s infinite" } }}>
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Tooltip>

              {/* MATERIAL UI: Avatar */}
              <Tooltip title="Profile" arrow TransitionComponent={Zoom}>
                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    "&:hover": { transform: "scale(1.1)", boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" },
                  }}
                >
                  U
                </Avatar>
              </Tooltip>

              {/* CTA Button */}
              <button
                onClick={() => handleNavClick("#ask-ai")}
                className="btn-gradient ms-2"
                style={{ padding: "10px 24px", fontSize: "14px" }}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button - MATERIAL UI */}
            <IconButton
              className="d-lg-none"
              onClick={() => setMobileOpen(true)}
              sx={{
                color: "white",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </nav>

      {/* MATERIAL UI: Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: "320px",
            background: "rgba(10, 10, 26, 0.98)",
            backdropFilter: "blur(20px)",
          },
        }}
      >
        <div className="p-4 h-100 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="d-flex align-items-center gap-2">
              <AnimatedAILogo size="sm" />
              <span className="fw-bold text-white">LegalAI</span>
            </div>
            <IconButton onClick={() => setMobileOpen(false)} sx={{ color: "rgba(255,255,255,0.7)" }}>
              <CloseIcon />
            </IconButton>
          </div>

          <div className="flex-grow-1">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="d-block py-3 px-4 mb-2 rounded-3 text-decoration-none"
                style={{
                  color: activeSection === link.href.replace("#", "") ? "#a5b4fc" : "rgba(255,255,255,0.8)",
                  background: activeSection === link.href.replace("#", "") ? "rgba(99, 102, 241, 0.15)" : "transparent",
                  borderLeft: activeSection === link.href.replace("#", "") ? "2px solid #6366f1" : "2px solid transparent",
                  animation: `fadeInRight 0.4s ease-out ${index * 0.1}s both`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button onClick={() => handleNavClick("#ask-ai")} className="btn-gradient w-100 py-3">
            Get Started
          </button>
        </div>
      </Drawer>
    </>
  );
}
