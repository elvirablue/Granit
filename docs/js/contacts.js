/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/modules/navigation/navigation.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/navigation/navigation.js ***!
  \*****************************************************/
/***/ (function() {

var buttonToggleMenu;
var Menu;
function handleResize() {
  closeMenu(buttonToggleMenu, Menu);
}
function toggleMenu(buttonToggleMenu, Menu) {
  document.body.classList.toggle('mobile-hidden');
  buttonToggleMenu === null || buttonToggleMenu === void 0 || buttonToggleMenu.classList.toggle('-open');
  Menu === null || Menu === void 0 || Menu.classList.toggle('-open');
}
function closeMenu(buttonToggleMenu, Menu) {
  var isOpenMenu = Menu === null || Menu === void 0 ? void 0 : Menu.classList.contains('-open');
  if (isOpenMenu) {
    document.body.classList.remove('mobile-hidden');
    buttonToggleMenu === null || buttonToggleMenu === void 0 || buttonToggleMenu.classList.remove('-open');
    Menu === null || Menu === void 0 || Menu.classList.remove('-open');
  }
}
var initNavigation = function initNavigation() {
  var _buttonToggleMenu;
  buttonToggleMenu = document.body.querySelector('#toggleMenu');
  Menu = document.body.querySelector('#Menu');
  (_buttonToggleMenu = buttonToggleMenu) === null || _buttonToggleMenu === void 0 || _buttonToggleMenu.addEventListener('click', function () {
    return toggleMenu(buttonToggleMenu, Menu);
  });
  window.addEventListener('resize', handleResize);
  return true;
};
initNavigation();

/***/ }),

/***/ "./src/js/contacts.js":
/*!****************************!*\
  !*** ./src/js/contacts.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var animate_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var _import_object_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/object_manager */ "./src/js/import/object_manager.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");





/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_navigation_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/navigation/navigation */ "./src/blocks/modules/navigation/navigation.js");
/* harmony import */ var _modules_navigation_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_navigation_navigation__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/import/object_manager.js":
/*!*****************************************!*\
  !*** ./src/js/import/object_manager.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/js/import/data.json");

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10
    }, {
      searchControlProvider: 'yandex#search'
    }),
    objectManager = new ymaps.ObjectManager({
      // Чтобы метки начали кластеризоваться, выставляем опцию.
      clusterize: true,
      // ObjectManager принимает те же опции, что и кластеризатор.
      gridSize: 32,
      clusterDisableClickZoom: true
    });

  // Чтобы задать опции одиночным объектам и кластерам,
  // обратимся к дочерним коллекциям ObjectManager.
  objectManager.objects.options.set('preset', 'islands#greenDotIcon');
  objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
  myMap.geoObjects.add(objectManager);
  $.ajax({
    url: "data.json"
  }).done(function (data) {
    objectManager.add(data);
  });
}

/***/ }),

/***/ "./src/js/import/data.json":
/*!*********************************!*\
  !*** ./src/js/import/data.json ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"type":"FeatureCollection","features":[{"type":"Feature","id":0,"geometry":{"type":"Point","coordinates":[55.722036,37.602085]},"properties":{"balloonContentHeader":"<font size=3><b><a target=\'_blank\' href=\'https://yandex.ru\'>Здесь может быть ваша ссылка</a></b></font>","balloonContentBody":"<p>Ваше имя: <input name=\'login\'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type=\'submit\' value=\'Отправить\'></p>","balloonContentFooter":"<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>","clusterCaption":"<strong><s>Еще</s> одна</strong> метка","hintContent":"<strong>Текст  <s>подсказки</s></strong>"}},{"type":"Feature","id":1,"geometry":{"type":"Point","coordinates":[59.906401,30.344951]},"properties":{"balloonContentHeader":"<font size=3><b><a target=\'_blank\' href=\'https://yandex.ru\'>Здесь может быть ваша ссылка</a></b></font>","balloonContentBody":"<p>Ваше имя: <input name=\'login\'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type=\'submit\' value=\'Отправить\'></p>","balloonContentFooter":"<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>","clusterCaption":"<strong><s>Еще</s> одна</strong> метка","hintContent":"<strong>Текст  <s>подсказки</s></strong>"}}]}');

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"contacts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgranit"] = self["webpackChunkgranit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/contacts.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=contacts.js.map