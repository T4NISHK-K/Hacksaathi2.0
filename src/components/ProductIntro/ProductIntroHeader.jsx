import React from 'react';

/**
 * ProductIntroHeader Component
 * Left column of Product Intro section:
 * Label, Main Heading, Description, and Product Statement Card.
 */
export default function ProductIntroHeader() {
  return (
    <div className="product-intro-left">
      {/* 1. Brutalist Section Label */}
      <div className="product-section-label">
        <span className="asterisk">✱</span>
        <span>01 / WHAT THE PRODUCT IS</span>
      </div>

      {/* 2. Dominant Main Heading */}
      <h2 className="product-heading">
        <span className="line-black">WHAT</span>
        <span className="line-black">IS</span>
        <span className="line-red">HACKSAATHI?</span>
      </h2>

      {/* 3. Left Description */}
      <p className="product-desc">
        HackSaathi is a collaborative platform that helps students and builders
        find the right teammates, discover opportunities, and turn ideas into real projects.
      </p>

      {/* 4. Product Statement Card */}
      <div className="product-statement-card">
        <span className="statement-line black">ONE PLACE.</span>
        <span className="statement-line red">RIGHT PEOPLE.</span>
        <span className="statement-line black">REAL PROJECTS.</span>
      </div>
    </div>
  );
}
