
import React from 'react';
import HeroRedPanel from './HeroRedPanel';
import HeroCharacters from './HeroCharacters';
import HeroSmartMatchingCard from './HeroSmartMatchingCard';
import HeroCodeSticker from './HeroCodeSticker';
import HeroBottomCard from './HeroBottomCard';
import HeroTag from './HeroTag';

/**
 * HeroVisual Component
 * Master Right Hero Visual (.hero-visual)
 * Controlled entirely inside a single 650px × 620px relative container
 */
export default function HeroVisual() {
  return (
    <div
      className="hero-visual"
      style={{
        width: '650px',
        height: '620px',
        position: 'relative',
        margin: '0 auto',
        overflow: 'visible',
      }}
    >
      {/* ── ZONE B: Compact Red Graphic Backdrop ── */}
      <HeroRedPanel />

      {/* ── ZONE A: Dashed Arch Arrow (Matches Reference Image) ── */}
      <svg
        width="220"
        height="100"
        viewBox="0 0 220 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30px',
          left: '170px',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        {/* Dashed curve launching up from beside purple badge and leveling out rightward */}
        <path
          d="M 18 120 C 12 55, 75 18, 185 28"
          stroke="#050505"
          strokeWidth="2.2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Solid arrowhead pointing right */}
        <polygon
          points="202,30 184,20 186,38"
          fill="#050505"
        />
      </svg>

      {/* ── ZONE A: Purple "FIND THE RIGHT PEOPLE" Badge (Top Left) ── */}
      <div
        style={{
          position: 'absolute',
          top: '25px',
          left: '50px',
          width: '115px',
          height: '115px',
          borderRadius: '50%',
          background: '#7650E8',
          border: '4px solid #050505',
          boxShadow: '5px 5px 0 #050505',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px',
          boxSizing: 'border-box',
          textAlign: 'center',
          zIndex: 12,
          transform: 'rotate(-4deg)',
        }}
      >
        <svg width="22" height="18" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '2px' }}>
          <circle cx="12" cy="6" r="4" fill="#FFFFFF" stroke="#050505" strokeWidth="2" />
          <path d="M4 18C4 14.5 7.5 13 12 13C16.5 13 20 14.5 20 18" stroke="#050505" strokeWidth="2.5" fill="none" />
          <circle cx="4" cy="8" r="3" fill="#FFFFFF" stroke="#050505" strokeWidth="1.5" />
          <circle cx="20" cy="8" r="3" fill="#FFFFFF" stroke="#050505" strokeWidth="1.5" />
        </svg>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
            fontSize: '13px',
            fontWeight: '900',
            color: '#050505',
            lineHeight: 1.05,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          FIND<br />THE RIGHT<br />PEOPLE
        </span>
      </div>

      {/* ── ZONE C: Unified Three-Person Team Group + Desk & Props ── */}
      <HeroCharacters />

      {/* ── ZONE A: Smart Matching Card (Top Right) ── */}
      <HeroSmartMatchingCard />

      {/* ── ZONE E: Yellow Code Sticker Card (</>) ── */}
      <HeroCodeSticker />

      {/* Small Black Diamond Decorative Element */}
      <div
        style={{
          position: 'absolute',
          top: '315px',
          left: '35px',
          width: '16px',
          height: '16px',
          background: '#050505',
          transform: 'rotate(45deg)',
          zIndex: 6,
        }}
      />

      {/* ── ZONE D: Bottom Information Card ("BUILD AMAZING THINGS TOGETHER") ── */}
      <HeroBottomCard />

      {/* ── ZONE E: Pink Hanging Tag (* Asterisk) attached to Bottom Card ── */}
      <HeroTag />
    </div>
  );
}
