"use client";

/**
 * ============================================
 * PROGRESS SECTION - STUNNING LEARNING TRACKER
 * ============================================
 * BOOTSTRAP 5: Container, row, col, progress bars
 * MATERIAL UI: Tabs, Stepper, Timeline, LinearProgress
 * CUSTOM: Glassmorphism, gradient effects, animations
 * ============================================
 */

import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import BalanceIcon from "@mui/icons-material/Balance";
import ArticleIcon from "@mui/icons-material/Article";
import PendingIcon from "@mui/icons-material/Pending";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return <div role="tabpanel" hidden={value !== index}>{value === index && <div className="py-4">{children}</div>}</div>;
}

const learningSteps = [
  { label: "Introduction to Legal Basics", description: "Understanding fundamental legal concepts and terminology." },
  { label: "Constitutional Rights", description: "Learn about your constitutional protections and freedoms." },
  { label: "Employment Law", description: "Understand your rights in the workplace." },
  { label: "Consumer Protection", description: "Know your rights as a consumer." },
  { label: "Civil Procedures", description: "Learn how to navigate the civil court system." },
];

const progressData = [
  { topic: "Constitutional Rights", progress: 85, color: "#10b981" },
  { topic: "Employment Law", progress: 60, color: "#6366f1" },
  { topic: "Consumer Rights", progress: 40, color: "#8b5cf6" },
  { topic: "Criminal Justice", progress: 25, color: "#ec4899" },
  { topic: "Family Law", progress: 10, color: "#f59e0b" },
];

const timelineSteps = [
  { step: 1, title: "Filing Complaint", desc: "Submit your initial complaint", icon: <ArticleIcon />, color: "#6366f1" },
  { step: 2, title: "Service of Process", desc: "Defendant is officially notified", icon: <PendingIcon />, color: "#8b5cf6" },
  { step: 3, title: "Discovery Phase", desc: "Both parties exchange evidence", icon: <GavelIcon />, color: "#ec4899" },
  { step: 4, title: "Trial", desc: "Case presented before the court", icon: <BalanceIcon />, color: "#f59e0b" },
  { step: 5, title: "Judgment", desc: "Court issues final decision", icon: <VerifiedIcon />, color: "#10b981" },
];

