import React from 'react';

// Neo-brutalist physical press handlers
const pressHandlers = {
  onMouseEnter: (e) => {
    e.currentTarget.style.transform = 'translate(2px,2px)';
    e.currentTarget.style.boxShadow = '2px 2px 0 #050505';
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.transform = 'translate(0,0)';
    e.currentTarget.style.boxShadow = '4px 4px 0 #050505';
  },
  onMouseDown: (e) => {
    e.currentTarget.style.transform = 'translate(4px,4px)';
    e.currentTarget.style.boxShadow = '0 0 0 #050505';
  },
  onMouseUp: (e) => {
    e.currentTarget.style.transform = 'translate(2px,2px)';
    e.currentTarget.style.boxShadow = '2px 2px 0 #050505';
  },
};

/**
 * HeroActions Component
 * Primary CTA ("GET STARTED - IT'S FREE") and Secondary CTA ("WATCH DEMO")
 */
export default function HeroActions({ onWatchDemo }) {
  return (
    <div
      className="hs-hero-actions"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '22px',
        marginBottom: '24px',
        flexWrap: 'wrap',
      }}
    >
      {/* Primary CTA */}
      <a
        id="hero-get-started"
        href="/get-started"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          background: '#FF1F1F',
          color: '#FFFFFF',
          border: '4px solid #050505',
          borderRadius: '8px',
          boxShadow: '4px 4px 0 #050505',
          fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
          fontSize: '16px',
          fontWeight: '800',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          height: '60px',
          padding: '0 26px',
          cursor: 'pointer',
          transition: 'transform 160ms ease-out, box-shadow 160ms ease-out',
          minWidth: '255px',
        }}
        {...pressHandlers}
      >
        GET STARTED {'\u2013'} IT{'\u2019'}S FREE
        <span style={{ fontSize: '20px', lineHeight: 1 }}>{'\u2192'}</span>
      </a>

      {/* Secondary CTA */}
      <button
        id="hero-watch-demo"
        onClick={onWatchDemo}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          background: '#F5F0E8',
          color: '#050505',
          border: '4px solid #050505',
          borderRadius: '8px',
          boxShadow: '4px 4px 0 #050505',
          fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
          fontSize: '16px',
          fontWeight: '800',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
          lineHeight: 1,
          height: '60px',
          padding: '0 22px',
          cursor: 'pointer',
          transition: 'transform 160ms ease-out, box-shadow 160ms ease-out',
          minWidth: '185px',
        }}
        {...pressHandlers}
      >
        WATCH DEMO
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: '#050505',
            flexShrink: 0,
          }}
        >
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            aria-hidden="true"
            style={{ marginLeft: '2px' }}
          >
            <polygon points="0,0 10,6 0,12" fill="#FFFFFF" />
          </svg>
        </span>
      </button>
    </div>
  );
}
