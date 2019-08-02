spoofBrowser();

const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
require('../bundle.js');

const App = global.App;
const renderedApp = ReactDOMServer.renderToString(
  React.createElement(App)
);

const template = fs.readFileSync('index.html', 'utf8');
fs.writeFileSync('index.html', template.replace('{{ APP }}', renderedApp));

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
