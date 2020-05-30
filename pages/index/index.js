import React, { useState, useEffect, useMemo, useCallback } from "react";
import Head from "next/head";

import A, { ClientOnlyLink } from "./link";

const limitUnit = (x) => (x < 0 ? 0 : x < 1 ? x : 1);

const isMobile = () => {
  if (typeof navigator === "undefined") return false;
  return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|IEMobile/);
};

const colors = [
  { value: "#7830CF", barXScale: 5.2, gradientPosition: "25%" },
  { value: "#AB32D9", barXScale: 4.7, gradientPosition: "36%" },
  { value: "#C236C2", barXScale: 4.4, gradientPosition: "59%" },
  { value: "#D93285", barXScale: 4, gradientPosition: "81%" },
  { value: "#CF3030", barXScale: 3.5, gradientPosition: "100%" },
];

const radialBackground = `
  radial-gradient(
    circle,
    black 0%,
    ${colors.map(
      ({ value, gradientPosition }) => `${value} ${gradientPosition}`
    )}
    )
`;

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
      <div className={`scroll ${mounted || "hidden"}`} style={scrollStyle}>
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
    background: radialBackground,
  };

  return <div className="card-face back" style={style}></div>;
};

const cardPlaneStyle = (x) => {
  const rotateX = 180 * (x < 0.5 ? x : limitUnit(x * 2 - 0.5));
  const transform = `
      rotateZ(${90 * x}deg)
      rotateX(${rotateX}deg)
      translate3d(${-50 * x}px, 0, 0)
      scale(${1 + x * x * x * x * 20})
    `;

  return {
    transform,
    WebkitTransform: transform,
  };
};

const CardPlane = ({ x, mounted }) => {
  const zFront = x < 0.5 ? 1 : 0;
  const zBack = !zFront;
  return (
    <div style={cardPlaneStyle(x)} className="card-plane">
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

const AboutText = ({ progress }) => {
  const y = 1 - progress;
  return (
    <div
      id="about"
      style={{
        transform: `
          translateY(${-20 * y}vh)
          scale(${progress})
          rotateZ(-${y * 15 + 0}deg)
        `,
        opacity: progress,
      }}
    >
      <p>
        <b>[Chris Bolin]</b> Software engineer + artist in Denver. Engineering,{" "}
        <A>Formidable</A>. Founder, <A>The Disconnect</A>.
      </p>

      <p>
        <b>[Projects]</b> <A>Offline Only</A>, <A>Tessellate</A>,{" "}
        <A>Skycoins</A>, <A>Elements</A>, <A>Enchiridion</A>, <A>Travels</A>,{" "}
        <A>Shipwrecked</A>.
      </p>

      <p>
        <b>[Talks]</b> <A>SXSW me Convention</A>, <A>DinosaurJS</A>,{" "}
        <A>Debugging</A>, <A>Offline Websites</A>.
      </p>

      <p>
        <b>[Press]</b> <A>Vice</A>, <A>Lifehacker</A>, <A>CBC</A>, <A>CJR</A>,{" "}
        <A>Le Monde</A>, <A>The Next Web</A>.
      </p>

      <p>
        <b>[Work]</b> VP Engineering, <A>Formidable</A>. Adjunct,{" "}
        <A>U of Denver</A>. Engineer, <A>Jumpshell</A>. Data scientist,{" "}
        <A>Autotegrity</A>. Researcher, <A>MIT EBM Lab</A>. Engineer, <A>NI</A>.
      </p>

      <p>
        <b>[Edu]</b> Master’s <A>Computational Engineering</A>, MIT,{" "}
        <A>numerical simulation of environmental impact</A>. BS Mechanical
        Engineering, U of Nebraska.
      </p>

      <p>
        <b>[Contact]</b> <ClientOnlyLink>Email</ClientOnlyLink>.
      </p>
    </div>
  );
};

const Back = ({ x }) => {
  // Text does not show until minX
  const minX = 0.75;
  const display = x > minX ? "inherit" : "none";
  const progress = Math.max((x - minX) / (1 - minX), 0);
  const style = { display };

  return (
    <div id="back-content" style={style}>
      <AboutText progress={progress} />
    </div>
  );
};

const HtmlHead = () => (
  <Head>
    <title>Chris Bolin</title>

    <meta
      name="Description"
      content="Chris Bolin is a software engineer and artist based in Denver."
    />

    <link rel="icon" sizes="16x16 32x32 64x64" href="favicon.ico" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
    />
  </Head>
);

const SkipLink = () => (
  <a className="skip" href="#down">
    skip to content.
  </a>
);

const SkipDestination = () => <div id="down"></div>;

const Home = () => {
  const [x, setX] = useState(0);
  const [mounted, setMounted] = useState(false);

  const scrollLength = useMemo(() => (isMobile() ? 1.5 : 3));
  const handleScroll = useCallback(
    () =>
      setX(
        limitUnit(window.scrollY / (window.innerHeight * (scrollLength - 1)))
      ),
    [setX]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    setMounted(true);
  }, [setMounted]);

  const backgroundTransitionPoint = 0.95;
  const backgroundAlpha =
    x > backgroundTransitionPoint
      ? (x - backgroundTransitionPoint) / (1 - backgroundTransitionPoint)
      : 0;
  const appStyle = {
    height: mounted ? `${scrollLength * 100}vh` : "auto",
    backgroundColor: `rgba(171, 166, 81, ${backgroundAlpha})`,
  };

  return (
    <>
      <HtmlHead />
      <div className="app" style={appStyle}>
        <SkipLink />
        <div className="container">
          <CardPlane x={x} mounted={mounted} />
          <Back x={x} />
        </div>
        <Arrow x={x} />
      </div>
      <SkipDestination />
    </>
  );
};

export default Home;
