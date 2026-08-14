// Hero.jsx
// ─────────────────────────────────────────────────────────────────────────────
// HackSaathi Hero Section — Clean Single Container (.hero-visual) Architecture.
// Rendered inside <foreignObject x="200" y="115" width="1334" height="747">.
// ─────────────────────────────────────────────────────────────────────────────
import React, { useState } from 'react';
import HeroBadge from './HeroBadge';
import HeroHeadline from './HeroHeadline';
import HeroDescription from './HeroDescription';
import HeroActions from './HeroActions';
import CommunityAvatars from './CommunityAvatars';
import HeroVisual from './HeroVisual';

/**
 * Main Hero component
 */
export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  const handleWatchDemo = () => {
    setDemoOpen(true);
    setTimeout(() => setDemoOpen(false), 3000);
  };

  return (
    <g id="hero">
      {/* Demo notification stub */}
      {demoOpen && (
        <foreignObject x="580" y="340" width="360" height="80">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              background: '#050505',
              color: '#FFFFFF',
              border: '3px solid #FF1F1F',
              borderRadius: '8px',
              padding: '16px 24px',
              fontFamily: "'Barlow Condensed', Arial, sans-serif",
              fontSize: '18px',
              fontWeight: '800',
              textAlign: 'center',
              letterSpacing: '0.06em',
            }}
          >
            Demo video coming soon!
          </div>
        </foreignObject>
      )}

      {/*
        foreignObject placement:
          x=200, y=115  — just inside the hero panel inset
          width=1334, height=747 — fills the content area
      */}
      <foreignObject x="200" y="115" width="1334" height="747">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'space-between',
            paddingLeft: '50px',
            paddingTop: '45px',
            paddingRight: '20px',
            paddingBottom: '20px',
            boxSizing: 'border-box',
            background: 'transparent',
            overflow: 'visible',
          }}
        >
          {/* Font + responsive CSS */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

            .hs-hero-headline {
              font-family: 'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif;
              font-size: 76px;
              font-weight: 900;
              letter-spacing: -0.02em;
              line-height: 0.92;
              text-transform: uppercase;
              display: block;
              user-select: none;
            }
            .hs-hero-desc {
              font-family: 'Barlow Condensed', 'Courier New', Courier, monospace;
              font-size: 18px;
              font-weight: 600;
              color: #050505;
              line-height: 1.45;
              max-width: 500px;
              margin-bottom: 22px;
              letter-spacing: 0.01em;
              text-align: left !important;
            }
            .hs-hero-actions {
              display: flex;
              align-items: center;
              gap: 22px;
              margin-bottom: 24px;
              flex-wrap: wrap;
            }
            @media (max-width: 1100px) {
              .hs-hero-headline { font-size: 58px !important; }
            }
            @media (max-width: 860px) {
              .hs-hero-headline { font-size: 44px !important; }
              .hs-hero-desc     { font-size: 16px !important; }
            }
            @media (max-width: 600px) {
              .hs-hero-headline  { font-size: 36px !important; }
              .hs-hero-actions   { flex-direction: column !important; align-items: flex-start !important; }
            }
          `}</style>

          {/* ═══════════════════════════════════════════════
              LEFT HERO COLUMN (BOUNDED & CLEAR BREATHING GAP)
          ═══════════════════════════════════════════════ */}
          <div
            style={{
              width: '510px',
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            {/* 1. TOP LABEL */}
            <HeroBadge />

            {/* 2. MAIN HEADLINE */}
            <HeroHeadline />

            {/* 3. DESCRIPTION */}
            <HeroDescription />

            {/* 4. CTA BUTTONS */}
            <HeroActions onWatchDemo={handleWatchDemo} />

            {/* 5-8. ACTIVE COMMUNITY */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
                  fontSize: '16px',
                  fontWeight: '800',
                  color: '#050505',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                ACTIVE COMMUNITY
              </span>
              <CommunityAvatars />
            </div>
          </div>

          {/* ═══════════════════════════════════════════════
              RIGHT HERO COLUMN (SINGLE MASTER .hero-visual CONTAINER)
          ═══════════════════════════════════════════════ */}
          <div
            style={{
              flex: 1,
              height: '100%',
              position: 'relative',
              overflow: 'visible',
              marginLeft: '30px',
            }}
          >
            <HeroVisual />
          </div>
        </div>
      </foreignObject>
    </g>
  );
}


