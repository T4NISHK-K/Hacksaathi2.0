import React from 'react';

/**
 * HeroTag Component
 * Zone E: Pink Hanging Tag (* Asterisk) attached to Bottom Card via black strings
 */
export default function HeroTag() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '15px',
        left: '30px',
        zIndex: 20,
      }}
    >
      {/* Attachment strings SVG */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: '-26px', left: '16px', zIndex: 21, overflow: 'visible' }}
      >
        <line x1="8" y1="0" x2="8" y2="26" stroke="#050505" strokeWidth="3" strokeLinecap="round" />
        <line x1="22" y1="0" x2="22" y2="26" stroke="#050505" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Tag Body */}
      <div
        style={{
          background: '#F06FAE',
          border: '3.5px solid #050505',
          borderRadius: '10px',
          boxShadow: '4px 4px 0 #050505',
          padding: '8px 16px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'rotate(-8deg)',
        }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
            fontSize: '30px',
            fontWeight: '900',
            color: '#050505',
            lineHeight: 0.8,
            userSelect: 'none',
          }}
        >
          &#10033;
        </span>
      </div>
    </div>
  );
}
