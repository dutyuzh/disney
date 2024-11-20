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

/***/ "./src/components/CharacterDetails.tsx":
/*!*********************************************!*\
  !*** ./src/components/CharacterDetails.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_disneyApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/disneyApiClient */ \"./src/pages/api/disneyApiClient.ts\");\n/* harmony import */ var _CharacterDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharacterDetail */ \"./src/components/CharacterDetail.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CharacterDetails = (param)=>{\n    let { characterId, srcUrl, lastUpdatedDate, onGoBack } = param;\n    _s();\n    const [character, setCharacter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Replace with proper type\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCharacterDetails = async ()=>{\n            try {\n                // Replace with actual API call to fetch character details by `characterId`\n                const res = await _pages_api_disneyApiClient__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/character/\".concat(characterId));\n                setCharacter(res.data.data);\n            } catch (err) {\n                setError(\"Error fetching character details\");\n            }\n        };\n        fetchCharacterDetails();\n    }, [\n        characterId\n    ]);\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/Users/daddio/Documents/development/disney/src/components/CharacterDetails.tsx\",\n            lineNumber: 36,\n            columnNumber: 12\n        }, undefined);\n    }\n    if (!character) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/daddio/Documents/development/disney/src/components/CharacterDetails.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CharacterDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                lastUpdatedDate: character.updatedAt,\n                characterName: character.name,\n                films: character.films,\n                shortFilms: character.shortFilms,\n                tvShows: character.tvShows,\n                imageSrc: character.imageUrl,\n                id: character._id,\n                srcUrl: srcUrl\n            }, void 0, false, {\n                fileName: \"/Users/daddio/Documents/development/disney/src/components/CharacterDetails.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"border border-primary ml-6 mb-6 bg-primary text-white hover:bg-white rounded-lg hover:text-black ml-2 px-[24px] py-[16px] shadow-black\",\n                onClick: onGoBack,\n                children: \"Back to List\"\n            }, void 0, false, {\n                fileName: \"/Users/daddio/Documents/development/disney/src/components/CharacterDetails.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/daddio/Documents/development/disney/src/components/CharacterDetails.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CharacterDetails, \"YjxrsD8GqBxR2FnLRY1M942GWQI=\");\n_c = CharacterDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CharacterDetails);\nvar _c;\n$RefreshReg$(_c, \"CharacterDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJEZXRhaWxzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDUTtBQUNYO0FBY2hELE1BQU1LLG1CQUFvRDtRQUFDLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLFFBQVEsRUFBRTs7SUFDM0csTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFNLE9BQU8sMkJBQTJCO0lBQ2xGLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBZ0I7SUFFbERDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVksd0JBQXdCO1lBQzVCLElBQUk7Z0JBQ0YsMkVBQTJFO2dCQUMzRSxNQUFNQyxNQUFNLE1BQU1aLHNFQUFtQixDQUFjLGNBQTBCLE9BQVpHO2dCQUNqRUssYUFBYUksSUFBSUUsSUFBSSxDQUFDQSxJQUFJO1lBQzVCLEVBQUUsT0FBT0MsS0FBSztnQkFDWkwsU0FBUztZQUNYO1FBQ0Y7UUFFQUM7SUFDRixHQUFHO1FBQUNSO0tBQVk7SUFFaEIsSUFBSU0sT0FBTztRQUNULHFCQUFPLDhEQUFDTztzQkFBS1A7Ozs7OztJQUNmO0lBRUEsSUFBSSxDQUFDRixXQUFXO1FBQ2QscUJBQU8sOERBQUNTO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTs7MEJBQ0MsOERBQUNmLHdEQUFlQTtnQkFDZEksaUJBQWlCRSxVQUFVVSxTQUFTO2dCQUNwQ0MsZUFBZVgsVUFBVVksSUFBSTtnQkFDN0JDLE9BQU9iLFVBQVVhLEtBQUs7Z0JBQ3RCQyxZQUFZZCxVQUFVYyxVQUFVO2dCQUNoQ0MsU0FBU2YsVUFBVWUsT0FBTztnQkFDMUJDLFVBQVVoQixVQUFVaUIsUUFBUTtnQkFDNUJDLElBQUlsQixVQUFVbUIsR0FBRztnQkFDakJ0QixRQUFRQTs7Ozs7OzBCQUdWLDhEQUFDdUI7Z0JBQU9DLFdBQVU7Z0JBQXlJQyxTQUFTdkI7MEJBQVU7Ozs7Ozs7Ozs7OztBQUdwTDtHQTFDTUo7S0FBQUE7QUE0Q04sK0RBQWVBLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGFyYWN0ZXJEZXRhaWxzLnRzeD8yOTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRpc25leUFwaUNsaWVudCBmcm9tICcuLi9wYWdlcy9hcGkvZGlzbmV5QXBpQ2xpZW50JztcbmltcG9ydCBDaGFyYWN0ZXJEZXRhaWwgZnJvbSAnLi9DaGFyYWN0ZXJEZXRhaWwnO1xuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9DaGFyYWN0ZXJMaXN0JztcblxuaW50ZXJmYWNlIENoYXJhY3RlckRldGFpbHNQcm9wcyB7XG4gIGNoYXJhY3RlcklkOiBudW1iZXI7XG4gIHNyY1VybDogc3RyaW5nLFxuICBsYXN0VXBkYXRlZERhdGU6IHN0cmluZyxcbiAgb25Hb0JhY2s6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBBcGlSZXNwb25zZSB7XG4gICAgZGF0YTogQ2hhcmFjdGVyO1xuICB9XG5cbmNvbnN0IENoYXJhY3RlckRldGFpbHM6IFJlYWN0LkZDPENoYXJhY3RlckRldGFpbHNQcm9wcz4gPSAoeyBjaGFyYWN0ZXJJZCwgc3JjVXJsLCBsYXN0VXBkYXRlZERhdGUsIG9uR29CYWNrIH0pID0+IHtcbiAgY29uc3QgW2NoYXJhY3Rlciwgc2V0Q2hhcmFjdGVyXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7IC8vIFJlcGxhY2Ugd2l0aCBwcm9wZXIgdHlwZVxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hDaGFyYWN0ZXJEZXRhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBBUEkgY2FsbCB0byBmZXRjaCBjaGFyYWN0ZXIgZGV0YWlscyBieSBgY2hhcmFjdGVySWRgXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpc25leUFwaUNsaWVudC5nZXQ8QXBpUmVzcG9uc2U+KGAvY2hhcmFjdGVyLyR7Y2hhcmFjdGVySWR9YCk7XG4gICAgICAgIHNldENoYXJhY3RlcihyZXMuZGF0YS5kYXRhIGFzIENoYXJhY3Rlcik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNoYXJhY3RlciBkZXRhaWxzJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoQ2hhcmFjdGVyRGV0YWlscygpO1xuICB9LCBbY2hhcmFjdGVySWRdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgaWYgKCFjaGFyYWN0ZXIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPENoYXJhY3RlckRldGFpbFxuICAgICAgICBsYXN0VXBkYXRlZERhdGU9e2NoYXJhY3Rlci51cGRhdGVkQXR9XG4gICAgICAgIGNoYXJhY3Rlck5hbWU9e2NoYXJhY3Rlci5uYW1lfVxuICAgICAgICBmaWxtcz17Y2hhcmFjdGVyLmZpbG1zfVxuICAgICAgICBzaG9ydEZpbG1zPXtjaGFyYWN0ZXIuc2hvcnRGaWxtc31cbiAgICAgICAgdHZTaG93cz17Y2hhcmFjdGVyLnR2U2hvd3N9XG4gICAgICAgIGltYWdlU3JjPXtjaGFyYWN0ZXIuaW1hZ2VVcmx9XG4gICAgICAgIGlkPXtjaGFyYWN0ZXIuX2lkfVxuICAgICAgICBzcmNVcmw9e3NyY1VybH1cbiAgICAgICAgLz5cbiAgICAgIFxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXByaW1hcnkgbWwtNiBtYi02IGJnLXByaW1hcnkgdGV4dC13aGl0ZSBob3ZlcjpiZy13aGl0ZSByb3VuZGVkLWxnIGhvdmVyOnRleHQtYmxhY2sgbWwtMiBweC1bMjRweF0gcHktWzE2cHhdIHNoYWRvdy1ibGFja1wiIG9uQ2xpY2s9e29uR29CYWNrfT5CYWNrIHRvIExpc3Q8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckRldGFpbHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRpc25leUFwaUNsaWVudCIsIkNoYXJhY3RlckRldGFpbCIsIkNoYXJhY3RlckRldGFpbHMiLCJjaGFyYWN0ZXJJZCIsInNyY1VybCIsImxhc3RVcGRhdGVkRGF0ZSIsIm9uR29CYWNrIiwiY2hhcmFjdGVyIiwic2V0Q2hhcmFjdGVyIiwiZXJyb3IiLCJzZXRFcnJvciIsImZldGNoQ2hhcmFjdGVyRGV0YWlscyIsInJlcyIsImdldCIsImRhdGEiLCJlcnIiLCJkaXYiLCJ1cGRhdGVkQXQiLCJjaGFyYWN0ZXJOYW1lIiwibmFtZSIsImZpbG1zIiwic2hvcnRGaWxtcyIsInR2U2hvd3MiLCJpbWFnZVNyYyIsImltYWdlVXJsIiwiaWQiLCJfaWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CharacterDetails.tsx\n"));

/***/ })

});