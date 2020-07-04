import { useState } from "react";

function BackSection({ title, children }) {
  return (
    <div className="BackSection">
      <h1>
        <button onClick={() => null}>{title}</button>
      </h1>
      {/* <div className="BackSection-children">{children}</div> */}
    </div>
  );
}

export default function Back({ x, style }) {
  // Text does not show until minX
  const minX = 0.6;
  const display = x > minX ? null : "none";
  const progress = (x - minX) / (1 - minX);
  const [selectedSection, selectSection] = useState(null);
  const combinedStyle = {
    display,
    opacity: progress,
    filter: `brightness(${progress})`,
    ...style,
  };
  return (
    <div className="Back" style={combinedStyle}>
      <BackSection title="Chris Bolin">
        Software engineer + artist in Denver. Engineering, Formidable. Founder,
        The Disconnect
      </BackSection>
      <BackSection title="Projects">
        Offline Only, Tessellate, Skycoins, Elements, Enchiridion, Travels,
        Shipwrecked
      </BackSection>
      <BackSection title="Talks & Press">
        SXSW me Convention, DinosaurJS, Debugging, Offline Websites, Vice,
        Lifehacker, CBC, CJR, Le Monde, The Next Web
      </BackSection>
      <BackSection title="CV">
        VP Engineering, Formidable. Adjunct, U of Denver. Engineer, Jumpshell.
        Data scientist, Autotegrity. Researcher, MIT EBM Lab. Engineer, NI Edu →
        Master’s Computational Engineering, MIT, numerical simulation of
        environmental impact. BS Mechanical Engineering, U of Nebraska
      </BackSection>
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
