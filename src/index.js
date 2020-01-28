import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const appElement = document.getElementById("root");

const greeting = `hey there

source @ https://github.com/chrisbolin/chrisbolin.github.io`;

if (appElement) {
  ReactDOM.hydrate(<App />, appElement);
  console.log(greeting);
} else {
  global.App = App;
}
