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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stores_usePageStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/usePageStore */ \"./stores/usePageStore.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/juliabell/gradient-editor/sections/Gradient.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Gradient = function Gradient(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      colors = _useState[0],\n      setColors = _useState[1];\n\n  var blockListener = function blockListener(data) {\n    // \n    var count = _stores_usePageStore__WEBPACK_IMPORTED_MODULE_2__.default.getState().wordCount;\n    var sizeArray = data.map(function (el) {\n      return {\n        color: el.color,\n        size: el.wordCount / count * 100\n      };\n    }).filter(function (el) {\n      return el.color;\n    });\n    var startColor = {\n      color: \"#fff\",\n      size: 0\n    }; // convert to % out of 100%\n\n    var percentArray = [startColor].concat((0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sizeArray)).map(function (el, i, arr) {\n      var reducer = function reducer(prev, curr) {\n        return {\n          color: curr.color,\n          size: Math.round(prev.size + curr.size)\n        };\n      };\n\n      var newArr = arr.slice(0, i + 1);\n      return newArr.reduce(reducer);\n    });\n    var stringArr = percentArray.map(function (vals) {\n      return \"\".concat(vals.color, \" \").concat(vals.size, \"%\");\n    });\n    setColors(stringArr.join(', '));\n  };\n\n  _stores_usePageStore__WEBPACK_IMPORTED_MODULE_2__.default.subscribe(blockListener, function (state) {\n    return state.blocks;\n  });\n  console.log(colors);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bg),\n    style: {\n      background: colors ? \"linear-gradient(\".concat(colors, \")\") : \"#fff\"\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Gradient, \"32qyCawaYmhwdS76+oVO9ZAJeBE=\");\n\n_c = Gradient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gradient);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gradient\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9HcmFkaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDL0Isa0JBQTRCSiwrQ0FBUSxDQUFDLElBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFFQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLElBQUQsRUFBVTtBQUM1QjtBQUNBLFFBQU1DLEtBQUssR0FBR1Isa0VBQUEsR0FBd0JVLFNBQXRDO0FBRUEsUUFBTUMsU0FBUyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFBQyxFQUFFLEVBQUk7QUFBRSxhQUFPO0FBQUNDLFFBQUFBLEtBQUssRUFBRUQsRUFBRSxDQUFDQyxLQUFYO0FBQWtCQyxRQUFBQSxJQUFJLEVBQUdGLEVBQUUsQ0FBQ0gsU0FBSCxHQUFlRixLQUFoQixHQUF5QjtBQUFqRCxPQUFQO0FBQTZELEtBQTlFLEVBQWlGUSxNQUFqRixDQUF3RixVQUFBSCxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDQyxLQUFQO0FBQUEsS0FBMUYsQ0FBbEI7QUFFQSxRQUFNRyxVQUFVLEdBQUc7QUFBQ0gsTUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLE1BQUFBLElBQUksRUFBRTtBQUF0QixLQUFuQixDQU40QixDQVE1Qjs7QUFDQSxRQUFNRyxZQUFZLEdBQUcsQ0FBQ0QsVUFBRCw0SUFBZ0JOLFNBQWhCLEdBQTJCQyxHQUEzQixDQUErQixVQUFDQyxFQUFELEVBQUtNLENBQUwsRUFBUUMsR0FBUixFQUFnQjtBQUNoRSxVQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFBRSxlQUFPO0FBQ3JDVCxVQUFBQSxLQUFLLEVBQUVTLElBQUksQ0FBQ1QsS0FEeUI7QUFFckNDLFVBQUFBLElBQUksRUFBRVMsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksQ0FBQ1AsSUFBTCxHQUFZUSxJQUFJLENBQUNSLElBQTVCO0FBRitCLFNBQVA7QUFJakMsT0FKRDs7QUFLQSxVQUFNVyxNQUFNLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSixDQUFVLENBQVYsRUFBYVIsQ0FBQyxHQUFHLENBQWpCLENBQWY7QUFDQSxhQUFPTyxNQUFNLENBQUNFLE1BQVAsQ0FBY1AsT0FBZCxDQUFQO0FBQ0gsS0FSb0IsQ0FBckI7QUFVQSxRQUFNUSxTQUFTLEdBQUlYLFlBQUQsQ0FBZU4sR0FBZixDQUFtQixVQUFBa0IsSUFBSTtBQUFBLHVCQUFPQSxJQUFJLENBQUNoQixLQUFaLGNBQXFCZ0IsSUFBSSxDQUFDZixJQUExQjtBQUFBLEtBQXZCLENBQWxCO0FBQ1FWLElBQUFBLFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQ0UsSUFBVixDQUFlLElBQWYsQ0FBRCxDQUFUO0FBQ1gsR0FyQkQ7O0FBdUJBL0IsRUFBQUEsbUVBQUEsQ0FBdUJNLGFBQXZCLEVBQXNDLFVBQUEyQixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsR0FBM0M7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVloQyxNQUFaO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVILG9FQUFoQjtBQUNJLFNBQUssRUFBRTtBQUFDcUMsTUFBQUEsVUFBVSxFQUFFbEMsTUFBTSw2QkFBc0JBLE1BQXRCLFNBQWtDO0FBQXJELEtBRFg7QUFBQSxjQUVTRDtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ELENBbkNIOztHQUFNRDs7S0FBQUE7QUFxQ0osK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvR3JhZGllbnQuanM/NWM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVBhZ2VTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL3VzZVBhZ2VTdG9yZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIjsgXG5cbmNvbnN0IEdyYWRpZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIGNvbnN0IFtjb2xvcnMsIHNldENvbG9yc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgXG4gICAgY29uc3QgYmxvY2tMaXN0ZW5lciA9IChkYXRhKSA9PiB7XG4gICAgICAgIC8vIFxuICAgICAgICBjb25zdCBjb3VudCA9IHVzZVBhZ2VTdG9yZS5nZXRTdGF0ZSgpLndvcmRDb3VudDtcbiAgXG4gICAgICAgIGNvbnN0IHNpemVBcnJheSA9IGRhdGEubWFwKGVsID0+IHsgcmV0dXJuIHtjb2xvcjogZWwuY29sb3IsIHNpemU6IChlbC53b3JkQ291bnQgLyBjb3VudCkgKiAxMDB9fSApLmZpbHRlcihlbCA9PiBlbC5jb2xvcik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdGFydENvbG9yID0ge2NvbG9yOiBcIiNmZmZcIiwgc2l6ZTogMH07XG4gICAgICAgIFxuICAgICAgICAvLyBjb252ZXJ0IHRvICUgb3V0IG9mIDEwMCVcbiAgICAgICAgY29uc3QgcGVyY2VudEFycmF5ID0gW3N0YXJ0Q29sb3IsIC4uLnNpemVBcnJheV0ubWFwKChlbCwgaSwgYXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWR1Y2VyID0gKHByZXYsIGN1cnIpID0+IHsgcmV0dXJuIHsgXG4gICAgICAgICAgICAgICAgY29sb3I6IGN1cnIuY29sb3IsIFxuICAgICAgICAgICAgICAgIHNpemU6IE1hdGgucm91bmQocHJldi5zaXplICsgY3Vyci5zaXplKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBuZXdBcnIgPSBhcnIuc2xpY2UoMCwgaSArIDEpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld0Fyci5yZWR1Y2UocmVkdWNlcik7XG4gICAgICAgIH0pO1xuICAgICAgIFxuICAgICAgICBjb25zdCBzdHJpbmdBcnIgPSAocGVyY2VudEFycmF5KS5tYXAodmFscyA9PiBgJHt2YWxzLmNvbG9yfSAke3ZhbHMuc2l6ZX0lYCk7XG4gICAgICAgICAgICAgICAgc2V0Q29sb3JzKHN0cmluZ0Fyci5qb2luKCcsICcpKTtcbiAgICB9XG4gIFxuICAgIHVzZVBhZ2VTdG9yZS5zdWJzY3JpYmUoYmxvY2tMaXN0ZW5lciwgc3RhdGUgPT4gc3RhdGUuYmxvY2tzKTtcbiAgICBjb25zb2xlLmxvZyhjb2xvcnMpO1xuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iZ31cbiAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZDogY29sb3JzID8gYGxpbmVhci1ncmFkaWVudCgke2NvbG9yc30pYCA6IFwiI2ZmZlwifX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBHcmFkaWVudDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VQYWdlU3RvcmUiLCJzdHlsZXMiLCJHcmFkaWVudCIsImNoaWxkcmVuIiwiY29sb3JzIiwic2V0Q29sb3JzIiwiYmxvY2tMaXN0ZW5lciIsImRhdGEiLCJjb3VudCIsImdldFN0YXRlIiwid29yZENvdW50Iiwic2l6ZUFycmF5IiwibWFwIiwiZWwiLCJjb2xvciIsInNpemUiLCJmaWx0ZXIiLCJzdGFydENvbG9yIiwicGVyY2VudEFycmF5IiwiaSIsImFyciIsInJlZHVjZXIiLCJwcmV2IiwiY3VyciIsIk1hdGgiLCJyb3VuZCIsIm5ld0FyciIsInNsaWNlIiwicmVkdWNlIiwic3RyaW5nQXJyIiwidmFscyIsImpvaW4iLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImJsb2NrcyIsImNvbnNvbGUiLCJsb2ciLCJiZyIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/Gradient.js\n");

/***/ })

});