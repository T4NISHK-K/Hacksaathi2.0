import React from 'react';
import AvatarCropFace from '../ui/AvatarCropFace';

import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';
import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';

/**
 * HeroBottomCard Component
 * Zone D: Overlapping bottom card ("BUILD AMAZING THINGS TOGETHER" + scribble + avatars + +2K)
 */
export default function HeroBottomCard() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '35px',
        left: '45px',
        width: '600px',
        height: '155px',
        background: '#F5F0E8',
        border: '4px solid #050505',
        borderRadius: '20px',
        boxShadow: '6px 6px 0 #050505',
        padding: '20px 28px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 15,
      }}
    >
      {/* Left: Text & Scribble */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
            fontSize: '30px',
            fontWeight: '900',
            color: '#050505',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            textTransform: 'uppercase',
          }}
        >
          BUILD AMAZING
        </span>
        <span
          style={{
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
            fontSize: '30px',
            fontWeight: '900',
            color: '#FF1F1F',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            marginBottom: '6px',
          }}
        >
          THINGS TOGETHER
        </span>

        <svg width="200" height="10" viewBox="0 0 210 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 4,5 Q 55,1 105,6 T 206,4" stroke="#FF1F1F" strokeWidth="3.2" strokeLinecap="round" fill="none" />
        </svg>
      </div>

      {/* Right: Avatars + +2K Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
        <AvatarCropFace src={messyBunPanaSvg} alt="Face 1" width={155} top={-20} left={-50} size={46} borderWidth={3} zIndex={3} />
        <AvatarCropFace src={mathBroSvg} alt="Face 2" width={175} top={-48} left={-75} size={46} borderWidth={3} zIndex={2} marginLeft={-8} />
        <AvatarCropFace src={messyBunRafikiSvg} alt="Face 3" width={155} top={-24} left={-62} size={46} borderWidth={3} zIndex={1} marginLeft={-8} />

        <div
          style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            background: '#050505',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '10px',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: '#FFFFFF',
              fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
              fontSize: '15px',
              fontWeight: '900',
              lineHeight: 1,
            }}
          >
            +2K
          </span>
        </div>
      </div>
    </div>
  );
}
