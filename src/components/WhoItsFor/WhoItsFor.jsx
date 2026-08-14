import React from 'react';
import './WhoItsFor.css';

import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';
import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';
import thinkingFaceSvg from '../../assets/illustrations/Thinking face-cuate.svg';

/**
 * WhoItsFor — Rebalanced Light Surface Palette
 * Chapter 03: WHO IS HACKSAATHI FOR?
 *
 * Light surface hierarchy:
 *   Cream #F5F0E8 / White #FFFFFF card backgrounds
 *   Black ink for borders, typography, and shadows
 *   Red, Purple, Yellow, Pink for micro-stickers and visual accents
 */
export default function WhoItsFor() {
  return (
    <section id="audience" className="who-its-for-section">

      {/* ── Section Header (Text on cream canvas) ── */}
      <div className="who-section-header">
        <div className="who-label">
          <span className="asterisk">✱</span>
          <span>02 / WHO IS HACKSAATHI FOR?</span>
        </div>

        <h2 className="who-heading">
          <span className="line-black">WHO IS</span>
          <span className="line-red">HACKSAATHI FOR?</span>
        </h2>

        <p className="who-subtext">
          Built for everyone in the hackathon ecosystem — from first-timers to seasoned competitors.
        </p>
      </div>

      {/* ── ROW 1: FOR STUDENTS — LEFT text | RIGHT character visual ── */}
      <div className="who-card-row">
        {/* Text card (White) */}
        <div className="who-card who-card--half">
          <div className="who-card-top">
            <span className="who-card-num" style={{ color: '#FF1F1F' }}>01</span>
            <div className="who-sticker" style={{ backgroundColor: '#FFC928', color: '#050505' }}>
              <span>✦</span>
              <span>LEARN &amp; GROW</span>
            </div>
          </div>

          <div>
            <h3 className="who-card-title">FOR STUDENTS</h3>
            <p className="who-card-desc">
              Find teammates who complement your skills and turn your ideas into real hackathon projects.
              No experience needed — just the ambition to build.
            </p>
          </div>

          <div className="who-card-visual">
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['ENGINEERING', 'DESIGN', 'PM'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '12px',
                    fontWeight: '900',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    backgroundColor: '#F5F0E8',
                    border: '2px solid #050505',
                    borderRadius: '4px',
                    color: '#050505'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="who-arrow">→</span>
          </div>
        </div>

        {/* Visual card (Cream) */}
        <div
          className="who-card who-card--half who-card--cream"
          style={{ minHeight: '320px', overflow: 'hidden', padding: '32px 32px 0 32px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '13px',
                  fontWeight: '900',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  backgroundColor: '#FF1F1F',
                  border: '2px solid #050505',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  display: 'inline-block',
                  marginBottom: '12px',
                  boxShadow: '2px 2px 0 #050505'
                }}
              >
                STUDENT
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '22px',
                  fontWeight: '900',
                  letterSpacing: '0.04em',
                  color: '#050505',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                PRIYA VERMA<br/>
                <span style={{ color: '#7650E8' }}>FRONTEND DEV</span>
              </div>
            </div>
            {/* 95% match badge */}
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#7650E8',
                border: '3px solid #050505',
                boxShadow: '4px 4px 0 #050505',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '18px',
                fontWeight: '900',
                color: '#FFFFFF',
                lineHeight: 1.1,
              }}
            >
              95%<br/>
              <span style={{ fontSize: '10px', letterSpacing: '0.06em' }}>MATCH</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <img
              src={messyBunPanaSvg}
              alt="Student character"
              style={{ width: '220px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

      {/* ── ROW 2: FOR DEVELOPERS — LEFT visual (White) | RIGHT text (White) ── */}
      <div className="who-card-row">
        {/* Visual card (White surface, black text) */}
        <div
          className="who-card who-card--half"
          style={{
            backgroundColor: '#FFFFFF',
            minHeight: '300px',
            overflow: 'hidden',
            padding: '32px 32px 0 32px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '13px',
                  fontWeight: '900',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                  backgroundColor: '#7650E8',
                  border: '2px solid #050505',
                  borderRadius: '4px',
                  padding: '4px 10px',
                  display: 'inline-block',
                  marginBottom: '12px',
                  boxShadow: '2px 2px 0 #050505'
                }}
              >
                DEV / DESIGNER
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: '22px',
                  fontWeight: '900',
                  letterSpacing: '0.04em',
                  color: '#050505',
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                DEV PATEL<br/>
                <span style={{ color: '#FF1F1F' }}>AI / ML ENGINEER</span>
              </div>
            </div>

            <div
              style={{
                fontFamily: "'Barlow Condensed', monospace",
                fontSize: '13px',
                fontWeight: '900',
                color: '#050505',
                backgroundColor: '#FFC928',
                padding: '6px 12px',
                border: '2px solid #050505',
                borderRadius: '6px',
                letterSpacing: '0.04em',
                boxShadow: '2px 2px 0 #050505'
              }}
            >
              &lt;/&gt; ACTIVE
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
            <img
              src={mathBroSvg}
              alt="Developer character"
              style={{ width: '200px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

        {/* Text card (White) */}
        <div className="who-card who-card--half">
          <div className="who-card-top">
            <span className="who-card-num" style={{ color: '#7650E8' }}>02</span>
            <div className="who-sticker" style={{ backgroundColor: '#7650E8', color: '#FFFFFF' }}>
              <span>✦</span>
              <span>CODE &amp; CREATE</span>
            </div>
          </div>

          <div>
            <h3 className="who-card-title">FOR DEVELOPERS &amp; DESIGNERS</h3>
            <p className="who-card-desc">
              Meet builders with complementary technical and design skills. Connect over shared goals,
              not just resumes, and create something genuinely memorable together.
            </p>
          </div>

          <div className="who-card-visual">
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['REACT', 'FIGMA', 'PYTHON', 'NODE'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '12px',
                    fontWeight: '900',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    backgroundColor: '#F5F0E8',
                    color: '#050505',
                    border: '2px solid #050505',
                    borderRadius: '4px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="who-arrow">→</span>
          </div>
        </div>
      </div>

      {/* ── ROW 3: FOR HACKATHON BUILDERS — White feature card with Red emphasis ── */}
      <div
        className="who-card"
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '40px',
          minHeight: '280px',
          backgroundColor: '#FFFFFF',
          borderLeft: '10px solid #FF1F1F',
          overflow: 'hidden',
          padding: '40px 48px 0 48px',
        }}
      >
        {/* Left: text */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', paddingBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                fontFamily: "'Barlow Condensed', Impact, sans-serif",
                fontSize: '42px',
                fontWeight: '900',
                color: '#FF1F1F',
                lineHeight: 1,
              }}
            >
              03
            </span>
            <div className="who-sticker" style={{ backgroundColor: '#F06FAE', color: '#050505', border: '2.5px solid #050505' }}>
              <span>★</span>
              <span>WIN TOGETHER</span>
            </div>
          </div>

          <h3
            style={{
              fontFamily: "'Barlow Condensed', Impact, sans-serif",
              fontSize: '48px',
              fontWeight: '900',
              color: '#050505',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}
          >
            FOR HACKATHON<br/>COMPETITORS
          </h3>

          <p
            style={{
              fontFamily: "'Barlow Condensed', 'Courier New', Courier, monospace",
              fontSize: '17px',
              fontWeight: '600',
              color: '#050505',
              lineHeight: 1.5,
              maxWidth: '480px',
            }}
          >
            Find your dream team before the clock starts. Take on ambitious competitive tracks
            with confidence. HackSaathi matches you at 95% accuracy.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FF1F1F',
                color: '#FFFFFF',
                border: '2px solid #050505',
                borderRadius: '6px',
                padding: '8px 16px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '14px',
                fontWeight: '900',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                boxShadow: '3px 3px 0 #050505'
              }}
            >
              🏆 95% MATCH ACCURACY
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FFC928',
                color: '#050505',
                border: '2px solid #050505',
                borderRadius: '6px',
                padding: '8px 16px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '14px',
                fontWeight: '900',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                boxShadow: '3px 3px 0 #050505'
              }}
            >
              ⚡ 50+ EVENTS MONTHLY
            </div>
          </div>
        </div>

        {/* Right: character standing on light canvas */}
        <div style={{ width: '260px', flexShrink: 0, alignSelf: 'flex-end' }}>
          <img
            src={thinkingFaceSvg}
            alt="Hackathon Competitor"
            style={{ width: '260px', height: 'auto', display: 'block' }}
          />
        </div>
      </div>

      {/* ── ROW 4: FOR ORGANIZERS + decorative sticker panel ── */}
      <div className="who-card-row">
        {/* Text card (White) */}
        <div className="who-card" style={{ flex: '1.4' }}>
          <div className="who-card-top">
            <span className="who-card-num" style={{ color: '#050505' }}>04</span>
            <div className="who-sticker" style={{ backgroundColor: '#FF1F1F', color: '#FFFFFF' }}>
              <span>✦</span>
              <span>COMMUNITY</span>
            </div>
          </div>

          <div>
            <h3 className="who-card-title">FOR ORGANIZERS &amp; CLUBS</h3>
            <p className="who-card-desc">
              Discover top student talent, promote your hackathons and opportunities, and grow
              an active builder community around your events.
            </p>
          </div>

          <div className="who-card-visual">
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['PROMOTE EVENTS', 'FIND TALENT', 'GROW COMMUNITY'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: '12px',
                    fontWeight: '900',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    backgroundColor: '#F5F0E8',
                    color: '#050505',
                    border: '2px solid #050505',
                    borderRadius: '4px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="who-arrow">→</span>
          </div>
        </div>

        {/* Decorative card (Yellow accent surface) */}
        <div
          className="who-card"
          style={{
            flex: '0.7',
            backgroundColor: '#FFC928',
            overflow: 'hidden',
            padding: '32px 32px 0 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '250px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '32px',
                fontWeight: '900',
                color: '#050505',
                textTransform: 'uppercase',
                lineHeight: 1.05,
                letterSpacing: '0.02em',
              }}
            >
              BUILD YOUR<br/>COMMUNITY.
            </div>

            <div
              style={{
                marginTop: '12px',
                fontFamily: "'Barlow Condensed', monospace",
                fontSize: '14px',
                fontWeight: '700',
                color: '#050505',
                lineHeight: 1.4,
              }}
            >
              2,000+ builders<br/>already inside
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              src={messyBunRafikiSvg}
              alt="Organizer"
              style={{ width: '140px', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
