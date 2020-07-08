import { useState, useEffect } from "react";
import characterCount from "./character-count";
import { limitUnit, limit } from "./utils";

const TRANSITION_MS = 500;

const windowFallback = {
  innerHeight: 100,
  innerWidth: 100,
};

function getWindow() {
  return typeof window !== "undefined" ? window : windowFallback;
}

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
  useEffect(() => {
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

  const h1ScaleY = limit(
    (3.3 * getWindow().innerHeight) / getWindow().innerWidth,
    0,
    3
  );

  const childrenStyle = { fontSize };
  const h1Style = { transform: `scaleY(${h1ScaleY}) skewX(3deg)` };

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
