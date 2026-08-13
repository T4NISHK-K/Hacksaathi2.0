import React from 'react';

/**
 * HeroCodeSticker Component
 * Zone E: Yellow Code Sticker Card (</>)
 */
export default function HeroCodeSticker() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '200px',
        right: '0px',
        width: '74px',
        height: '74px',
        background: '#FFC928',
        border: '3.5px solid #050505',
        borderRadius: '10px',
        boxShadow: '4px 4px 0 #050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(5deg)',
        zIndex: 10,
      }}
    >
      <span
        style={{
          fontFamily: "'Barlow Condensed', 'Courier New', monospace",
          fontSize: '28px',
          fontWeight: '900',
          color: '#050505',
          lineHeight: 1,
        }}
      >
        &lt;/&gt;
      </span>
    </div>
  );
}
