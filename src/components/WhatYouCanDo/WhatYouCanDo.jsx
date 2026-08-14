import React from 'react';
import './WhatYouCanDo.css';

import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';
import thinkingFaceSvg from '../../assets/illustrations/Thinking face-cuate.svg';
import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';

/**
 * WhatYouCanDo — Rebalanced Light Surface Palette
 * Chapter 05: BUILD WITH HACKSAATHI
 *
 * Light card surfaces with vibrant micro-accents:
 *   Full-width white card hero panel
 *   Split row: 50/50 — BUILD YOUR PROFILE (White) | DISCOVER HACKATHONS (White/Cream)
 */

const TEAM_PROFILES = [
  { name: 'AARAV SHARMA', skill: 'AI / ML', skillBg: '#FFC928', skillColor: '#050505', match: '95%' },
  { name: 'ANANYA ROY',   skill: 'UI / UX',  skillBg: '#F06FAE', skillColor: '#050505', match: '92%' },
  { name: 'DEV PATEL',    skill: 'FRONTEND', skillBg: '#7650E8', skillColor: '#FFFFFF', match: '88%' },
];

export default function WhatYouCanDo() {
  return (
    <section id="capabilities" className="what-you-can-do-section">

      {/* ── Section header ── */}
      <div className="what-section-header">
        <div className="what-label">
          <span className="asterisk">✱</span>
          <span>04 / BUILD WITH HACKSAATHI</span>
        </div>
        <h2 className="what-heading">
          <span className="line-black">ONE PLACE.</span>
          <span className="line-red">RIGHT PEOPLE.</span>
          <span className="line-black">REAL PROJECTS.</span>
        </h2>
      </div>

      {/* ── Full-width hero panel (White Card) ── */}
      <div className="what-hero-panel">

        {/* LEFT: heading + desc + CTA */}
        <div className="what-hero-left">
          <h3
            style={{
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontSize: '42px',
              fontWeight: '900',
              color: '#050505',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}
          >
            FIND YOUR<br/>PERFECT TEAM.
          </h3>

          <p
            style={{
              fontFamily: "'Barlow Condensed', 'Courier New', Courier, monospace",
              fontSize: '17px',
              fontWeight: '600',
              color: '#050505',
              lineHeight: 1.5,
              maxWidth: '420px',
            }}
          >
            Filter builders by skill stack, past hackathons, availability, and interests.
            Our matching engine surfaces the right people — not just anyone who applied.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '4px' }}>
            {['SKILL FILTER', 'INTEREST MATCH', 'AVAILABILITY', 'PAST HACKS'].map(tag => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '12px',
                  fontWeight: '900',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  backgroundColor: '#F5F0E8',
                  border: '2px solid #050505',
                  borderRadius: '4px',
                  boxShadow: '2px 2px 0 #050505',
                  color: '#050505'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            style={{
              marginTop: 'auto',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: '#FF1F1F',
              color: '#FFFFFF',
              border: '3px solid #050505',
              boxShadow: '4px 4px 0 #050505',
              borderRadius: '8px',
              padding: '12px 24px',
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontSize: '17px',
              fontWeight: '900',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              width: 'fit-content',
            }}
          >
            FIND TEAMMATES →
          </div>
        </div>

        {/* RIGHT: team matching widget + character */}
        <div className="what-hero-right">
          {/* Widget card */}
          <div className="what-team-widget">
            <div className="what-team-widget-header">
              <div className="what-team-widget-title">TEAM FINDER</div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#7650E8',
                  color: '#FFFFFF',
                  border: '2px solid #050505',
                  borderRadius: '5px',
                  padding: '4px 10px',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '12px',
                  fontWeight: '900',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '2px 2px 0 #050505',
                }}
              >
                ★ SMART MATCH
              </div>
            </div>

            {TEAM_PROFILES.map(p => (
              <div key={p.name} className="what-profile-row">
                <div className="what-profile-info">
                  <div className="what-profile-name">{p.name}</div>
                  <div
                    className="what-profile-skill"
                    style={{ backgroundColor: p.skillBg, color: p.skillColor }}
                  >
                    {p.skill}
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '18px',
                    fontWeight: '900',
                    color: '#050505',
                  }}
                >
                  {p.match}
                  <span style={{ fontSize: '11px', marginLeft: '2px', fontWeight: '700', opacity: 0.6 }}>MATCH</span>
                </div>
              </div>
            ))}
          </div>

          {/* Character at bottom of right column */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignSelf: 'flex-end' }}>
            <img
              src={messyBunPanaSvg}
              alt="Team matching character"
              style={{ width: '180px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>

      {/* ── Split row: BUILD PROFILE (White Card) | DISCOVER HACKATHONS (Off-White Card) ── */}
      <div className="what-split-row">

        {/* Card: Build Your Profile (White) */}
        <div className="what-feature-card">
          <div className="what-feature-card-text">
            <div className="what-feature-tag" style={{ backgroundColor: '#F06FAE', color: '#050505' }}>
              <span>★</span>
              <span>BUILDER IDENTITY</span>
            </div>

            <div className="what-feature-title">BUILD YOUR PROFILE</div>

            <p className="what-feature-desc">
              Showcase your tech stack, past hackathon wins, GitHub repos, and dream roles to
              potential collaborators. Stand out in the community.
            </p>

            {/* Mini profile preview widget */}
            <div
              style={{
                backgroundColor: '#F5F0E8',
                border: '2.5px solid #050505',
                borderRadius: '10px',
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: '3px 3px 0 #050505',
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '15px',
                  fontWeight: '900',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  color: '#050505'
                }}
              >
                PRIYA VERMA<br/>
                <span style={{ fontSize: '11px', color: '#7650E8', letterSpacing: '0.06em' }}>FRONTEND / REACT</span>
              </div>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '11px',
                  fontWeight: '900',
                  backgroundColor: '#FF1F1F',
                  color: '#FFFFFF',
                  padding: '3px 8px',
                  border: '1.5px solid #050505',
                  borderRadius: '4px',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  boxShadow: '1.5px 1.5px 0 #050505'
                }}
              >
                VERIFIED
              </span>
            </div>
          </div>

          <div className="what-feature-visual">
            <img
              src={thinkingFaceSvg}
              alt="Build profile"
              style={{ width: '140px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Card: Discover Hackathons (Off-White Card with clean black ink borders & status badges) */}
        <div className="what-feature-card" style={{ backgroundColor: '#FFFDF8' }}>
          <div className="what-feature-card-text">
            <div
              className="what-feature-tag"
              style={{ backgroundColor: '#7650E8', color: '#FFFFFF' }}
            >
              <span>✦</span>
              <span>OPPORTUNITIES</span>
            </div>

            <div className="what-feature-title">DISCOVER HACKATHONS</div>

            <p className="what-feature-desc">
              Explore upcoming hackathons, open competitions, and community project sprints worth
              joining — curated and relevant to your profile.
            </p>

            {/* Mini event list */}
            {[
              { name: 'DEVHACK 2026', status: 'OPEN', color: '#FFC928', textColor: '#050505' },
              { name: 'AI BUILDERS SPRINT', status: 'UPCOMING', color: '#F06FAE', textColor: '#050505' },
              { name: 'SMART INDIA HACK', status: 'REGISTERING', color: '#FF1F1F', textColor: '#FFFFFF' },
            ].map(ev => (
              <div
                key={ev.name}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#F5F0E8',
                  border: '2.5px solid #050505',
                  borderRadius: '8px',
                  padding: '8px 12px',
                  boxShadow: '2px 2px 0 #050505'
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '14px',
                    fontWeight: '900',
                    color: '#050505',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {ev.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '11px',
                    fontWeight: '900',
                    backgroundColor: ev.color,
                    color: ev.textColor,
                    padding: '3px 8px',
                    border: '1.5px solid #050505',
                    borderRadius: '4px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {ev.status}
                </span>
              </div>
            ))}
          </div>

          <div className="what-feature-visual">
            <img
              src={mathBroSvg}
              alt="Discover hackathons"
              style={{ width: '130px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>

    </section>
  );
}
