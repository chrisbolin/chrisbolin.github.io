import { useState, useEffect, useLayoutEffect } from "react";
import characterCount from "./character-count";
import { getWindow } from "./utils";

const TRANSITION_MS = 500;

export default function BackSection({
  title,
  children,
  onOpen,
  onClose,
  active,
  index,
}) {
  const [transitioning, setTransitioning] = useState(false);
  const transformOrigin = `${index < 2 ? "top" : "bottom"} ${
    index % 2 === 0 ? "left" : "right"
  }`;
  useLayoutEffect(() => {
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), TRANSITION_MS);
  }, [active]);

  const characters = characterCount(children);
  const fontSize =
    0.5 *
    Math.sqrt((getWindow().innerHeight * getWindow().innerWidth) / characters);
  const style = {
    transformOrigin,
    transitionDuration: `${TRANSITION_MS}ms`,
  };

  const h1ScaleY = (3.5 * getWindow().innerHeight) / getWindow().innerWidth;

  const childrenStyle = { fontSize };
  const h1Style = { transform: `scaleY(${h1ScaleY}) skewX(5deg)` };

  return (
    <div
      style={style}
      className={`BackSection ${active && "active"} ${
        transitioning && "transitioning"
      }`}
      onClick={onOpen}
    >
      {active && (
        <button className="BackSection-close" onClick={onClose}>
          ⨯
        </button>
      )}
      {!active && (
        <h1 style={h1Style}>
          <button onClick={onOpen}>{title}</button>
        </h1>
      )}
      {active && (
        <div className="BackSection-children" style={{ fontSize }}>
          {children}
        </div>
      )}
    </div>
  );
}
