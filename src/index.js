import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const appElement = document.getElementById("root");

const greeting = `hey there

source @ https://github.com/chrisbolin/chrisbolin.github.io`;

if (appElement) {
  if (window.__REACT_HOT_LOADER__) {
    // client + dev mode
    ReactDOM.render(<App />, appElement);
  } else {
    // render + prod mode
    ReactDOM.hydrate(<App />, appElement);
  }
  console.log(greeting);
} else {
  // server
  global.App = App;
}
