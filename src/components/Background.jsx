import { useState } from "react";

const Background = ({ handleMouseEnter, handleMouseLeave, isHovered }) => {
  const vorticeSrc = isHovered
    ? "/images/bluevortice.png"
    : "/images/vortice.png";

  const nameSrc = isHovered ? "/images/greenname.png" : "/images/name.png";

  return (
    <div
      className={isHovered ? "vortice hovered" : "vortice"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="vortice-img" src={vorticeSrc} alt="" />
      <img className="name-img" src={nameSrc} alt="name" />
      <img className="ellipse-img" src="/images/ellipse.png" alt="" />
    </div>
  );
};
export default Background;
