import React from "react";

const fx = {
  limitUnit(x) {
    return x < 0 ? 0 : x < 1 ? x : 1;
  },
  isMobile() {
    return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|IEMobile/);
  }
};

const colors = [
  { value: "#42BAFF", barXScale: 5.2, gradientPosition: "25%" },
  { value: "#A33CE8", barXScale: 4.7, gradientPosition: "36%" },
  { value: "#E8BF3C", barXScale: 4.4, gradientPosition: "59%" },
  { value: "#6AFF40", barXScale: 4, gradientPosition: "81%" },
  { value: "#FF6E50", barXScale: 3.5, gradientPosition: "100%" }
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
  const height = fx.limitUnit(x) * 100;
  return (
    <div
      style={{
        width,
        height: height + "%",
        backgroundColor: color,
        left,
        position: "absolute",
        bottom: 0
      }}
    />
  );
};

const CardFront = ({ x, mounted }) => {
  const zIndex = x < 0.5 ? 1 : 0;
  if (!zIndex) return null;
  const scrollStyle = {
    opacity: 1 - 10 * x
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
    background: radialBackground
  };

  return <div className="card-face back" style={style}></div>;
};

const cardPlaneStyle = x => {
  const rotateX = 180 * (x < 0.5 ? x : fx.limitUnit(x * 2 - 0.5));
  const transform = `
      rotateZ(${90 * x}deg)
      rotateX(${rotateX}deg)
      translate3d(${-50 * x}px, 0, 0)
      scale(${1 + x * x * x * x * 20})
    `;

  return {
    transform,
    WebkitTransform: transform
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
  const opacity = fx.limitUnit(10 * (0.9 - x));
  const style = {
    transform,
    WebkitTransform: transform,
    color: `rgb(${grey},${grey},${grey})`,
    opacity,
    display: opacity > 0 ? "block" : "none"
  };
  return (
    <div className="arrow" style={style}>
      &darr;
    </div>
  );
};

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

  // contact
  Email: "<!--email_off-->mailto:bolin.chris@gmail.com<!--/email_off-->",
  Insta: "https://www.instagram.com/bolinchris/",
  Twitter: "https://twitter.com/bolinchris"
};

const A = props => (
  <a
    href={links[props.children] || console.error("NOT FOUND:", props.children)}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  />
);

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
        opacity: progress
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
        <b>[Contact]</b> <A>Twitter</A>, <A>Insta</A>.
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

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      mounted: false
    };
    // longer scroll for desktop users
    this.scrollLength = fx.isMobile() ? 1.5 : 3;
  }
  handleScroll(e) {
    const x = fx.limitUnit(
      window.scrollY / (window.innerHeight * (this.scrollLength - 1))
    );
    this.setState({ x });
  }
  componentDidMount() {
    const handler = this.handleScroll.bind(this);

    window.addEventListener("scroll", handler);
    window.addEventListener("resize", handler);
    window.addEventListener("touchmove", handler);

    this.setState({ mounted: true });
  }
  render() {
    const { x } = this.state;
    const backgroundTransitionPoint = 0.95;
    const backgroundAlpha =
      x > backgroundTransitionPoint
        ? (x - backgroundTransitionPoint) / (1 - backgroundTransitionPoint)
        : 0;
    const appStyle = {
      height: this.state.mounted ? `${this.scrollLength * 100}vh` : "auto",
      backgroundColor: `rgba(171, 166, 81, ${backgroundAlpha})`
    };
    return (
      <div className="app" style={appStyle}>
        <div className="container">
          <CardPlane x={x} mounted={this.state.mounted} />
          <Back x={x} />
        </div>
        <Arrow x={x} />
      </div>
    );
  }
}
