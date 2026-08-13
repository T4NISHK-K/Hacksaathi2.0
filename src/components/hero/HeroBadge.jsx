import React from 'react';

/**
 * HeroBadge Component
 * Top brutalist label: "YOUR PERFECT HACKATHON TEAM AWAITS"
 */
export default function HeroBadge() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: '#F5F0E8',
        border: '3.5px solid #050505',
        borderRadius: '7px',
        boxShadow: '4px 4px 0 #050505',
        padding: '7px 14px 7px 12px',
        marginBottom: '18px',
        flexShrink: 0,
        alignSelf: 'flex-start',
      }}
    >
      <span
        style={{
          color: '#FF1F1F',
          fontSize: '18px',
          fontWeight: '900',
          lineHeight: 1,
          fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
          flexShrink: 0,
        }}
      >
        &#10033;
      </span>
      <span
        style={{
          color: '#FF1F1F',
          fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
          fontSize: '15px',
          fontWeight: '800',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        YOUR PERFECT HACKATHON TEAM AWAITS
      </span>
    </div>
  );
}
