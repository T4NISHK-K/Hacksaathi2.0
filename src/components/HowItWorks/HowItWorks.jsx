import React from 'react';
import './HowItWorks.css';

import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';
import thinkingFaceSvg from '../../assets/illustrations/Thinking face-cuate.svg';
import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';

/**
 * HowItWorks — Soulbound Card System
 * Chapter 04: HOW IT WORKS — FROM IDEA TO TEAM TO BUILD
 *
 * Layout:
 *   Section header (two-column: heading left, subtext right)
 *   Horizontal 4-card row with SVG arrow connectors between each card
 */

const STEPS = [
  {
    num: '01',
    numColor: '#FF1F1F',
    pillColor: '#FF1F1F',
    pillTextColor: '#FFFFFF',
    title: 'FIND',
    desc: 'Search for builders by skill, domain, and interests. Filter by your hackathon type.',
    tag: 'SEARCH SKILLS',
    tagBg: '#FFC928',
    tagColor: '#050505',
    char: messyBunPanaSvg,
    charWidth: '115px',
    charStyle: {},
  },
  {
    num: '02',
    numColor: '#7650E8',
    pillColor: '#7650E8',
    pillTextColor: '#FFFFFF',
    title: 'CONNECT',
    desc: 'Message potential teammates, share your idea, and lock in your team before the hack.',
    tag: '95% MATCH',
    tagBg: '#7650E8',
    tagColor: '#FFFFFF',
    char: thinkingFaceSvg,
    charWidth: '115px',
    charStyle: {},
  },
  {
    num: '03',
    numColor: '#050505',
    pillColor: '#FFC928',
    pillTextColor: '#050505',
    title: 'BUILD',
    desc: 'Collaborate in real-time. Build your MVP, iterate fast, and prepare your pitch.',
    tag: '</> SHIP MVP',
    tagBg: '#F5F0E8',
    tagColor: '#050505',
    char: mathBroSvg,
    charWidth: '105px',
    charStyle: { marginTop: '10px' },
  },
  {
    num: '04',
    numColor: '#FF1F1F',
    pillColor: '#F06FAE',
    pillTextColor: '#050505',
    title: 'COMPETE',
    desc: 'Submit to hackathons, present to judges, and win recognition for what you built.',
    tag: '🏆 WINNER',
    tagBg: '#FF1F1F',
    tagColor: '#FFFFFF',
    char: messyBunRafikiSvg,
    charWidth: '110px',
    charStyle: {},
  },
];

/** SVG arrow rendered between step cards */
function StepArrow({ color = '#050505' }) {
  return (
    <div className="how-arrow-connector">
      <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 4 20 C 10 10, 22 10, 28 20"
          stroke={color}
          strokeWidth="3"
          strokeDasharray="5 4"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="28,20 20,14 21,27" fill={color} />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">

      {/* ── Section header: heading left, subtext right ── */}
      <div className="how-section-header">
        <div className="how-header-left">
          <div className="how-label">
            <span className="asterisk">✱</span>
            <span>03 / HOW IT WORKS</span>
          </div>
          <h2 className="how-heading">
            <span className="line-black">FROM IDEA</span>
            <span className="line-red">TO TEAM</span>
            <span className="line-black">TO BUILD.</span>
          </h2>
        </div>

        <p className="how-subtext">
          A four-step system designed to take you from a raw concept to competing live
          at top hackathons — fast.
        </p>
      </div>

      {/* ── Horizontal 4-step card row ── */}
      <div className="how-steps-row">
        {STEPS.map((step, idx) => (
          <React.Fragment key={step.num}>
            {/* Step card */}
            <div className="how-step-card">
              {/* Top: number + pill */}
              <div>
                <div className="how-step-top">
                  <span className="how-step-num" style={{ color: step.numColor }}>
                    {step.num}
                  </span>
                  <div
                    className="how-step-pill"
                    style={{ backgroundColor: step.pillColor, color: step.pillTextColor }}
                  >
                    STEP {step.num}
                  </div>
                </div>

                <h3 className="how-step-title">{step.title}</h3>
                <p className="how-step-desc">{step.desc}</p>
              </div>

              {/* Bottom: tag + character */}
              <div>
                <div className="how-step-visual">
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '11px',
                      fontWeight: '900',
                      letterSpacing: '0.07em',
                      textTransform: 'uppercase',
                      backgroundColor: step.tagBg,
                      color: step.tagColor,
                      border: '2px solid #050505',
                      borderRadius: '4px',
                      padding: '4px 10px',
                      boxShadow: '2px 2px 0 #050505',
                    }}
                  >
                    {step.tag}
                  </div>
                </div>

                <div className="how-step-char">
                  <img
                    src={step.char}
                    alt={step.title}
                    style={{ width: step.charWidth, height: 'auto', display: 'block', ...step.charStyle }}
                  />
                </div>
              </div>
            </div>

            {/* Arrow connector (not after last step) */}
            {idx < STEPS.length - 1 && (
              <StepArrow color={STEPS[idx + 1].numColor} />
            )}
          </React.Fragment>
        ))}
      </div>

    </section>
  );
}
