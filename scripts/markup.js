spoofBrowser();

const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('../bundle.js');

const App = global.App;
const template = fs.readFileSync('index.template.html', 'utf8');
const renderedApp = ReactDOMServer.renderToString(
  React.createElement(App)
);

console.log(
  template.replace('{{APP}}', renderedApp)
);

function spoofBrowser() {
  window = {};
  navigator = {
    userAgent: {
      match() { return false },
    }
  };
  document = {
    getElementById() { return false; },
  };
};
