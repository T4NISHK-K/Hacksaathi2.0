import React from 'react';
import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';
import thinkingFaceSvg from '../../assets/illustrations/Thinking face-cuate.svg';

/**
 * HeroCharacters Component
 * Zone C: 3-person team group (.team-group) with desk line, laptop prop, and coffee cup prop
 */
export default function HeroCharacters() {
  return (
    <>
      {/* ── Three-Person Team Group ── */}
      <div
        className="team-group"
        style={{
          position: 'absolute',
          top: '105px',
          left: '70px',
          width: '490px',
          height: '340px',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      >
        {/* Left Character: Woman in Red (messy bun) */}
        <img
          src={messyBunRafikiSvg}
          alt="Team member - woman in red shirt"
          style={{
            position: 'absolute',
            left: '30px',
            bottom: '0px',
            height: '270px',
            width: 'auto',
            objectFit: 'contain',
            zIndex: 2,
          }}
        />

        {/* Center Character: Purple Hoodie (Dominant focal figure) */}
        <img
          src={thinkingFaceSvg}
          alt="Team member - center purple hoodie"
          style={{
            position: 'absolute',
            left: '170px',
            bottom: '10px',
            height: '320px',
            width: 'auto',
            objectFit: 'contain',
            zIndex: 3,
          }}
        />

        {/* Right Character: Man with Glasses (Mathematics bro) */}
        <img
          src={mathBroSvg}
          alt="Team member - glasses dark shirt"
          style={{
            position: 'absolute',
            left: '330px',
            bottom: '0px',
            height: '270px',
            width: 'auto',
            objectFit: 'contain',
            zIndex: 1,
          }}
        />
      </div>

      {/* Desk Line + Laptop + Coffee Cup */}
      <div
        style={{
          position: 'absolute',
          top: '426px',
          left: '85px',
          width: '460px',
          height: '6px',
          background: '#050505',
          zIndex: 5,
        }}
      />
      {/* Laptop */}
      <div
        style={{
          position: 'absolute',
          top: '372px',
          left: '215px',
          width: '100px',
          height: '56px',
          background: '#F5F0E8',
          border: '3px solid #050505',
          borderRadius: '6px 6px 0 0',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF1F1F' }} />
      </div>
      {/* Coffee Cup */}
      <div
        style={{
          position: 'absolute',
          top: '396px',
          left: '330px',
          width: '22px',
          height: '30px',
          background: '#F5F0E8',
          border: '3px solid #050505',
          borderRadius: '4px 4px 6px 6px',
          zIndex: 5,
        }}
      />
    </>
  );
}
