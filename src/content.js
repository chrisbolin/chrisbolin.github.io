import React, { useContext } from "react";
import Link, { ClientOnlyLink, LinkButton } from "./link";

import { ChangeThemeButton } from "./themes/theme-context";

export const Main = () => (
  <>
    Software engineer and artist in Colorado. Data Science,{" "}
    <Link name="ddg">
      <nobr>DuckDuckGo</nobr>
    </Link>
    . Founder, <Link name="disconnect">The Disconnect</Link>.{" "}
    <Link name="log">[web log]</Link>{" "}
    <ClientOnlyLink name="email">[email]</ClientOnlyLink> <ChangeThemeButton />
  </>
);

export default function Content() {
  return (
    <>
      <div>
        <b>Chris.</b> Person in Colorado.
      </div>
      <div>
        <b>Fun.</b> Currently: logging, woodworking, and carpentry. Previously:{" "}
        <Link name="disconnect">The Disconnect</Link> (
        <>
          <Link name="disconnect-1">#1</Link>,{" "}
          <Link name="disconnect-2">#2</Link>,{" "}
          <Link name="disconnect-3">#3</Link>
        </>
        ), assorted side projects (
        <>
          like <Link name="skycoins">Skycoins</Link>,{" "}
          <Link name="elements">Elements</Link>,{" "}
          <Link name="tessellate">Tessellate</Link>,{" "}
          <Link name="offline-only">Offline Only</Link>,{" "}
          <Link name="perf-land">Perf Land</Link>,{" "}
          <Link name="enchiridion">The Enchiridion</Link>
        </>
        ), and photography (both <Link name="travels">beautiful</Link> and{" "}
        <Link name="shipwrecked">ugly</Link>).{" "}
      </div>
      <div>
        <b>Work.</b> Currently Director, Data Science at{" "}
        <Link name="duckduckgo">DuckDuckGo</Link>. Previously VP Engineering,{" "}
        <Link name="formidable">Formidable</Link>. Adjunct,{" "}
        <Link name="u-denver">U of Denver</Link>. Engineer, Jumpshell. Data
        scientist, <Link name="autotegrity">Autotegrity</Link>. Researcher,{" "}
        <Link name="ebm">MIT EBM Lab</Link>. Engineer, <Link name="ni">NI</Link>
        .{" "}
      </div>
      <div>
        <b>Appearances.</b> <Link name="venturi">Venturi</Link>,{" "}
        <Link name="debugging-talk">Debugging</Link>,{" "}
        <Link name="me-convention">SXSW me Convention</Link>,{" "}
        <Link name="dinojs">DinosaurJS</Link>, <Link name="cjr">CJR</Link>,{" "}
        <Link name="lifehacker">Lifehacker</Link>,{" "}
        <Link name="nautilus">Nautilus</Link>,{" "}
        <Link name="offline-talk">Offline Websites</Link>,{" "}
        <Link name="vice">Vice</Link>, <Link name="le-monde">Le Monde</Link>,{" "}
        <Link name="the-next-web">The Next Web</Link>,{" "}
        <Link name="cbc">the CBC</Link>.{" "}
      </div>
    </>
  );
}
