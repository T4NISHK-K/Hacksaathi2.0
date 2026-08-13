import React from 'react';
import AvatarCropFace from '../ui/AvatarCropFace';

import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';
import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';

/**
 * HeroSmartMatchingCard Component
 * Zone A: Smart Matching Card (Top Right) with 95% Match Score badge
 */
export default function HeroSmartMatchingCard() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '30px',
        right: '10px',
        width: '290px',
        height: '115px',
        background: '#F5F0E8',
        border: '3.5px solid #050505',
        borderRadius: '12px',
        boxShadow: '5px 5px 0 #050505',
        padding: '12px 16px',
        boxSizing: 'border-box',
        transform: 'rotate(-2deg)',
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
          fontSize: '15px',
          fontWeight: '900',
          color: '#050505',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '10px',
        }}
      >
        <span style={{ fontSize: '18px', lineHeight: 1 }}>&#9734;</span>
        SMART MATCHING
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AvatarCropFace src={messyBunPanaSvg} alt="Match 1" width={120} top={-16} left={-38} size={34} borderWidth={2.5} zIndex={3} />
          <AvatarCropFace src={mathBroSvg} alt="Match 2" width={130} top={-36} left={-54} size={34} borderWidth={2.5} zIndex={2} marginLeft={-8} />
          <AvatarCropFace src={messyBunRafikiSvg} alt="Match 3" width={120} top={-20} left={-48} size={34} borderWidth={2.5} zIndex={1} marginLeft={-8} />
        </div>

        <div style={{ textAlign: 'right' }}>
          <div
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
              fontSize: '32px',
              fontWeight: '900',
              color: '#FF1F1F',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            95%
          </div>
          <div
            style={{
              fontFamily: "'Barlow Condensed', Arial, sans-serif",
              fontSize: '11px',
              fontWeight: '800',
              color: '#050505',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}
          >
            MATCH SCORE
          </div>
        </div>
      </div>
    </div>
  );
}
