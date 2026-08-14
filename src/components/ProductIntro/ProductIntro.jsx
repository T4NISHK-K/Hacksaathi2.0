import React from 'react';
import ProductIntroVisual from './ProductIntroVisual';
import './ProductIntro.css';

/**
 * ProductIntro — Soulbound Card System
 * Chapter 02: WHAT IS HACKSAATHI?
 *
 * Layout: SPLIT two-card row
 *   LEFT CARD (42%)  — text: label + heading + description + statement
 *   RIGHT CARD (56%) — visual: ProductIntroVisual composition
 */
export default function ProductIntro() {
  return (
    <div id="features" className="product-intro-section-container">
      {/* ── SOULBOUND SPLIT ROW ── */}
      <div className="product-intro-split-row">

        {/* LEFT CARD — Text content */}
        <div className="product-intro-left-card">
          {/* Section label badge */}
          <div className="product-section-label">
            <span className="asterisk">✱</span>
            <span>01 / WHAT THE PRODUCT IS</span>
          </div>

          {/* Dominant heading */}
          <h2 className="product-heading">
            <span className="line-black">WHAT</span>
            <span className="line-black">IS</span>
            <span className="line-red">HACKSAATHI?</span>
          </h2>

          {/* Description */}
          <p className="product-desc">
            HackSaathi is a collaborative platform that helps students and builders
            find the right teammates, discover opportunities, and turn ideas into
            real projects that compete and win.
          </p>

          {/* Statement card at bottom */}
          <div className="product-statement-card">
            <span className="statement-line black">ONE PLACE.</span>
            <span className="statement-line red">RIGHT PEOPLE.</span>
            <span className="statement-line black">REAL PROJECTS.</span>
          </div>
        </div>

        {/* RIGHT CARD — Product visual composition */}
        <div className="product-intro-right-card">
          <ProductIntroVisual />
        </div>

      </div>
    </div>
  );
}
