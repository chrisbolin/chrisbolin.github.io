import React, { useState, useEffect } from "react";

const links = {
  // work
  formidable: "https://formidable.com/",
  "u-denver":
    "https://daniels.du.edu/entrepreneurship/entrepreneurship-degree-programs",
  jumpshell: "https://www.jumpshell.com/",
  autotegrity: "https://www.cogolabs.com/portfolio/autotegrity",
  ni: "http://www.ni.com/",
  ebm: "http://web.mit.edu/ebm/www/",

  // projects
  disconnect: "https://thedisconnect.co/",
  "disconnect-1": "https://thedisconnect.co/one",
  "disconnect-2": "https://thedisconnect.co/two",
  "disconnect-3": "https://thedisconnect.co/three",
  "perf-land": "https://perf.land/",
  "offline-only": "https://chris.bolin.co/offline/",
  elements: "https://chris.bolin.co/elements/",
  tessellate: "https://chris.bolin.co/tessellate/",
  enchiridion: "https://chris.bolin.co/enchiridion/",
  skycoins: "https://chris.bolin.co/skycoins/",
  shipwrecked: "http://www.blurb.com/books/1234410-shipwrecked",
  travels: "https://rookievagabonds.tumblr.com/",

  // talks
  dinojs: "https://www.youtube.com/watch?v=nhuvY0CT064",
  "me-convention": "https://www.youtube.com/watch?v=6wjqLAaCAyw",
  "offline-talk": "https://www.youtube.com/watch?v=iavC1oWvtJ8&t=2591s",
  "debugging-talk": "https://www.youtube.com/watch?v=ccG9L2Pg4io&t=1035",

  // press
  lifehacker:
    "https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654",
  vice:
    "https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline",
  cbc:
    "http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329",
  cjr:
    "https://www.cjr.org/innovations/disconnect-magazine-only-works-offline.php",
  "le-monde":
    "http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html",
  "the-next-web":
    "https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/",

  // edu
  "computational-engineering": "https://computationalengineering.mit.edu/",
  thesis: "http://dspace.mit.edu/handle/1721.1/82189",
  email: "mailto:bolin.chris@gmail.com",
};

const Link = ({ name, children }) => (
  <a
    href={links[name] || console.error("NOT FOUND:", name, children)}
    rel="noopener noreferrer"
    children={children}
  />
);

export const ClientOnlyLink = (props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [setMounted]);
  if (mounted) return <Link {...props} />; // if mounted on client, render as usual
  return false; // if rendered on server
};

export default Link;
