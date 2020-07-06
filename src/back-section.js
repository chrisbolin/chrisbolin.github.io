import { useState, useEffect } from "react";

export default function BackSection({
  title,
  children,
  onOpen,
  onClose,
  active,
  index,
}) {
  const transformOrigin = `${index < 2 ? "top" : "bottom"} ${
    index % 2 === 0 ? "left" : "right"
  }`;
  useEffect(() => {
    console.log("transitioning!");
  }, [active]);
  return (
    <div
      style={{ transformOrigin }}
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
