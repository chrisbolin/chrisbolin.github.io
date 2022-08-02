import { useState, useContext } from "react";

import Content from "../../content";

export default function Back({ x, style }) {
  const minX = 0.6;
  if (x < minX) return null;
  // Text does not show until minX
  const display = x > minX ? null : "none";
  const progress = (x - minX) / (1 - minX);
  const [activeSection, setActiveSection] = useState(null);
  const clearActiveSection = (e) => {
    setActiveSection(null);
    e.stopPropagation();
  };
  const combinedStyle = {
    display,
    opacity: progress,
    filter: `brightness(${progress})`,
    ...style,
  };

  return (
    <div className="CleanBack" style={combinedStyle}>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
