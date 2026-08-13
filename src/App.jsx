// App.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Root component. Renders the exact 1536×864 (16:9) SVG canvas and composes
// the structural sub-components:
//   OuterFrame  — cream background + structural borders/dividers/hero panel
//   Navbar      — header navigation bar
//   Sidebar     — left decorative column with dot grids, D-shapes, red block
//   Hero        — hero section with headline, CTA buttons & 3D hero visuals
// ─────────────────────────────────────────────────────────────────────────────
import React from 'react';
import './styles/App.css';

import OuterFrame from './components/layout/OuterFrame';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Hero from './components/hero/Hero';

export default function App() {
  return (
    <div className="canvas-wrapper">
      <div className="frame-container">
        <svg
          viewBox="0 0 1536 864"
          className="neo-brutalist-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 1. Structural skeleton */}
          <OuterFrame />

          {/* 2. Navbar header */}
          <Navbar />

          {/* 3. Left decorative sidebar */}
          <Sidebar />

          {/* 4. Hero section */}
          <Hero />
        </svg>
      </div>
    </div>
  );
}
