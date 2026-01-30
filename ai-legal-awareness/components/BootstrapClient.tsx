"use client";

/**
 * ============================================
 * BOOTSTRAP CLIENT COMPONENT
 * ============================================
 * 
 * This component loads Bootstrap's JavaScript bundle on the client side.
 * Required for Bootstrap's interactive components like:
 * - Navbar toggler (mobile menu)
 * - Accordion collapse functionality
 * - Tooltips and popovers
 * - Modal dialogs (Bootstrap version)
 * 
 * FRAMEWORK: Bootstrap 5
 */

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import Bootstrap JS bundle
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
