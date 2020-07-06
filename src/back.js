import { useState } from "react";

import BackSection from "./back-section";
import Link from "./link";

const backSectionElements = [
  <BackSection title="Chris Bolin">
    Software engineer + artist in Denver. Engineering leadership at{" "}
    <Link name="formidable">Formidable</Link>. Founder of{" "}
    <Link name="disconnect">The Disconnect</Link>. Most recent project:{" "}
    <Link name="perf-land">Perf Land</Link>.
  </BackSection>,
  <BackSection title="Projects">
    2020 <Link name="perf-land">Perf Land</Link>, 2019{" "}
    <Link name="disconnect-3">Disconnect #3</Link>, 2018{" "}
    <Link name="elements">Elements</Link>,{" "}
    <Link name="disconnect-2">Disconnect #2</Link>,{" "}
    <Link name="disconnect-1">Disconnect #1</Link>, 2017{" "}
    <Link name="offline-only">Offline Only</Link>,{" "}
    <Link name="travels">Travels</Link>, 2016{" "}
    <Link name="tessellate">Tessellate</Link>,{" "}
    <Link name="skycoins">Skycoins</Link>, pre-2016{" "}
    <Link name="shipwrecked">Shipwrecked</Link>,{" "}
    <Link name="enchiridion">Enchiridion</Link>
  </BackSection>,
  <BackSection title="Talks & Press">
    <Link name="me-convention">SXSW me Convention</Link>,{" "}
    <Link name="dinojs">DinosaurJS</Link>,{" "}
    <Link name="debugging-talk">Debugging</Link>,{" "}
    <Link name="offline-talk">Offline websites</Link>,{" "}
    <Link name="vice">Vice</Link>, <Link name="lifehacker">Lifehacker</Link>,{" "}
    <Link name="cbc">CBC</Link>, <Link name="cjr">CJR</Link>,{" "}
    <Link name="le-monde">Le Monde</Link>,{" "}
    <Link name="the-next-web">The Next Web</Link>
  </BackSection>,
  <BackSection title="CV">
    VP Engineering, <Link name="formidable">Formidable</Link>. Adjunct,{" "}
    <Link name="u-denver">U of Denver</Link>. Engineer, Jumpshell. Data
    scientist, <Link name="autotegrity">Autotegrity</Link>. Researcher,{" "}
    <Link name="ebm">MIT EBM Lab</Link>. Engineer, <Link name="ni">NI</Link>.
    Master’s Computational Engineering, MIT,{" "}
    <Link name="thesis">numerical simulation of environmental impact</Link>. BS
    Mechanical Engineering, U of Nebraska.
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
          onOpen: () => setActiveSectionIndex(index),
          onClose: clearActiveSectionIndex,
          active: index === activeSectionIndex,
        })
      )}
    </div>
  );
}
