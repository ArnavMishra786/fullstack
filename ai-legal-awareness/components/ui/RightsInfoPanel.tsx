"use client";

import React from "react"

/**
 * ============================================
 * RIGHTS INFO PANEL - LIGHT ELEGANT THEME
 * ============================================
 * 
 * Material UI + Bootstrap for layout
 * Displays legal information when topics are clicked
 */

import { useState, useEffect } from "react";
import {
  Card,
  Typography,
  Chip,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Fade,
  Grow,
  LinearProgress,
} from "@mui/material";
import {
  Close,
  ExpandMore,
  AccountBalance,
  Gavel,
  Work,
  ShoppingCart,
  Info,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material";

interface TopicContent {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  sections: {
    title: string;
    content: string;
    keyPoints: string[];
  }[];
  quickFacts: string[];
}

const topicData: Record<string, TopicContent> = {
  constitutional: {
    title: "Constitutional Rights",
    icon: <AccountBalance />,
    color: "#d4af37",
    description: "Fundamental rights guaranteed by the Constitution that protect individuals from government overreach.",
    sections: [
      {
        title: "First Amendment",
        content: "Protects freedom of speech, religion, press, assembly, and petition.",
        keyPoints: [
          "Freedom of speech includes symbolic expression",
          "Government cannot establish an official religion",
          "Press freedom includes digital media",
          "Right to peaceful protest and assembly",
        ],
      },
      {
        title: "Fourth Amendment",
        content: "Protects against unreasonable searches and seizures.",
        keyPoints: [
          "Warrants require probable cause",
          "Exclusionary rule for illegally obtained evidence",
          "Certain exceptions exist (plain view, consent)",
          "Digital privacy is increasingly protected",
        ],
      },
      {
        title: "Fifth Amendment",
        content: "Protects against self-incrimination and double jeopardy.",
        keyPoints: [
          "Right to remain silent during questioning",
          "Cannot be tried twice for the same offense",
          "Due process before deprivation of rights",
          "Eminent domain requires just compensation",
        ],
      },
    ],
    quickFacts: [
      "The Bill of Rights applies to federal and state governments",
      "Rights can be limited in certain circumstances",
      "Constitutional rights evolve through court interpretation",
    ],
  },
  criminal: {
    title: "Criminal Justice Rights",
    icon: <Gavel />,
    color: "#22c55e",
    description: "Rights that protect individuals throughout the criminal justice process.",
    sections: [
      {
        title: "Miranda Rights",
        content: "Rights that must be read before custodial interrogation.",
        keyPoints: [
          "Right to remain silent",
          "Anything said can be used in court",
          "Right to an attorney",
          "Attorney provided if you cannot afford one",
        ],
      },
      {
        title: "Right to Fair Trial",
        content: "Guarantees due process and fair treatment in court.",
        keyPoints: [
          "Right to a speedy and public trial",
          "Trial by an impartial jury",
          "Right to confront witnesses",
          "Right to compel witnesses in your favor",
        ],
      },
      {
        title: "Bail and Detention",
        content: "Rights related to pre-trial release and detention.",
        keyPoints: [
          "Excessive bail is prohibited",
          "Bail based on flight risk and danger",
          "Right to bail hearing",
          "Conditions of release vary by case",
        ],
      },
    ],
    quickFacts: [
      "Presumption of innocence until proven guilty",
      "Burden of proof is on the prosecution",
      "Right to appeal convictions",
    ],
  },
  employment: {
    title: "Employment Rights",
    icon: <Work />,
    color: "#3b82f6",
    description: "Rights that protect workers in the workplace from discrimination and unfair treatment.",
    sections: [
      {
        title: "Anti-Discrimination",
        content: "Protection against workplace discrimination.",
        keyPoints: [
          "Cannot discriminate based on race, color, religion",
          "Sex and gender identity protections",
          "Age discrimination prohibited (40+)",
          "Disability accommodations required",
        ],
      },
      {
        title: "Wage and Hour",
        content: "Rights related to compensation and working hours.",
        keyPoints: [
          "Federal minimum wage requirements",
          "Overtime pay for eligible workers",
          "Meal and rest break requirements",
          "Timely payment of wages",
        ],
      },
      {
        title: "Safe Workplace",
        content: "Rights to a safe and healthy work environment.",
        keyPoints: [
          "OSHA protections for workplace safety",
          "Right to report unsafe conditions",
          "Retaliation protection for whistleblowers",
          "Workers' compensation for injuries",
        ],
      },
    ],
    quickFacts: [
      "At-will employment has exceptions",
      "Union membership is a protected right",
      "FMLA provides unpaid leave protection",
    ],
  },
  consumer: {
    title: "Consumer Rights",
    icon: <ShoppingCart />,
    color: "#f59e0b",
    description: "Rights that protect consumers in transactions and from unfair business practices.",
    sections: [
      {
        title: "Product Safety",
        content: "Rights related to safe products and services.",
        keyPoints: [
          "Products must meet safety standards",
          "Right to accurate product information",
          "Recalls for dangerous products",
          "Liability for defective products",
        ],
      },
      {
        title: "Fair Credit",
        content: "Protections in credit and lending.",
        keyPoints: [
          "Access to your credit report",
          "Dispute inaccurate information",
          "Protection from predatory lending",
          "Clear disclosure of loan terms",
        ],
      },
      {
        title: "Privacy Rights",
        content: "Protection of personal information.",
        keyPoints: [
          "Control over personal data",
          "Right to opt out of data sales",
          "Notification of data breaches",
          "CCPA and state privacy laws",
        ],
      },
    ],
    quickFacts: [
      "FTC enforces consumer protection laws",
      "Class action lawsuits protect consumers",
      "Small claims court for minor disputes",
    ],
  },
};

interface RightsInfoPanelProps {
  topic: string | null;
  onClose: () => void;
}

export default function RightsInfoPanel({ topic, onClose }: RightsInfoPanelProps) {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [progress, setProgress] = useState(0);

  const content = topic ? topicData[topic] : null;

  useEffect(() => {
    if (topic) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 10;
        });
      }, 50);
      return () => clearInterval(timer);
    }
  }, [topic]);

  const handleAccordionChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  if (!content) return null;

  return (
    <Fade in={!!topic}>
      <Card
        sx={{
          position: 'fixed',
          left: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 450,
          maxWidth: 'calc(100vw - 40px)',
          maxHeight: '80vh',
          overflowY: 'auto',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          border: `2px solid ${content.color}30`,
          borderRadius: 4,
          boxShadow: `0 25px 80px ${content.color}20, 0 10px 40px rgba(0, 0, 0, 0.08)`,
          zIndex: 1000,
        }}
      >
        {/* Progress bar */}
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{
            height: 3,
            background: `${content.color}15`,
            '& .MuiLinearProgress-bar': {
              background: `linear-gradient(90deg, ${content.color}, ${content.color}cc)`,
            },
          }}
        />

        {/* Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: `1px solid ${content.color}20`,
            background: `linear-gradient(135deg, ${content.color}12 0%, ${content.color}05 100%)`,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Grow in timeout={300}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: `linear-gradient(135deg, ${content.color} 0%, ${content.color}cc 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 25px ${content.color}40`,
                  color: 'white',
                }}
              >
                {content.icon}
              </div>
              <div>
                <Typography variant="h5" sx={{ color: '#1f2937', fontWeight: 700 }}>
                  {content.title}
                </Typography>
                <Chip 
                  icon={<Info sx={{ fontSize: 14, color: content.color }} />}
                  label="Educational Content" 
                  size="small"
                  sx={{ 
                    mt: 0.5,
                    background: `${content.color}12`,
                    color: content.color,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    border: `1px solid ${content.color}30`,
                  }}
                />
              </div>
            </div>
          </Grow>
          <IconButton 
            onClick={onClose} 
            sx={{ 
              color: '#9ca3af',
              '&:hover': { color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' },
            }}
          >
            <Close />
          </IconButton>
        </div>

        {/* Description */}
        <div style={{ padding: '16px 24px', background: '#fafafa', borderBottom: '1px solid #f3f4f6' }}>
          <Typography variant="body2" sx={{ color: '#4b5563', lineHeight: 1.7 }}>
            {content.description}
          </Typography>
        </div>

        {/* Sections */}
        <div style={{ padding: '16px' }}>
          {content.sections.map((section, index) => (
            <Grow in timeout={300 + index * 100} key={section.title}>
              <Accordion
                expanded={expanded === section.title}
                onChange={handleAccordionChange(section.title)}
                sx={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px !important',
                  mb: 1.5,
                  boxShadow: 'none',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': {
                    border: `2px solid ${content.color}40`,
                    boxShadow: `0 4px 20px ${content.color}15`,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: content.color }} />}
                  sx={{
                    '& .MuiAccordionSummary-content': {
                      alignItems: 'center',
                      gap: 1.5,
                    },
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 8,
                      background: expanded === section.title ? content.color : `${content.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <ArrowForward sx={{ 
                      color: expanded === section.title ? 'white' : content.color, 
                      fontSize: 18,
                      transition: 'all 0.2s ease',
                    }} />
                  </div>
                  <Typography sx={{ color: '#1f2937', fontWeight: 600 }}>
                    {section.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 2 }}>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 2, pl: 6 }}>
                    {section.content}
                  </Typography>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingLeft: 48 }}>
                    {section.keyPoints.map((point, i) => (
                      <div 
                        key={i}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: 10,
                          padding: '10px 14px',
                          background: '#f9fafb',
                          borderRadius: 10,
                          border: '1px solid #f3f4f6',
                        }}
                      >
                        <CheckCircle sx={{ color: content.color, fontSize: 18, mt: 0.2, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: '#374151', lineHeight: 1.5 }}>
                          {point}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </Grow>
          ))}
        </div>

        {/* Quick Facts */}
        <div 
          style={{ 
            padding: '16px 24px',
            borderTop: '1px solid #f3f4f6',
            background: `linear-gradient(135deg, ${content.color}08 0%, white 100%)`,
          }}
        >
          <Typography variant="subtitle2" sx={{ color: content.color, mb: 1.5, fontWeight: 700 }}>
            Quick Facts
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {content.quickFacts.map((fact, i) => (
              <Chip
                key={i}
                label={fact}
                size="small"
                sx={{
                  background: 'white',
                  border: `1px solid ${content.color}30`,
                  color: '#4b5563',
                  fontSize: '0.75rem',
                  '&:hover': {
                    background: `${content.color}10`,
                  },
                }}
              />
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ padding: '14px 24px', background: '#fffbeb', borderTop: '1px solid #fef3c7' }}>
          <Typography variant="caption" sx={{ color: '#92400e', fontStyle: 'italic', display: 'block' }}>
            This information is for educational purposes only and does not constitute legal advice. 
            Consult a licensed attorney for specific legal matters.
          </Typography>
        </div>
      </Card>
    </Fade>
  );
}
