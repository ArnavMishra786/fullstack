"use client";

import React from "react"

/**
 * ============================================
 * MATERIAL UI THEME PROVIDER
 * ============================================
 * This component wraps the entire application with MUI's ThemeProvider
 * to enable Material UI components throughout the app.
 * 
 * FRAMEWORK: Material UI (MUI)
 * PURPOSE: Global theme configuration and MUI component support
 */

import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Custom MUI light theme for elegant 3D courtroom experience
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6366f1', // Indigo
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#8b5cf6', // Violet
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    background: {
      default: '#f5f0e8',
      paper: 'rgba(255, 255, 255, 0.98)',
    },
    text: {
      primary: '#1f2937',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: { fontWeight: 700, color: '#1f2937' },
    h2: { fontWeight: 600, color: '#1f2937' },
    h3: { fontWeight: 600, color: '#1f2937' },
    h5: { fontWeight: 600, color: '#1f2937' },
    h6: { fontWeight: 600, color: '#1f2937' },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: 16,
          border: '1px solid rgba(99, 102, 241, 0.15)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 12,
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: 'white',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
        },
      },
    },
  },
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
