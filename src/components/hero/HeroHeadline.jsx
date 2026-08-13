import React from 'react';

/**
 * HeroHeadline Component
 * Main headline display: "FIND. CONNECT. BUILD. WIN TOGETHER."
 */
export default function HeroHeadline() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: '16px',
      }}
    >
      {['FIND.', 'CONNECT.', 'BUILD.'].map((word) => (
        <span
          key={word}
          className="hs-hero-headline"
          style={{ color: '#050505' }}
        >
          {word}
        </span>
      ))}
      <span
        className="hs-hero-headline"
        style={{ color: '#FF1F1F' }}
      >
        WIN TOGETHER.
      </span>
    </div>
  );
}
