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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/useEditorStore */ \"./stores/useEditorStore.js\");\n/* harmony import */ var _utils_useBlocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/useBlocks */ \"./utils/useBlocks.js\");\n/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/vsc */ \"./node_modules/react-icons/vsc/index.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/juliabell/gradient-editor/sections/TextEditor.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar TextEditor = function TextEditor() {\n  _s();\n\n  var _useEditorStore = (0,_stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore)(),\n      editorState = _useEditorStore.editorState;\n\n  var _useStyleStore = (0,_stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useStyleStore)(),\n      title = _useStyleStore.title,\n      blockStyleFn = _useStyleStore.blockStyleFn;\n\n  var _useBlocks = (0,_utils_useBlocks__WEBPACK_IMPORTED_MODULE_3__.default)(),\n      handleSubmit = _useBlocks.handleSubmit;\n\n  var prepareText = function prepareText() {\n    console.log(\"prepare\");\n    handleSubmit(editorState);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    prepareText();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"form\", {\n    className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().editor),\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      prepareText();\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      style: {\n        display: \"flex\",\n        gap: \"1.5rem\",\n        marginBottom: \"1.5rem\"\n      },\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n        className: \"title\",\n        onChange: function onChange(e) {\n          _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore.setState({\n            title: e.target.value\n          });\n        },\n        value: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n        type: \"submit\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_icons_vsc__WEBPACK_IMPORTED_MODULE_6__.VscRefresh, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 13\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(draft_js__WEBPACK_IMPORTED_MODULE_1__.Editor, {\n      editorKey: \"editor\",\n      editorState: _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore.getState().editorState,\n      onChange: function onChange(ed) {\n        return _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore.setState({\n          editorState: ed\n        });\n      },\n      handleReturn: function handleReturn() {\n        return prepareText();\n      },\n      handlePastedText: function handlePastedText() {\n        return prepareText();\n      },\n      onBlur: function onBlur() {\n        return prepareText();\n      },\n      blockStyleFn: blockStyleFn\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 15\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(TextEditor, \"ZfVbuYGXFrbemk5AkkZoF78/LAo=\", false, function () {\n  return [_stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useEditorStore, _stores_useEditorStore__WEBPACK_IMPORTED_MODULE_2__.useStyleStore, _utils_useBlocks__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = TextEditor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TextEditor);\n\nvar _c;\n\n$RefreshReg$(_c, \"TextEditor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9UZXh0RWRpdG9yLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3JCLHdCQUF3Qkosc0VBQWMsRUFBdEM7QUFBQSxNQUFRSyxXQUFSLG1CQUFRQSxXQUFSOztBQUNBLHVCQUErQk4scUVBQWEsRUFBNUM7QUFBQSxNQUFRTyxLQUFSLGtCQUFRQSxLQUFSO0FBQUEsTUFBZUMsWUFBZixrQkFBZUEsWUFBZjs7QUFDQSxtQkFBeUJOLHlEQUFTLEVBQWxDO0FBQUEsTUFBUU8sWUFBUixjQUFRQSxZQUFSOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVo7QUFDQUgsSUFBQUEsWUFBWSxDQUFDSCxXQUFELENBQVo7QUFDSCxHQUhEOztBQUtBUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWlksSUFBQUEsV0FBVztBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFLQSxzQkFDSTtBQUFNLGFBQVMsRUFBRU4sd0VBQWpCO0FBQ0ksWUFBUSxFQUFFLGtCQUFDVSxDQUFELEVBQU87QUFDYkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FMLE1BQUFBLFdBQVc7QUFBRyxLQUh0QjtBQUFBLDRCQUlJO0FBQUssV0FBSyxFQUFFO0FBQUNNLFFBQUFBLE9BQU8sRUFBQyxNQUFUO0FBQWdCQyxRQUFBQSxHQUFHLEVBQUMsUUFBcEI7QUFBNkJDLFFBQUFBLFlBQVksRUFBQztBQUExQyxPQUFaO0FBQUEsOEJBQ0E7QUFBTyxpQkFBUyxFQUFDLE9BQWpCO0FBQ0ksZ0JBQVEsRUFBRSxrQkFBQ0osQ0FBRCxFQUFPO0FBQ2JiLFVBQUFBLDJFQUFBLENBQXdCO0FBQUNNLFlBQUFBLEtBQUssRUFBRU8sQ0FBQyxDQUFDTSxNQUFGLENBQVNDO0FBQWpCLFdBQXhCO0FBQ0gsU0FITDtBQUlJLGFBQUssRUFBRWQ7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFNQTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUEsK0JBQ0ksOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSixlQWNNLDhEQUFDLDRDQUFEO0FBQVEsZUFBUyxFQUFDLFFBQWxCO0FBQ0ksaUJBQVcsRUFBRU4sMkVBQUEsR0FBMEJLLFdBRDNDO0FBRUksY0FBUSxFQUFFLGtCQUFDaUIsRUFBRDtBQUFBLGVBQVF0QiwyRUFBQSxDQUF3QjtBQUFDSyxVQUFBQSxXQUFXLEVBQUVpQjtBQUFkLFNBQXhCLENBQVI7QUFBQSxPQUZkO0FBR0ksa0JBQVksRUFBRTtBQUFBLGVBQU1iLFdBQVcsRUFBakI7QUFBQSxPQUhsQjtBQUlJLHNCQUFnQixFQUFFO0FBQUEsZUFBTUEsV0FBVyxFQUFqQjtBQUFBLE9BSnRCO0FBS0ksWUFBTSxFQUFFO0FBQUEsZUFBT0EsV0FBVyxFQUFsQjtBQUFBLE9BTFo7QUFNSSxrQkFBWSxFQUFFRjtBQU5sQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUF5QkgsQ0F4Q0Q7O0dBQU1IO1VBQ3NCSixvRUFDT0QsbUVBQ05FOzs7S0FIdkJHO0FBMENOLCtEQUFlQSxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NlY3Rpb25zL1RleHRFZGl0b3IuanM/NjY4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFZGl0b3IgfSBmcm9tIFwiZHJhZnQtanNcIjtcbmltcG9ydCB7IHVzZVN0eWxlU3RvcmUsIHVzZUVkaXRvclN0b3JlIH0gZnJvbSBcIi4uL3N0b3Jlcy91c2VFZGl0b3JTdG9yZVwiO1xuaW1wb3J0IHVzZUJsb2NrcyBmcm9tIFwiLi4vdXRpbHMvdXNlQmxvY2tzXCI7XG5pbXBvcnQgeyBWc2NSZWZyZXNoIH0gZnJvbSBcInJlYWN0LWljb25zL3ZzY1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgVGV4dEVkaXRvciA9ICgpID0+IHtcbiAgICBjb25zdCB7IGVkaXRvclN0YXRlIH0gPSB1c2VFZGl0b3JTdG9yZSgpO1xuICAgIGNvbnN0IHsgdGl0bGUsIGJsb2NrU3R5bGVGbn0gPSB1c2VTdHlsZVN0b3JlKCk7XG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQgfSA9IHVzZUJsb2NrcygpO1xuICBcbiAgICBjb25zdCBwcmVwYXJlVGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcmVwYXJlXCIpO1xuICAgICAgICBoYW5kbGVTdWJtaXQoZWRpdG9yU3RhdGUpO1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByZXBhcmVUZXh0KCk7XG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybihcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZWRpdG9yfSBcbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4geyBcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBwcmVwYXJlVGV4dCgpfX0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixnYXA6XCIxLjVyZW1cIixtYXJnaW5Cb3R0b206XCIxLjVyZW1cIn19PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdXNlRWRpdG9yU3RvcmUuc2V0U3RhdGUoe3RpdGxlOiBlLnRhcmdldC52YWx1ZX0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfS8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICA8VnNjUmVmcmVzaC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8RWRpdG9yIGVkaXRvcktleT1cImVkaXRvclwiXG4gICAgICAgICAgICAgICAgICBlZGl0b3JTdGF0ZT17dXNlRWRpdG9yU3RvcmUuZ2V0U3RhdGUoKS5lZGl0b3JTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZWQpID0+IHVzZUVkaXRvclN0b3JlLnNldFN0YXRlKHtlZGl0b3JTdGF0ZTogZWR9KX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZVJldHVybj17KCkgPT4gcHJlcGFyZVRleHQoKX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZVBhc3RlZFRleHQ9eygpID0+IHByZXBhcmVUZXh0KCl9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9eygpID0+ICBwcmVwYXJlVGV4dCgpfVxuICAgICAgICAgICAgICAgICAgYmxvY2tTdHlsZUZuPXtibG9ja1N0eWxlRm59XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuICBcbmV4cG9ydCBkZWZhdWx0IFRleHRFZGl0b3I7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkVkaXRvciIsInVzZVN0eWxlU3RvcmUiLCJ1c2VFZGl0b3JTdG9yZSIsInVzZUJsb2NrcyIsIlZzY1JlZnJlc2giLCJzdHlsZXMiLCJUZXh0RWRpdG9yIiwiZWRpdG9yU3RhdGUiLCJ0aXRsZSIsImJsb2NrU3R5bGVGbiIsImhhbmRsZVN1Ym1pdCIsInByZXBhcmVUZXh0IiwiY29uc29sZSIsImxvZyIsImVkaXRvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BsYXkiLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiZ2V0U3RhdGUiLCJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/TextEditor.js\n");

/***/ })

});