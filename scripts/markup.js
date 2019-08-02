const fs = require("fs");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const noop = () => {};
spoofBrowser();

require("../bundle.js");

const App = global.App;
const renderedApp = ReactDOMServer.renderToString(React.createElement(App));

const template = fs.readFileSync("index.html", "utf8");
fs.writeFileSync(
  "index.html",
  template.replace("<!-- STATIC_RENDER -->", renderedApp)
);

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
