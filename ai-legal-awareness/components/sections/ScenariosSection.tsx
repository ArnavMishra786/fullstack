"use client";

/**
 * ============================================
 * LEGAL SCENARIOS - STUNNING CARD GRID
 * ============================================
 * BOOTSTRAP 5: Container, row, col responsive grid
 * MATERIAL UI: Card, Dialog, Chip, Backdrop
 * CUSTOM: Glassmorphism cards, gradient borders, animations
 * ============================================
 */

import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import Zoom from "@mui/material/Zoom";
import Slide from "@mui/material/Slide";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TransitionProps } from "@mui/material/transitions";

const SlideTransition = React.forwardRef(function Transition(props: TransitionProps & { children: React.ReactElement }, ref: React.Ref<unknown>) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Scenario {
  id: number;
  title: string;
  category: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  details: string;
  keyPoints: string[];
  relatedLaws: string[];
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Wrongful Termination",
    category: "Employment",
    icon: <WorkIcon sx={{ fontSize: 32 }} />,
    color: "#6366f1",
    description: "Understanding your rights when facing unfair dismissal from work.",
    details: "Wrongful termination occurs when an employer fires an employee in violation of legal protections.",
    keyPoints: ["Document all communications", "Review employment contract", "File within statute of limitations", "Seek legal counsel"],
    relatedLaws: ["Title VII", "ADEA", "ADA", "State Employment Laws"],
  },
  {
    id: 2,
    title: "Tenant Rights",
    category: "Housing",
    icon: <HomeIcon sx={{ fontSize: 32 }} />,
    color: "#8b5cf6",
    description: "Know your rights regarding repairs, deposits, and eviction.",
    details: "Tenants have specific rights under landlord-tenant law, including habitable housing and privacy.",
    keyPoints: ["Right to habitable premises", "Security deposit requirements", "Proper notice for entry", "Illegal eviction protection"],
    relatedLaws: ["Fair Housing Act", "State Tenant Protection", "Local Ordinances"],
  },
  {
    id: 3,
    title: "Traffic Accident Claims",
    category: "Personal Injury",
    icon: <DirectionsCarIcon sx={{ fontSize: 32 }} />,
    color: "#ec4899",
    description: "Steps after an accident and filing insurance claims.",
    details: "Understanding your rights and the claims process is crucial for fair compensation.",
    keyPoints: ["Document the scene", "Exchange information", "Report to insurance", "Seek medical attention"],
    relatedLaws: ["State Traffic Laws", "Insurance Regulations", "Personal Injury Statutes"],
  },
  {
    id: 4,
    title: "Consumer Protection",
    category: "Consumer Rights",
    icon: <ShoppingCartIcon sx={{ fontSize: 32 }} />,
    color: "#10b981",
    description: "Rights with defective products or unfair practices.",
    details: "Consumer protection laws safeguard buyers from fraudulent practices and dangerous products.",
    keyPoints: ["Refund for defective products", "False advertising protection", "Warranty rights", "Filing complaints"],
    relatedLaws: ["FTC Act", "Consumer Product Safety Act", "State Laws"],
  },
  {
    id: 5,
    title: "Family Law Basics",
    category: "Family",
    icon: <FamilyRestroomIcon sx={{ fontSize: 32 }} />,
    color: "#f59e0b",
    description: "Understanding divorce, custody, and family matters.",
    details: "Family law covers marriage, divorce, child custody, support, and adoption proceedings.",
    keyPoints: ["Custody types explained", "Support calculation", "Property division", "Mediation vs litigation"],
    relatedLaws: ["State Family Code", "Child Support Guidelines", "Domestic Relations"],
  },
  {
    id: 6,
    title: "Small Claims Court",
    category: "Civil",
    icon: <AccountBalanceIcon sx={{ fontSize: 32 }} />,
    color: "#0ea5e9",
    description: "Filing and presenting your case in small claims.",
    details: "Small claims court provides a simplified process for minor civil disputes.",
    keyPoints: ["Monetary limits", "Filing procedures", "Preparing evidence", "What to expect"],
    relatedLaws: ["State Small Claims Procedures", "Civil Court Rules"],
  },
];

