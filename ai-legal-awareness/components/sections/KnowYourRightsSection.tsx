"use client";

import React from "react"

/**
 * ============================================
 * KNOW YOUR RIGHTS - STUNNING ACCORDION UI
 * ============================================
 * BOOTSTRAP 5: Container, row, col, accordion structure
 * MATERIAL UI: Card, Chip, Collapse, Typography
 * CUSTOM: Glassmorphism, gradient borders, animations
 * ============================================
 */

import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityIcon from "@mui/icons-material/Security";
import BalanceIcon from "@mui/icons-material/Balance";
import GroupsIcon from "@mui/icons-material/Groups";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface RightsCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  keywords: string[];
  rights: { title: string; description: string }[];
}

const rightsCategories: RightsCategory[] = [
  {
    id: "constitutional",
    title: "Constitutional Rights",
    icon: <GavelIcon />,
    color: "#6366f1",
    description: "Fundamental rights guaranteed by the Constitution that protect citizens from government overreach.",
    keywords: ["First Amendment", "Due Process", "Equal Protection", "Bill of Rights"],
    rights: [
      { title: "Freedom of Speech", description: "The right to express opinions without government interference or censorship." },
      { title: "Freedom of Religion", description: "The right to practice any religion or choose not to follow any religion." },
      { title: "Right to Assembly", description: "The right to gather peacefully with others for any lawful purpose." },
      { title: "Due Process", description: "The right to fair treatment through the normal judicial system." },
    ],
  },
  {
    id: "criminal",
    title: "Criminal Justice Rights",
    icon: <SecurityIcon />,
    color: "#8b5cf6",
    description: "Rights that protect individuals when interacting with law enforcement and the criminal justice system.",
    keywords: ["Miranda Rights", "Right to Counsel", "Fair Trial", "Bail"],
    rights: [
      { title: "Right to Remain Silent", description: "You cannot be compelled to incriminate yourself." },
      { title: "Right to an Attorney", description: "You have the right to legal representation, appointed if needed." },
      { title: "Protection from Searches", description: "Police generally need a warrant to search your property." },
      { title: "Right to a Speedy Trial", description: "Your case must be heard within a reasonable timeframe." },
    ],
  },
  {
    id: "employment",
    title: "Employment Rights",
    icon: <BalanceIcon />,
    color: "#ec4899",
    description: "Rights that protect workers in the workplace and employment relationships.",
    keywords: ["Non-Discrimination", "Minimum Wage", "Safe Workplace", "FMLA"],
    rights: [
      { title: "Non-Discrimination", description: "Protection from discrimination based on protected characteristics." },
      { title: "Fair Wages", description: "Right to minimum wage and overtime pay for eligible workers." },
      { title: "Safe Working Conditions", description: "OSHA protects your right to a safe and healthy workplace." },
      { title: "Family Medical Leave", description: "Eligible employees can take unpaid leave for family/medical reasons." },
    ],
  },
  {
    id: "consumer",
    title: "Consumer Rights",
    icon: <GroupsIcon />,
    color: "#10b981",
    description: "Rights that protect consumers when purchasing goods and services.",
    keywords: ["Warranty", "Refunds", "Privacy", "Fair Credit"],
    rights: [
      { title: "Right to Safety", description: "Products must be safe for their intended use." },
      { title: "Right to Information", description: "Businesses must provide truthful product information." },
      { title: "Right to Choose", description: "Access to variety of products at competitive prices." },
      { title: "Right to Be Heard", description: "Consumer complaints should be addressed fairly." },
    ],
  },
];

