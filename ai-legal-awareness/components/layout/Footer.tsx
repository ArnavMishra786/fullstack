"use client";

/**
 * ============================================
 * FOOTER - STUNNING DARK GLASS FOOTER
 * ============================================
 * BOOTSTRAP 5: Container, row, col responsive grid
 * MATERIAL UI: IconButton, Tooltip, Divider
 * CUSTOM: Glassmorphism, gradient accents, animations
 * ============================================
 */

import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AnimatedAILogo from "@/components/effects/AnimatedAILogo";

const socialLinks = [
  { icon: <GitHubIcon />, title: "GitHub", color: "#6366f1" },
  { icon: <LinkedInIcon />, title: "LinkedIn", color: "#0ea5e9" },
  { icon: <TwitterIcon />, title: "Twitter", color: "#8b5cf6" },
  { icon: <EmailIcon />, title: "Email", color: "#ec4899" },
];

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#ask-ai", label: "Ask AI" },
  { href: "#scenarios", label: "Scenarios" },
  { href: "#rights", label: "Your Rights" },
  { href: "#progress", label: "Progress" },
];

const techStack = [
  { badge: "React", color: "#61dafb" },
  { badge: "Next.js", color: "#ffffff" },
  { badge: "Bootstrap 5", color: "#7952b3" },
  { badge: "Material UI", color: "#007fff" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="position-relative py-5" style={{ background: "linear-gradient(180deg, rgba(10, 10, 26, 0) 0%, rgba(10, 10, 26, 0.95) 20%)" }}>
      {/* Top gradient border */}
      <div className="position-absolute top-0 start-0 end-0" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.3), transparent)" }} />

      {/* BOOTSTRAP: Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* BOOTSTRAP: Responsive grid */}
        <div className="row g-5">
          {/* Column 1: Brand */}
          <div className="col-lg-4 col-md-6">
            <Fade in={visible} timeout={800}>
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <AnimatedAILogo size="sm" />
                  <span className="fs-4 fw-bold gradient-text">Legal AI Platform</span>
                </div>
                <p className="mb-4" style={{ color: "rgba(255, 255, 255, 0.5)", lineHeight: 1.7 }}>
                  An academic demonstration project showcasing Bootstrap 5 and Material UI integration for legal education.
                </p>

                {/* Social links */}
                <div className="d-flex gap-2">
                  {socialLinks.map((item, index) => (
                    <Grow key={item.title} in={visible} timeout={600 + index * 100}>
                      <Tooltip title={item.title} arrow TransitionComponent={Zoom}>
                        <IconButton
                          sx={{
                            color: "rgba(255, 255, 255, 0.5)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "12px",
                            transition: "all 0.3s ease",
                            "&:hover": { color: item.color, borderColor: item.color, background: `${item.color}15`, transform: "translateY(-4px)" },
                          }}
                        >
                          {item.icon}
                        </IconButton>
                      </Tooltip>
                    </Grow>
                  ))}
                </div>
              </div>
            </Fade>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <Fade in={visible} timeout={1000}>
              <div>
                <h6 className="fw-semibold mb-4 text-white">Quick Links</h6>
                <ul className="list-unstyled">
                  {quickLinks.map((link, index) => (
                    <li key={link.href} className="mb-2">
                      <a
                        href={link.href}
                        className="text-decoration-none d-inline-block"
                        style={{
                          color: "rgba(255, 255, 255, 0.5)",
                          transition: "all 0.3s ease",
                          fontSize: "14px",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#a5b4fc";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>
          </div>

          {/* Column 3: Tech Stack */}
          <div className="col-lg-3 col-md-6 col-6">
            <Fade in={visible} timeout={1200}>
              <div>
                <h6 className="fw-semibold mb-4 text-white">Tech Stack</h6>
                <div className="d-flex flex-wrap gap-2">
                  {techStack.map((item, index) => (
                    <span
                      key={item.badge}
                      className="px-3 py-1 rounded-pill"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}30`,
                        color: item.color,
                        fontSize: "12px",
                        fontWeight: 500,
                        animation: `fadeInUp 0.4s ease-out ${0.1 * index}s both`,
                      }}
                    >
                      {item.badge}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          </div>

          {/* Column 4: Academic Info */}
          <div className="col-lg-3 col-md-6">
            <Fade in={visible} timeout={1400}>
              <div>
                <h6 className="fw-semibold mb-4 text-white">Academic Project</h6>
                <div
                  className="p-3 rounded-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                  }}
                >
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <AutoAwesomeIcon sx={{ color: "#a5b4fc", fontSize: 18 }} />
                    <span className="text-white fw-medium" style={{ fontSize: "14px" }}>Frontend Demonstration</span>
                  </div>
                  <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px", lineHeight: 1.6 }}>
                    This project demonstrates proficiency in frontend development using multiple UI frameworks.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent)" }} />

        {/* Bottom section */}
        <Fade in={visible} timeout={1600}>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "14px" }}>
              © {currentYear} AI Legal Awareness Platform. Academic Project.
            </p>
            <p className="mb-0 d-flex align-items-center gap-2" style={{ color: "rgba(255, 255, 255, 0.4)", fontSize: "13px" }}>
              Built with <span className="gradient-text fw-medium">Bootstrap 5 + Material UI</span>
            </p>
          </div>
        </Fade>
      </div>
    </footer>
  );
}