export default function ScenariosSection() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleCardClick = (scenario: Scenario) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedScenario(scenario);
      setLoading(false);
      setDialogOpen(true);
    }, 600);
  };

  return (
    <section id="scenarios" className="py-5 position-relative">
      {/* Background elements */}
      <div className="position-absolute" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)", top: "10%", right: "-10%", filter: "blur(80px)" }} />

      {/* BOOTSTRAP: Container */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* Header */}
        <Fade in={visible} timeout={800}>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <span className="gradient-text">Legal Scenario Explorer</span>
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", maxWidth: "600px", margin: "0 auto" }}>
              Click on any scenario to learn more about your rights and options
            </p>
          </div>
        </Fade>

        {/* BOOTSTRAP: Responsive grid */}
        <div className="row g-4">
          {scenarios.map((scenario, index) => (
            <div key={scenario.id} className="col-lg-4 col-md-6">
              <Grow in={visible} timeout={600 + index * 100}>
                <div
                  className="h-100 rounded-4 p-4 position-relative overflow-hidden cursor-pointer"
                  style={{
                    background: hoveredCard === scenario.id ? "linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)" : "rgba(255, 255, 255, 0.02)",
                    border: hoveredCard === scenario.id ? `1px solid ${scenario.color}50` : "1px solid rgba(255, 255, 255, 0.05)",
                    boxShadow: hoveredCard === scenario.id ? `0 20px 50px ${scenario.color}20` : "none",
                    transform: hoveredCard === scenario.id ? "translateY(-8px)" : "translateY(0)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(scenario)}
                  onMouseEnter={() => setHoveredCard(scenario.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient top border */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, transparent, ${scenario.color}, transparent)`,
                      opacity: hoveredCard === scenario.id ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  />

                  <div className="text-center">
                    {/* Icon */}
                    <div
                      className="mx-auto mb-3 rounded-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "64px",
                        height: "64px",
                        background: `linear-gradient(135deg, ${scenario.color}25, ${scenario.color}10)`,
                        color: scenario.color,
                        transform: hoveredCard === scenario.id ? "scale(1.1) rotate(5deg)" : "scale(1)",
                        transition: "all 0.4s ease",
                      }}
                    >
                      {scenario.icon}
                    </div>

                    {/* Category chip */}
                    <Chip
                      label={scenario.category}
                      size="small"
                      sx={{
                        mb: 2,
                        background: `${scenario.color}20`,
                        border: `1px solid ${scenario.color}40`,
                        color: scenario.color,
                        fontSize: "12px",
                      }}
                    />

                    {/* Title */}
                    <h3 className="fw-semibold mb-2 text-white" style={{ fontSize: "18px" }}>{scenario.title}</h3>

                    {/* Description */}
                    <p className="mb-3" style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "14px", lineHeight: 1.6 }}>{scenario.description}</p>

                    {/* CTA */}
                    <div
                      className="d-flex align-items-center justify-content-center gap-1"
                      style={{
                        color: scenario.color,
                        fontSize: "14px",
                        fontWeight: 500,
                        opacity: hoveredCard === scenario.id ? 1 : 0.7,
                        transition: "all 0.3s ease",
                      }}
                    >
                      Learn More <ArrowForwardIcon sx={{ fontSize: 16, transition: "transform 0.3s ease", transform: hoveredCard === scenario.id ? "translateX(4px)" : "translateX(0)" }} />
                    </div>
                  </div>
                </div>
              </Grow>
            </div>
          ))}
        </div>

        {/* MATERIAL UI: Backdrop loader */}
        <Backdrop sx={{ color: "#fff", zIndex: 9999, backdropFilter: "blur(10px)", background: "rgba(10, 10, 26, 0.8)" }} open={loading}>
          <div className="text-center">
            <CircularProgress sx={{ color: "#6366f1" }} size={50} />
            <p className="mt-3" style={{ color: "rgba(255, 255, 255, 0.7)" }}>Loading scenario...</p>
          </div>
        </Backdrop>

        {/* MATERIAL UI: Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="md"
          fullWidth
          TransitionComponent={SlideTransition}
          PaperProps={{
            sx: {
              background: "linear-gradient(135deg, rgba(30, 30, 50, 0.98) 0%, rgba(20, 20, 40, 0.98) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              backdropFilter: "blur(20px)",
            },
          }}
        >
          {selectedScenario && (
            <>
              <DialogTitle sx={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)", pb: 2 }}>
                <div className="d-flex align-items-center gap-3">
                  <div
                    className="rounded-3 p-2 d-flex align-items-center justify-content-center"
                    style={{ background: `linear-gradient(135deg, ${selectedScenario.color}30, ${selectedScenario.color}10)`, color: selectedScenario.color }}
                  >
                    {selectedScenario.icon}
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1 text-white">{selectedScenario.title}</h4>
                    <Chip label={selectedScenario.category} size="small" sx={{ background: `${selectedScenario.color}20`, color: selectedScenario.color, border: `1px solid ${selectedScenario.color}40` }} />
                  </div>
                </div>
              </DialogTitle>

              <DialogContent sx={{ py: 3 }}>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", marginBottom: "24px" }}>{selectedScenario.details}</p>

                <h5 className="fw-semibold mb-3 text-white">Key Points:</h5>
                <div className="row g-2 mb-4">
                  {selectedScenario.keyPoints.map((point, i) => (
                    <div key={i} className="col-md-6">
                      <div className="d-flex align-items-center gap-2 p-2 rounded-2" style={{ background: "rgba(255, 255, 255, 0.03)" }}>
                        <CheckCircleIcon sx={{ color: selectedScenario.color, fontSize: 18 }} />
                        <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px" }}>{point}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <h5 className="fw-semibold mb-3 text-white">Related Laws:</h5>
                <div className="d-flex flex-wrap gap-2">
                  {selectedScenario.relatedLaws.map((law, i) => (
                    <Chip key={i} label={law} size="small" sx={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "rgba(255, 255, 255, 0.7)" }} />
                  ))}
                </div>
              </DialogContent>

              <DialogActions sx={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)", p: 2 }}>
                <Button onClick={() => setDialogOpen(false)} sx={{ color: "rgba(255, 255, 255, 0.6)" }}>Close</Button>
                <Button
                  variant="contained"
                  sx={{
                    background: `linear-gradient(135deg, ${selectedScenario.color}, ${selectedScenario.color}cc)`,
                    borderRadius: "12px",
                    textTransform: "none",
                    px: 3,
                    boxShadow: `0 4px 20px ${selectedScenario.color}40`,
                    "&:hover": { transform: "translateY(-2px)", boxShadow: `0 8px 30px ${selectedScenario.color}50` },
                  }}
                >
                  Ask AI About This
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </div>
    </section>
  );
}
