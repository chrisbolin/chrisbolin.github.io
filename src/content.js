import React from "react";
import Link from "./link";

export default function Content() {
  return (
    <>
      <div>
        <b>chris.</b> conifer, colorado.
      </div>
      <div>
        <b>art. </b>
        currently: <Link name="recent-work">painting</Link>.
        previously: <Link name="disconnect">the disconnect</Link> (
        <>
          <Link name="disconnect-1">#1</Link>,{" "}
          <Link name="disconnect-2">#2</Link>,{" "}
          <Link name="disconnect-3">#3</Link>
        </>
        ), assorted projects (
        <>
          like <Link name="elements">elements</Link>,{" "}
          <Link name="tessellate">tessellate</Link>,{" "}
          <Link name="skycoins">skycoins</Link>,{" "}
          <Link name="offline-only">offline only</Link>,{" "}
          <Link name="enchiridion">the enchiridion</Link>,{" "}
          <Link name="drink-surge">drink.surge</Link>
        </>
        ), and photography (<Link name="travels">pretty places</Link> /{" "}
        <Link name="shipwrecked">ugly places</Link>).
      </div>
      <div>
        <b>job.</b> currently director, data science at{" "}
        <Link name="duckduckgo">duckduckgo</Link>. previously vp engineering,{" "}
        <Link name="formidable">formidable</Link>. adjunct,{" "}
        <Link name="u-denver">u of denver</Link>. engineer, jumpshell. data
        scientist, autotegrity. researcher,{" "}
        <Link name="ebm">mit ebm lab</Link>. engineer, <Link name="ni">ni</Link>
        .
      </div>
      <div>
        <b>appearances.</b>{" "}
        <Link name="debugging-talk">debugging</Link>,{" "}
        sxsw me convention,
        <Link name="dinojs">dinosaurjs</Link>, <Link name="cjr">cjr</Link>,{" "}
        <Link name="lifehacker">lifehacker</Link>,{" "}
        <Link name="nautilus">nautilus</Link>,{" "}
        <Link name="offline-talk">offline websites</Link>,{" "}
        <Link name="vice">vice</Link>, <Link name="le-monde">le monde</Link>,{" "}
        <Link name="the-next-web">the next web</Link>,{" "}
        <Link name="cbc">the cbc</Link>.{" "}
      </div>
    </>
  );
}
