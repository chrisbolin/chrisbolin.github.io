import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

const appElement = document.getElementById("app");

const greeting = `
 /88
| 88
| 8888888   /888888  /88   /88
| 88__  88 /88__  88| 88  | 88
| 88  \\ 88| 88888888| 88  | 88
| 88  | 88| 88_____/| 88  | 88
| 88  | 88|  8888888|  8888888
|__/  |__/ \\_______/ \\____  88
                    /88  | 88
                   |  888888/
                    \\______/

say hi: bolin.chris@gmail.com

see source: https://github.com/chrisbolin/chrisbolin.github.io
`;

if (appElement) {
  ReactDOM.render(<App />, appElement);
  console.log(greeting);
} else {
  global.App = App;
}