export default function KnowYourRightsSection() {
  const [expanded, setExpanded] = useState<string | null>("constitutional");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section id="rights" className="py-5 position-relative" style={{ background: "linear-gradient(180deg, rgba(99, 102, 241, 0.03) 0%, rgba(10, 10, 26, 0) 50%, rgba(139, 92, 246, 0.03) 100%)" }}>
      {/* Background orbs */}
      <div className="position-absolute" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)", top: "20%", left: "-5%", filter: "blur(80px)" }} />
      <div className="position-absolute" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)", bottom: "20%", right: "-5%", filter: "blur(80px)" }} />

      {/* BOOTSTRAP: Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <Fade in={visible} timeout={800}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <span className="gradient-text">Know Your Rights</span>
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", maxWidth: "600px", margin: "0 auto" }}>
              Explore your fundamental legal rights organized by category. Click any section to learn more.
            </p>
          </div>
        </Fade>

        {/* BOOTSTRAP: Centered row */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Accordion items */}
            {rightsCategories.map((category, index) => (
              <Grow key={category.id} in={visible} timeout={600 + index * 150}>
                <div
                  className="mb-4 rounded-4 overflow-hidden"
                  style={{
                    background: expanded === category.id ? "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)" : "rgba(255, 255, 255, 0.02)",
                    border: expanded === category.id ? `1px solid ${category.color}40` : "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: expanded === category.id ? `0 10px 40px ${category.color}20` : "none",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Header button */}
                  <button
                    onClick={() => setExpanded(expanded === category.id ? null : category.id)}
                    className="w-100 d-flex align-items-center justify-content-between p-4 border-0 bg-transparent text-start"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-3 p-3 d-flex align-items-center justify-content-center"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}30, ${category.color}10)`,
                          color: category.color,
                          transition: "all 0.3s ease",
                          transform: expanded === category.id ? "scale(1.1) rotate(5deg)" : "scale(1)",
                        }}
                      >
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="fw-semibold mb-0 text-white" style={{ fontSize: "18px" }}>{category.title}</h3>
                        <p className="mb-0 d-none d-md-block" style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px" }}>
                          {category.keywords.slice(0, 2).join(" | ")}
                        </p>
                      </div>
                    </div>
                    <KeyboardArrowDownIcon
                      sx={{
                        color: "rgba(255, 255, 255, 0.5)",
                        transform: expanded === category.id ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </button>

                  {/* Collapsible content - Using MUI Collapse */}
                  <Collapse in={expanded === category.id} timeout={400}>
                    <div className="px-4 pb-4">
                      {/* Description card */}
                      <Fade in={expanded === category.id} timeout={500}>
                        <Card
                          sx={{
                            background: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            borderRadius: "16px",
                            mb: 3,
                          }}
                        >
                          <CardContent>
                            <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "16px" }}>{category.description}</p>
                            <div className="d-flex flex-wrap gap-2">
                              {category.keywords.map((keyword, i) => (
                                <Chip
                                  key={i}
                                  label={keyword}
                                  size="small"
                                  sx={{
                                    background: `${category.color}15`,
                                    border: `1px solid ${category.color}30`,
                                    color: category.color,
                                    animation: `fadeInUp 0.3s ease-out ${i * 0.1}s both`,
                                    transition: "all 0.3s ease",
                                    "&:hover": { background: `${category.color}25`, transform: "translateY(-2px)" },
                                  }}
                                />
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </Fade>

                      {/* Rights list */}
                      <div className="row g-3">
                        {category.rights.map((right, rightIndex) => (
                          <div key={rightIndex} className="col-md-6">
                            <Fade in={expanded === category.id} timeout={400 + rightIndex * 100}>
                              <div
                                className="p-3 rounded-3 h-100"
                                style={{
                                  background: "rgba(255, 255, 255, 0.02)",
                                  border: "1px solid rgba(255, 255, 255, 0.05)",
                                  transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                                  e.currentTarget.style.borderColor = `${category.color}40`;
                                  e.currentTarget.style.transform = "translateY(-4px)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.02)";
                                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                                  e.currentTarget.style.transform = "translateY(0)";
                                }}
                              >
                                <div className="d-flex align-items-start gap-2">
                                  <CheckCircleIcon sx={{ color: category.color, fontSize: 20, mt: 0.5, flexShrink: 0 }} />
                                  <div>
                                    <h4 className="fw-medium mb-1 text-white" style={{ fontSize: "15px" }}>{right.title}</h4>
                                    <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px", lineHeight: 1.5 }}>{right.description}</p>
                                  </div>
                                </div>
                              </div>
                            </Fade>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Collapse>
                </div>
              </Grow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
