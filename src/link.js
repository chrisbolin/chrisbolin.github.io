import React, { useState, useEffect } from "react";

const links = {
  // main
  "The Disconnect": "https://thedisconnect.co/",
  Formidable: "https://formidable.com/",

  // work
  "U of Denver":
    "https://daniels.du.edu/entrepreneurship/entrepreneurship-degree-programs",
  Jumpshell: "https://www.jumpshell.com/",
  Autotegrity: "https://www.cogolabs.com/portfolio/autotegrity",
  NI: "http://www.ni.com/",
  "MIT EBM Lab": "http://web.mit.edu/ebm/www/",

  // projects
  "Offline Only": "https://chris.bolin.co/offline/",
  Elements: "https://chris.bolin.co/elements/",
  Tessellate: "https://chris.bolin.co/tessellate/",
  Enchiridion: "https://chris.bolin.co/enchiridion/",
  Skycoins: "https://chris.bolin.co/skycoins/",
  Shipwrecked: "http://www.blurb.com/books/1234410-shipwrecked",
  Travels: "https://rookievagabonds.tumblr.com/",

  // talks
  DinosaurJS: "https://www.youtube.com/watch?v=nhuvY0CT064",
  "SXSW me Convention": "https://www.youtube.com/watch?v=6wjqLAaCAyw",
  "Offline Websites": "https://www.youtube.com/watch?v=iavC1oWvtJ8&t=2591s",
  Debugging: "https://www.youtube.com/watch?v=ccG9L2Pg4io&t=1035",

  // press
  Lifehacker:
    "https://lifehacker.com/you-cant-read-this-website-until-you-turn-off-your-inte-1822776654",
  Vice:
    "https://motherboard.vice.com/en_us/article/kzzgjn/this-website-only-works-when-youre-offline",
  CBC:
    "http://www.cbc.ca/radio/spark/want-to-look-at-this-guy-s-website-go-offline-1.4281329",
  CJR:
    "https://www.cjr.org/innovations/disconnect-magazine-only-works-offline.php",
  "Le Monde":
    "http://www.lemonde.fr/big-browser/article/2017/08/29/et-si-se-deconnecter-vous-aidait-a-mieux-profiter-des-richesses-d-internet_5177910_4832693.html",
  "The Next Web":
    "https://thenextweb.com/insider/2017/08/21/this-manifesto-against-internet-addiction-can-only-be-viewed-offline/",

  // edu
  "Computational Engineering": "https://computationalengineering.mit.edu/",
  "numerical simulation of environmental impact":
    "http://dspace.mit.edu/handle/1721.1/82189",
  Email: "mailto:bolin.chris@gmail.com",
};

const Link = (props) => (
  <a
    href={links[props.children] || console.error("NOT FOUND:", props.children)}
    rel="noopener noreferrer"
    {...props}
  />
);

export const ClientOnlyLink = (props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), [setMounted]);
  if (mounted) return <Link {...props} />; // if mounted on client, render as usual
  return false; // if rendered on server
};

export default Link;
