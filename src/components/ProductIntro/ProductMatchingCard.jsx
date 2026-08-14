import React from 'react';
import ProductProfile from './ProductProfile';

import thinkingFaceSvg from '../../assets/illustrations/Thinking face-cuate.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';
import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';

/**
 * ProductMatchingCard Component
 * Central off-white neo-brutalist card containing team matching profiles.
 */
export default function ProductMatchingCard() {
  const profiles = [
    {
      name: 'AARAV SHARMA',
      skill: 'AI / ML',
      skillClass: 'skill-ai',
      src: thinkingFaceSvg,
      cropProps: { width: 170, top: -22, left: -62 }
    },
    {
      name: 'ANANYA ROY',
      skill: 'UI / UX',
      skillClass: 'skill-ux',
      src: messyBunRafikiSvg,
      cropProps: { width: 155, top: -24, left: -60 }
    },
    {
      name: 'DEV PATEL',
      skill: 'FRONTEND',
      skillClass: 'skill-frontend',
      src: mathBroSvg,
      cropProps: { width: 175, top: -48, left: -75 }
    },
    {
      name: 'PRIYA VERMA',
      skill: 'CYBERSECURITY',
      skillClass: 'skill-cyber',
      src: messyBunPanaSvg,
      cropProps: { width: 155, top: -20, left: -50 }
    }
  ];

  return (
    <div
      style={{
        width: '540px',
        minHeight: '320px',
        backgroundColor: '#F5F0E8',
        border: '4px solid #050505',
        boxShadow: '6px 6px 0 #050505',
        borderRadius: '20px',
        padding: '24px 28px',
        transform: 'rotate(-1deg)',
        position: 'relative',
        zIndex: 5,
        boxSizing: 'border-box',
      }}
    >
      {/* Header inside card */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '4px' }}>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif",
            fontSize: '32px',
            fontWeight: '900',
            color: '#050505',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            lineHeight: 1,
            margin: 0,
          }}
        >
          FIND YOUR TEAM
        </h3>
        {/* Small red underline/accent */}
        <div
          style={{
            width: '64px',
            height: '4px',
            backgroundColor: '#FF1F1F',
            marginTop: '6px',
            borderRadius: '2px',
          }}
        />
      </div>

      {/* Team Profile Grid */}
      <div className="profile-card-grid">
        {profiles.map((p) => (
          <ProductProfile
            key={p.name}
            name={p.name}
            skill={p.skill}
            skillClass={p.skillClass}
            src={p.src}
            cropProps={p.cropProps}
          />
        ))}
      </div>
    </div>
  );
}
