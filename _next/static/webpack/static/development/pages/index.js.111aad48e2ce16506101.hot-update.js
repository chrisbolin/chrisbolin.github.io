webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/back-section.js":
/*!*****************************!*\
  !*** ./src/back-section.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BackSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _character_count__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./character-count */ \"./src/character-count.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\nvar _jsxFileName = \"/Users/chris/repos/chrisbolin.github.io/src/back-section.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar TRANSITION_MS = 500;\nvar windowFallback = {\n  innerHeight: 100,\n  innerWidth: 100\n};\n\nfunction getWindow() {\n  \"object\";\n  return true ? window : undefined;\n}\n\nfunction BackSection(_ref) {\n  _s();\n\n  var title = _ref.title,\n      children = _ref.children,\n      onOpen = _ref.onOpen,\n      onClose = _ref.onClose,\n      active = _ref.active,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      transitioning = _useState[0],\n      setTransitioning = _useState[1];\n\n  var transformOrigin = \"\".concat(index < 2 ? \"top\" : \"bottom\", \" \").concat(index % 2 === 0 ? \"left\" : \"right\");\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setTransitioning(true);\n    setTimeout(function () {\n      return setTransitioning(false);\n    }, TRANSITION_MS);\n  }, [active]);\n  var characters = Object(_character_count__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(children);\n  var fontSize = 0.5 * Math.sqrt(getWindow().innerHeight * getWindow().innerWidth / characters);\n  var style = {\n    transformOrigin: transformOrigin,\n    transitionDuration: \"\".concat(TRANSITION_MS, \"ms\")\n  };\n  var h1ScaleY = Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"limit\"])(2.9 * getWindow().innerHeight / getWindow().innerWidth, 0, 3);\n  var childrenStyle = {\n    fontSize: fontSize\n  };\n  var h1Style = {\n    transform: \"scaleY(\".concat(h1ScaleY, \") skewX(3deg)\")\n  };\n  return __jsx(\"div\", {\n    style: style,\n    className: \"BackSection \".concat(active && \"active\", \" \").concat(transitioning && \"transitioning\"),\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, active && __jsx(\"button\", {\n    className: \"BackSection-close\",\n    onClick: onClose,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"\\u2A2F\"), !active && __jsx(\"h1\", {\n    style: h1Style,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    onClick: onOpen,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 11\n    }\n  }, title)), active && __jsx(\"div\", {\n    className: \"BackSection-children\",\n    style: {\n      fontSize: fontSize\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }\n  }, __jsx(\"b\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 11\n    }\n  }, title), \": \", children));\n}\n\n_s(BackSection, \"n6ni0V3cOBBq7hRVhjgfxeqN3Mc=\");\n\n_c = BackSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"BackSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmFjay1zZWN0aW9uLmpzP2IxOTQiXSwibmFtZXMiOlsiVFJBTlNJVElPTl9NUyIsIndpbmRvd0ZhbGxiYWNrIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwiZ2V0V2luZG93Iiwid2luZG93IiwiQmFja1NlY3Rpb24iLCJ0aXRsZSIsImNoaWxkcmVuIiwib25PcGVuIiwib25DbG9zZSIsImFjdGl2ZSIsImluZGV4IiwidXNlU3RhdGUiLCJ0cmFuc2l0aW9uaW5nIiwic2V0VHJhbnNpdGlvbmluZyIsInRyYW5zZm9ybU9yaWdpbiIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyQ291bnQiLCJmb250U2l6ZSIsIk1hdGgiLCJzcXJ0Iiwic3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJoMVNjYWxlWSIsImxpbWl0IiwiY2hpbGRyZW5TdHlsZSIsImgxU3R5bGUiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLEdBQXRCO0FBRUEsSUFBTUMsY0FBYyxHQUFHO0FBQ3JCQyxhQUFXLEVBQUUsR0FEUTtBQUVyQkMsWUFBVSxFQUFFO0FBRlMsQ0FBdkI7O0FBS0EsU0FBU0MsU0FBVCxHQUFxQjtBQUNuQjtBQUNBLFNBQU8sT0FBZ0NDLE1BQWhDLEdBQXlDSixTQUFoRDtBQUNEOztBQUVjLFNBQVNLLFdBQVQsT0FPWjtBQUFBOztBQUFBLE1BTkRDLEtBTUMsUUFOREEsS0FNQztBQUFBLE1BTERDLFFBS0MsUUFMREEsUUFLQztBQUFBLE1BSkRDLE1BSUMsUUFKREEsTUFJQztBQUFBLE1BSERDLE9BR0MsUUFIREEsT0FHQztBQUFBLE1BRkRDLE1BRUMsUUFGREEsTUFFQztBQUFBLE1BRERDLEtBQ0MsUUFEREEsS0FDQzs7QUFBQSxrQkFDeUNDLHNEQUFRLENBQUMsS0FBRCxDQURqRDtBQUFBLE1BQ01DLGFBRE47QUFBQSxNQUNxQkMsZ0JBRHJCOztBQUVELE1BQU1DLGVBQWUsYUFBTUosS0FBSyxHQUFHLENBQVIsR0FBWSxLQUFaLEdBQW9CLFFBQTFCLGNBQ25CQSxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWQsR0FBa0IsTUFBbEIsR0FBMkIsT0FEUixDQUFyQjtBQUdBSyx5REFBUyxDQUFDLFlBQU07QUFDZEYsb0JBQWdCLENBQUMsSUFBRCxDQUFoQjtBQUNBRyxjQUFVLENBQUM7QUFBQSxhQUFNSCxnQkFBZ0IsQ0FBQyxLQUFELENBQXRCO0FBQUEsS0FBRCxFQUFnQ2YsYUFBaEMsQ0FBVjtBQUNELEdBSFEsRUFHTixDQUFDVyxNQUFELENBSE0sQ0FBVDtBQUtBLE1BQU1RLFVBQVUsR0FBR0MsZ0VBQWMsQ0FBQ1osUUFBRCxDQUFqQztBQUNBLE1BQU1hLFFBQVEsR0FDWixNQUNBQyxJQUFJLENBQUNDLElBQUwsQ0FBV25CLFNBQVMsR0FBR0YsV0FBWixHQUEwQkUsU0FBUyxHQUFHRCxVQUF2QyxHQUFxRGdCLFVBQS9ELENBRkY7QUFHQSxNQUFNSyxLQUFLLEdBQUc7QUFDWlIsbUJBQWUsRUFBZkEsZUFEWTtBQUVaUyxzQkFBa0IsWUFBS3pCLGFBQUw7QUFGTixHQUFkO0FBS0EsTUFBTTBCLFFBQVEsR0FBR0Msb0RBQUssQ0FDbkIsTUFBTXZCLFNBQVMsR0FBR0YsV0FBbkIsR0FBa0NFLFNBQVMsR0FBR0QsVUFEMUIsRUFFcEIsQ0FGb0IsRUFHcEIsQ0FIb0IsQ0FBdEI7QUFNQSxNQUFNeUIsYUFBYSxHQUFHO0FBQUVQLFlBQVEsRUFBUkE7QUFBRixHQUF0QjtBQUNBLE1BQU1RLE9BQU8sR0FBRztBQUFFQyxhQUFTLG1CQUFZSixRQUFaO0FBQVgsR0FBaEI7QUFFQSxTQUNFO0FBQ0UsU0FBSyxFQUFFRixLQURUO0FBRUUsYUFBUyx3QkFBaUJiLE1BQU0sSUFBSSxRQUEzQixjQUNQRyxhQUFhLElBQUksZUFEVixDQUZYO0FBS0UsV0FBTyxFQUFFTCxNQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0UsTUFBTSxJQUNMO0FBQVEsYUFBUyxFQUFDLG1CQUFsQjtBQUFzQyxXQUFPLEVBQUVELE9BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixFQVlHLENBQUNDLE1BQUQsSUFDQztBQUFJLFNBQUssRUFBRWtCLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsV0FBTyxFQUFFcEIsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQkYsS0FBMUIsQ0FERixDQWJKLEVBaUJHSSxNQUFNLElBQ0w7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsU0FBSyxFQUFFO0FBQUVVLGNBQVEsRUFBUkE7QUFBRixLQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJZCxLQUFKLENBREYsUUFDbUJDLFFBRG5CLENBbEJKLENBREY7QUF5QkQ7O0dBNUR1QkYsVzs7S0FBQUEsVyIsImZpbGUiOiIuL3NyYy9iYWNrLXNlY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2hhcmFjdGVyQ291bnQgZnJvbSBcIi4vY2hhcmFjdGVyLWNvdW50XCI7XG5pbXBvcnQgeyBsaW1pdFVuaXQsIGxpbWl0IH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgVFJBTlNJVElPTl9NUyA9IDUwMDtcblxuY29uc3Qgd2luZG93RmFsbGJhY2sgPSB7XG4gIGlubmVySGVpZ2h0OiAxMDAsXG4gIGlubmVyV2lkdGg6IDEwMCxcbn07XG5cbmZ1bmN0aW9uIGdldFdpbmRvdygpIHtcbiAgdHlwZW9mIHdpbmRvdztcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB3aW5kb3dGYWxsYmFjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja1NlY3Rpb24oe1xuICB0aXRsZSxcbiAgY2hpbGRyZW4sXG4gIG9uT3BlbixcbiAgb25DbG9zZSxcbiAgYWN0aXZlLFxuICBpbmRleCxcbn0pIHtcbiAgY29uc3QgW3RyYW5zaXRpb25pbmcsIHNldFRyYW5zaXRpb25pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW4gPSBgJHtpbmRleCA8IDIgPyBcInRvcFwiIDogXCJib3R0b21cIn0gJHtcbiAgICBpbmRleCAlIDIgPT09IDAgPyBcImxlZnRcIiA6IFwicmlnaHRcIlxuICB9YDtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUcmFuc2l0aW9uaW5nKHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VHJhbnNpdGlvbmluZyhmYWxzZSksIFRSQU5TSVRJT05fTVMpO1xuICB9LCBbYWN0aXZlXSk7XG5cbiAgY29uc3QgY2hhcmFjdGVycyA9IGNoYXJhY3RlckNvdW50KGNoaWxkcmVuKTtcbiAgY29uc3QgZm9udFNpemUgPVxuICAgIDAuNSAqXG4gICAgTWF0aC5zcXJ0KChnZXRXaW5kb3coKS5pbm5lckhlaWdodCAqIGdldFdpbmRvdygpLmlubmVyV2lkdGgpIC8gY2hhcmFjdGVycyk7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHRyYW5zZm9ybU9yaWdpbixcbiAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke1RSQU5TSVRJT05fTVN9bXNgLFxuICB9O1xuXG4gIGNvbnN0IGgxU2NhbGVZID0gbGltaXQoXG4gICAgKDIuOSAqIGdldFdpbmRvdygpLmlubmVySGVpZ2h0KSAvIGdldFdpbmRvdygpLmlubmVyV2lkdGgsXG4gICAgMCxcbiAgICAzXG4gICk7XG5cbiAgY29uc3QgY2hpbGRyZW5TdHlsZSA9IHsgZm9udFNpemUgfTtcbiAgY29uc3QgaDFTdHlsZSA9IHsgdHJhbnNmb3JtOiBgc2NhbGVZKCR7aDFTY2FsZVl9KSBza2V3WCgzZGVnKWAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17YEJhY2tTZWN0aW9uICR7YWN0aXZlICYmIFwiYWN0aXZlXCJ9ICR7XG4gICAgICAgIHRyYW5zaXRpb25pbmcgJiYgXCJ0cmFuc2l0aW9uaW5nXCJcbiAgICAgIH1gfVxuICAgICAgb25DbGljaz17b25PcGVufVxuICAgID5cbiAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWNsb3NlXCIgb25DbGljaz17b25DbG9zZX0+XG4gICAgICAgICAg4qivXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKX1cbiAgICAgIHshYWN0aXZlICYmIChcbiAgICAgICAgPGgxIHN0eWxlPXtoMVN0eWxlfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uT3Blbn0+e3RpdGxlfTwvYnV0dG9uPlxuICAgICAgICA8L2gxPlxuICAgICAgKX1cbiAgICAgIHthY3RpdmUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhY2tTZWN0aW9uLWNoaWxkcmVuXCIgc3R5bGU9e3sgZm9udFNpemUgfX0+XG4gICAgICAgICAgPGI+e3RpdGxlfTwvYj46IHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/back-section.js\n");

/***/ })

})