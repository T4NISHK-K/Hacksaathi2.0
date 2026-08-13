// Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Full-width HackSaathi navbar — one continuous horizontal bar.
//
// Layout:  [ HackSaathi ◈ ]──────[ HOME  FEATURES … ]──────[ LOG IN  GET STARTED→ ]
// ─────────────────────────────────────────────────────────────────────────────
import React, { useState, useEffect, useRef } from 'react';
import { NAV_LINKS } from '../../constants/navigation';

// ── useActiveHash — tracks window.location.hash as source of truth ────────────
function useActiveHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate',   sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate',   sync);
    };
  }, []);

  const isActive = (href) => {
    if (href === '/') return hash === '';
    return hash === href;
  };

  return isActive;
}

// ── Cube icon ─────────────────────────────────────────────────────────────────
function CubeIcon({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, display: 'block' }}
    >
      {/* Top face */}
      <polygon
        points="18,2 33,10 18,18 3,10"
        fill="#FF1F1F"
        stroke="#050505"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Left face */}
      <polygon
        points="3,10 18,18 18,34 3,26"
        fill="#050505"
        stroke="#050505"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Right face */}
      <polygon
        points="18,18 33,10 33,26 18,34"
        fill="#c41818"
        stroke="#050505"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Hamburger icon ────────────────────────────────────────────────────────────
function HamburgerIcon({ open }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="19" y1="5" x2="5" y2="19" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="4" y1="7"  x2="20" y2="7"  stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="4" y1="17" x2="20" y2="17" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

// ── Physical press handlers (neo-brutalist) ───────────────────────────────────
const press = {
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

// ── Shared button style ───────────────────────────────────────────────────────
const btn = (bg, color, extra = {}) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: bg,
  color,
  border: '4px solid #050505',
  borderRadius: '8px',
  boxShadow: '4px 4px 0 #050505',
  fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
  fontSize: '16px',
  fontWeight: '800',
  letterSpacing: '0.08em',
  textDecoration: 'none',
  textTransform: 'uppercase',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  lineHeight: 1,
  transition: 'transform 160ms ease-out, box-shadow 160ms ease-out',
  ...extra,
});

// ── Main component ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);
  const isActive = useActiveHash();

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [menuOpen]);

  return (
    <g id="navbar">
      <foreignObject x="2" y="2" width="1532" height="108">
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          ref={rootRef}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            background: 'transparent',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* ── Font + responsive CSS ── */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&display=swap');

            /* Nav links */
            .hs-link {
              display: inline-flex;
              align-items: center;
              color: #050505;
              font-family: 'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif;
              font-size: 16px;
              font-weight: 800;
              letter-spacing: 0.08em;
              text-decoration: none;
              text-transform: uppercase;
              white-space: nowrap;
              line-height: 1;
              cursor: pointer;
              transition: color 120ms ease;
            }
            .hs-link:hover { color: #FF1F1F; }

            /* Focus rings */
            .hs-link:focus-visible,
            .hs-act:focus-visible {
              outline: 3px solid #FF1F1F;
              outline-offset: 3px;
              border-radius: 6px;
            }

            /* Responsive: show hamburger, hide desktop groups */
            .hs-nav-group   { display: flex !important; }
            .hs-act-group   { display: flex !important; }
            .hs-hamburger   { display: none !important; }

            @media (max-width: 760px) {
              .hs-nav-group { display: none !important; }
              .hs-act-group { display: none !important; }
              .hs-hamburger { display: inline-flex !important; }
            }
          `}</style>

          {/* BRAND — left-anchored */}
          <a
            href="/"
            aria-label="HackSaathi — go to homepage"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '11px',
              textDecoration: 'none',
              flexShrink: 0,
              marginLeft: '44px',
            }}
          >
            {/* Wordmark */}
            <span
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
                fontSize: '36px',
                fontWeight: '900',
                letterSpacing: '-0.5px',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              <span style={{ color: '#050505' }}>Hack</span>
              <span style={{ color: '#FF1F1F' }}>Saathi</span>
            </span>

            {/* Cube icon */}
            <CubeIcon size={36} />
          </a>

          {/* SPACER */}
          <div style={{ width: '60px', flexShrink: 0 }} />

          {/* NAVIGATION LINKS */}
          <nav
            aria-label="Main navigation"
            className="hs-nav-group"
            style={{ gap: '30px', alignItems: 'center' }}
          >
            {NAV_LINKS.map((link) =>
              isActive(link.href) ? (
                <a
                  key={link.label}
                  href={link.href}
                  className="hs-act"
                  aria-current="page"
                  style={btn('#FF1F1F', '#050505', { padding: '13px 22px' })}
                  {...press}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="hs-link"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* FLEX SPACER */}
          <div style={{ flex: 1 }} />

          {/* ACTIONS */}
          <div
            className="hs-act-group"
            style={{ alignItems: 'center', gap: '20px', marginRight: '30px' }}
          >
            {/* LOG IN */}
            <a
              href="/login"
              className="hs-act"
              style={btn('#F5F0E8', '#050505', { padding: '13px 24px' })}
              {...press}
            >
              LOG IN
            </a>

            {/* GET STARTED → */}
            <a
              href="/get-started"
              className="hs-act"
              style={btn('#FF1F1F', '#ffffff', {
                padding: '13px 22px',
                gap: '10px',
              })}
              {...press}
            >
              <span>GET STARTED</span>
              <span style={{ fontSize: '18px', lineHeight: 1 }}>→</span>
            </a>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="hs-hamburger hs-act"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              ...btn('#F5F0E8', '#050505', { padding: '10px' }),
              marginRight: '28px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(2px,2px)';
              e.currentTarget.style.boxShadow = '2px 2px 0 #050505';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0,0)';
              e.currentTarget.style.boxShadow = '4px 4px 0 #050505';
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translate(4px,4px)';
              e.currentTarget.style.boxShadow = '0 0 0 #050505';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translate(2px,2px)';
              e.currentTarget.style.boxShadow = '2px 2px 0 #050505';
            }}
          >
            <HamburgerIcon open={menuOpen} />
          </button>

          {/* MOBILE DROPDOWN */}
          {menuOpen && (
            <div
              role="dialog"
              aria-label="Mobile navigation"
              style={{
                position: 'absolute',
                top: '108px',
                left: 0,
                right: 0,
                background: '#F5F0E8',
                borderTop: '4px solid #050505',
                padding: '16px 28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                zIndex: 1000,
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: 'block',
                    padding: '11px 0',
                    color: isActive(link.href) ? '#FF1F1F' : '#050505',
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
                    fontSize: '22px',
                    fontWeight: '800',
                    letterSpacing: '0.07em',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    borderBottom: '2px solid rgba(5,5,5,0.12)',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div style={{ display: 'flex', gap: '14px', paddingTop: '14px' }}>
                <a
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  style={btn('#F5F0E8', '#050505', {
                    flex: 1, justifyContent: 'center', padding: '12px',
                  })}
                >
                  LOG IN
                </a>
                <a
                  href="/get-started"
                  onClick={() => setMenuOpen(false)}
                  style={btn('#FF1F1F', '#ffffff', {
                    flex: 1, justifyContent: 'center', padding: '12px', gap: '8px',
                  })}
                >
                  GET STARTED →
                </a>
              </div>
            </div>
          )}
        </div>
      </foreignObject>
    </g>
  );
}
