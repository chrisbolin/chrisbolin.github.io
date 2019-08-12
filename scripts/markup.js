const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
var htmlMinify = require("html-minifier").minify;

const noop = () => {};
spoofBrowser();

require("../bundle.js");

const App = global.App;
const renderedApp = ReactDOMServer.renderToString(React.createElement(App));

const markupTemplate = fs.readFileSync("index.html", "utf8");
const markupRendered = markupTemplate.replace(
  "<!-- STATIC_RENDER -->",
  renderedApp
);
const markupMinified = htmlMinify(markupRendered, {
  minifyCSS: true,
  removeTagWhitespace: true,
  collapseWhitespace: true,
  collapseInlineTagWhitespace: true
});

fs.writeFileSync("index.html", markupMinified);

function spoofBrowser() {
  window = {};
  navigator = {
    userAgent: {
      match: noop
    }
  };
  document = {
    getElementById: noop
  };
}
