import React from 'react';

/**
 * HeroRedPanel Component
 * Zone B: Compact irregular red backdrop polygon (#FF1F1F) framing the right visual team
 */
export default function HeroRedPanel() {
  return (
    <svg
      width="520"
      height="370"
      viewBox="0 0 520 370"
      style={{
        position: 'absolute',
        top: '90px',
        left: '75px',
        zIndex: 1,
        filter: 'drop-shadow(5px 5px 0px #050505)',
        overflow: 'visible',
      }}
    >
      <polygon
        points="25,40 510,5 490,340 10,360"
        fill="#FF1F1F"
        stroke="#050505"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
