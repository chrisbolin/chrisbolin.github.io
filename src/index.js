import React from "react";
import ReactDOM from "react-dom";

import App from './app';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

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
`;

console.log(greeting);
console.log('source:');
console.log('https://github.com/chrisbolin/chrisbolin.github.io');
console.log('email:');
console.log('bolin.chris@gmail.com');
