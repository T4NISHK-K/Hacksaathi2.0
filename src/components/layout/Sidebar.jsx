// Sidebar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// SVG fragment rendering the left decorative sidebar (1536x864):
//   • Top 4×4 black dot grid
//   • Red D-shape (upper)
//   • Black D-shape (lower)
//   • Bottom 4×4 black dot grid
//   • Red bottom corner block
// ─────────────────────────────────────────────────────────────────────────────
import React from 'react';

// Dot grid column centres (x) — 4 columns inside 195px sidebar
const DOT_COLS = [59, 85, 110, 136];
// Dot grid row centres (y)
const TOP_DOT_ROWS = [173, 197, 221, 246];
const BOT_DOT_ROWS = [563, 588, 612, 636];

export default function Sidebar() {
  return (
    <g id="sidebar">
      {/* ── Top 4×4 dot grid ── */}
      <g id="sidebar-dots-top">
        {TOP_DOT_ROWS.map((y) =>
          DOT_COLS.map((x) => (
            <circle key={`top-${x}-${y}`} cx={x} cy={y} r="4.5" fill="#050505" />
          ))
        )}
      </g>

      {/* ── Red D-shape (upper) ── */}
      <path
        id="d-shape-red"
        d="M 46,308 L 79,308 A 43.5,43.5 0 0,1 79,395 L 46,395 Z"
        fill="#FF1F1F"
      />

      {/* ── Black D-shape (lower) ── */}
      <path
        id="d-shape-black"
        d="M 46,413 L 79,413 A 43.5,43.5 0 0,1 79,500 L 46,500 Z"
        fill="#050505"
      />

      {/* ── Bottom 4×4 dot grid ── */}
      <g id="sidebar-dots-bottom">
        {BOT_DOT_ROWS.map((y) =>
          DOT_COLS.map((x) => (
            <circle key={`bot-${x}-${y}`} cx={x} cy={y} r="4.5" fill="#050505" />
          ))
        )}
      </g>

      {/* ── Red bottom corner block ── */}
      <path
        id="sidebar-red-block"
        d="M 2,698 L 2,828 A 33,33 0 0,0 36,862 L 195,862 L 195,718 A 20,20 0 0,0 175,698 Z"
        fill="#FF1F1F"
        stroke="#050505"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </g>
  );
}
