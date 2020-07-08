import { useState, useEffect } from "react";
import characterCount from "./character-count";

const TRANSITION_MS = 500;

const serverBody = {
  clientHeight: 100,
  clientWidth: 100,
};

function body() {
  return typeof document !== "undefined" ? document.body : serverBody;
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
    0.3 * Math.sqrt((body().clientHeight * body().clientWidth) / characters);

  const style = {
    transformOrigin,
    transitionDuration: `${TRANSITION_MS}ms`,
  };

  const childrenStyle = { fontSize };

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
        <h1>
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
