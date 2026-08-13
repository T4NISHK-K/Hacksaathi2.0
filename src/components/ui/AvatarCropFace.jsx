import React from 'react';

/**
 * AvatarCropFace Component
 * Reusable neo-brutalist cropped avatar face circle.
 */
export default function AvatarCropFace({
  src,
  alt,
  width,
  top,
  left,
  size = 56,
  borderWidth = 3.5,
  marginLeft = 0,
  zIndex = 1,
}) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        overflow: 'hidden',
        border: `${borderWidth}px solid #050505`,
        background: '#F5F0E8',
        position: 'relative',
        zIndex,
        marginLeft: `${marginLeft}px`,
        flexShrink: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          position: 'absolute',
          width: `${width}px`,
          height: 'auto',
          top: `${top}px`,
          left: `${left}px`,
          maxWidth: 'none',
          display: 'block',
        }}
      />
    </div>
  );
}
