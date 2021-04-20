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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/useInjectScript */ "./src/helpers/useInjectScript.js");
/* harmony import */ var _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/resolveModule */ "./src/helpers/resolveModule.js");




var DynamicComponent = function DynamicComponent(props) {
  var _useInjectScript = (0,_helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default)({
    url: props.config && props.config.url
  }),
      scriptReady = _useInjectScript.scriptReady,
      scriptFailed = _useInjectScript.scriptFailed;

  if (!props.config) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "No Config specified");
  }

  if (!scriptReady) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Loading dynamic script: ", props.config.url);
  }

  if (scriptFailed) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Failed to load dynamic script: ", props.config.url);
  }

  var Component = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)((0,_helpers_resolveModule__WEBPACK_IMPORTED_MODULE_2__.default)(props.config.scope, props.config.module));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
    fallback: "Loading System"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicComponent);

/***/ }),

/***/ "./src/helpers/resolveModule.js":
/*!**************************************!*\
  !*** ./src/helpers/resolveModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var resolveModule = function resolveModule(scope, module) {
  return function () {
    return window[scope].get("./".concat(module)).then(function (factory) {
      var Module = factory();
      return Module;
    })["catch"](function (error) {
      console.error(error);
    });
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveModule);

/***/ }),

/***/ "./src/helpers/useInjectScript.js":
/*!****************************************!*\
  !*** ./src/helpers/useInjectScript.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useInjectScript = function useInjectScript(args) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      scriptReady = _React$useState2[0],
      setScriptReady = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      scriptFailed = _React$useState4[0],
      setScriptFailed = _React$useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!args.url) {
      return;
    }

    var element = document.createElement("script");
    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;
    setScriptReady(false);
    setScriptFailed(false);

    element.onload = function () {
      console.log("Dynamic Script Injected: ".concat(args.url));
      setScriptReady(true);
    };

    element.onerror = function () {
      console.error("Dynamic Script Failed: ".concat(args.url));
      setScriptReady(false);
      setScriptFailed(true);
    };

    document.head.appendChild(element);
    return function () {
      console.log("Dynamic Script Removed: ".concat(args.url));
      document.head.removeChild(element);
    };
  }, [args.url]);
  return {
    scriptReady: scriptReady,
    scriptFailed: scriptFailed
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useInjectScript);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "loadModule": () => (/* reexport safe */ _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "useInjectScript": () => (/* reexport safe */ _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default),
/* harmony export */   "DynamicComponent": () => (/* reexport safe */ _DynamicComponent__WEBPACK_IMPORTED_MODULE_2__.default)
/* harmony export */ });
/* harmony import */ var _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/resolveModule */ "./src/helpers/resolveModule.js");
/* harmony import */ var _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/useInjectScript */ "./src/helpers/useInjectScript.js");
/* harmony import */ var _DynamicComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicComponent */ "./src/DynamicComponent.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadModule: _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__.default,
  useInjectScript: _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default,
  DynamicComponent: _DynamicComponent__WEBPACK_IMPORTED_MODULE_2__.default
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob3N0LWZlZGVyYXRpb24vLi9zcmMvRHluYW1pY0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi8uL3NyYy9oZWxwZXJzL3Jlc29sdmVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob3N0LWZlZGVyYXRpb24vLi9zcmMvaGVscGVycy91c2VJbmplY3RTY3JpcHQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob3N0LWZlZGVyYXRpb24vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob3N0LWZlZGVyYXRpb24vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiRHluYW1pY0NvbXBvbmVudCIsInByb3BzIiwidXNlSW5qZWN0U2NyaXB0IiwidXJsIiwiY29uZmlnIiwic2NyaXB0UmVhZHkiLCJzY3JpcHRGYWlsZWQiLCJDb21wb25lbnQiLCJsYXp5IiwicmVzb2x2ZU1vZHVsZSIsInNjb3BlIiwibW9kdWxlIiwid2luZG93IiwiZ2V0IiwidGhlbiIsImZhY3RvcnkiLCJNb2R1bGUiLCJlcnJvciIsImNvbnNvbGUiLCJhcmdzIiwiUmVhY3QiLCJzZXRTY3JpcHRSZWFkeSIsInNldFNjcmlwdEZhaWxlZCIsInVzZUVmZmVjdCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ0eXBlIiwiYXN5bmMiLCJvbmxvYWQiLCJsb2ciLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJsb2FkTW9kdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOztBQUNBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEseUJBQ01DLGlFQUFlLENBQUM7QUFDcERDLE9BQUcsRUFBRUYsS0FBSyxDQUFDRyxNQUFOLElBQWdCSCxLQUFLLENBQUNHLE1BQU4sQ0FBYUQ7QUFEa0IsR0FBRCxDQURyQjtBQUFBLE1BQ3hCRSxXQUR3QixvQkFDeEJBLFdBRHdCO0FBQUEsTUFDWEMsWUFEVyxvQkFDWEEsWUFEVzs7QUFLaEMsTUFBSSxDQUFDTCxLQUFLLENBQUNHLE1BQVgsRUFBbUI7QUFDakIsd0JBQVEsNkZBQVI7QUFDRDs7QUFFRCxNQUFJLENBQUNDLFdBQUwsRUFBa0I7QUFDaEIsd0JBQU8sbUdBQTZCSixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsR0FBMUMsQ0FBUDtBQUNEOztBQUVELE1BQUlHLFlBQUosRUFBa0I7QUFDaEIsd0JBQU8sMEdBQW9DTCxLQUFLLENBQUNHLE1BQU4sQ0FBYUQsR0FBakQsQ0FBUDtBQUNEOztBQUVELE1BQU1JLFNBQVMsZ0JBQUdDLDJDQUFJLENBQ2xCQywrREFBYSxDQUFDUixLQUFLLENBQUNHLE1BQU4sQ0FBYU0sS0FBZCxFQUFxQlQsS0FB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Q0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQSxpRUFBZTtBQUNYa0MsWUFBVSxFQUFWQSwyREFEVztBQUVYbEMsaUJBQWUsRUFBZkEsNkRBRlc7QUFHWEYsa0JBQWdCLEVBQWhCQSxzREFBZ0JBO0FBSEwsQ0FBZiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsImltcG9ydCBSZWFjdCwgeyBsYXp5LCBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VJbmplY3RTY3JpcHQgZnJvbSAnLi9oZWxwZXJzL3VzZUluamVjdFNjcmlwdCc7XG5pbXBvcnQgcmVzb2x2ZU1vZHVsZSBmcm9tICcuL2hlbHBlcnMvcmVzb2x2ZU1vZHVsZSc7XG5jb25zdCBEeW5hbWljQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBzY3JpcHRSZWFkeSwgc2NyaXB0RmFpbGVkIH0gPSB1c2VJbmplY3RTY3JpcHQoe1xuICAgICAgdXJsOiBwcm9wcy5jb25maWcgJiYgcHJvcHMuY29uZmlnLnVybCxcbiAgICB9KTtcbiAgXG4gICAgaWYgKCFwcm9wcy5jb25maWcpIHtcbiAgICAgIHJldHVybiAoPGgyPk5vIENvbmZpZyBzcGVjaWZpZWQ8L2gyPik7XG4gICAgfVxuICBcbiAgICBpZiAoIXNjcmlwdFJlYWR5KSB7XG4gICAgICByZXR1cm4gPGgyPkxvYWRpbmcgZHluYW1pYyBzY3JpcHQ6IHtwcm9wcy5jb25maWcudXJsfTwvaDI+O1xuICAgIH1cbiAgXG4gICAgaWYgKHNjcmlwdEZhaWxlZCkge1xuICAgICAgcmV0dXJuIDxoMj5GYWlsZWQgdG8gbG9hZCBkeW5hbWljIHNjcmlwdDoge3Byb3BzLmNvbmZpZy51cmx9PC9oMj47XG4gICAgfVxuICBcbiAgICBjb25zdCBDb21wb25lbnQgPSBsYXp5KFxuICAgICAgICByZXNvbHZlTW9kdWxlKHByb3BzLmNvbmZpZy5zY29wZSwgcHJvcHMuY29uZmlnLm1vZHVsZSlcbiAgICApO1xuICBcbiAgICByZXR1cm4gKFxuICAgICAgPFN1c3BlbnNlIGZhbGxiYWNrPVwiTG9hZGluZyBTeXN0ZW1cIj5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9TdXNwZW5zZT5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBEeW5hbWljQ29tcG9uZW50O1xuIiwiY29uc3QgcmVzb2x2ZU1vZHVsZSA9IChzY29wZSwgbW9kdWxlKSA9PiBcbiAgICAoKSA9PlxuICAgICAgICB3aW5kb3dbc2NvcGVdLmdldChgLi8ke21vZHVsZX1gKVxuICAgICAgICAgICAgLnRoZW4oKGZhY3RvcnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBNb2R1bGUgPSBmYWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1vZHVsZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzb2x2ZU1vZHVsZTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VJbmplY3RTY3JpcHQgPSAoYXJncykgPT4ge1xuICAgIGNvbnN0IFtzY3JpcHRSZWFkeSwgc2V0U2NyaXB0UmVhZHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzY3JpcHRGYWlsZWQsIHNldFNjcmlwdEZhaWxlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWFyZ3MudXJsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcblxuICAgICAgICBlbGVtZW50LnNyYyA9IGFyZ3MudXJsO1xuICAgICAgICBlbGVtZW50LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuICAgICAgICBlbGVtZW50LmFzeW5jID0gdHJ1ZTtcblxuICAgICAgICBzZXRTY3JpcHRSZWFkeShmYWxzZSk7XG4gICAgICAgIHNldFNjcmlwdEZhaWxlZChmYWxzZSk7XG5cbiAgICAgICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRHluYW1pYyBTY3JpcHQgSW5qZWN0ZWQ6ICR7YXJncy51cmx9YCk7XG4gICAgICAgICAgICBzZXRTY3JpcHRSZWFkeSh0cnVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbGVtZW50Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBEeW5hbWljIFNjcmlwdCBGYWlsZWQ6ICR7YXJncy51cmx9YCk7XG4gICAgICAgICAgICBzZXRTY3JpcHRSZWFkeShmYWxzZSk7XG4gICAgICAgICAgICBzZXRTY3JpcHRGYWlsZWQodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYER5bmFtaWMgU2NyaXB0IFJlbW92ZWQ6ICR7YXJncy51cmx9YCk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgICB9O1xuICAgIH0sIFthcmdzLnVybF0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NyaXB0UmVhZHksXG4gICAgICAgIHNjcmlwdEZhaWxlZCxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlSW5qZWN0U2NyaXB0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkTW9kdWxlIGZyb20gJy4vaGVscGVycy9yZXNvbHZlTW9kdWxlJztcbmltcG9ydCB1c2VJbmplY3RTY3JpcHQgZnJvbSAnLi9oZWxwZXJzL3VzZUluamVjdFNjcmlwdCc7XG5pbXBvcnQgRHluYW1pY0NvbXBvbmVudCBmcm9tICcuL0R5bmFtaWNDb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbG9hZE1vZHVsZSxcbiAgICB1c2VJbmplY3RTY3JpcHQsXG4gICAgRHluYW1pY0NvbXBvbmVudFxufTtcblxuZXhwb3J0IHtcbiAgICBsb2FkTW9kdWxlLFxuICAgIHVzZUluamVjdFNjcmlwdCxcbiAgICBEeW5hbWljQ29tcG9uZW50XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==