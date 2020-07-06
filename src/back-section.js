import { useState, useEffect } from "react";

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
  useEffect(() => {
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), TRANSITION_MS);
  }, [active]);

  const style = {
    transformOrigin,
    zIndex: transitioning ? 2 : undefined,
    transitionDuration: `${TRANSITION_MS}ms`,
  };
  return (
    <div
      style={style}
      className={`BackSection ${active && "active"}`}
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
      {active && <div className="BackSection-children">{children}</div>}
    </div>
  );
}
