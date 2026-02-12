import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <filter id="xerox">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.01 0.03"
                  numOctaves="10"
                  result="noise"
                />
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="noise"
                  scale="5"
                  xChannelSelector="R"
                  yChannelSelector="R"
                />
              </filter>
            </defs>
          </svg>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
