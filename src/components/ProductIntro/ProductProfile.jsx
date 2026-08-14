import React from 'react';
import AvatarCropFace from '../ui/AvatarCropFace';

/**
 * ProductProfile Component
 * Renders an individual cropped avatar face with name and skill tag inside the central product matching card.
 */
export default function ProductProfile({
  src,
  name,
  skill,
  skillClass,
  cropProps = { width: 190, top: -26, left: -62 }
}) {
  return (
    <div className="profile-item">
      <AvatarCropFace
        src={src}
        alt={name}
        width={cropProps.width}
        top={cropProps.top}
        left={cropProps.left}
        size={46}
        borderWidth={2.5}
      />
      <div className="profile-info">
        <span className="profile-name">{name}</span>
        <span className={`profile-skill ${skillClass}`}>{skill}</span>
      </div>
    </div>
  );
}
