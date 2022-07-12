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

/***/ "./sections/TextEditor.js":
/*!********************************!*\
  !*** ./sections/TextEditor.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/useEditorStore */ \"./stores/useEditorStore.js\");\n/* harmony import */ var _utils_useBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useBlocks */ \"./utils/useBlocks.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/juliabell/gradient-editor/sections/TextEditor.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar TextEditor = function TextEditor() {\n  _s();\n\n  var _useEditorStore = (0,_stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore)(),\n      editorState = _useEditorStore.editorState;\n\n  var _useStyleStore = (0,_stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useStyleStore)(),\n      title = _useStyleStore.title,\n      blockStyleFn = _useStyleStore.blockStyleFn;\n\n  var _useBlocks = (0,_utils_useBlocks__WEBPACK_IMPORTED_MODULE_3__.default)(),\n      handleSubmit = _useBlocks.handleSubmit;\n\n  var prepareText = function prepareText() {\n    handleSubmit(editorState);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    prepareText();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editor),\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      prepareText();\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      style: {\n        display: \"flex\",\n        gap: \"1.5rem\",\n        marginBottom: \"1.5rem\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        className: \"title\",\n        value: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__.VscRefresh, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(draft_js__WEBPACK_IMPORTED_MODULE_0__.Editor, {\n      editorKey: \"editor\",\n      editorState: _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore.getState().editorState,\n      onChange: function onChange(ed) {\n        _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore.setState({\n          editorState: ed\n        });\n        prepareText();\n      },\n      handleReturn: function handleReturn() {\n        return prepareText();\n      },\n      handlePastedText: function handlePastedText() {\n        return prepareText();\n      },\n      onBlur: function onBlur() {\n        return prepareText();\n      },\n      keyBindingFn: function keyBindingFn(e) {\n        if (e.key == \" \") {\n          console.log(\"space\"); //prepareText();\n        }\n\n        return (0,draft_js__WEBPACK_IMPORTED_MODULE_0__.getDefaultKeyBinding)(e);\n      },\n      blockStyleFn: blockStyleFn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TextEditor, \"ZfVbuYGXFrbemk5AkkZoF78/LAo=\", false, function () {\n  return [_stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore, _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useStyleStore, _utils_useBlocks__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = TextEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextEditor);\n\nvar _c;\n\n$RefreshReg$(_c, \"TextEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9UZXh0RWRpdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1TLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDckIsd0JBQXdCSixzRUFBYyxFQUF0QztBQUFBLE1BQVFLLFdBQVIsbUJBQVFBLFdBQVI7O0FBQ0EsdUJBQStCTixxRUFBYSxFQUE1QztBQUFBLE1BQVFPLEtBQVIsa0JBQVFBLEtBQVI7QUFBQSxNQUFlQyxZQUFmLGtCQUFlQSxZQUFmOztBQUNBLG1CQUF5Qk4seURBQVMsRUFBbEM7QUFBQSxNQUFRTyxZQUFSLGNBQVFBLFlBQVI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QkQsSUFBQUEsWUFBWSxDQUFDSCxXQUFELENBQVo7QUFDSCxHQUZEOztBQUlBUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWlksSUFBQUEsV0FBVztBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLQSxzQkFDSTtBQUFNLGFBQVMsRUFBRU4sd0VBQWpCO0FBQ0ksWUFBUSxFQUFFLGtCQUFDUSxDQUFELEVBQU87QUFDYkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FILE1BQUFBLFdBQVc7QUFBRyxLQUh0QjtBQUFBLDRCQUlJO0FBQUssV0FBSyxFQUFFO0FBQUNJLFFBQUFBLE9BQU8sRUFBQyxNQUFUO0FBQWdCQyxRQUFBQSxHQUFHLEVBQUMsUUFBcEI7QUFBNkJDLFFBQUFBLFlBQVksRUFBQztBQUExQyxPQUFaO0FBQUEsOEJBQ0E7QUFBTyxpQkFBUyxFQUFDLE9BQWpCO0FBQXlCLGFBQUssRUFBRVQ7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBLCtCQUNJLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkosZUFVTSw4REFBQyw0Q0FBRDtBQUFRLGVBQVMsRUFBQyxRQUFsQjtBQUNJLGlCQUFXLEVBQUVOLDJFQUFBLEdBQTBCSyxXQUQzQztBQUVJLGNBQVEsRUFBRSxrQkFBQ1ksRUFBRCxFQUFRO0FBQ2hCakIsUUFBQUEsMkVBQUEsQ0FBd0I7QUFBQ0ssVUFBQUEsV0FBVyxFQUFFWTtBQUFkLFNBQXhCO0FBQ0FSLFFBQUFBLFdBQVc7QUFDVixPQUxQO0FBTUksa0JBQVksRUFBRTtBQUFBLGVBQU1BLFdBQVcsRUFBakI7QUFBQSxPQU5sQjtBQU9JLHNCQUFnQixFQUFFO0FBQUEsZUFBTUEsV0FBVyxFQUFqQjtBQUFBLE9BUHRCO0FBUUksWUFBTSxFQUFFO0FBQUEsZUFBT0EsV0FBVyxFQUFsQjtBQUFBLE9BUlo7QUFTSSxrQkFBWSxFQUFFLHNCQUFDRSxDQUFELEVBQU87QUFDbkIsWUFBR0EsQ0FBQyxDQUFDUSxHQUFGLElBQVMsR0FBWixFQUFpQjtBQUNiQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBRGEsQ0FFYjtBQUNIOztBQUNELGVBQU8xQiw4REFBb0IsQ0FBQ2dCLENBQUQsQ0FBM0I7QUFDRCxPQWZMO0FBZ0JJLGtCQUFZLEVBQUVKO0FBaEJsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUErQkgsQ0E3Q0Q7O0dBQU1IO1VBQ3NCSixvRUFDT0QsbUVBQ05FOzs7S0FIdkJHO0FBK0NOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL1RleHRFZGl0b3IuanM/NjY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldERlZmF1bHRLZXlCaW5kaW5nLCBLZXlCaW5kaW5nVXRpbH0gZnJvbSAnZHJhZnQtanMnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQgeyB1c2VTdHlsZVN0b3JlLCB1c2VFZGl0b3JTdG9yZSB9IGZyb20gXCIuLi9zdG9yZXMvdXNlRWRpdG9yU3RvcmVcIjtcbmltcG9ydCB1c2VCbG9ja3MgZnJvbSBcIi4uL3V0aWxzL3VzZUJsb2Nrc1wiO1xuaW1wb3J0IHsgVnNjUmVmcmVzaCB9IGZyb20gXCJyZWFjdC1pY29ucy92c2NcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IFRleHRFZGl0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBlZGl0b3JTdGF0ZSB9ID0gdXNlRWRpdG9yU3RvcmUoKTtcbiAgICBjb25zdCB7IHRpdGxlLCBibG9ja1N0eWxlRm59ID0gdXNlU3R5bGVTdG9yZSgpO1xuICAgIGNvbnN0IHsgaGFuZGxlU3VibWl0IH0gPSB1c2VCbG9ja3MoKTtcbiAgXG4gICAgY29uc3QgcHJlcGFyZVRleHQgPSAoKSA9PiB7XG4gICAgICAgIGhhbmRsZVN1Ym1pdChlZGl0b3JTdGF0ZSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcHJlcGFyZVRleHQoKTtcbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5lZGl0b3J9IFxuICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7IFxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHByZXBhcmVUZXh0KCl9fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGdhcDpcIjEuNXJlbVwiLG1hcmdpbkJvdHRvbTpcIjEuNXJlbVwifX0+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidGl0bGVcIiB2YWx1ZT17dGl0bGV9Lz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgIDxWc2NSZWZyZXNoLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxFZGl0b3IgZWRpdG9yS2V5PVwiZWRpdG9yXCJcbiAgICAgICAgICAgICAgICAgIGVkaXRvclN0YXRlPXt1c2VFZGl0b3JTdG9yZS5nZXRTdGF0ZSgpLmVkaXRvclN0YXRlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB1c2VFZGl0b3JTdG9yZS5zZXRTdGF0ZSh7ZWRpdG9yU3RhdGU6IGVkfSlcbiAgICAgICAgICAgICAgICAgICAgcHJlcGFyZVRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZVJldHVybj17KCkgPT4gcHJlcGFyZVRleHQoKX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZVBhc3RlZFRleHQ9eygpID0+IHByZXBhcmVUZXh0KCl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+ICBwcmVwYXJlVGV4dCgpfVxuICAgICAgICAgICAgICAgICAga2V5QmluZGluZ0ZuPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZihlLmtleSA9PSBcIiBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcGFjZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcHJlcGFyZVRleHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0RGVmYXVsdEtleUJpbmRpbmcoZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgYmxvY2tTdHlsZUZuPXtibG9ja1N0eWxlRm59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IFRleHRFZGl0b3I7Il0sIm5hbWVzIjpbImdldERlZmF1bHRLZXlCaW5kaW5nIiwiS2V5QmluZGluZ1V0aWwiLCJ1c2VFZmZlY3QiLCJFZGl0b3IiLCJ1c2VTdHlsZVN0b3JlIiwidXNlRWRpdG9yU3RvcmUiLCJ1c2VCbG9ja3MiLCJWc2NSZWZyZXNoIiwic3R5bGVzIiwiVGV4dEVkaXRvciIsImVkaXRvclN0YXRlIiwidGl0bGUiLCJibG9ja1N0eWxlRm4iLCJoYW5kbGVTdWJtaXQiLCJwcmVwYXJlVGV4dCIsImVkaXRvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXkiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJnZXRTdGF0ZSIsImVkIiwic2V0U3RhdGUiLCJrZXkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/TextEditor.js\n");

/***/ })

});