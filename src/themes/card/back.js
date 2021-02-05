import { useState, useContext, useEffect } from "react";

import ContentSection from "./content-section";
import Link, { ClientOnlyLink, LinkButton } from "../../link";

import { Main, Make, Talk, Work } from "../../content";

const contentSectionElements = [
  <ContentSection title="Chris" fontScale={1.35}>
    <Main />
  </ContentSection>,
  <ContentSection title="Make" fontScale={1.35}>
    <Make />
  </ContentSection>,
  <ContentSection title="Talk" fontScale={1.4}>
    <Talk />
  </ContentSection>,
  <ContentSection title="Work" fontScale={1.05}>
    <Work />
  </ContentSection>,
];

export default function Back({ x, style }) {
  const minX = 0.6;
  if (x < minX) return null;
  // Text does not show until minX
  const display = x > minX ? null : "none";
  const progress = (x - minX) / (1 - minX);
  const [activeSection, setActiveSection] = useState(null);
  const clearActiveSection = (e) => {
    setActiveSection(null);
    e.stopPropagation();
  };
  const combinedStyle = {
    display,
    opacity: progress,
    filter: `brightness(${progress})`,
    ...style,
  };

  useEffect(() => {
    window.addEventListener("keydown", clearActiveSection);
    return () => {
      window.removeEventListener("keydown", clearActiveSection);
    }
  }, [])

  return (
    <div className="Back" style={combinedStyle}>
      {contentSectionElements.map((element, index) =>
        // index is a unique ID, as the number and order of this will not change at runtime
        React.cloneElement(element, {
          index,
          key: element.props.title,
          onOpen: () => setActiveSection(element.props.title),
          onClose: clearActiveSection,
          active: element.props.title === activeSection,
        })
      )}
    </div>
  );
}
