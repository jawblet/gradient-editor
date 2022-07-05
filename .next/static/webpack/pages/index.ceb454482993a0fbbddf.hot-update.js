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

/***/ "./stores/useEditorStore.js":
/*!**********************************!*\
  !*** ./stores/useEditorStore.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useEditorStore\": function() { return /* binding */ useEditorStore; },\n/* harmony export */   \"useStyleStore\": function() { return /* binding */ useStyleStore; }\n/* harmony export */ });\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/date */ \"./utils/date.js\");\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar Draft = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n\n\n\n // INIT TEXT OF CARD \n\nvar emptyContentState = Draft.convertFromRaw({\n  entityMap: {},\n  blocks: [{\n    text: 'Hello! This text is totally editable. Delete this and type here.',\n    key: '1p',\n    type: 'unstyled',\n    entityRanges: []\n  }, {\n    text: 'In 2020, someone I knew had a dream they could only describe things with only a gradient tool. In the dream, it was completely useless. But I wondered how this tool would work if it existed in real life.',\n    key: '2p',\n    type: 'unstyled',\n    entityRanges: []\n  }, {\n    text: \"This little text editor is a gradient tool that changes based on the sentiment of the text put inside it. Play around with it and enjoy exploring your i love exploring our gradient <3\",\n    key: '3p',\n    type: 'unstyled',\n    entityRanges: []\n  }]\n});\n\nvar editor = function editor(set, get) {\n  return {\n    editorState: draft_js__WEBPACK_IMPORTED_MODULE_0__.EditorState.createWithContent(emptyContentState)\n  };\n};\n\nvar styles = function styles(set, get) {\n  return {\n    title: _utils_date__WEBPACK_IMPORTED_MODULE_1__.today,\n    blockStyleFn: function blockStyleFn(contentblock) {\n      return 'block';\n    }\n  };\n};\n\nvar useEditorStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.default)(editor);\nvar useStyleStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__.default)(styles);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZXMvdXNlRWRpdG9yU3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzREFBRCxDQUFyQjs7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUksaUJBQWlCLEdBQUdMLEtBQUssQ0FBQ00sY0FBTixDQUFxQjtBQUMzQ0MsRUFBQUEsU0FBUyxFQUFFLEVBRGdDO0FBRTNDQyxFQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFQyxJQUFBQSxJQUFJLEVBQUUsa0VBRFI7QUFFRUMsSUFBQUEsR0FBRyxFQUFFLElBRlA7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLFVBSFI7QUFJRUMsSUFBQUEsWUFBWSxFQUFFO0FBSmhCLEdBRE0sRUFPTjtBQUNFSCxJQUFBQSxJQUFJLEVBQUUsNk1BRFI7QUFFRUMsSUFBQUEsR0FBRyxFQUFFLElBRlA7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLFVBSFI7QUFJRUMsSUFBQUEsWUFBWSxFQUFFO0FBSmhCLEdBUE0sRUFhTjtBQUNFSCxJQUFBQSxJQUFJLEVBQUUseUxBRFI7QUFFRUMsSUFBQUEsR0FBRyxFQUFFLElBRlA7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLFVBSFI7QUFJRUMsSUFBQUEsWUFBWSxFQUFFO0FBSmhCLEdBYk07QUFGbUMsQ0FBckIsQ0FBMUI7O0FBd0JBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWU7QUFDMUJDLElBQUFBLFdBQVcsRUFBRWQsbUVBQUEsQ0FBOEJHLGlCQUE5QjtBQURhLEdBQWY7QUFBQSxDQUFmOztBQUlBLElBQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNKLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFNBQWU7QUFDNUJJLElBQUFBLEtBQUssRUFBRWhCLDhDQURxQjtBQUU1QmlCLElBQUFBLFlBQVksRUFBRSxzQkFBQ0MsWUFBRCxFQUFrQjtBQUFFLGFBQU8sT0FBUDtBQUFnQjtBQUZ0QixHQUFmO0FBQUEsQ0FBZjs7QUFLTyxJQUFNQyxjQUFjLEdBQUdsQixnREFBTSxDQUFDUyxNQUFELENBQTdCO0FBQ0EsSUFBTVUsYUFBYSxHQUFHbkIsZ0RBQU0sQ0FBQ2MsTUFBRCxDQUE1QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZXMvdXNlRWRpdG9yU3RvcmUuanM/ZjkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEcmFmdCA9IHJlcXVpcmUoJ2RyYWZ0LWpzJyk7XG5pbXBvcnQgeyBFZGl0b3JTdGF0ZSB9IGZyb20gJ2RyYWZ0LWpzJztcbmltcG9ydCB7IHRvZGF5IH0gZnJvbSBcIi4uL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmRcIjsgXG5cbi8vIElOSVQgVEVYVCBPRiBDQVJEIFxuY29uc3QgZW1wdHlDb250ZW50U3RhdGUgPSBEcmFmdC5jb252ZXJ0RnJvbVJhdyh7XG4gICAgZW50aXR5TWFwOiB7fSwgXG4gICAgYmxvY2tzOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICdIZWxsbyEgVGhpcyB0ZXh0IGlzIHRvdGFsbHkgZWRpdGFibGUuIERlbGV0ZSB0aGlzIGFuZCB0eXBlIGhlcmUuJyxcbiAgICAgICAga2V5OiAnMXAnLFxuICAgICAgICB0eXBlOiAndW5zdHlsZWQnLFxuICAgICAgICBlbnRpdHlSYW5nZXM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0luIDIwMjAsIHNvbWVvbmUgSSBrbmV3IGhhZCBhIGRyZWFtIHRoZXkgY291bGQgb25seSBkZXNjcmliZSB0aGluZ3Mgd2l0aCBvbmx5IGEgZ3JhZGllbnQgdG9vbC4gSW4gdGhlIGRyZWFtLCBpdCB3YXMgY29tcGxldGVseSB1c2VsZXNzLiBCdXQgSSB3b25kZXJlZCBob3cgdGhpcyB0b29sIHdvdWxkIHdvcmsgaWYgaXQgZXhpc3RlZCBpbiByZWFsIGxpZmUuJyxcbiAgICAgICAga2V5OiAnMnAnLFxuICAgICAgICB0eXBlOiAndW5zdHlsZWQnLFxuICAgICAgICBlbnRpdHlSYW5nZXM6IFtdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJUaGlzIGxpdHRsZSB0ZXh0IGVkaXRvciBpcyBhIGdyYWRpZW50IHRvb2wgdGhhdCBjaGFuZ2VzIGJhc2VkIG9uIHRoZSBzZW50aW1lbnQgb2YgdGhlIHRleHQgcHV0IGluc2lkZSBpdC4gUGxheSBhcm91bmQgd2l0aCBpdCBhbmQgZW5qb3kgZXhwbG9yaW5nIHlvdXIgaSBsb3ZlIGV4cGxvcmluZyBvdXIgZ3JhZGllbnQgPDNcIixcbiAgICAgICAga2V5OiAnM3AnLFxuICAgICAgICB0eXBlOiAndW5zdHlsZWQnLFxuICAgICAgICBlbnRpdHlSYW5nZXM6IFtdLFxuICAgICAgfVxuICAgIF0sXG4gIH0pO1xuXG5jb25zdCBlZGl0b3IgPSAoc2V0LCBnZXQpID0+ICh7XG4gICAgZWRpdG9yU3RhdGU6IEVkaXRvclN0YXRlLmNyZWF0ZVdpdGhDb250ZW50KGVtcHR5Q29udGVudFN0YXRlKVxufSk7XG5cbmNvbnN0IHN0eWxlcyA9IChzZXQsIGdldCkgPT4gKHtcbiAgdGl0bGU6IHRvZGF5LFxuICBibG9ja1N0eWxlRm46IChjb250ZW50YmxvY2spID0+IHsgcmV0dXJuICdibG9jaycgfVxufSk7XG5cbmV4cG9ydCBjb25zdCB1c2VFZGl0b3JTdG9yZSA9IGNyZWF0ZShlZGl0b3IpO1xuZXhwb3J0IGNvbnN0IHVzZVN0eWxlU3RvcmUgPSBjcmVhdGUoc3R5bGVzKTtcbiJdLCJuYW1lcyI6WyJEcmFmdCIsInJlcXVpcmUiLCJFZGl0b3JTdGF0ZSIsInRvZGF5IiwiY3JlYXRlIiwiZW1wdHlDb250ZW50U3RhdGUiLCJjb252ZXJ0RnJvbVJhdyIsImVudGl0eU1hcCIsImJsb2NrcyIsInRleHQiLCJrZXkiLCJ0eXBlIiwiZW50aXR5UmFuZ2VzIiwiZWRpdG9yIiwic2V0IiwiZ2V0IiwiZWRpdG9yU3RhdGUiLCJjcmVhdGVXaXRoQ29udGVudCIsInN0eWxlcyIsInRpdGxlIiwiYmxvY2tTdHlsZUZuIiwiY29udGVudGJsb2NrIiwidXNlRWRpdG9yU3RvcmUiLCJ1c2VTdHlsZVN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./stores/useEditorStore.js\n");

/***/ })

});