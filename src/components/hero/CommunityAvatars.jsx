import React from 'react';
import AvatarCropFace from '../ui/AvatarCropFace';

import mathBroSvg from '../../assets/illustrations/Mathematics-bro.svg';
import messyBunRafikiSvg from '../../assets/illustrations/messy bun-rafiki.svg';
import messyBunPanaSvg from '../../assets/illustrations/messy bun-pana.svg';

/**
 * CommunityAvatars Component
 * Left Hero Active Community section with 3 face avatar crops, +2K badge, and curved SVG arrow.
 */
export default function CommunityAvatars() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0px',
      }}
    >
      <AvatarCropFace src={messyBunPanaSvg} alt="Face 1" width={190} top={-26} left={-62} zIndex={3} />
      <AvatarCropFace src={mathBroSvg} alt="Face 2" width={210} top={-60} left={-92} zIndex={2} marginLeft={-10} />
      <AvatarCropFace src={messyBunRafikiSvg} alt="Face 3" width={190} top={-32} left={-78} zIndex={1} marginLeft={-10} />

      {/* +2K Badge */}
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#050505',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          marginLeft: '12px',
          alignSelf: 'center',
        }}
      >
        <span
          style={{
            color: '#FFFFFF',
            fontFamily: "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif",
            fontSize: '16px',
            fontWeight: '900',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          +2K
        </span>
      </div>

      {/* Curved arrow */}
      <svg
        width="90"
        height="65"
        viewBox="0 0 90 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ marginLeft: '12px', alignSelf: 'center', flexShrink: 0 }}
      >
        <path
          d="M 10,58 C 14,46 22,28 44,14 C 52,9 64,7 72,11"
          stroke="#050505"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 72,11 L 62,8 M 72,11 L 70,21"
          stroke="#050505"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}
