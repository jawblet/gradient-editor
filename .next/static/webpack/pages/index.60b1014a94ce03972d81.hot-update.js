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

/***/ "./utils/useBlocks.js":
/*!****************************!*\
  !*** ./utils/useBlocks.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useBlocks; }\n/* harmony export */ });\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! draft-js */ \"./node_modules/draft-js/lib/Draft.js\");\n/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stores_usePageStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stores/usePageStore */ \"./stores/usePageStore.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction useBlocks() {\n  _s();\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    _stores_usePageStore__WEBPACK_IMPORTED_MODULE_4__.default.setState({\n      currentPage: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)()\n    });\n    return function () {\n      _stores_usePageStore__WEBPACK_IMPORTED_MODULE_4__.default.setState({\n        currentPage: null\n      });\n    };\n  }, []);\n\n  var getSentiment = /*#__PURE__*/function () {\n    var _ref = (0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(text) {\n      return _Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!(!text || text.split(\" \").length < 3)) {\n                _context.next = 2;\n                break;\n              }\n\n              return _context.abrupt(\"return\", null);\n\n            case 2:\n              return _context.abrupt(\"return\", axios__WEBPACK_IMPORTED_MODULE_5___default().post('/api', {\n                text: text\n              }).then(function (res) {\n                var _res$data$probability = res.data.probability,\n                    neg = _res$data$probability.neg,\n                    neutral = _res$data$probability.neutral,\n                    pos = _res$data$probability.pos;\n                var rgb = [neg, neutral, pos].map(function (el) {\n                  return Math.round(el * 255);\n                });\n                var hex = '#' + rgb.map(function (x) {\n                  var hexVal = x.toString(16);\n                  return hexVal.length === 1 ? '0' + hexVal : hexVal;\n                }).join('');\n                return hex;\n              }));\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function getSentiment(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(editorState) {\n      var content, plainText, _convertToRaw, blocks, getBlocks;\n\n      return _Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              content = editorState.getCurrentContent();\n              plainText = content.getPlainText();\n              _convertToRaw = (0,draft_js__WEBPACK_IMPORTED_MODULE_3__.convertToRaw)(content), blocks = _convertToRaw.blocks;\n\n              if (!plainText) {\n                console.log(\"Error: Empty note!\");\n              }\n\n              _stores_usePageStore__WEBPACK_IMPORTED_MODULE_4__.default.setState({\n                wordCount: plainText.length\n              });\n\n              getBlocks = /*#__PURE__*/function () {\n                var _ref3 = (0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3() {\n                  var promises;\n                  return _Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n                    while (1) {\n                      switch (_context3.prev = _context3.next) {\n                        case 0:\n                          _context3.next = 2;\n                          return Promise.all(blocks.map( /*#__PURE__*/function () {\n                            var _ref4 = (0,_Users_juliabell_gradient_editor_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(block, i) {\n                              var color, newBlock;\n                              return _Users_juliabell_gradient_editor_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n                                while (1) {\n                                  switch (_context2.prev = _context2.next) {\n                                    case 0:\n                                      _context2.next = 2;\n                                      return getSentiment(block.text);\n\n                                    case 2:\n                                      color = _context2.sent;\n                                      //   :block/sentiment\n                                      newBlock = {\n                                        id: block.key,\n                                        //   :block/id   \n                                        page: _stores_usePageStore__WEBPACK_IMPORTED_MODULE_4__.default.getState().currentPage,\n                                        //   :block/page\n                                        content: blocks[i],\n                                        //   :block/content \n                                        order: i,\n                                        //   :block/order\n                                        wordCount: block.text.length,\n                                        //   :block/word-count\n                                        color: color\n                                      };\n                                      return _context2.abrupt(\"return\", newBlock);\n\n                                    case 5:\n                                    case \"end\":\n                                      return _context2.stop();\n                                  }\n                                }\n                              }, _callee2);\n                            }));\n\n                            return function (_x3, _x4) {\n                              return _ref4.apply(this, arguments);\n                            };\n                          }()));\n\n                        case 2:\n                          promises = _context3.sent;\n                          _stores_usePageStore__WEBPACK_IMPORTED_MODULE_4__.default.setState({\n                            blocks: promises\n                          });\n\n                        case 4:\n                        case \"end\":\n                          return _context3.stop();\n                      }\n                    }\n                  }, _callee3);\n                }));\n\n                return function getBlocks() {\n                  return _ref3.apply(this, arguments);\n                };\n              }();\n\n              getBlocks();\n\n            case 7:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function handleSubmit(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return {\n    handleSubmit: handleSubmit\n  };\n}\n\n_s(useBlocks, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QnBDLFlBQVksQ0FBQ21DLEtBQUssQ0FBQ2xDLElBQVAsQ0FEVTs7QUFBQTtBQUNwQ29DLHNDQUFBQSxLQURvQztBQUNPO0FBRTNDQyxzQ0FBQUEsUUFIb0MsR0FHekI7QUFDYkMsd0NBQUFBLEVBQUUsRUFBQ0osS0FBSyxDQUFDSyxHQURJO0FBQ3FDO0FBQ2xEQyx3Q0FBQUEsSUFBSSxFQUFFaEQsa0VBQUEsR0FBd0JNLFdBRmpCO0FBRXFDO0FBQ2xEeUIsd0NBQUFBLE9BQU8sRUFBQ0ksTUFBTSxDQUFDUSxDQUFELENBSEQ7QUFHcUM7QUFDbERPLHdDQUFBQSxLQUFLLEVBQUVQLENBSk07QUFJcUM7QUFDbERMLHdDQUFBQSxTQUFTLEVBQUVJLEtBQUssQ0FBQ2xDLElBQU4sQ0FBV0UsTUFMVDtBQUtxQztBQUNsRGtDLHdDQUFBQSxLQUFLLEVBQUxBO0FBTmEsdUNBSHlCO0FBQUEsd0VBV25DQyxRQVhtQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBWixDQURUOztBQUFBO0FBQ1JNLDBCQUFBQSxRQURRO0FBZWZuRCwwQkFBQUEsa0VBQUEsQ0FBc0I7QUFBRW1DLDRCQUFBQSxNQUFNLEVBQUVnQjtBQUFWLDJCQUF0Qjs7QUFmZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRDs7QUFBQSxnQ0FVWFosU0FWVztBQUFBO0FBQUE7QUFBQTs7QUEyQmpCQSxjQUFBQSxTQUFTOztBQTNCUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaVixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQThCSSxTQUFPO0FBQ0hBLElBQUFBLFlBQVksRUFBWkE7QUFERyxHQUFQO0FBR0g7O0dBNUR1QnpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL3VzZUJsb2Nrcy5qcz8zYTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29udmVydFRvUmF3IH0gZnJvbSBcImRyYWZ0LWpzXCI7XG5pbXBvcnQgdXNlUGFnZVN0b3JlIGZyb20gXCIuLi9zdG9yZXMvdXNlUGFnZVN0b3JlXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQmxvY2tzKCkge1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVzZVBhZ2VTdG9yZS5zZXRTdGF0ZSh7Y3VycmVudFBhZ2U6IHV1aWR2NCgpfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdXNlUGFnZVN0b3JlLnNldFN0YXRlKHtjdXJyZW50UGFnZTogbnVsbH0pO1xuICAgIH1cbn0sIFtdKTtcblxuXG5jb25zdCBnZXRTZW50aW1lbnQgPSBhc3luYyAodGV4dCkgPT4ge1xuICAgIGlmKCF0ZXh0IHx8IHRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2codGV4dC5zcGxpdChcIiBcIikubGVuZ3RoKTtcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaScsIHsgdGV4dCB9KVxuICAgICAgICAudGhlbihyZXMgPT4geyAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB7IG5lZywgbmV1dHJhbCwgcG9zIH0gPSByZXMuZGF0YS5wcm9iYWJpbGl0eTsgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJnYiA9IFtuZWcsIG5ldXRyYWwsIHBvc10ubWFwKGVsID0+IE1hdGgucm91bmQoZWwgKiAyNTUpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgaGV4ID0gJyMnICsgcmdiLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGV4VmFsID0geC50b1N0cmluZygxNilcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChoZXhWYWwubGVuZ3RoID09PSAxKSA/ICcwJyArIGhleFZhbCA6IGhleFZhbCB9KS5qb2luKCcnKTtcbiAgICAgICAgICAgIHJldHVybiBoZXg7XG4gICAgfSlcbn1cblxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGVkaXRvclN0YXRlKSA9PiB7IFxuICAgIGNvbnN0IGNvbnRlbnQgPSBlZGl0b3JTdGF0ZS5nZXRDdXJyZW50Q29udGVudCgpO1xuICAgIGNvbnN0IHBsYWluVGV4dCA9IGNvbnRlbnQuZ2V0UGxhaW5UZXh0KCk7XG4gICAgY29uc3QgeyBibG9ja3MgfSA9IGNvbnZlcnRUb1Jhdyhjb250ZW50KTtcblxuICAgIGlmKCFwbGFpblRleHQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBFbXB0eSBub3RlIVwiKVxuICAgIH1cbiAgICB1c2VQYWdlU3RvcmUuc2V0U3RhdGUoeyB3b3JkQ291bnQ6IHBsYWluVGV4dC5sZW5ndGggfSk7XG5cbiAgICBjb25zdCBnZXRCbG9ja3MgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoYmxvY2tzLm1hcChhc3luYyAoYmxvY2ssIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYXdhaXQgZ2V0U2VudGltZW50KGJsb2NrLnRleHQpOyAgICAvLyAgIDpibG9jay9zZW50aW1lbnRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbmV3QmxvY2sgPSB7IFxuICAgICAgICAgICAgICAgIGlkOmJsb2NrLmtleSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICA6YmxvY2svaWQgICBcbiAgICAgICAgICAgICAgICBwYWdlOiB1c2VQYWdlU3RvcmUuZ2V0U3RhdGUoKS5jdXJyZW50UGFnZSwgICAgICAgIC8vICAgOmJsb2NrL3BhZ2VcbiAgICAgICAgICAgICAgICBjb250ZW50OmJsb2Nrc1tpXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgOmJsb2NrL2NvbnRlbnQgXG4gICAgICAgICAgICAgICAgb3JkZXI6IGksICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIDpibG9jay9vcmRlclxuICAgICAgICAgICAgICAgIHdvcmRDb3VudDogYmxvY2sudGV4dC5sZW5ndGgsICAgICAgICAgICAgICAgICAgICAgLy8gICA6YmxvY2svd29yZC1jb3VudFxuICAgICAgICAgICAgICAgIGNvbG9yXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBuZXdCbG9jaztcbiAgICAgICAgfSkpXG4gICAgICAgICAgICBcbiAgICAgICB1c2VQYWdlU3RvcmUuc2V0U3RhdGUoeyBibG9ja3M6IHByb21pc2VzIH0pO1xuICAgIH1cbiAgICBnZXRCbG9ja3MoKTtcbn1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZVN1Ym1pdFxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImNvbnZlcnRUb1JhdyIsInVzZVBhZ2VTdG9yZSIsInY0IiwidXVpZHY0IiwiYXhpb3MiLCJ1c2VCbG9ja3MiLCJzZXRTdGF0ZSIsImN1cnJlbnRQYWdlIiwiZ2V0U2VudGltZW50IiwidGV4dCIsInNwbGl0IiwibGVuZ3RoIiwicG9zdCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicHJvYmFiaWxpdHkiLCJuZWciLCJuZXV0cmFsIiwicG9zIiwicmdiIiwibWFwIiwiZWwiLCJNYXRoIiwicm91bmQiLCJoZXgiLCJ4IiwiaGV4VmFsIiwidG9TdHJpbmciLCJqb2luIiwiaGFuZGxlU3VibWl0IiwiZWRpdG9yU3RhdGUiLCJjb250ZW50IiwiZ2V0Q3VycmVudENvbnRlbnQiLCJwbGFpblRleHQiLCJnZXRQbGFpblRleHQiLCJibG9ja3MiLCJjb25zb2xlIiwibG9nIiwid29yZENvdW50IiwiZ2V0QmxvY2tzIiwiUHJvbWlzZSIsImFsbCIsImJsb2NrIiwiaSIsImNvbG9yIiwibmV3QmxvY2siLCJpZCIsImtleSIsInBhZ2UiLCJnZXRTdGF0ZSIsIm9yZGVyIiwicHJvbWlzZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/useBlocks.js\n");

/***/ })

});