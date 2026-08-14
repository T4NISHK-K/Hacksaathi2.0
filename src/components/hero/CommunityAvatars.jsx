
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

      {/* Looped Arrow with Dashed Start & Solid Filled Arrowhead */}
      <svg
        width="80"
        height="60"
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          marginLeft: '8px',
          alignSelf: 'center',
          flexShrink: 0,
          transform: 'translateY(-12px)'
        }}
      >
        {/* Main path with loop and dashed stroke */}
        <path
          d="M 12 58 C 22 68, 38 66, 52 50 C 62 38, 54 22, 44 32 C 36 40, 52 58, 68 44 C 76 37, 83 22, 85 14"
          stroke="#050505"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeDasharray="0.1 9"
          fill="none"
        />

        {/* Solid filled arrowhead */}
        <polygon
          points="85,10 73,19 86,26"
          fill="#050505"
        />
      </svg>
    </div>
  );
}
