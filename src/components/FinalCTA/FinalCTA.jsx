import React from 'react';
import './FinalCTA.css';

import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';
import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import thinkingFaceSvg from '../../assets/illustrations/Thinking face-cuate.svg';

/**
 * FinalCTA — Soulbound Card System
 * Chapter 06: FINAL CTA — YOUR NEXT TEAM STARTS HERE
 *
 * Full-width white card:
 *   LEFT: label + heading + desc + two CTA buttons
 *   RIGHT: Neo-brutalist visual collage — red polygon + community join card + badges
 */
export default function FinalCTA() {
  return (
    <section id="get-started" className="final-cta-section">
      <div className="final-cta-card">

        {/* ── LEFT: Text ── */}
        <div className="cta-left">
          <div className="cta-label">
            <span className="asterisk">✱</span>
            <span>READY TO BUILD?</span>
          </div>

          <h2 className="cta-heading">
            <span className="line-black">YOUR NEXT</span>
            <span className="line-red">TEAM</span>
            <span className="line-black">STARTS HERE.</span>
          </h2>

          <p className="cta-desc">
            Join 2,000+ builders finding teammates, connecting at hackathons,
            and turning ambitious ideas into reality.
          </p>

          <div className="cta-actions">
            <a href="/get-started" className="cta-btn-primary">
              GET STARTED — IT'S FREE →
            </a>
            <a href="#features" className="cta-btn-secondary">
              EXPLORE HACKSAATHI
            </a>
          </div>
        </div>

        {/* ── RIGHT: Visual collage ── */}
        <div className="cta-right">

          {/* Red polygon backdrop */}
          <svg
            width="400"
            height="320"
            viewBox="0 0 400 320"
            fill="none"
            style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}
          >
            <polygon
              points="20,10 370,0 400,160 360,310 40,300 0,140"
              fill="#FF1F1F"
              stroke="#050505"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </svg>

          {/* Central community card */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              width: '320px',
              backgroundColor: '#F5F0E8',
              border: '4px solid #050505',
              boxShadow: '6px 6px 0 #050505',
              borderRadius: '20px',
              padding: '22px 24px 24px 24px',
              transform: 'rotate(-2deg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '21px',
                  fontWeight: '900',
                  color: '#050505',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                }}
              >
                JOIN THE<br/>COMMUNITY
              </span>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '12px',
                  fontWeight: '900',
                  backgroundColor: '#FFC928',
                  color: '#050505',
                  padding: '4px 8px',
                  border: '2px solid #050505',
                  borderRadius: '4px',
                  boxShadow: '2px 2px 0 #050505',
                }}
              >
                FREE
              </span>
            </div>

            {/* Avatar stack */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
              {[
                { src: messyBunPanaSvg, w: 150, top: -20, left: -50 },
                { src: mathBroSvg,      w: 180, top: -45, left: -78 },
                { src: thinkingFaceSvg, w: 165, top: -23, left: -62 },
              ].map((av, i) => (
                <div
                  key={i}
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #050505',
                    backgroundColor: '#FFFFFF',
                    position: 'relative',
                    marginLeft: i === 0 ? '0' : '-10px',
                    zIndex: 3 - i,
                    flexShrink: 0,
                  }}
                >
                  <img
                    src={av.src}
                    alt=""
                    style={{
                      width: `${av.w}px`,
                      height: 'auto',
                      position: 'absolute',
                      top: `${av.top}px`,
                      left: `${av.left}px`,
                    }}
                  />
                </div>
              ))}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#050505',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '14px',
                  fontWeight: '900',
                  border: '3px solid #050505',
                  marginLeft: '-10px',
                  flexShrink: 0,
                  zIndex: 0,
                }}
              >
                +2K
              </div>
            </div>

            <div
              style={{
                fontFamily: "'Barlow Condensed', monospace",
                fontSize: '14px',
                fontWeight: '600',
                color: '#050505',
                borderTop: '2px dashed rgba(5,5,5,0.2)',
                paddingTop: '12px',
              }}
            >
              ⚡ 50+ Hackathons &amp; Projects Match Daily
            </div>
          </div>

          {/* Purple badge */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '0px',
              backgroundColor: '#7650E8',
              color: '#FFFFFF',
              border: '3px solid #050505',
              boxShadow: '4px 4px 0 #050505',
              borderRadius: '50%',
              width: '86px',
              height: '86px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              transform: 'rotate(4deg)',
              zIndex: 10,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '13px',
              fontWeight: '900',
              lineHeight: 1.1,
              letterSpacing: '0.06em',
            }}
          >
            RIGHT<br/>PEOPLE
          </div>

          {/* Yellow sticker */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '10px',
              backgroundColor: '#FFC928',
              color: '#050505',
              border: '3px solid #050505',
              boxShadow: '4px 4px 0 #050505',
              borderRadius: '6px',
              padding: '6px 14px',
              transform: 'rotate(-4deg)',
              zIndex: 10,
              fontFamily: "'Barlow Condensed', monospace",
              fontSize: '15px',
              fontWeight: '900',
            }}
          >
            &lt;/&gt; TEAM UP
          </div>

        </div>

      </div>
    </section>
  );
}
