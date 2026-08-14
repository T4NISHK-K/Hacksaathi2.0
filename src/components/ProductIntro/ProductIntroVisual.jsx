import React from 'react';
import ProductMatchingCard from './ProductMatchingCard';

/**
 * ProductIntroVisual Component
 * Right-side product ecosystem visual composition.
 * Editorial collage of central card, irregular red polygon backdrop,
 * purple smart match badge, yellow sticker, pink physical tag,
 * curved hand-drawn SVG connectors, and decorative nodes.
 */
export default function ProductIntroVisual() {
  return (
    <div
      className="product-intro-visual"
      style={{
        width: '650px',
        height: '460px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}
    >
      {/* ── 1. IRREGULAR RED BACKDROP POLYGON ── */}
      <svg
        width="580"
        height="380"
        viewBox="0 0 580 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20px',
          left: '10px',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      >
        <polygon
          points="40,20 480,0 560,180 500,360 80,340 0,160"
          fill="#FF1F1F"
          stroke="#050505"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </svg>

      {/* ── 2. SVG CURVED HAND-DRAWN CONNECTOR LINES & NODES ── */}
      <svg
        width="650"
        height="460"
        viewBox="0 0 650 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        {/* Curved line launching from Top-Left "PERSON" node to Card Header */}
        <path
          d="M 60 45 C 90 20, 160 30, 210 65"
          stroke="#050505"
          strokeWidth="3"
          strokeDasharray="5 5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Red node at start */}
        <circle cx="60" cy="45" r="7" fill="#FF1F1F" stroke="#050505" strokeWidth="2.5" />
        {/* Node label */}
        <text x="35" y="25" fill="#050505" fontSize="12" fontWeight="900" fontFamily="Barlow Condensed, sans-serif" letterSpacing="0.06em">FIND</text>

        {/* Curved connector linking profile matching path */}
        <path
          d="M 450 75 C 520 60, 560 110, 530 160"
          stroke="#050505"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Purple node */}
        <circle cx="530" cy="160" r="6" fill="#7650E8" stroke="#050505" strokeWidth="2" />

        {/* Bottom connector path leading from card towards BUILD sticker */}
        <path
          d="M 380 395 C 430 420, 490 410, 535 390"
          stroke="#050505"
          strokeWidth="3"
          strokeDasharray="6 6"
          strokeLinecap="round"
          fill="none"
        />
        {/* Red node */}
        <circle cx="380" cy="395" r="6" fill="#FF1F1F" stroke="#050505" strokeWidth="2" />
      </svg>

      {/* ── 3. CENTRAL PRODUCT MATCHING CARD ── */}
      <ProductMatchingCard />

      {/* ── 4. PURPLE MATCH BADGE (Upper-Right) ── */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '25px',
          width: '110px',
          height: '110px',
          borderRadius: '50%',
          backgroundColor: '#7650E8',
          border: '4px solid #050505',
          boxShadow: '5px 5px 0 #050505',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px',
          boxSizing: 'border-box',
          textAlign: 'center',
          zIndex: 12,
          transform: 'rotate(4deg)',
          userSelect: 'none',
        }}
      >
        <svg width="22" height="18" viewBox="0 0 24 20" fill="none" style={{ marginBottom: '2px' }}>
          <path d="M12 2L15 8L21 9L16.5 13.5L18 19.5L12 16L6 19.5L7.5 13.5L3 9L9 8L12 2Z" fill="#FFFFFF" stroke="#050505" strokeWidth="2" />
        </svg>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif",
            fontSize: '14px',
            fontWeight: '900',
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          SMART<br />MATCH
        </span>
      </div>

      {/* ── 5. PINK PHYSICAL TAG (Attached to left/bottom of Central Card) ── */}
      {/* String SVG connecting tag to card */}
      <svg
        width="45"
        height="50"
        viewBox="0 0 45 50"
        fill="none"
        style={{
          position: 'absolute',
          bottom: '55px',
          left: '18px',
          zIndex: 11,
          pointerEvents: 'none',
        }}
      >
        <path d="M 38 5 C 25 15, 15 30, 8 45" stroke="#050505" strokeWidth="2.5" fill="none" />
        <circle cx="38" cy="5" r="3" fill="#050505" />
      </svg>
      {/* Pink Tag */}
      <div
        style={{
          position: 'absolute',
          bottom: '22px',
          left: '5px',
          backgroundColor: '#F06FAE',
          border: '3px solid #050505',
          boxShadow: '4px 4px 0 #050505',
          borderRadius: '6px',
          padding: '6px 14px',
          transform: 'rotate(-6deg)',
          zIndex: 12,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          userSelect: 'none',
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: '900', color: '#050505' }}>✦</span>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif",
            fontSize: '14px',
            fontWeight: '900',
            color: '#050505',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          COLLABORATE
        </span>
      </div>

      {/* ── 6. YELLOW STICKER (Lower-Right) ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '15px',
          right: '35px',
          backgroundColor: '#FFC928',
          border: '3px solid #050505',
          boxShadow: '4px 4px 0 #050505',
          borderRadius: '8px',
          padding: '8px 16px',
          transform: 'rotate(-4deg)',
          zIndex: 12,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          userSelect: 'none',
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '16px',
            fontWeight: '900',
            color: '#050505',
            lineHeight: 1,
          }}
        >
          ⚡
        </span>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif",
            fontSize: '16px',
            fontWeight: '900',
            color: '#050505',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          BUILD & COMPETE
        </span>
      </div>

      {/* ── 7. DECORATIVE ELEMENTS ── */}
      {/* Black Diamond */}
      <div
        style={{
          position: 'absolute',
          top: '38px',
          left: '180px',
          width: '12px',
          height: '12px',
          backgroundColor: '#050505',
          transform: 'rotate(45deg)',
          zIndex: 8,
        }}
      />
      {/* Black Asterisk */}
      <div
        style={{
          position: 'absolute',
          bottom: '95px',
          right: '12px',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: '22px',
          fontWeight: '900',
          color: '#050505',
          zIndex: 8,
          userSelect: 'none',
        }}
      >
        ✱
      </div>
      {/* Small Red Dot */}
      <div
        style={{
          position: 'absolute',
          top: '140px',
          left: '25px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#FF1F1F',
          border: '1.5px solid #050505',
          zIndex: 8,
        }}
      />
    </div>
  );
}
