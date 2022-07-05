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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stores_usePageStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stores/usePageStore */ \"./stores/usePageStore.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _excluded = [\"children\"];\n\nvar _jsxFileName = \"/Users/juliabell/gradient-editor/sections/Gradient.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Gradient = function Gradient(_ref) {\n  _s();\n\n  var children = _ref.children,\n      props = (0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, _excluded);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      colors = _useState[0],\n      setColors = _useState[1];\n\n  var blockListener = function blockListener(data) {\n    var count = _stores_usePageStore__WEBPACK_IMPORTED_MODULE_3__.default.getState().wordCount; // total word count\n\n    var sizeArray = data.map(function (el) {\n      return {\n        color: el.color,\n        size: el.wordCount / count * 100\n      };\n    }).filter(function (el) {\n      return el.color;\n    });\n    var startColor = {\n      color: \"#fff\",\n      size: 0\n    }; // convert to % out of 100%\n\n    var percentArray = [startColor].concat((0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(sizeArray)).map(function (el, i, arr) {\n      var reducer = function reducer(prev, curr) {\n        return {\n          color: curr.color,\n          size: Math.round(prev.size + curr.size)\n        };\n      };\n\n      var newArr = arr.slice(0, i + 1);\n      return newArr.reduce(reducer);\n    });\n    var stringArr = percentArray.map(function (vals) {\n      return \"\".concat(vals.color, \" \").concat(vals.size, \"%\");\n    });\n    setColors(stringArr.join(', '));\n  };\n\n  _stores_usePageStore__WEBPACK_IMPORTED_MODULE_3__.default.subscribe(blockListener, function (state) {\n    return state.blocks;\n  }); // console.log(colors);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bg),\n    style: {\n      background: colors ? \"linear-gradient(\".concat(colors, \")\") : \"#fff\"\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Gradient, \"32qyCawaYmhwdS76+oVO9ZAJeBE=\");\n\n_c = Gradient;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gradient);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gradient\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9HcmFkaWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QjtBQUFBOztBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUN6QyxrQkFBNEJMLCtDQUFRLENBQUMsSUFBRCxDQUFwQztBQUFBLE1BQU9NLE1BQVA7QUFBQSxNQUFlQyxTQUFmOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQzVCLFFBQU1DLEtBQUssR0FBR1Qsa0VBQUEsR0FBd0JXLFNBQXRDLENBRDRCLENBQ2dDOztBQUU1RCxRQUFNQyxTQUFTLEdBQUdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTLFVBQUFDLEVBQUUsRUFBSTtBQUM3QixhQUFPO0FBQUNDLFFBQUFBLEtBQUssRUFBRUQsRUFBRSxDQUFDQyxLQUFYO0FBQWtCQyxRQUFBQSxJQUFJLEVBQUdGLEVBQUUsQ0FBQ0gsU0FBSCxHQUFlRixLQUFoQixHQUF5QjtBQUFqRCxPQUFQO0FBQTZELEtBRC9DLEVBQ2tEUSxNQURsRCxDQUN5RCxVQUFBSCxFQUFFO0FBQUEsYUFBSUEsRUFBRSxDQUFDQyxLQUFQO0FBQUEsS0FEM0QsQ0FBbEI7QUFHQSxRQUFNRyxVQUFVLEdBQUc7QUFBQ0gsTUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0JDLE1BQUFBLElBQUksRUFBRTtBQUF0QixLQUFuQixDQU40QixDQVE1Qjs7QUFDQSxRQUFNRyxZQUFZLEdBQUcsQ0FBQ0QsVUFBRCw0SUFBZ0JOLFNBQWhCLEdBQTJCQyxHQUEzQixDQUErQixVQUFDQyxFQUFELEVBQUtNLENBQUwsRUFBUUMsR0FBUixFQUFnQjtBQUNoRSxVQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFBRSxlQUFPO0FBQ3JDVCxVQUFBQSxLQUFLLEVBQUVTLElBQUksQ0FBQ1QsS0FEeUI7QUFFckNDLFVBQUFBLElBQUksRUFBRVMsSUFBSSxDQUFDQyxLQUFMLENBQVdILElBQUksQ0FBQ1AsSUFBTCxHQUFZUSxJQUFJLENBQUNSLElBQTVCO0FBRitCLFNBQVA7QUFJakMsT0FKRDs7QUFNQSxVQUFNVyxNQUFNLEdBQUdOLEdBQUcsQ0FBQ08sS0FBSixDQUFVLENBQVYsRUFBYVIsQ0FBQyxHQUFHLENBQWpCLENBQWY7QUFDQSxhQUFPTyxNQUFNLENBQUNFLE1BQVAsQ0FBY1AsT0FBZCxDQUFQO0FBQ0gsS0FUb0IsQ0FBckI7QUFXQSxRQUFNUSxTQUFTLEdBQUlYLFlBQUQsQ0FBZU4sR0FBZixDQUFtQixVQUFBa0IsSUFBSTtBQUFBLHVCQUFPQSxJQUFJLENBQUNoQixLQUFaLGNBQXFCZ0IsSUFBSSxDQUFDZixJQUExQjtBQUFBLEtBQXZCLENBQWxCO0FBRUFWLElBQUFBLFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQ0UsSUFBVixDQUFlLElBQWYsQ0FBRCxDQUFUO0FBQ0gsR0F2QkQ7O0FBMEJBaEMsRUFBQUEsbUVBQUEsQ0FBdUJPLGFBQXZCLEVBQXNDLFVBQUEyQixLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxNQUFWO0FBQUEsR0FBM0MsRUE3QnlDLENBK0IxQzs7QUFFQyxzQkFDSTtBQUFLLGFBQVMsRUFBRWxDLG9FQUFoQjtBQUNJLFNBQUssRUFBRTtBQUFDb0MsTUFBQUEsVUFBVSxFQUFFaEMsTUFBTSw2QkFBc0JBLE1BQXRCLFNBQWtDO0FBQXJELEtBRFg7QUFBQSxjQUVTRjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ELENBdkNIOztHQUFNRDs7S0FBQUE7QUF5Q0osK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvR3JhZGllbnQuanM/NWM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVBhZ2VTdG9yZSBmcm9tIFwiLi4vc3RvcmVzL3VzZVBhZ2VTdG9yZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIjsgXG5cbmNvbnN0IEdyYWRpZW50ID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IHtcbiAgICBjb25zdCBbY29sb3JzLCBzZXRDb2xvcnNdID0gdXNlU3RhdGUobnVsbCk7XG4gIFxuICAgIGNvbnN0IGJsb2NrTGlzdGVuZXIgPSAoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBjb3VudCA9IHVzZVBhZ2VTdG9yZS5nZXRTdGF0ZSgpLndvcmRDb3VudDsgICAgICAgICAgICAvLyB0b3RhbCB3b3JkIGNvdW50XG4gICAgICBcbiAgICAgICAgY29uc3Qgc2l6ZUFycmF5ID0gZGF0YS5tYXAoZWwgPT4geyBcbiAgICAgICAgICAgIHJldHVybiB7Y29sb3I6IGVsLmNvbG9yLCBzaXplOiAoZWwud29yZENvdW50IC8gY291bnQpICogMTAwfX0gKS5maWx0ZXIoZWwgPT4gZWwuY29sb3IpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3RhcnRDb2xvciA9IHtjb2xvcjogXCIjZmZmXCIsIHNpemU6IDB9O1xuICAgICAgICBcbiAgICAgICAgLy8gY29udmVydCB0byAlIG91dCBvZiAxMDAlXG4gICAgICAgIGNvbnN0IHBlcmNlbnRBcnJheSA9IFtzdGFydENvbG9yLCAuLi5zaXplQXJyYXldLm1hcCgoZWwsIGksIGFycikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkdWNlciA9IChwcmV2LCBjdXJyKSA9PiB7IHJldHVybiB7IFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjdXJyLmNvbG9yLCBcbiAgICAgICAgICAgICAgICBzaXplOiBNYXRoLnJvdW5kKHByZXYuc2l6ZSArIGN1cnIuc2l6ZSkgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbmV3QXJyID0gYXJyLnNsaWNlKDAsIGkgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiBuZXdBcnIucmVkdWNlKHJlZHVjZXIpO1xuICAgICAgICB9KTtcbiAgICAgICBcbiAgICAgICAgY29uc3Qgc3RyaW5nQXJyID0gKHBlcmNlbnRBcnJheSkubWFwKHZhbHMgPT4gYCR7dmFscy5jb2xvcn0gJHt2YWxzLnNpemV9JWApO1xuXG4gICAgICAgIHNldENvbG9ycyhzdHJpbmdBcnIuam9pbignLCAnKSk7XG4gICAgfVxuICBcblxuICAgIHVzZVBhZ2VTdG9yZS5zdWJzY3JpYmUoYmxvY2tMaXN0ZW5lciwgc3RhdGUgPT4gc3RhdGUuYmxvY2tzKTtcbiAgIFxuICAgLy8gY29uc29sZS5sb2coY29sb3JzKTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmd9XG4gICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmQ6IGNvbG9ycyA/IGBsaW5lYXItZ3JhZGllbnQoJHtjb2xvcnN9KWAgOiBcIiNmZmZcIn19PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgR3JhZGllbnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUGFnZVN0b3JlIiwic3R5bGVzIiwiR3JhZGllbnQiLCJjaGlsZHJlbiIsInByb3BzIiwiY29sb3JzIiwic2V0Q29sb3JzIiwiYmxvY2tMaXN0ZW5lciIsImRhdGEiLCJjb3VudCIsImdldFN0YXRlIiwid29yZENvdW50Iiwic2l6ZUFycmF5IiwibWFwIiwiZWwiLCJjb2xvciIsInNpemUiLCJmaWx0ZXIiLCJzdGFydENvbG9yIiwicGVyY2VudEFycmF5IiwiaSIsImFyciIsInJlZHVjZXIiLCJwcmV2IiwiY3VyciIsIk1hdGgiLCJyb3VuZCIsIm5ld0FyciIsInNsaWNlIiwicmVkdWNlIiwic3RyaW5nQXJyIiwidmFscyIsImpvaW4iLCJzdWJzY3JpYmUiLCJzdGF0ZSIsImJsb2NrcyIsImJnIiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Gradient.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectWithoutProperties; }\n/* harmony export */ });\n/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUseUVBQTRCO0FBQzNDOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZCQUE2QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanM/M2I0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectWithoutPropertiesLoose; }\n/* harmony export */ });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzPzgzYmUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\n");

/***/ })

});