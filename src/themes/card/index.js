import React, { useState, useEffect, useCallback } from "react";

import { limitUnit, isMobile } from "../../utils/general";
import Back from "./back";

const colors = [
  { value: "var(--color-a)", barXScale: 5.2, gradientPosition: "41%" },
  { value: "var(--color-b)", barXScale: 4.7, gradientPosition: "47%" },
  { value: "var(--color-c)", barXScale: 4.4, gradientPosition: "59%" },
  { value: "var(--color-d)", barXScale: 4, gradientPosition: "81%" },
  { value: "var(--color-e)", barXScale: 3.5, gradientPosition: "100%" },
];

const ColorBar = ({ x, width, left, color }) => {
  const height = limitUnit(x) * 100;
  return (
    <div
      style={{
        width,
        height: height + "%",
        backgroundColor: color,
        left,
        position: "absolute",
        bottom: 0,
      }}
    />
  );
};

const CardFront = ({ x, mounted }) => {
  const zIndex = x < 0.5 ? 1 : 0;
  if (!zIndex) return null;
  const scrollStyle = {
    opacity: 1 - 10 * x,
  };
  return (
    <div className="card-face front" style={{ zIndex }}>
      <div className="title">
        wannabe polymath
        <hr />
      </div>
      <div className={`scroll ${mounted ? "" : "hidden"}`} style={scrollStyle}>
        (scroll)
      </div>
      {colors.map(({ value, barXScale }, index) => (
        <ColorBar
          key={index}
          color={value}
          left={`${index * 20}%`}
          width="20%"
          x={x * barXScale}
        />
      ))}
    </div>
  );
};

const CardBack = ({ x }) => {
  const zIndex = x > 0.5 ? 1 : 0;

  const style = {
    zIndex,
  };

  return <div className="card-face" style={style}></div>;
};

const flipStyle = (x) => {
  const rotateX = 180 * (x < 0.5 ? x : limitUnit(x * 2 - 0.5));
  const x4 = x * x * x * x;
  const frontTransform = `
      rotateZ(${90 * x}deg)
      rotateX(${rotateX}deg)
      scale(${1 + x4 * 20})
    `;

  const backTransform = `
    scale(${x4})
    rotateZ(${90 * x - 90}deg)
  `;

  return [
    {
      transform: frontTransform,
      WebkitTransform: frontTransform,
    },
    {
      transform: backTransform,
      WebkitTransform: backTransform,
    },
  ];
};

const CardPlane = ({ x, mounted, style }) => {
  return (
    <div style={style} className="card-plane">
      <CardFront x={x} mounted={mounted} />
      <CardBack x={x} />
    </div>
  );
};

const Arrow = ({ x }) => {
  const grey = Math.floor(255 * (1 - x));
  const transform = `translateY(${20 * x}px)`;
  const opacity = limitUnit(10 * (0.9 - x));
  const style = {
    transform,
    WebkitTransform: transform,
    color: `rgb(${grey},${grey},${grey})`,
    opacity,
    display: opacity > 0 ? "block" : "none",
  };
  return (
    <div className="arrow" style={style}>
      &darr;
    </div>
  );
};

const Opener = ({ children }) => (
  <>
    {" "}
    <span className="Opener">{children}</span>
    {" → "}
  </>
);

const SkipLink = () => (
  <a className="skip" href="#down">
    skip to content.
  </a>
);

const SkipDestination = () => <div id="down" tabIndex={-1}></div>;

export default () => {
  const [x, setX] = useState(0);
  const [mounted, setMounted] = useState(false);
  // Keep server/client initial render consistent; decide mobile-only after mount.
  const [scrollLength, setScrollLength] = useState(3);

  const handleScroll = useCallback(() => {
    setX(
      limitUnit(window.scrollY / (window.innerHeight * (scrollLength - 1)))
    );
  }, [scrollLength]);

  useEffect(() => {
    setScrollLength(isMobile() ? 1.5 : 3);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("touchmove", handleScroll, { passive: true });

    setMounted(true);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [handleScroll]);

  const backgroundTransitionPoint = 0.95;
  const backgroundAlpha =
    x > backgroundTransitionPoint
      ? (x - backgroundTransitionPoint) / (1 - backgroundTransitionPoint)
      : 0;
  const appStyle = {
    height: mounted ? `${scrollLength * 100}vh` : "auto",
  };

  const [flipStyleFront, flipStyleBack] = flipStyle(x);

  return (
    <>
      <div className="CardApp" style={appStyle}>
        {x < 0.5 ? <SkipLink /> : null}
        <div className="container">
          <CardPlane style={flipStyleFront} x={x} mounted={mounted} />
          <Back x={x} style={flipStyleBack} />
        </div>
        <Arrow x={x} />
      </div>
      <SkipDestination />
    </>
  );
};
