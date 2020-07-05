import { useState } from "react";

function BackSection({
  title,
  children,
  onActivate,
  onDeactivate,
  active,
  index,
}) {
  const transformOrigin = `${index < 2 ? "top" : "bottom"} ${
    index % 2 === 0 ? "left" : "right"
  }`;
  return (
    <div
      style={{ transformOrigin }}
      className={`BackSection ${active && "active"}`}
      onClick={onActivate}
    >
      {active && (
        <button className="BackSection-deactivate" onClick={onDeactivate}>
          X
        </button>
      )}
      {!active && (
        <h1>
          <button onClick={onActivate}>{title}</button>
        </h1>
      )}
      {active && <div className="BackSection-children">{children}</div>}
    </div>
  );
}

const backSectionElements = [
  <BackSection title="Chris Bolin">
    Software engineer + artist in Denver. Engineering, Formidable. Founder, The
    Disconnect
  </BackSection>,
  <BackSection title="Projects">
    Offline Only, Tessellate, Skycoins, Elements, Enchiridion, Travels,
    Shipwrecked
  </BackSection>,
  <BackSection title="Talks & Press">
    SXSW me Convention, DinosaurJS, Debugging, Offline Websites, Vice,
    Lifehacker, CBC, CJR, Le Monde, The Next Web
  </BackSection>,
  <BackSection title="CV">
    VP Engineering, Formidable. Adjunct, U of Denver. Engineer, Jumpshell. Data
    scientist, Autotegrity. Researcher, MIT EBM Lab. Engineer, NI Edu → Master’s
    Computational Engineering, MIT, numerical simulation of environmental
    impact. BS Mechanical Engineering, U of Nebraska
  </BackSection>,
];

export default function Back({ x, style }) {
  // Text does not show until minX
  const minX = 0.6;
  const display = x > minX ? null : "none";
  const progress = (x - minX) / (1 - minX);
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);
  const clearActiveSectionIndex = (e) => {
    setActiveSectionIndex(null);
    e.stopPropagation();
  };
  const combinedStyle = {
    display,
    opacity: progress,
    filter: `brightness(${progress})`,
    ...style,
  };

  return (
    <div className="Back" style={combinedStyle}>
      {backSectionElements.map((element, index) =>
        // index is a unique ID, as the number and order of this will not change at runtime
        React.cloneElement(element, {
          index,
          key: index,
          onActivate: () => setActiveSectionIndex(index),
          onDeactivate: clearActiveSectionIndex,
          active: index === activeSectionIndex,
        })
      )}
    </div>
  );
}

/*
current:
Chris Bolin
Projects
Talks
Press
Work
Edu
Contact

Chris Bolin (basics and contact)
Projects
Talks and Press
CV
*/
