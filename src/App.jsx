import React from 'react';
import './styles/App.css';

import OuterFrame from './components/layout/OuterFrame';
import Navbar    from './components/layout/Navbar';
import Sidebar   from './components/layout/Sidebar';
import Hero      from './components/hero/Hero';

import ProductIntro  from './components/ProductIntro/ProductIntro';
import WhoItsFor     from './components/WhoItsFor/WhoItsFor';
import HowItWorks    from './components/HowItWorks/HowItWorks';
import WhatYouCanDo  from './components/WhatYouCanDo/WhatYouCanDo';
import FinalCTA      from './components/FinalCTA/FinalCTA';
import Footer        from './components/Footer/Footer';

/**
 * App — HackSaathi Landing Page
 * Soulbound-Inspired Card Panel Architecture
 *
 * The page is a continuous canvas (.canvas-wrapper) on cream #F5F0E8.
 * All sections are sibling cards inside .landing-page with a 24px gap.
 * The browser scroll controls page navigation — no nested scrolling.
 */
export default function App() {
  return (
    <div className="canvas-wrapper">
      <main className="landing-page">

        {/* ── 01: HERO — Fixed 16:9 SVG frame (untouched) ── */}
        <section className="hero-section">
          <div className="frame-container">
            <svg
              viewBox="0 0 1536 864"
              className="neo-brutalist-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <OuterFrame />
              <Navbar />
              <Sidebar />
              <Hero />
            </svg>
          </div>
        </section>

        {/* ── 02: WHAT IS HACKSAATHI? — SPLIT two-card row ── */}
        <section className="product-intro-section">
          <ProductIntro />
        </section>

        {/* ── 03: WHO IS HACKSAATHI FOR? — Alternating card rows ── */}
        <section className="page-section">
          <WhoItsFor />
        </section>

        {/* ── 04: HOW IT WORKS — Horizontal 4-card row ── */}
        <section className="page-section">
          <HowItWorks />
        </section>

        {/* ── 05: BUILD WITH HACKSAATHI — Full-width hero + split row ── */}
        <section className="page-section">
          <WhatYouCanDo />
        </section>

        {/* ── 06: FINAL CTA — Full-width conversion card ── */}
        <section className="page-section">
          <FinalCTA />
        </section>

        {/* ── 07: FOOTER — Dark card ── */}
        <section className="page-section">
          <Footer />
        </section>

      </main>
    </div>
  );
}
