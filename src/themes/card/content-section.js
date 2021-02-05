import { useState, useLayoutEffect, Children, useEffect } from "react";
import { getWindow } from "../../utils/general";

const TRANSITION_MS = 500;

export default function ContentSection({
  title,
  children,
  onOpen,
  onClose,
  active,
  index,
  fontScale = 1,
}) {
  const [transitioning, setTransitioning] = useState(false);
  const transformOrigin = `${index < 2 ? "top" : "bottom"} ${index % 2 === 0 ? "left" : "right"}`;

  useLayoutEffect(() => {
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), TRANSITION_MS);
  }, [active]);

  const style = {
    transformOrigin,
    transitionDuration: `${TRANSITION_MS}ms`,
  };

  const h1ScaleY = (3.5 * getWindow().innerHeight) / getWindow().innerWidth;

  const h1Style = { transform: `scaleY(${h1ScaleY}) skewX(5deg)` };

  const childrenStyle = {
    fontSize: `calc(${fontScale} * (1.5vw + 1.5vh))`,
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 27) {
      onClose(e)
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    }
  }, [])

  return (
    <div
      style={style}
      className={`ContextSection ${active && "active"} ${transitioning && "transitioning"
        }`}
      onClick={onOpen}
    >
      {active && (
        <button className="ContextSection-close" onClick={onClose}>
          ⨯
        </button>
      )}
      {!active && (
        <h1 style={h1Style}>
          <button onClick={onOpen}>{title}</button>
        </h1>
      )}
      {active && (
        <div className="ContextSection-children" style={childrenStyle}>
          {children}
        </div>
      )}
    </div>
  );
}
