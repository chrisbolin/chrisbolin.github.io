webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./pages/style.css ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-a);\\n  --color-transparent: rgba(0, 0, 0, 0);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::-moz-selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-highlight);\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-highlight);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  transition: all cubic-bezier(0, 0.99, 0.58, 1);\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 5vw;\\n  transform: scaleX(2.6) skewX(5deg);\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 25vw;\\n  transition: transform 350ms ease-out;\\n}\\n\\n.BackSection:hover h1 {\\n  transform: scaleX(4) skewX(5deg) rotateZ(-10deg);\\n  opacity: 0.9;\\n}\\n\\n.BackSection button {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection .BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection .BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  -webkit-hyphens: auto;\\n      -ms-hyphens: auto;\\n          hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/Users/chris/repos/chrisbolin.github.io/pages/style.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,yBAAyB;EACzB,iCAAiC;EACjC,sCAAsC;EACtC,qCAAqC;AACvC;;AAEA;EACE,8CAA8C;EAC9C,6CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,sCAAsC;EACtC,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;EAC3B,wCAAwC;AAC1C;;AAHA;EACE,2BAA2B;EAC3B,wCAAwC;AAC1C;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,UAAU;EACV,OAAO;AACT;;AAEA;EACE,UAAU;EACV,cAAc;EACd,MAAM;EACN,eAAe;AACjB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,uCAAuC;EACvC,2BAA2B;EAC3B,kBAAkB;EAClB,4EAA4E;AAC9E;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,qCAAqC;EACrC,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,oBAAoB,EAAE,uCAAuC;AAC/D;;AAEA;EACE,2BAA2B;EAC3B,YAAY;EACZ,aAAa;EACb,SAAS;EACT,kBAAkB;EAClB,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;EAChB,8CAA8C;EAC9C,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,gDAAgD;EAChD,YAAY;AACd;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;EACR,gBAAgB;EAChB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,0EAA0E;AAC5E;;AAEA;EACE,2EAA2E;AAC7E;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,qBAAa;MAAb,iBAAa;UAAb,aAAa;AACf;;AAEA;EACE,cAAc;EACd,0BAA0B;AAC5B;;AAEA;;EAEE,0EAA0E;EAC1E,4BAA4B;EAC5B,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB\",\"file\":\"style.css\",\"sourcesContent\":[\":root {\\n  --color-a: #7830cf;\\n  --color-b: #ab32d9;\\n  --color-c: #c236c2;\\n  --color-d: #d93285;\\n  --color-e: #cf3030;\\n  --color-whitish: #f2f2f2;\\n  --color-blackish: #240f1f;\\n  --color-highlight: var(--color-d);\\n  --color-behind-curtain: var(--color-a);\\n  --color-transparent: rgba(0, 0, 0, 0);\\n}\\n\\nhtml {\\n  font-family: Helvetica Neue, Arial, sans-serif;\\n  background-color: var(--color-behind-curtain);\\n}\\n\\nbody {\\n  margin: 0;\\n  background-color: var(--color-whitish);\\n  overflow-x: hidden;\\n}\\n\\nbody ::selection {\\n  color: var(--color-whitish);\\n  background-color: var(--color-highlight);\\n}\\n\\na,\\nbutton {\\n  cursor: pointer;\\n}\\n\\n.skip {\\n  position: fixed;\\n  top: -100%;\\n  left: 0;\\n}\\n\\n.skip:focus {\\n  z-index: 2;\\n  font-size: 6vw;\\n  top: 0;\\n  transform: none;\\n}\\n\\n.app {\\n  background-color: var(--color-whitish);\\n}\\n\\n.container {\\n  position: fixed;\\n  width: 100%;\\n}\\n\\n.card-plane {\\n  position: absolute;\\n  width: 182px;\\n  height: 320px;\\n  margin: 50px calc(50vw - 91px);\\n}\\n\\n.card-face {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  background: var(--color-blackish);\\n}\\n\\n.front {\\n  background-color: var(--color-blackish);\\n  color: var(--color-whitish);\\n  font-style: italic;\\n  font-family: \\\"Baskerville\\\", \\\"Times New Roman\\\", \\\"Droid Serif\\\", \\\"Times\\\", serif;\\n}\\n\\n.title {\\n  font-size: 22px;\\n  padding: 17px 11px;\\n}\\n\\n.Opener {\\n  font-weight: 700;\\n}\\n\\nhr {\\n  border-style: solid;\\n  margin: 15px 0;\\n  color: inherit;\\n}\\n\\n.scroll {\\n  position: absolute;\\n  text-align: center;\\n  width: 100%;\\n  color: var(--color-blackish);\\n  bottom: -30px;\\n  font-size: 16px;\\n}\\n\\n.arrow {\\n  font-size: 24px;\\n  font-family: \\\"Times New Roman\\\", serif;\\n  position: fixed;\\n  text-align: center;\\n  width: 100%;\\n  top: 320px;\\n  pointer-events: none; /* allow clicking \\\"behind\\\" the arrow\\\" */\\n}\\n\\n.Back {\\n  color: var(--color-whitish);\\n  width: 100vw;\\n  height: 100vh;\\n  margin: 0;\\n  position: relative;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-template-rows: 1fr 1fr;\\n}\\n\\n.BackSection {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  overflow: hidden;\\n  transition: all cubic-bezier(0, 0.99, 0.58, 1);\\n  cursor: pointer;\\n  z-index: 1;\\n}\\n\\n.BackSection.active {\\n  transform: scale(2);\\n  z-index: 2;\\n  cursor: unset;\\n}\\n\\n.BackSection.transitioning {\\n  z-index: 2;\\n}\\n\\n.BackSection h1 {\\n  font-size: 5vw;\\n  transform: scaleX(2.6) skewX(5deg);\\n  display: inline-block;\\n  text-align: center;\\n  max-width: 25vw;\\n  transition: transform 350ms ease-out;\\n}\\n\\n.BackSection:hover h1 {\\n  transform: scaleX(4) skewX(5deg) rotateZ(-10deg);\\n  opacity: 0.9;\\n}\\n\\n.BackSection button {\\n  color: inherit;\\n  background: none;\\n  font-size: inherit;\\n  border: none;\\n  text-align: inherit;\\n}\\n\\n.BackSection .BackSection-close {\\n  position: absolute;\\n  top: -3vmin;\\n  right: 0;\\n  font-size: 8vmin;\\n  padding: 2vmin;\\n  cursor: pointer;\\n}\\n\\n.BackSection .BackSection-close:hover {\\n  color: var(--color-blackish);\\n}\\n\\n.BackSection:nth-of-type(4n + 1) {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-d));\\n}\\n\\n.BackSection:nth-of-type(4n + 2) {\\n  background: -webkit-linear-gradient(-50deg, var(--color-b), var(--color-e));\\n}\\n\\n.BackSection:nth-of-type(4n + 3) {\\n  background: -webkit-linear-gradient(30deg, var(--color-e), var(--color-b));\\n}\\n\\n.BackSection:nth-of-type(4n + 4) {\\n  background: -webkit-linear-gradient(140deg, var(--color-e), var(--color-a));\\n}\\n\\n.BackSection-children {\\n  line-height: 1.25;\\n  margin: 2vw;\\n  hyphens: auto;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: underline;\\n}\\n\\na:hover,\\na:focus {\\n  background: -webkit-linear-gradient(50deg, var(--color-a), var(--color-e));\\n  color: var(--color-blackish);\\n  text-decoration: none;\\n}\\n\\n.hidden {\\n  opacity: 0 !important;\\n}\\n\"]}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdHlsZS5jc3M/Nzk2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHNDQUFzQywyQ0FBMkMsMENBQTBDLEdBQUcsVUFBVSxtREFBbUQsa0RBQWtELEdBQUcsVUFBVSxjQUFjLDJDQUEyQyx1QkFBdUIsR0FBRywyQkFBMkIsZ0NBQWdDLDZDQUE2QyxHQUFHLHNCQUFzQixnQ0FBZ0MsNkNBQTZDLEdBQUcsZ0JBQWdCLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLGVBQWUsWUFBWSxHQUFHLGlCQUFpQixlQUFlLG1CQUFtQixXQUFXLG9CQUFvQixHQUFHLFVBQVUsMkNBQTJDLEdBQUcsZ0JBQWdCLG9CQUFvQixnQkFBZ0IsR0FBRyxpQkFBaUIsdUJBQXVCLGlCQUFpQixrQkFBa0IsbUNBQW1DLEdBQUcsZ0JBQWdCLGdCQUFnQixpQkFBaUIsdUJBQXVCLHNDQUFzQyxHQUFHLFlBQVksNENBQTRDLGdDQUFnQyx1QkFBdUIseUZBQXlGLEdBQUcsWUFBWSxvQkFBb0IsdUJBQXVCLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxRQUFRLHdCQUF3QixtQkFBbUIsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLGdCQUFnQixpQ0FBaUMsa0JBQWtCLG9CQUFvQixHQUFHLFlBQVksb0JBQW9CLDRDQUE0QyxvQkFBb0IsdUJBQXVCLGdCQUFnQixlQUFlLHlCQUF5QiwrQ0FBK0MsV0FBVyxnQ0FBZ0MsaUJBQWlCLGtCQUFrQixjQUFjLHVCQUF1QixrQkFBa0IsbUNBQW1DLGdDQUFnQyxHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsbURBQW1ELG9CQUFvQixlQUFlLEdBQUcseUJBQXlCLHdCQUF3QixlQUFlLGtC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LHdCQUF3QixtQkFBbUIsbUJBQW1CLEdBQUcsYUFBYSx1QkFBdUIsdUJBQXVCLGdCQUFnQixpQ0FBaUMsa0JBQWtCLG9CQUFvQixHQUFHLFlBQVksb0JBQW9CLDRDQUE0QyxvQkFBb0IsdUJBQXVCLGdCQUFnQixlQUFlLHlCQUF5QiwrQ0FBK0MsV0FBVyxnQ0FBZ0MsaUJBQWlCLGtCQUFrQixjQUFjLHVCQUF1QixrQkFBa0IsbUNBQW1DLGdDQUFnQyxHQUFHLGtCQUFrQixrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsbURBQW1ELG9CQUFvQixlQUFlLEdBQUcseUJBQXlCLHdCQUF3QixlQUFlLGtCQUFrQixHQUFHLGdDQUFnQyxlQUFlLEdBQUcscUJBQXFCLG1CQUFtQix1Q0FBdUMsMEJBQTBCLHVCQUF1QixvQkFBb0IseUNBQXlDLEdBQUcsMkJBQTJCLHFEQUFxRCxpQkFBaUIsR0FBRyx5QkFBeUIsbUJBQW1CLHFCQUFxQix1QkFBdUIsaUJBQWlCLHdCQUF3QixHQUFHLHFDQUFxQyx1QkFBdUIsZ0JBQWdCLGFBQWEscUJBQXFCLG1CQUFtQixvQkFBb0IsR0FBRywyQ0FBMkMsaUNBQWlDLEdBQUcsc0NBQXNDLCtFQUErRSxHQUFHLHNDQUFzQyxnRkFBZ0YsR0FBRyxzQ0FBc0MsK0VBQStFLEdBQUcsc0NBQXNDLGdGQUFnRixHQUFHLDJCQUEyQixzQkFBc0IsZ0JBQWdCLGtCQUFrQixHQUFHLE9BQU8sbUJBQW1CLCtCQUErQixHQUFHLHVCQUF1QiwrRUFBK0UsaUNBQWlDLDBCQUEwQixHQUFHLGFBQWEsMEJBQTBCLEdBQUcsS0FBSztBQUMxclQ7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/IS4vcGFnZXMvc3R5bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jb2xvci1hOiAjNzgzMGNmO1xcbiAgLS1jb2xvci1iOiAjYWIzMmQ5O1xcbiAgLS1jb2xvci1jOiAjYzIzNmMyO1xcbiAgLS1jb2xvci1kOiAjZDkzMjg1O1xcbiAgLS1jb2xvci1lOiAjY2YzMDMwO1xcbiAgLS1jb2xvci13aGl0aXNoOiAjZjJmMmYyO1xcbiAgLS1jb2xvci1ibGFja2lzaDogIzI0MGYxZjtcXG4gIC0tY29sb3ItaGlnaGxpZ2h0OiB2YXIoLS1jb2xvci1kKTtcXG4gIC0tY29sb3ItYmVoaW5kLWN1cnRhaW46IHZhcigtLWNvbG9yLWEpO1xcbiAgLS1jb2xvci10cmFuc3BhcmVudDogcmdiYSgwLCAwLCAwLCAwKTtcXG59XFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmVoaW5kLWN1cnRhaW4pO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5ib2R5IDo6LW1vei1zZWxlY3Rpb24ge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItaGlnaGxpZ2h0KTtcXG59XFxuXFxuYm9keSA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xcbn1cXG5cXG5hLFxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5za2lwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uc2tpcDpmb2N1cyB7XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1zaXplOiA2dnc7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5hcHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLXBsYW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxODJweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBtYXJnaW46IDUwcHggY2FsYyg1MHZ3IC0gOTFweCk7XFxufVxcblxcbi5jYXJkLWZhY2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbi5mcm9udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogXFxcIkJhc2tlcnZpbGxlXFxcIiwgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFxcXCJEcm9pZCBTZXJpZlxcXCIsIFxcXCJUaW1lc1xcXCIsIHNlcmlmO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgcGFkZGluZzogMTdweCAxMXB4O1xcbn1cXG5cXG4uT3BlbmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXJnaW46IDE1cHggMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2Nyb2xsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hcnJvdyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDMyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIGFsbG93IGNsaWNraW5nIFxcXCJiZWhpbmRcXFwiIHRoZSBhcnJvd1xcXCIgKi9cXG59XFxuXFxuLkJhY2sge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC41OCwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24uYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICB6LWluZGV4OiAyO1xcbiAgY3Vyc29yOiB1bnNldDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLnRyYW5zaXRpb25pbmcge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMi42KSBza2V3WCg1ZGVnKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjV2dztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOmhvdmVyIGgxIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDQpIHNrZXdYKDVkZWcpIHJvdGF0ZVooLTEwZGVnKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIGJ1dHRvbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gLkJhY2tTZWN0aW9uLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTN2bWluO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDh2bWluO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiAuQmFja1NlY3Rpb24tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMSkge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWNvbG9yLWEpLCB2YXIoLS1jb2xvci1kKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDIpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC01MGRlZywgdmFyKC0tY29sb3ItYiksIHZhcigtLWNvbG9yLWUpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMykge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHZhcigtLWNvbG9yLWUpLCB2YXIoLS1jb2xvci1iKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDQpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0MGRlZywgdmFyKC0tY29sb3ItZSksIHZhcigtLWNvbG9yLWEpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNoaWxkcmVuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAydnc7XFxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XFxuICAgICAgLW1zLWh5cGhlbnM6IGF1dG87XFxuICAgICAgICAgIGh5cGhlbnM6IGF1dG87XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYTpob3ZlcixcXG5hOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDUwZGVnLCB2YXIoLS1jb2xvci1hKSwgdmFyKC0tY29sb3ItZSkpO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9jaHJpcy9yZXBvcy9jaHJpc2JvbGluLmdpdGh1Yi5pby9wYWdlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsaUNBQWlDO0VBQ2pDLHNDQUFzQztFQUN0QyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsU0FBUztFQUNULHNDQUFzQztFQUN0QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isd0NBQXdDO0FBQzFDOztBQUhBO0VBQ0UsMkJBQTJCO0VBQzNCLHdDQUF3QztBQUMxQzs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLE1BQU07RUFDTixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLDRFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixvQkFBb0IsRUFBRSx1Q0FBdUM7QUFDL0Q7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLDhDQUE4QztFQUM5QyxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdEQUFnRDtFQUNoRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsMEVBQTBFO0FBQzVFOztBQUVBO0VBQ0UsMkVBQTJFO0FBQzdFOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxxQkFBYTtNQUFiLGlCQUFhO1VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSwwRUFBMEU7RUFDMUUsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29sb3ItYTogIzc4MzBjZjtcXG4gIC0tY29sb3ItYjogI2FiMzJkOTtcXG4gIC0tY29sb3ItYzogI2MyMzZjMjtcXG4gIC0tY29sb3ItZDogI2Q5MzI4NTtcXG4gIC0tY29sb3ItZTogI2NmMzAzMDtcXG4gIC0tY29sb3Itd2hpdGlzaDogI2YyZjJmMjtcXG4gIC0tY29sb3ItYmxhY2tpc2g6ICMyNDBmMWY7XFxuICAtLWNvbG9yLWhpZ2hsaWdodDogdmFyKC0tY29sb3ItZCk7XFxuICAtLWNvbG9yLWJlaGluZC1jdXJ0YWluOiB2YXIoLS1jb2xvci1hKTtcXG4gIC0tY29sb3ItdHJhbnNwYXJlbnQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJlaGluZC1jdXJ0YWluKTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0aXNoKTtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuYm9keSA6OnNlbGVjdGlvbiB7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1oaWdobGlnaHQpO1xcbn1cXG5cXG5hLFxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5za2lwIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogLTEwMCU7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4uc2tpcDpmb2N1cyB7XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1zaXplOiA2dnc7XFxuICB0b3A6IDA7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi5hcHAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLXBsYW5lIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxODJweDtcXG4gIGhlaWdodDogMzIwcHg7XFxuICBtYXJnaW46IDUwcHggY2FsYyg1MHZ3IC0gOTFweCk7XFxufVxcblxcbi5jYXJkLWZhY2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxufVxcblxcbi5mcm9udCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICBjb2xvcjogdmFyKC0tY29sb3Itd2hpdGlzaCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LWZhbWlseTogXFxcIkJhc2tlcnZpbGxlXFxcIiwgXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIFxcXCJEcm9pZCBTZXJpZlxcXCIsIFxcXCJUaW1lc1xcXCIsIHNlcmlmO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgcGFkZGluZzogMTdweCAxMXB4O1xcbn1cXG5cXG4uT3BlbmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmhyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBtYXJnaW46IDE1cHggMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uc2Nyb2xsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG4gIGJvdHRvbTogLTMwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5hcnJvdyB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LWZhbWlseTogXFxcIlRpbWVzIE5ldyBSb21hblxcXCIsIHNlcmlmO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDMyMHB4O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIGFsbG93IGNsaWNraW5nIFxcXCJiZWhpbmRcXFwiIHRoZSBhcnJvd1xcXCIgKi9cXG59XFxuXFxuLkJhY2sge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRpc2gpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG1hcmdpbjogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IGFsbCBjdWJpYy1iZXppZXIoMCwgMC45OSwgMC41OCwgMSk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uQmFja1NlY3Rpb24uYWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XFxuICB6LWluZGV4OiAyO1xcbiAgY3Vyc29yOiB1bnNldDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLnRyYW5zaXRpb25pbmcge1xcbiAgei1pbmRleDogMjtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIGgxIHtcXG4gIGZvbnQtc2l6ZTogNXZ3O1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMi42KSBza2V3WCg1ZGVnKTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMjV2dztcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzNTBtcyBlYXNlLW91dDtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOmhvdmVyIGgxIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDQpIHNrZXdYKDVkZWcpIHJvdGF0ZVooLTEwZGVnKTtcXG4gIG9wYWNpdHk6IDAuOTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uIGJ1dHRvbiB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBpbmhlcml0O1xcbn1cXG5cXG4uQmFja1NlY3Rpb24gLkJhY2tTZWN0aW9uLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogLTN2bWluO1xcbiAgcmlnaHQ6IDA7XFxuICBmb250LXNpemU6IDh2bWluO1xcbiAgcGFkZGluZzogMnZtaW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5CYWNrU2VjdGlvbiAuQmFja1NlY3Rpb24tY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNraXNoKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMSkge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNTBkZWcsIHZhcigtLWNvbG9yLWEpLCB2YXIoLS1jb2xvci1kKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDIpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC01MGRlZywgdmFyKC0tY29sb3ItYiksIHZhcigtLWNvbG9yLWUpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uOm50aC1vZi10eXBlKDRuICsgMykge1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzBkZWcsIHZhcigtLWNvbG9yLWUpLCB2YXIoLS1jb2xvci1iKSk7XFxufVxcblxcbi5CYWNrU2VjdGlvbjpudGgtb2YtdHlwZSg0biArIDQpIHtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDE0MGRlZywgdmFyKC0tY29sb3ItZSksIHZhcigtLWNvbG9yLWEpKTtcXG59XFxuXFxuLkJhY2tTZWN0aW9uLWNoaWxkcmVuIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgbWFyZ2luOiAydnc7XFxuICBoeXBoZW5zOiBhdXRvO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmE6aG92ZXIsXFxuYTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg1MGRlZywgdmFyKC0tY29sb3ItYSksIHZhcigtLWNvbG9yLWUpKTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFja2lzaCk7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cIl19XSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./pages/style.css\n");

/***/ })

})