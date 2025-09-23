import React, { useState, useEffect } from "react";

const links = {
  // work
  formidable: "https://formidable.com/",
  duckduckgo: "https://duckduckgo.com/",
  "u-denver":
    "https://daniels.du.edu/entrepreneurship/entrepreneurship-degree-programs",
  jumpshell: "https://www.jumpshell.com/",
  ni: "http://www.ni.com/",
  ebm: "http://web.mit.edu/ebm/www/",
  "recent-work": "https://www.are.na/chris-bolin/recent-work-t9ewjy320i8",

  // projects
  "disconnect-1": "https://thedisconnect.co/one",
  "disconnect-2": "https://thedisconnect.co/two",
  "disconnect-3": "https://thedisconnect.co/three",
  "disconnect": "https://thedisconnect.co/",
  "drink-surge": "https://drink.surge.sh/",
  "elements": "/elements/",
  "enchiridion": "/enchiridion/",
  "offline-only": "/offline/",
  "perf-land": "https://github.com/chrisbolin/perf-land/",
  "shipwrecked": "http://www.blurb.com/books/1234410-shipwrecked",
  "skycoins": "/skycoins/",
  "tessellate": "/tessellate/",
  "travels": "https://rookievagabonds.tumblr.com/",

  // talk
  log: "/log/",
  venturi:
    "https://venturi-group.com/podcast/building-good-engineering-culture-formidable-chris-bolin/",
  dinojs: "https://www.youtube.com/watch?v=nhuvY0CT064",
  "offline-talk": "https://www.youtube.com/watch?v=iavC1oWvtJ8&t=2591s",
  "debugging-talk": "https://www.youtube.com/watch?v=ccG9L2Pg4io&t=1035",
  lifehacker:
    "https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654",
  vice: "https://www.vice.com/en/article/this-website-only-works-when-youre-offline/",
  cbc: "https://www.cbc.ca/radio/spark/362-machine-learning-outliers-smart-device-ownership-and-more-1.4279433/want-to-look-at-this-guy-s-website-go-offline-1.4279453",
  cjr: "https://www.cjr.org/innovations/disconnect-magazine-only-works-offline.php",
  "le-monde":
    "http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html",
  "the-next-web":
    "https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/",
  nautilus:
    "https://nautil.us/the-online-magazine-you-cant-read-online-237171/",

  // edu
  "computational-engineering": "https://computationalengineering.mit.edu/",
  thesis: "http://dspace.mit.edu/handle/1721.1/82189",
  email: "mailto:chrisbolin@protonmail.com",
};

const Link = ({ name, children }) => (
  <a
    href={links[name] || console.error("NOT FOUND:", name, children)}
    rel="noopener noreferrer"
    className="Link"
    children={children}
  />
);

export const ClientOnlyLink = (props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [setMounted]);
  if (mounted) return <Link {...props} />; // if mounted on client, render as usual
  return false; // if rendered on server
};

export const LinkButton = (props) => <button className="Button" {...props} />;

export default Link;
