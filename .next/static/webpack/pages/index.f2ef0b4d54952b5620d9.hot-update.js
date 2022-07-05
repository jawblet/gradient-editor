"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./sections/Gradient.js":
/*!******************************!*\
  !*** ./sections/Gradient.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stores_usePageStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/usePageStore */ \"./stores/usePageStore.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _excluded = [\"children\"];\n\nvar _jsxFileName = \"/Users/juliabell/gradient-editor/sections/Gradient.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar Gradient = function Gradient(_ref) {\n  var children = _ref.children,\n      props = (0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n  console.log(props); //const [colors, setColors] = useState(null);\n\n  var blockListener = function blockListener(data) {\n    var count = _stores_usePageStore__WEBPACK_IMPORTED_MODULE_3__.default.getState().wordCount; // total word count\n\n    var sizeArray = data.map(function (el) {\n      return {\n        color: el.color,\n        size: el.wordCount / count * 100\n      };\n    }).filter(function (el) {\n      return el.color;\n    });\n    var startColor = {\n      color: \"#fff\",\n      size: 0\n    }; // convert to % out of 100%\n\n    var percentArray = [startColor].concat((0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sizeArray)).map(function (el, i, arr) {\n      var reducer = function reducer(prev, curr) {\n        return {\n          color: curr.color,\n          size: Math.round(prev.size + curr.size)\n        };\n      };\n\n      var newArr = arr.slice(0, i + 1);\n      return newArr.reduce(reducer);\n    });\n    var stringArr = percentArray.map(function (vals) {\n      return \"\".concat(vals.color, \" \").concat(vals.size, \"%\");\n    });\n    props.setGradient(stringArr.join(', '));\n  };\n\n  _stores_usePageStore__WEBPACK_IMPORTED_MODULE_3__.default.subscribe(blockListener, function (state) {\n    return state.blocks;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bg),\n    style: {\n      background: props.gradient ? \"linear-gradient(\".concat(props.gradient, \")\") : \"#fff\"\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Gradient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gradient);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gradient\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9HcmFkaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1HLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQTRCO0FBQUEsTUFBekJDLFFBQXlCLFFBQXpCQSxRQUF5QjtBQUFBLE1BQVpDLEtBQVk7O0FBQ3pDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQUR5QyxDQUd6Qzs7QUFFQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUM1QixRQUFNQyxLQUFLLEdBQUdULGtFQUFBLEdBQXdCVyxTQUF0QyxDQUQ0QixDQUNnQzs7QUFFNUQsUUFBTUMsU0FBUyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFBQyxFQUFFLEVBQUk7QUFDN0IsYUFBTztBQUFDQyxRQUFBQSxLQUFLLEVBQUVELEVBQUUsQ0FBQ0MsS0FBWDtBQUFrQkMsUUFBQUEsSUFBSSxFQUFHRixFQUFFLENBQUNILFNBQUgsR0FBZUYsS0FBaEIsR0FBeUI7QUFBakQsT0FBUDtBQUE2RCxLQUQvQyxFQUNrRFEsTUFEbEQsQ0FDeUQsVUFBQUgsRUFBRTtBQUFBLGFBQUlBLEVBQUUsQ0FBQ0MsS0FBUDtBQUFBLEtBRDNELENBQWxCO0FBR0EsUUFBTUcsVUFBVSxHQUFHO0FBQUNILE1BQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxJQUFJLEVBQUU7QUFBdEIsS0FBbkIsQ0FONEIsQ0FRNUI7O0FBQ0EsUUFBTUcsWUFBWSxHQUFHLENBQUNELFVBQUQsNElBQWdCTixTQUFoQixHQUEyQkMsR0FBM0IsQ0FBK0IsVUFBQ0MsRUFBRCxFQUFLTSxDQUFMLEVBQVFDLEdBQVIsRUFBZ0I7QUFDaEUsVUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLEVBQWdCO0FBQUUsZUFBTztBQUNyQ1QsVUFBQUEsS0FBSyxFQUFFUyxJQUFJLENBQUNULEtBRHlCO0FBRXJDQyxVQUFBQSxJQUFJLEVBQUVTLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxJQUFJLENBQUNQLElBQUwsR0FBWVEsSUFBSSxDQUFDUixJQUE1QjtBQUYrQixTQUFQO0FBSWpDLE9BSkQ7O0FBTUEsVUFBTVcsTUFBTSxHQUFHTixHQUFHLENBQUNPLEtBQUosQ0FBVSxDQUFWLEVBQWFSLENBQUMsR0FBRyxDQUFqQixDQUFmO0FBQ0EsYUFBT08sTUFBTSxDQUFDRSxNQUFQLENBQWNQLE9BQWQsQ0FBUDtBQUNILEtBVG9CLENBQXJCO0FBV0EsUUFBTVEsU0FBUyxHQUFJWCxZQUFELENBQWVOLEdBQWYsQ0FBbUIsVUFBQWtCLElBQUk7QUFBQSx1QkFBT0EsSUFBSSxDQUFDaEIsS0FBWixjQUFxQmdCLElBQUksQ0FBQ2YsSUFBMUI7QUFBQSxLQUF2QixDQUFsQjtBQUVBWixJQUFBQSxLQUFLLENBQUM0QixXQUFOLENBQWtCRixTQUFTLENBQUNHLElBQVYsQ0FBZSxJQUFmLENBQWxCO0FBQ0gsR0F2QkQ7O0FBMEJBakMsRUFBQUEsbUVBQUEsQ0FBdUJPLGFBQXZCLEVBQXNDLFVBQUE0QixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsR0FBM0M7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRW5DLG9FQUFoQjtBQUNJLFNBQUssRUFBRTtBQUFDcUMsTUFBQUEsVUFBVSxFQUFFbEMsS0FBSyxDQUFDbUMsUUFBTiw2QkFBb0NuQyxLQUFLLENBQUNtQyxRQUExQyxTQUF3RDtBQUFyRSxLQURYO0FBQUEsY0FFU3BDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBTUQsQ0F2Q0g7O0tBQU1EO0FBeUNKLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL0dyYWRpZW50LmpzPzVjNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VQYWdlU3RvcmUgZnJvbSBcIi4uL3N0b3Jlcy91c2VQYWdlU3RvcmVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7IFxuXG5jb25zdCBHcmFkaWVudCA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMpO1xuXG4gICAgLy9jb25zdCBbY29sb3JzLCBzZXRDb2xvcnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAgIGNvbnN0IGJsb2NrTGlzdGVuZXIgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHVzZVBhZ2VTdG9yZS5nZXRTdGF0ZSgpLndvcmRDb3VudDsgICAgICAgICAgICAvLyB0b3RhbCB3b3JkIGNvdW50XG4gICAgICBcbiAgICAgICAgY29uc3Qgc2l6ZUFycmF5ID0gZGF0YS5tYXAoZWwgPT4geyBcbiAgICAgICAgICAgIHJldHVybiB7Y29sb3I6IGVsLmNvbG9yLCBzaXplOiAoZWwud29yZENvdW50IC8gY291bnQpICogMTAwfX0gKS5maWx0ZXIoZWwgPT4gZWwuY29sb3IpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3RhcnRDb2xvciA9IHtjb2xvcjogXCIjZmZmXCIsIHNpemU6IDB9O1xuICAgICAgICBcbiAgICAgICAgLy8gY29udmVydCB0byAlIG91dCBvZiAxMDAlXG4gICAgICAgIGNvbnN0IHBlcmNlbnRBcnJheSA9IFtzdGFydENvbG9yLCAuLi5zaXplQXJyYXldLm1hcCgoZWwsIGksIGFycikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IChwcmV2LCBjdXJyKSA9PiB7IHJldHVybiB7IFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjdXJyLmNvbG9yLCBcbiAgICAgICAgICAgICAgICBzaXplOiBNYXRoLnJvdW5kKHByZXYuc2l6ZSArIGN1cnIuc2l6ZSkgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gYXJyLnNsaWNlKDAsIGkgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnIucmVkdWNlKHJlZHVjZXIpO1xuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgY29uc3Qgc3RyaW5nQXJyID0gKHBlcmNlbnRBcnJheSkubWFwKHZhbHMgPT4gYCR7dmFscy5jb2xvcn0gJHt2YWxzLnNpemV9JWApO1xuXG4gICAgICAgIHByb3BzLnNldEdyYWRpZW50KHN0cmluZ0Fyci5qb2luKCcsICcpKTtcbiAgICB9XG4gIFxuXG4gICAgdXNlUGFnZVN0b3JlLnN1YnNjcmliZShibG9ja0xpc3RlbmVyLCBzdGF0ZSA9PiBzdGF0ZS5ibG9ja3MpO1xuICAgICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ31cbiAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogcHJvcHMuZ3JhZGllbnQgPyBgbGluZWFyLWdyYWRpZW50KCR7cHJvcHMuZ3JhZGllbnR9KWAgOiBcIiNmZmZcIn19PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgR3JhZGllbnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUGFnZVN0b3JlIiwic3R5bGVzIiwiR3JhZGllbnQiLCJjaGlsZHJlbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImJsb2NrTGlzdGVuZXIiLCJkYXRhIiwiY291bnQiLCJnZXRTdGF0ZSIsIndvcmRDb3VudCIsInNpemVBcnJheSIsIm1hcCIsImVsIiwiY29sb3IiLCJzaXplIiwiZmlsdGVyIiwic3RhcnRDb2xvciIsInBlcmNlbnRBcnJheSIsImkiLCJhcnIiLCJyZWR1Y2VyIiwicHJldiIsImN1cnIiLCJNYXRoIiwicm91bmQiLCJuZXdBcnIiLCJzbGljZSIsInJlZHVjZSIsInN0cmluZ0FyciIsInZhbHMiLCJzZXRHcmFkaWVudCIsImpvaW4iLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImJsb2NrcyIsImJnIiwiYmFja2dyb3VuZCIsImdyYWRpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/Gradient.js\n");

/***/ })

});