// OuterFrame.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SVG fragment that draws the structural skeleton of the website frame (1536x864):
//   • Cream base background
//   • Thick outer rounded border (neo-brutalist)
//   • Horizontal header divider line
//   • Vertical sidebar divider line (below navbar — separates left sidebar)
//   • Rounded hero panel inset overlay
// ─────────────────────────────────────────────────────────────────────────────
import React from 'react';

export default function OuterFrame() {
  return (
    <g id="outer-frame">
      {/* ── Cream base background ── */}
      <rect id="bg" width="1536" height="864" rx="36" fill="#F5F0E8" />

      {/* ── Outer border ── */}
      <rect
        id="outer-border"
        x="2" y="2" width="1532" height="860" rx="33"
        fill="none" stroke="#050505" strokeWidth="5"
      />

      {/* ── Horizontal header divider ── */}
      <line
        id="header-divider"
        x1="2" y1="110" x2="1534" y2="110"
        stroke="#050505" strokeWidth="5"
      />

      {/* ── Vertical sidebar divider (below navbar only — NOT inside navbar) ── */}
      <line
        id="sidebar-divider"
        x1="195" y1="110" x2="195" y2="862"
        stroke="#050505" strokeWidth="5"
      />

      {/* ── Main hero panel inset with 4 rounded inner corners ── */}
      <path
        id="hero-panel"
        d="M 220,110
           L 1508,110 A 26,26 0 0,1 1534,136
           L 1534,836 A 26,26 0 0,1 1508,862
           L 220,862  A 26,26 0 0,1 195,836
           L 195,136  A 26,26 0 0,1 220,110
           Z"
        fill="#F5F0E8"
        stroke="#050505"
        strokeWidth="5"
      />
    </g>
  );
}
