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
/* harmony export */   "loadModule": () => (/* reexport safe */ _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _helpers_resolveModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/resolveModule */ "./src/helpers/resolveModule.js");
/* harmony import */ var _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/useInjectScript */ "./src/helpers/useInjectScript.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  useInjectScript: _helpers_useInjectScript__WEBPACK_IMPORTED_MODULE_1__.default
});

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob3N0LWZlZGVyYXRpb24vLi9zcmMvaGVscGVycy9yZXNvbHZlTW9kdWxlLmpzIiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uLy4vc3JjL2hlbHBlcnMvdXNlSW5qZWN0U2NyaXB0LmpzIiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy1ob3N0LWZlZGVyYXRpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLWhvc3QtZmVkZXJhdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtaG9zdC1mZWRlcmF0aW9uLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlc29sdmVNb2R1bGUiLCJzY29wZSIsIm1vZHVsZSIsIndpbmRvdyIsImdldCIsInRoZW4iLCJmYWN0b3J5IiwiTW9kdWxlIiwiZXJyb3IiLCJjb25zb2xlIiwidXNlSW5qZWN0U2NyaXB0IiwiYXJncyIsIlJlYWN0Iiwic2NyaXB0UmVhZHkiLCJzZXRTY3JpcHRSZWFkeSIsInNjcmlwdEZhaWxlZCIsInNldFNjcmlwdEZhaWxlZCIsInVzZUVmZmVjdCIsInVybCIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ0eXBlIiwiYXN5bmMiLCJvbmxvYWQiLCJsb2ciLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7OztBQ1ZBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSO0FBQUEsU0FDbEI7QUFBQSxXQUNJQyxNQUFNLENBQUNGLEtBQUQsQ0FBTixDQUFjRyxHQUFkLGFBQXVCRixNQUF2QixHQUNLRyxJQURMLENBQ1UsVUFBQ0MsT0FBRCxFQUFhO0FBQ2YsVUFBTUMsTUFBTSxHQUFHRCxPQUFPLEVBQXRCO0FBQ0EsYUFBT0MsTUFBUDtBQUNILEtBSkwsV0FLVyxVQUFDQyxLQUFELEVBQVc7QUFDZEMsYUFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDSCxLQVBMLENBREo7QUFBQSxHQURrQjtBQUFBLENBQXRCOztBQVdBLGlFQUFlUixhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7QUFFQSxJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLElBQUQsRUFBVTtBQUFBLHdCQUNRQyxxREFBQSxDQUFlLEtBQWYsQ0FEUjtBQUFBO0FBQUEsTUFDdkJDLFdBRHVCO0FBQUEsTUFDVkMsY0FEVTs7QUFBQSx5QkFFVUYscURBQUEsQ0FBZSxLQUFmLENBRlY7QUFBQTtBQUFBLE1BRXZCRyxZQUZ1QjtBQUFBLE1BRVRDLGVBRlM7O0FBSTlCQyxrREFBUyxDQUFDLFlBQU07QUFDWixRQUFJLENBQUNOLElBQUksQ0FBQ08sR0FBVixFQUFlO0FBQ1g7QUFDSDs7QUFFRCxRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUVBRixXQUFPLENBQUNHLEdBQVIsR0FBY1gsSUFBSSxDQUFDTyxHQUFuQjtBQUNBQyxXQUFPLENBQUNJLElBQVIsR0FBZSxpQkFBZjtBQUNBSixXQUFPLENBQUNLLEtBQVIsR0FBZ0IsSUFBaEI7QUFFQVYsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUUsbUJBQWUsQ0FBQyxLQUFELENBQWY7O0FBRUFHLFdBQU8sQ0FBQ00sTUFBUixHQUFpQixZQUFNO0FBQ25CaEIsYUFBTyxDQUFDaUIsR0FBUixvQ0FBd0NmLElBQUksQ0FBQ08sR0FBN0M7QUFDQUosb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxLQUhEOztBQUtBSyxXQUFPLENBQUNRLE9BQVIsR0FBa0IsWUFBTTtBQUNwQmxCLGFBQU8sQ0FBQ0QsS0FBUixrQ0FBd0NHLElBQUksQ0FBQ08sR0FBN0M7QUFDQUosb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUUscUJBQWUsQ0FBQyxJQUFELENBQWY7QUFDSCxLQUpEOztBQU1BSSxZQUFRLENBQUNRLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlYsT0FBMUI7QUFFQSxXQUFPLFlBQU07QUFDVFYsYUFBTyxDQUFDaUIsR0FBUixtQ0FBdUNmLElBQUksQ0FBQ08sR0FBNUM7QUFDQUUsY0FBUSxDQUFDUSxJQUFULENBQWNFLFdBQWQsQ0FBMEJYLE9BQTFCO0FBQ0gsS0FIRDtBQUlILEdBL0JRLEVBK0JOLENBQUNSLElBQUksQ0FBQ08sR0FBTixDQS9CTSxDQUFUO0FBaUNBLFNBQU87QUFDSEwsZUFBVyxFQUFYQSxXQURHO0FBRUhFLGdCQUFZLEVBQVpBO0FBRkcsR0FBUDtBQUlILENBekNEOztBQTJDQSxpRUFBZUwsZUFBZixFOzs7Ozs7Ozs7O0FDN0NBLG1EOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUEsaUVBQWU7QUFDWEEsaUJBQWUsRUFBZkEsNkRBQWVBO0FBREosQ0FBZiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKSA6IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXykge1xucmV0dXJuICIsImNvbnN0IHJlc29sdmVNb2R1bGUgPSAoc2NvcGUsIG1vZHVsZSkgPT4gXG4gICAgKCkgPT5cbiAgICAgICAgd2luZG93W3Njb3BlXS5nZXQoYC4vJHttb2R1bGV9YClcbiAgICAgICAgICAgIC50aGVuKChmYWN0b3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgTW9kdWxlID0gZmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBNb2R1bGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVNb2R1bGU7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgdXNlSW5qZWN0U2NyaXB0ID0gKGFyZ3MpID0+IHtcbiAgICBjb25zdCBbc2NyaXB0UmVhZHksIHNldFNjcmlwdFJlYWR5XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2NyaXB0RmFpbGVkLCBzZXRTY3JpcHRGYWlsZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFhcmdzLnVybCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgICAgICAgZWxlbWVudC5zcmMgPSBhcmdzLnVybDtcbiAgICAgICAgZWxlbWVudC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgICAgZWxlbWVudC5hc3luYyA9IHRydWU7XG5cbiAgICAgICAgc2V0U2NyaXB0UmVhZHkoZmFsc2UpO1xuICAgICAgICBzZXRTY3JpcHRGYWlsZWQoZmFsc2UpO1xuXG4gICAgICAgIGVsZW1lbnQub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYER5bmFtaWMgU2NyaXB0IEluamVjdGVkOiAke2FyZ3MudXJsfWApO1xuICAgICAgICAgICAgc2V0U2NyaXB0UmVhZHkodHJ1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZWxlbWVudC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRHluYW1pYyBTY3JpcHQgRmFpbGVkOiAke2FyZ3MudXJsfWApO1xuICAgICAgICAgICAgc2V0U2NyaXB0UmVhZHkoZmFsc2UpO1xuICAgICAgICAgICAgc2V0U2NyaXB0RmFpbGVkKHRydWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEeW5hbWljIFNjcmlwdCBSZW1vdmVkOiAke2FyZ3MudXJsfWApO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICAgICAgfTtcbiAgICB9LCBbYXJncy51cmxdKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNjcmlwdFJlYWR5LFxuICAgICAgICBzY3JpcHRGYWlsZWQsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUluamVjdFNjcmlwdDtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbG9hZE1vZHVsZSBmcm9tICcuL2hlbHBlcnMvcmVzb2x2ZU1vZHVsZSc7XG5pbXBvcnQgdXNlSW5qZWN0U2NyaXB0IGZyb20gJy4vaGVscGVycy91c2VJbmplY3RTY3JpcHQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXNlSW5qZWN0U2NyaXB0XG59O1xuXG5leHBvcnQge1xuICAgIGxvYWRNb2R1bGVcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9