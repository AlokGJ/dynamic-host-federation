/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DynamicComponent.js":
/*!*********************************!*\
  !*** ./src/DynamicComponent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/useInjectScript */ \"./src/helpers/useInjectScript.js\");\n/* harmony import */ var _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/resolveModule */ \"./src/helpers/resolveModule.js\");\n\n\n\n\nvar DynamicComponent = function DynamicComponent(props) {\n  var _useInjectScript = (0,_helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default)({\n    url: props.config && props.config.url\n  }),\n      scriptReady = _useInjectScript.scriptReady,\n      scriptFailed = _useInjectScript.scriptFailed;\n\n  if (!props.config) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"No Config specified\");\n  }\n\n  if (!scriptReady) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Loading dynamic script: \", props.config.url);\n  }\n\n  if (scriptFailed) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Failed to load dynamic script: \", props.config.url);\n  }\n\n  var Component = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((0,_helpers_resolveModule__WEBPACK_IMPORTED_MODULE_2__.default)(props.config.scope, props.config.module));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: \"Loading System\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicComponent);\n\n//# sourceURL=webpack://dynamic-host-federation/./src/DynamicComponent.js?");

/***/ }),

/***/ "./src/helpers/resolveModule.js":
/*!**************************************!*\
  !*** ./src/helpers/resolveModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar resolveModule = function resolveModule(scope, module) {\n  return function () {\n    return window[scope].get(\"./\".concat(module)).then(function (factory) {\n      var Module = factory();\n      return Module;\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveModule);\n\n//# sourceURL=webpack://dynamic-host-federation/./src/helpers/resolveModule.js?");

/***/ }),

/***/ "./src/helpers/useInjectScript.js":
/*!****************************************!*\
  !*** ./src/helpers/useInjectScript.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar useInjectScript = function useInjectScript(args) {\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      scriptReady = _React$useState2[0],\n      setScriptReady = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),\n      _React$useState4 = _slicedToArray(_React$useState3, 2),\n      scriptFailed = _React$useState4[0],\n      setScriptFailed = _React$useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!args.url) {\n      return;\n    }\n\n    var element = document.createElement(\"script\");\n    element.src = args.url;\n    element.type = \"text/javascript\";\n    element.async = true;\n    setScriptReady(false);\n    setScriptFailed(false);\n\n    element.onload = function () {\n      console.log(\"Dynamic Script Injected: \".concat(args.url));\n      setScriptReady(true);\n    };\n\n    element.onerror = function () {\n      console.error(\"Dynamic Script Failed: \".concat(args.url));\n      setScriptReady(false);\n      setScriptFailed(true);\n    };\n\n    document.head.appendChild(element);\n    return function () {\n      console.log(\"Dynamic Script Removed: \".concat(args.url));\n      document.head.removeChild(element);\n    };\n  }, [args.url]);\n  return {\n    scriptReady: scriptReady,\n    scriptFailed: scriptFailed\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInjectScript);\n\n//# sourceURL=webpack://dynamic-host-federation/./src/helpers/useInjectScript.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loadModule\": () => (/* reexport safe */ _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__.default),\n/* harmony export */   \"useInjectScript\": () => (/* reexport safe */ _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default),\n/* harmony export */   \"DynamicComponent\": () => (/* reexport safe */ _DynamicComponent__WEBPACK_IMPORTED_MODULE_2__.default)\n/* harmony export */ });\n/* harmony import */ var _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/resolveModule */ \"./src/helpers/resolveModule.js\");\n/* harmony import */ var _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/useInjectScript */ \"./src/helpers/useInjectScript.js\");\n/* harmony import */ var _DynamicComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicComponent */ \"./src/DynamicComponent.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  loadModule: _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__.default,\n  useInjectScript: _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default,\n  DynamicComponent: _DynamicComponent__WEBPACK_IMPORTED_MODULE_2__.default\n});\n\n\n//# sourceURL=webpack://dynamic-host-federation/./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});