function AnimatedProgressBar({ progress, color, delay }: { progress: number; color: string; delay: number }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(progress), delay);
    return () => clearTimeout(timer);
  }, [progress, delay]);

  return (
    <div className="position-relative rounded-pill overflow-hidden" style={{ height: "10px", background: "rgba(255, 255, 255, 0.05)" }}>
      <div
        className="h-100 rounded-pill"
        style={{
          width: `${animatedProgress}%`,
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          boxShadow: `0 0 20px ${color}40`,
          transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </div>
  );
}

export default function ProgressSection() {
  const [tabValue, setTabValue] = useState(0);
  const [activeStep, setActiveStep] = useState(2);
  const [visible, setVisible] = useState(false);
  const [animatedOverall, setAnimatedOverall] = useState(0);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => setAnimatedOverall(44), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="progress" className="py-5 position-relative" style={{ background: "linear-gradient(180deg, rgba(10, 10, 26, 0) 0%, rgba(99, 102, 241, 0.03) 50%, rgba(10, 10, 26, 0) 100%)" }}>
      {/* Background orbs */}
      <div className="position-absolute" style={{ width: "400px", height: "400px", background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)", bottom: "10%", left: "-5%", filter: "blur(80px)" }} />

      {/* BOOTSTRAP: Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <Fade in={visible} timeout={800}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <span className="gradient-text">Learning Progress</span>
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.6)" }}>Track your journey and understand legal procedures</p>
          </div>
        </Fade>

        {/* MATERIAL UI: Tabs */}
        <Grow in={visible} timeout={600}>
          <div className="mb-4">
            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              centered
              sx={{
                "& .MuiTabs-indicator": { background: "linear-gradient(90deg, #6366f1, #8b5cf6)", height: "3px", borderRadius: "2px" },
                "& .MuiTab-root": { color: "rgba(255, 255, 255, 0.5)", textTransform: "none", fontWeight: 500, "&.Mui-selected": { color: "#a5b4fc" } },
              }}
            >
              <Tab icon={<SchoolIcon />} label="Knowledge" />
              <Tab icon={<GavelIcon />} label="Learning Path" />
              <Tab icon={<BalanceIcon />} label="Legal Process" />
            </Tabs>
          </div>
        </Grow>

        {/* Tab 1: Knowledge Progress */}
        <TabPanel value={tabValue} index={0}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Progress card */}
              <div className="glass-card rounded-4 p-4 mb-4">
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div className="rounded-3 p-3" style={{ background: "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1))" }}>
                    <TrendingUpIcon sx={{ color: "#10b981" }} />
                  </div>
                  <div>
                    <h5 className="fw-semibold mb-0 text-white">Great Progress!</h5>
                    <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px" }}>You've completed 44% of the curriculum</p>
                  </div>
                </div>

                {/* Overall progress */}
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px" }}>Overall Progress</span>
                    <span className="gradient-text fw-semibold">{animatedOverall}%</span>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={animatedOverall}
                    sx={{
                      height: 12,
                      borderRadius: 6,
                      background: "rgba(255, 255, 255, 0.05)",
                      "& .MuiLinearProgress-bar": { background: "linear-gradient(90deg, #6366f1, #8b5cf6)", borderRadius: 6 },
                    }}
                  />
                </div>

                {/* Topic progress */}
                {progressData.map((item, index) => (
                  <Grow key={item.topic} in={tabValue === 0} timeout={500 + index * 100}>
                    <div className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px" }}>{item.topic}</span>
                        <Chip
                          label={`${item.progress}%`}
                          size="small"
                          sx={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40`, fontSize: "12px" }}
                        />
                      </div>
                      <AnimatedProgressBar progress={item.progress} color={item.color} delay={300 + index * 150} />
                    </div>
                  </Grow>
                ))}
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Tab 2: Learning Path */}
        <TabPanel value={tabValue} index={1}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="glass-card rounded-4 p-4">
                <h5 className="fw-semibold mb-4 text-white">Your Learning Journey</h5>
                
                {/* MATERIAL UI: Stepper */}
                <Stepper
                  activeStep={activeStep}
                  orientation="vertical"
                  sx={{
                    "& .MuiStepConnector-line": { borderColor: "rgba(255, 255, 255, 0.1)", borderLeftWidth: 2 },
                    "& .MuiStepIcon-root": { color: "rgba(255, 255, 255, 0.2)", "&.Mui-active": { color: "#6366f1" }, "&.Mui-completed": { color: "#10b981" } },
                  }}
                >
                  {learningSteps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel sx={{ "& .MuiStepLabel-label": { color: index <= activeStep ? "white" : "rgba(255, 255, 255, 0.5)" } }}>{step.label}</StepLabel>
                      <StepContent>
                        <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", marginBottom: "16px" }}>{step.description}</p>
                        <div className="d-flex gap-2">
                          <Button
                            size="small"
                            onClick={() => setActiveStep(index + 1)}
                            sx={{
                              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                              color: "white",
                              textTransform: "none",
                              borderRadius: "10px",
                              "&:hover": { transform: "translateY(-2px)" },
                            }}
                          >
                            {index === learningSteps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          {index > 0 && (
                            <Button size="small" onClick={() => setActiveStep(index - 1)} sx={{ color: "rgba(255, 255, 255, 0.6)", textTransform: "none" }}>
                              Back
                            </Button>
                          )}
                        </div>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* Tab 3: Legal Process Timeline */}
        <TabPanel value={tabValue} index={2}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="glass-card rounded-4 p-4">
                <h5 className="fw-semibold mb-4 text-center text-white">Civil Court Process Timeline</h5>

                {/* MATERIAL UI: Timeline */}
                <Timeline position="alternate">
                  {timelineSteps.map((item, index) => (
                    <Grow key={item.step} in={tabValue === 2} timeout={500 + index * 150}>
                      <TimelineItem>
                        <TimelineOppositeContent sx={{ m: "auto 0", color: "rgba(255, 255, 255, 0.5)" }}>Step {item.step}</TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineConnector sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }} />
                          <TimelineDot sx={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)`, boxShadow: `0 0 20px ${item.color}40` }}>{item.icon}</TimelineDot>
                          <TimelineConnector sx={{ bgcolor: "rgba(255, 255, 255, 0.1)" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: 2, px: 2 }}>
                          <div className="p-3 rounded-3" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                            <h6 className="fw-semibold mb-1" style={{ color: item.color }}>{item.title}</h6>
                            <p className="mb-0" style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px" }}>{item.desc}</p>
                          </div>
                        </TimelineContent>
                      </TimelineItem>
                    </Grow>
                  ))}
                </Timeline>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </section>
  );
}
