/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0698":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flipper_vue_vue_type_style_index_0_id_95e3aa6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e2bd");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flipper_vue_vue_type_style_index_0_id_95e3aa6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flipper_vue_vue_type_style_index_0_id_95e3aa6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flipper_vue_vue_type_style_index_0_id_95e3aa6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_flipper_vue_vue_type_style_index_0_id_95e3aa6a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "06a9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app[data-v-058581d4]{display:grid;grid-template-columns:repeat(12,1fr)}@media only screen and (max-width:720px){#app[data-v-058581d4]{grid-template-rows:1fr 1fr;margin:10px}.profile-pic[data-v-058581d4]{grid-row:1;grid-column:5/9}.about[data-v-058581d4]{grid-row:2}.about[data-v-058581d4],.workedu[data-v-058581d4]{grid-column:1/12}.workedu[data-v-058581d4]{grid-row:3}.skills[data-v-058581d4]{grid-column:1/12;grid-row:4}}@media only screen and (max-width:500px){.profile-pic[data-v-058581d4]{grid-row:1;grid-column:4/10}}@media only screen and (max-width:400px){.profile-pic[data-v-058581d4]{grid-row:1;grid-column:2/12}}@media only screen and (min-width:721px){#app[data-v-058581d4]{gap:30px}.about[data-v-058581d4]{grid-column:2/10}.profile-pic[data-v-058581d4]{grid-column:10/12;width:100px;height:100px;position:relative}.profile[data-v-058581d4]{height:200px;width:200px}.workedu[data-v-058581d4]{grid-column:2/10;grid-row:2}.skills[data-v-058581d4]{width:100%;grid-column:2/10;grid-row:3;margin-bottom:30px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "1628":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_bcc1e63a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7fd4");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_bcc1e63a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_bcc1e63a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_bcc1e63a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_bcc1e63a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "2087":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_workEdu_vue_vue_type_style_index_0_id_18be15c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8e42");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_workEdu_vue_vue_type_style_index_0_id_18be15c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_workEdu_vue_vue_type_style_index_0_id_18be15c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_workEdu_vue_vue_type_style_index_0_id_18be15c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_workEdu_vue_vue_type_style_index_0_id_18be15c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "2b0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       false && false;

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     false && false;
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       false && false;
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       false && false;
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       false && false;
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {}
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     false && false;
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (false) {}
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       false && false;
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       false && false;
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     false && false;
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
       false && false;
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       false && false;
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     false && false;
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesToShadowDOM; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "384f":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(c,k,m){c!=Array.prototype&&c!=Object.prototype&&(c[k]=m.value)};$jscomp.getGlobal=function(c){return"undefined"!=typeof window&&window===c?c:"undefined"!=typeof global&&null!=global?global:c};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(c){return $jscomp.SYMBOL_PREFIX+(c||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var c=$jscomp.global.Symbol.iterator;c||(c=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[c]&&$jscomp.defineProperty(Array.prototype,c,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(c){var k=0;return $jscomp.iteratorPrototype(function(){return k<c.length?{done:!1,value:c[k++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(c){$jscomp.initSymbolIterator();c={next:c};c[$jscomp.global.Symbol.iterator]=function(){return this};return c};$jscomp.iteratorFromArray=function(c,k){$jscomp.initSymbolIterator();c instanceof String&&(c+="");var m=0,l={next:function(){if(m<c.length){var h=m++;return{value:k(h,c[h]),done:!1}}l.next=function(){return{done:!0,value:void 0}};return l.next()}};l[Symbol.iterator]=function(){return l};return l};
$jscomp.polyfill=function(c,k,m,l){if(k){m=$jscomp.global;c=c.split(".");for(l=0;l<c.length-1;l++){var h=c[l];h in m||(m[h]={});m=m[h]}c=c[c.length-1];l=m[c];k=k(l);k!=l&&null!=k&&$jscomp.defineProperty(m,c,{configurable:!0,writable:!0,value:k})}};$jscomp.polyfill("Array.prototype.keys",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(c){return c})}},"es6-impl","es3");
$jscomp.polyfill("Array.prototype.values",function(c){return c?c:function(){return $jscomp.iteratorFromArray(this,function(c,m){return m})}},"es6","es3");$jscomp.polyfill("Array.prototype.fill",function(c){return c?c:function(c,m,l){var h=this.length||0;0>m&&(m=Math.max(0,h+m));if(null==l||l>h)l=h;l=Number(l);0>l&&(l=Math.max(0,h+l));for(m=Number(m||0);m<l;m++)this[m]=c;return this}},"es6-impl","es3");
this.Two=function(c){function k(){var a=document.body.getBoundingClientRect(),c=this.width=a.width,a=this.height=a.height;this.renderer.setSize(c,a,this.ratio);this.trigger(p.Events.resize,c,a)}function m(){L(m);for(var a=0;a<p.Instances.length;a++){var c=p.Instances[a];c.playing&&c.update()}}var l="undefined"!=typeof window?window:"undefined"!=typeof global?global:null,h=Object.prototype.toString,d={_indexAmount:0,natural:{slice:Array.prototype.slice,indexOf:Array.prototype.indexOf,keys:Object.keys,
bind:Function.prototype.bind,create:Object.create},identity:function(a){return a},isArguments:function(a){return"[object Arguments]"===h.call(a)},isFunction:function(a){return"[object Function]"===h.call(a)},isString:function(a){return"[object String]"===h.call(a)},isNumber:function(a){return"[object Number]"===h.call(a)},isDate:function(a){return"[object Date]"===h.call(a)},isRegExp:function(a){return"[object RegExp]"===h.call(a)},isError:function(a){return"[object Error]"===h.call(a)},isFinite:function(a){return isFinite(a)&&
!isNaN(parseFloat(a))},isNaN:function(a){return d.isNumber(a)&&a!==+a},isBoolean:function(a){return!0===a||!1===a||"[object Boolean]"===h.call(a)},isNull:function(a){return null===a},isUndefined:function(a){return void 0===a},isEmpty:function(a){return null==a?!0:q&&(d.isArray(a)||d.isString(a)||d.isArguments(a))?0===a.length:0===d.keys(a).length},isElement:function(a){return!(!a||1!==a.nodeType)},isArray:Array.isArray||function(a){return"[object Array]"===h.call(a)},isObject:function(a){var c=typeof a;
return"function"===c||"object"===c&&!!a},toArray:function(a){return a?d.isArray(a)?x.call(a):q(a)?d.map(a,d.identity):d.values(a):[]},range:function(a,c,f){null==c&&(c=a||0,a=0);f=f||1;c=Math.max(Math.ceil((c-a)/f),0);for(var e=Array(c),d=0;d<c;d++,a+=f)e[d]=a;return e},indexOf:function(a,c){if(d.natural.indexOf)return d.natural.indexOf.call(a,c);for(var f=0;f<a.length;f++)if(a[f]===c)return f;return-1},has:function(a,c){return null!=a&&hasOwnProperty.call(a,c)},bind:function(a,c){var f=d.natural.bind;
if(f&&a.bind===f)return f.apply(a,x.call(arguments,1));var e=x.call(arguments,2);return function(){a.apply(c,e)}},extend:function(a){for(var c=x.call(arguments,1),f=0;f<c.length;f++){var e=c[f],d;for(d in e)a[d]=e[d]}return a},defaults:function(a){for(var c=x.call(arguments,1),f=0;f<c.length;f++){var e=c[f],d;for(d in e)void 0===a[d]&&(a[d]=e[d])}return a},keys:function(a){if(!d.isObject(a))return[];if(d.natural.keys)return d.natural.keys(a);var c=[],f;for(f in a)d.has(a,f)&&c.push(f);return c},values:function(a){for(var c=
d.keys(a),f=[],e=0;e<c.length;e++)f.push(a[c[e]]);return f},each:function(a,c,f){f=f||this;for(var e=!q(a)&&d.keys(a),g=(e||a).length,y=0;y<g;y++){var n=e?e[y]:y;c.call(f,a[n],n,a)}return a},map:function(a,c,f){f=f||this;for(var e=!q(a)&&d.keys(a),g=(e||a).length,n=[],y=0;y<g;y++){var t=e?e[y]:y;n[y]=c.call(f,a[t],t,a)}return n},once:function(a){var c=!1;return function(){if(c)return a;c=!0;return a.apply(this,arguments)}},after:function(a,c){return function(){for(;1>--a;)return c.apply(this,arguments)}},
uniqueId:function(a){var c=++d._indexAmount+"";return a?a+c:c}},e=Math.sin,a=Math.cos,g=Math.atan2,n=Math.sqrt,f=Math.PI,t=f/2,v=Math.pow,B=Math.min,z=Math.max,A=0,x=d.natural.slice,u=l.performance&&l.performance.now?l.performance:Date,r=Math.pow(2,53)-1,q=function(a){a=null==a?void 0:a.length;return"number"==typeof a&&0<=a&&a<=r},w={temp:l.document?l.document.createElement("div"):{},hasEventListeners:d.isFunction(l.addEventListener),bind:function(a,c,f,e){this.hasEventListeners?a.addEventListener(c,
f,!!e):a.attachEvent("on"+c,f);return w},unbind:function(a,c,f,e){w.hasEventListeners?a.removeEventListeners(c,f,!!e):a.detachEvent("on"+c,f);return w},getRequestAnimationFrame:function(){var a=0,c=["ms","moz","webkit","o"],f=l.requestAnimationFrame;if(!f){for(var e=0;e<c.length;e++)f=l[c[e]+"RequestAnimationFrame"]||f;f=f||function(c,f){var e=(new Date).getTime(),d=Math.max(0,16-(e-a));f=l.setTimeout(function(){c(e+d)},d);a=e+d;return f}}f.init=d.once(m);return f}},p=l.Two=function(a){a=d.defaults(a||
{},{fullscreen:!1,width:640,height:480,type:p.Types.svg,autostart:!1});d.each(a,function(a,c){"fullscreen"!==c&&"autostart"!==c&&(this[c]=a)},this);if(d.isElement(a.domElement)){var c=a.domElement.tagName.toLowerCase();/^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(this.type+"-"+c)||(this.type=p.Types[c])}this.renderer=new p[this.type](this);p.Utils.setPlaying.call(this,a.autostart);this.frameCount=0;a.fullscreen?(a=d.bind(k,this),d.extend(document.body.style,{overflow:"hidden",
margin:0,padding:0,top:0,left:0,right:0,bottom:0,position:"fixed"}),d.extend(this.renderer.domElement.style,{display:"block",top:0,left:0,right:0,bottom:0,position:"fixed"}),w.bind(l,"resize",a),a()):d.isElement(a.domElement)||(this.renderer.setSize(a.width,a.height,this.ratio),this.width=a.width,this.height=a.height);this.scene=this.renderer.scene;p.Instances.push(this);L.init()};d.extend(p,{root:l,Array:l.Float32Array||Array,Types:{webgl:"WebGLRenderer",svg:"SVGRenderer",canvas:"CanvasRenderer"},
Version:"v0.7.0",Identifier:"two_",Properties:{hierarchy:"hierarchy",demotion:"demotion"},Events:{play:"play",pause:"pause",update:"update",render:"render",resize:"resize",change:"change",remove:"remove",insert:"insert",order:"order",load:"load"},Commands:{move:"M",line:"L",curve:"C",close:"Z"},Resolution:8,Instances:[],noConflict:function(){l.Two=c;return this},uniqueId:function(){var a=A;A++;return a},Utils:d.extend(d,{performance:u,defineProperty:function(a){var c="_"+a,f="_flag"+a.charAt(0).toUpperCase()+
a.slice(1);Object.defineProperty(this,a,{enumerable:!0,get:function(){return this[c]},set:function(a){this[c]=a;this[f]=!0}})},release:function(a){d.isObject(a)&&(d.isFunction(a.unbind)&&a.unbind(),a.vertices&&(d.isFunction(a.vertices.unbind)&&a.vertices.unbind(),d.each(a.vertices,function(a){d.isFunction(a.unbind)&&a.unbind()})),a.children&&d.each(a.children,function(a){p.Utils.release(a)}))},xhr:function(a,c){var f=new XMLHttpRequest;f.open("GET",a);f.onreadystatechange=function(){4===f.readyState&&
200===f.status&&c(f.responseText)};f.send();return f},Curve:{CollinearityEpsilon:v(10,-30),RecursionLimit:16,CuspLimit:0,Tolerance:{distance:.25,angle:0,epsilon:.01},abscissas:[[.5773502691896257],[0,.7745966692414834],[.33998104358485626,.8611363115940526],[0,.5384693101056831,.906179845938664],[.2386191860831969,.6612093864662645,.932469514203152],[0,.4058451513773972,.7415311855993945,.9491079123427585],[.1834346424956498,.525532409916329,.7966664774136267,.9602898564975363],[0,.3242534234038089,
.6133714327005904,.8360311073266358,.9681602395076261],[.14887433898163122,.4333953941292472,.6794095682990244,.8650633666889845,.9739065285171717],[0,.26954315595234496,.5190961292068118,.7301520055740494,.8870625997680953,.978228658146057],[.1252334085114689,.3678314989981802,.5873179542866175,.7699026741943047,.9041172563704749,.9815606342467192],[0,.2304583159551348,.44849275103644687,.6423493394403402,.8015780907333099,.9175983992229779,.9841830547185881],[.10805494870734367,.31911236892788974,
.5152486363581541,.6872929048116855,.827201315069765,.9284348836635735,.9862838086968123],[0,.20119409399743451,.3941513470775634,.5709721726085388,.7244177313601701,.8482065834104272,.937273392400706,.9879925180204854],[.09501250983763744,.2816035507792589,.45801677765722737,.6178762444026438,.755404408355003,.8656312023878318,.9445750230732326,.9894009349916499]],weights:[[1],[.8888888888888888,.5555555555555556],[.6521451548625461,.34785484513745385],[.5688888888888889,.47862867049936647,.23692688505618908],
[.46791393457269104,.3607615730481386,.17132449237917036],[.4179591836734694,.3818300505051189,.27970539148927664,.1294849661688697],[.362683783378362,.31370664587788727,.22238103445337448,.10122853629037626],[.3302393550012598,.31234707704000286,.26061069640293544,.1806481606948574,.08127438836157441],[.29552422471475287,.26926671930999635,.21908636251598204,.1494513491505806,.06667134430868814],[.2729250867779006,.26280454451024665,.23319376459199048,.18629021092773426,.1255803694649046,.05566856711617366],
[.24914704581340277,.2334925365383548,.20316742672306592,.16007832854334622,.10693932599531843,.04717533638651183],[.2325515532308739,.22628318026289723,.2078160475368885,.17814598076194574,.13887351021978725,.09212149983772845,.04048400476531588],[.2152638534631578,.2051984637212956,.18553839747793782,.15720316715819355,.12151857068790319,.08015808715976021,.03511946033175186],[.2025782419255613,.19843148532711158,.1861610000155622,.16626920581699392,.13957067792615432,.10715922046717194,.07036604748810812,
.03075324199611727],[.1894506104550685,.18260341504492358,.16915651939500254,.14959598881657674,.12462897125553388,.09515851168249279,.062253523938647894,.027152459411754096]]},devicePixelRatio:l.devicePixelRatio||1,getBackingStoreRatio:function(a){return a.webkitBackingStorePixelRatio||a.mozBackingStorePixelRatio||a.msBackingStorePixelRatio||a.oBackingStorePixelRatio||a.backingStorePixelRatio||1},getRatio:function(a){return p.Utils.devicePixelRatio/O(a)},setPlaying:function(a){this.playing=!!a;return this},
getComputedMatrix:function(a,c){c=c&&c.identity()||new p.Matrix;for(var f=[];a&&a._matrix;)f.push(a._matrix),a=a.parent;f.reverse();d.each(f,function(a){a=a.elements;c.multiply(a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9])});return c},deltaTransformPoint:function(a,c,f){return new p.Vector(c*a.a+f*a.c+0,c*a.b+f*a.d+0)},decomposeMatrix:function(a){var c=p.Utils.deltaTransformPoint(a,0,1),f=p.Utils.deltaTransformPoint(a,1,0),c=180/Math.PI*Math.atan2(c.y,c.x)-90;return{translateX:a.e,translateY:a.f,
scaleX:Math.sqrt(a.a*a.a+a.b*a.b),scaleY:Math.sqrt(a.c*a.c+a.d*a.d),skewX:c,skewY:180/Math.PI*Math.atan2(f.y,f.x),rotation:c}},applySvgAttributes:function(a,c){var f={},e={},g;if(getComputedStyle){var n=getComputedStyle(a);for(g=n.length;g--;){var t=n[g];var y=n[t];void 0!==y&&(e[t]=y)}}for(g=a.attributes.length;g--;)y=a.attributes[g],f[y.nodeName]=y.value;d.isUndefined(e.opacity)||(e["stroke-opacity"]=e.opacity,e["fill-opacity"]=e.opacity);d.extend(e,f);e.visible=!(d.isUndefined(e.display)&&"none"===
e.display)||d.isUndefined(e.visibility)&&"hidden"===e.visibility;for(t in e)switch(y=e[t],t){case "transform":if("none"===y)break;if(null===(a.getCTM?a.getCTM():null))break;f=p.Utils.decomposeMatrix(a.getCTM());c.translation.set(f.translateX,f.translateY);c.rotation=f.rotation;c.scale=f.scaleX;f=parseFloat((e.x+"").replace("px"));g=parseFloat((e.y+"").replace("px"));f&&(c.translation.x=f);g&&(c.translation.y=g);break;case "visible":c.visible=y;break;case "stroke-linecap":c.cap=y;break;case "stroke-linejoin":c.join=
y;break;case "stroke-miterlimit":c.miter=y;break;case "stroke-width":c.linewidth=parseFloat(y);break;case "stroke-opacity":case "fill-opacity":case "opacity":c.opacity=parseFloat(y);break;case "fill":case "stroke":/url\(\#.*\)/i.test(y)?c[t]=this.getById(y.replace(/url\(\#(.*)\)/i,"$1")):c[t]="none"===y?"transparent":y;break;case "id":c.id=y;break;case "class":c.classList=y.split(" ")}return c},read:{svg:function(){return p.Utils.read.g.apply(this,arguments)},g:function(a){var c=new p.Group;p.Utils.applySvgAttributes.call(this,
a,c);for(var f=0,e=a.childNodes.length;f<e;f++){var d=a.childNodes[f],g=d.nodeName;if(!g)return;g=g.replace(/svg\:/ig,"").toLowerCase();g in p.Utils.read&&(d=p.Utils.read[g].call(c,d),c.add(d))}return c},polygon:function(a,c){var f=[];a.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,function(a,c,e){f.push(new p.Anchor(parseFloat(c),parseFloat(e)))});c=(new p.Path(f,!c)).noStroke();c.fill="black";return p.Utils.applySvgAttributes.call(this,a,c)},polyline:function(a){return p.Utils.read.polygon.call(this,
a,!0)},path:function(a){var c=a.getAttribute("d"),f=new p.Anchor,e,g,n=!1,t=!1,y=c.match(/[a-df-z][^a-df-z]*/ig),h=y.length-1;d.each(y.slice(0),function(a,c){var f=a[0],e=f.toLowerCase(),g=a.slice(1).trim().split(/[\s,]+|(?=\s?[+\-])/),d=[],n;0>=c&&(y=[]);switch(e){case "h":case "v":1<g.length&&(n=1);break;case "m":case "l":case "t":2<g.length&&(n=2);break;case "s":case "q":4<g.length&&(n=4);break;case "c":6<g.length&&(n=6)}if(n){a=0;c=g.length;for(e=0;a<c;a+=n){var t=f;if(0<e)switch(f){case "m":t=
"l";break;case "M":t="L"}d.push([t].concat(g.slice(a,a+n)).join(" "));e++}y=Array.prototype.concat.apply(y,d)}else y.push(a)});var m=[];d.each(y,function(a,c){var y=a[0],D=y.toLowerCase();g=a.slice(1).trim();g=g.replace(/(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g,function(a,c,f){return parseFloat(c)*v(10,f)});g=g.split(/[\s,]+|(?=\s?[+\-])/);t=y===D;switch(D){case "z":if(c>=h)n=!0;else{a=f.x;c=f.y;var k=new p.Anchor(a,c,void 0,void 0,void 0,void 0,p.Commands.close)}break;case "m":case "l":a=parseFloat(g[0]);
c=parseFloat(g[1]);k=new p.Anchor(a,c,void 0,void 0,void 0,void 0,"m"===D?p.Commands.move:p.Commands.line);t&&k.addSelf(f);f=k;break;case "h":case "v":c="h"===D?"x":"y";D="x"===c?"y":"x";k=new p.Anchor(void 0,void 0,void 0,void 0,void 0,void 0,p.Commands.line);k[c]=parseFloat(g[0]);k[D]=f[D];t&&(k[c]+=f[c]);f=k;break;case "c":case "s":k=f.x;c=f.y;e||(e=new p.Vector);if("c"===D){y=parseFloat(g[0]);var B=parseFloat(g[1]);var l=parseFloat(g[2]);var z=parseFloat(g[3]);D=parseFloat(g[4]);a=parseFloat(g[5])}else D=
M(f,e,t),y=D.x,B=D.y,l=parseFloat(g[0]),z=parseFloat(g[1]),D=parseFloat(g[2]),a=parseFloat(g[3]);t&&(y+=k,B+=c,l+=k,z+=c,D+=k,a+=c);d.isObject(f.controls)||p.Anchor.AppendCurveProperties(f);f.controls.right.set(y-f.x,B-f.y);f=k=new p.Anchor(D,a,l-D,z-a,void 0,void 0,p.Commands.curve);e=k.controls.left;break;case "t":case "q":k=f.x;c=f.y;e||(e=new p.Vector);e.isZero()?(y=k,B=c):(y=e.x,c=e.y);"q"===D?(l=parseFloat(g[0]),z=parseFloat(g[1]),D=parseFloat(g[1]),a=parseFloat(g[2])):(D=M(f,e,t),l=D.x,z=D.y,
D=parseFloat(g[0]),a=parseFloat(g[1]));t&&(y+=k,B+=c,l+=k,z+=c,D+=k,a+=c);d.isObject(f.controls)||p.Anchor.AppendCurveProperties(f);f.controls.right.set(y-f.x,B-f.y);f=k=new p.Anchor(D,a,l-D,z-a,void 0,void 0,p.Commands.curve);e=k.controls.left;break;case "a":k=f.x;c=f.y;var J=parseFloat(g[0]),x=parseFloat(g[1]);B=parseFloat(g[2])*Math.PI/180;y=parseFloat(g[3]);l=parseFloat(g[4]);D=parseFloat(g[5]);a=parseFloat(g[6]);t&&(D+=k,a+=c);var u=(D-k)/2,A=(a-c)/2;z=u*Math.cos(B)+A*Math.sin(B);var u=-u*Math.sin(B)+
A*Math.cos(B),A=J*J,q=x*x,r=z*z,K=u*u,Q=r/A+K/q;1<Q&&(J*=Math.sqrt(Q),x*=Math.sqrt(Q));q=Math.sqrt((A*q-A*K-q*r)/(A*K+q*r));d.isNaN(q)?q=0:y!=l&&0<q&&(q*=-1);A=q*J*u/x;q=-q*x*z/J;k=A*Math.cos(B)-q*Math.sin(B)+(k+D)/2;var r=A*Math.sin(B)+q*Math.cos(B)+(c+a)/2,w=function(a,c){return(a[0]*c[0]+a[1]*c[1])/(Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))*Math.sqrt(Math.pow(c[0],2)+Math.pow(c[1],2)))};c=function(a,c){return(a[0]*c[1]<a[1]*c[0]?-1:1)*Math.acos(w(a,c))};var S=c([1,0],[(z-A)/J,(u-q)/x]),K=[(z-
A)/J,(u-q)/x];z=[(-z-A)/J,(-u-q)/x];var C=c(K,z);-1>=w(K,z)&&(C=Math.PI);1<=w(K,z)&&(C=0);y&&(C=I(C,2*Math.PI));l&&0<C&&(C-=2*Math.PI);var R=p.Resolution,T=(new p.Matrix).translate(k,r).rotate(B);k=d.map(d.range(R),function(a){a=(1-a/(R-1))*C+S;a=T.multiply(J*Math.cos(a),x*Math.sin(a),1);return new p.Anchor(a.x,a.y,!1,!1,!1,!1,p.Commands.line)});k.push(new p.Anchor(D,a,!1,!1,!1,!1,p.Commands.line));f=k[k.length-1];e=f.controls.left}k&&(d.isArray(k)?m=m.concat(k):m.push(k))});if(!(1>=m.length)){c=
(new p.Path(m,n,void 0,!0)).noStroke();c.fill="black";var k=c.getBoundingClientRect(!0);k.centroid={x:k.left+k.width/2,y:k.top+k.height/2};d.each(c.vertices,function(a){a.subSelf(k.centroid)});c.translation.addSelf(k.centroid);return p.Utils.applySvgAttributes.call(this,a,c)}},circle:function(a){var c=parseFloat(a.getAttribute("cx")),f=parseFloat(a.getAttribute("cy")),e=parseFloat(a.getAttribute("r")),c=(new p.Circle(c,f,e)).noStroke();c.fill="black";return p.Utils.applySvgAttributes.call(this,a,
c)},ellipse:function(a){var c=parseFloat(a.getAttribute("cx")),f=parseFloat(a.getAttribute("cy")),e=parseFloat(a.getAttribute("rx")),g=parseFloat(a.getAttribute("ry")),c=(new p.Ellipse(c,f,e,g)).noStroke();c.fill="black";return p.Utils.applySvgAttributes.call(this,a,c)},rect:function(a){var c=parseFloat(a.getAttribute("x"))||0,f=parseFloat(a.getAttribute("y"))||0,e=parseFloat(a.getAttribute("width")),g=parseFloat(a.getAttribute("height")),c=(new p.Rectangle(c+e/2,f+g/2,e,g)).noStroke();c.fill="black";
return p.Utils.applySvgAttributes.call(this,a,c)},line:function(a){var c=parseFloat(a.getAttribute("x1")),f=parseFloat(a.getAttribute("y1")),e=parseFloat(a.getAttribute("x2")),g=parseFloat(a.getAttribute("y2")),c=(new p.Line(c,f,e,g)).noFill();return p.Utils.applySvgAttributes.call(this,a,c)},lineargradient:function(a){for(var c,f=parseFloat(a.getAttribute("x1")),e=parseFloat(a.getAttribute("y1")),g=parseFloat(a.getAttribute("x2")),n=parseFloat(a.getAttribute("y2")),t=(g+f)/2,h=(n+e)/2,y=[],v=0;v<
a.children.length;v++){c=a.children[v];var k=parseFloat(c.getAttribute("offset")),m=c.getAttribute("stop-color"),B=c.getAttribute("stop-opacity"),l=c.getAttribute("style");d.isNull(m)&&(m=(c=l?l.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/):!1)&&1<c.length?c[1]:void 0);d.isNull(B)&&(B=(c=l?l.match(/stop\-opacity\:\s?([0-9\.\-]*)/):!1)&&1<c.length?parseFloat(c[1]):1);y.push(new p.Gradient.Stop(k,m,B))}f=new p.LinearGradient(f-t,e-h,g-t,n-h,y);return p.Utils.applySvgAttributes.call(this,a,f)},radialgradient:function(a){var c=
parseFloat(a.getAttribute("cx"))||0,f=parseFloat(a.getAttribute("cy"))||0,e=parseFloat(a.getAttribute("r")),g=parseFloat(a.getAttribute("fx")),n=parseFloat(a.getAttribute("fy"));d.isNaN(g)&&(g=c);d.isNaN(n)&&(n=f);for(var t=Math.abs(c+g)/2,h=Math.abs(f+n)/2,v=[],y=0;y<a.children.length;y++){var k=a.children[y];var m=parseFloat(k.getAttribute("offset")),B=k.getAttribute("stop-color"),l=k.getAttribute("stop-opacity"),z=k.getAttribute("style");d.isNull(B)&&(B=(k=z?z.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/):
!1)&&1<k.length?k[1]:void 0);d.isNull(l)&&(l=(k=z?z.match(/stop\-opacity\:\s?([0-9\.\-]*)/):!1)&&1<k.length?parseFloat(k[1]):1);v.push(new p.Gradient.Stop(m,B,l))}c=new p.RadialGradient(c-t,f-h,e,v,g-t,n-h);return p.Utils.applySvgAttributes.call(this,a,c)}},subdivide:function(a,c,f,e,g,n,t,h,v){v=v||p.Utils.Curve.RecursionLimit;var y=v+1;return a===t&&c===h?[new p.Anchor(t,h)]:d.map(d.range(0,y),function(d){var v=d/y;d=N(v,a,f,g,t);v=N(v,c,e,n,h);return new p.Anchor(d,v)})},getPointOnCubicBezier:function(a,
c,f,e,g){var d=1-a;return d*d*d*c+3*d*d*a*f+3*d*a*a*e+a*a*a*g},getCurveLength:function(a,c,f,e,g,d,t,v,h){if(a===f&&c===e&&g===t&&d===v)return a=t-a,c=v-c,n(a*a+c*c);var y=9*(f-g)+3*(t-a),k=6*(a+g)-12*f,B=3*(f-a),m=9*(e-d)+3*(v-c),l=6*(c+d)-12*e,D=3*(e-c);return P(function(a){var c=(y*a+k)*a+B;a=(m*a+l)*a+D;return n(c*c+a*a)},0,1,h||p.Utils.Curve.RecursionLimit)},integrate:function(a,c,f,e){var g=p.Utils.Curve.abscissas[e-2],d=p.Utils.Curve.weights[e-2];f=.5*(f-c);c=f+c;var n=0,t=e+1>>1;for(e=e&1?
d[n++]*a(c):0;n<t;){var v=f*g[n];e+=d[n++]*(a(c+v)+a(c-v))}return f*e},getCurveFromPoints:function(a,c){for(var f=a.length,e=f-1,g=0;g<f;g++){var n=a[g];d.isObject(n.controls)||p.Anchor.AppendCurveProperties(n);var t=c?I(g-1,f):z(g-1,0),v=c?I(g+1,f):B(g+1,e);F(a[t],n,a[v]);n._command=0===g?p.Commands.move:p.Commands.curve;n.controls.left.x=d.isNumber(n.controls.left.x)?n.controls.left.x:n.x;n.controls.left.y=d.isNumber(n.controls.left.y)?n.controls.left.y:n.y;n.controls.right.x=d.isNumber(n.controls.right.x)?
n.controls.right.x:n.x;n.controls.right.y=d.isNumber(n.controls.right.y)?n.controls.right.y:n.y}},getControlPoints:function(c,g,n){var v=G(c,g),h=G(n,g);c=E(c,g);n=E(n,g);var k=(v+h)/2;g.u=d.isObject(g.controls.left)?g.controls.left:new p.Vector(0,0);g.v=d.isObject(g.controls.right)?g.controls.right:new p.Vector(0,0);if(.0001>c||.0001>n)return g._relative||(g.controls.left.copy(g),g.controls.right.copy(g)),g;c*=.33;n*=.33;k=h<v?k+t:k-t;g.controls.left.x=a(k)*c;g.controls.left.y=e(k)*c;k-=f;g.controls.right.x=
a(k)*n;g.controls.right.y=e(k)*n;g._relative||(g.controls.left.x+=g.x,g.controls.left.y+=g.y,g.controls.right.x+=g.x,g.controls.right.y+=g.y);return g},getReflection:function(a,c,f){return new p.Vector(2*a.x-(c.x+a.x)-(f?a.x:0),2*a.y-(c.y+a.y)-(f?a.y:0))},getAnchorsFromArcData:function(a,c,f,e,g,n,t){(new p.Matrix).translate(a.x,a.y).rotate(c);var v=p.Resolution;return d.map(d.range(v),function(a){a=(a+1)/v;t&&(a=1-a);a=a*n+g;a=new p.Anchor(f*Math.cos(a),e*Math.sin(a));p.Anchor.AppendCurveProperties(a);
a.command=p.Commands.line;return a})},ratioBetween:function(a,c){return(a.x*c.x+a.y*c.y)/(a.length()*c.length())},angleBetween:function(a,c){if(4<=arguments.length){var f=arguments[0]-arguments[2];var e=arguments[1]-arguments[3];return g(e,f)}f=a.x-c.x;e=a.y-c.y;return g(e,f)},distanceBetweenSquared:function(a,c){var f=a.x-c.x;a=a.y-c.y;return f*f+a*a},distanceBetween:function(a,c){return n(H(a,c))},lerp:function(a,c,f){return f*(c-a)+a},toFixed:function(a){return Math.floor(1E3*a)/1E3},mod:function(a,
c){for(;0>a;)a+=c;return a%c},Collection:function(){Array.call(this);1<arguments.length?Array.prototype.push.apply(this,arguments):arguments[0]&&Array.isArray(arguments[0])&&Array.prototype.push.apply(this,arguments[0])},Error:function(a){this.name="two.js";this.message=a},Events:{on:function(a,c){this._events||(this._events={});(this._events[a]||(this._events[a]=[])).push(c);return this},off:function(a,c){if(!this._events)return this;if(!a&&!c)return this._events={},this;for(var f=a?[a]:d.keys(this._events),
e=0,g=f.length;e<g;e++){a=f[e];var n=this._events[a];if(n){var t=[];if(c)for(var v=0,h=n.length;v<h;v++){var k=n[v],k=k.callback?k.callback:k;c&&c!==k&&t.push(k)}this._events[a]=t}}return this},trigger:function(a){if(!this._events)return this;var c=x.call(arguments,1),f=this._events[a];f&&C(this,f,c);return this},listen:function(a,c,f){var e=this;if(a){var g=function(){f.apply(e,arguments)};g.obj=a;g.name=c;g.callback=f;a.on(c,g)}return this},ignore:function(a,c,f){a.off(c,f);return this}}})});p.Utils.Events.bind=
p.Utils.Events.on;p.Utils.Events.unbind=p.Utils.Events.off;var C=function(a,c,f){switch(f.length){case 0:var e=function(e){c[e].call(a,f[0])};break;case 1:e=function(e){c[e].call(a,f[0],f[1])};break;case 2:e=function(e){c[e].call(a,f[0],f[1],f[2])};break;case 3:e=function(e){c[e].call(a,f[0],f[1],f[2],f[3])};break;default:e=function(e){c[e].apply(a,f)}}for(var g=0;g<c.length;g++)e(g)};p.Utils.Error.prototype=Error();p.Utils.Error.prototype.constructor=p.Utils.Error;p.Utils.Collection.prototype=[];
p.Utils.Collection.prototype.constructor=p.Utils.Collection;d.extend(p.Utils.Collection.prototype,p.Utils.Events,{pop:function(){var a=Array.prototype.pop.apply(this,arguments);this.trigger(p.Events.remove,[a]);return a},shift:function(){var a=Array.prototype.shift.apply(this,arguments);this.trigger(p.Events.remove,[a]);return a},push:function(){var a=Array.prototype.push.apply(this,arguments);this.trigger(p.Events.insert,arguments);return a},unshift:function(){var a=Array.prototype.unshift.apply(this,
arguments);this.trigger(p.Events.insert,arguments);return a},splice:function(){var a=Array.prototype.splice.apply(this,arguments);this.trigger(p.Events.remove,a);if(2<arguments.length){var c=this.slice(arguments[0],arguments[0]+arguments.length-2);this.trigger(p.Events.insert,c);this.trigger(p.Events.order)}return a},sort:function(){Array.prototype.sort.apply(this,arguments);this.trigger(p.Events.order);return this},reverse:function(){Array.prototype.reverse.apply(this,arguments);this.trigger(p.Events.order);
return this}});var E=p.Utils.distanceBetween,H=p.Utils.distanceBetweenSquared,G=p.Utils.angleBetween,F=p.Utils.getControlPoints,I=p.Utils.mod,O=p.Utils.getBackingStoreRatio,N=p.Utils.getPointOnCubicBezier,P=p.Utils.integrate,M=p.Utils.getReflection;d.extend(p.prototype,p.Utils.Events,{appendTo:function(a){a.appendChild(this.renderer.domElement);return this},play:function(){p.Utils.setPlaying.call(this,!0);return this.trigger(p.Events.play)},pause:function(){this.playing=!1;return this.trigger(p.Events.pause)},
update:function(){var a=!!this._lastFrame,c=u.now();this.frameCount++;a&&(this.timeDelta=parseFloat((c-this._lastFrame).toFixed(3)));this._lastFrame=c;var a=this.width,c=this.height,f=this.renderer;a===f.width&&c===f.height||f.setSize(a,c,this.ratio);this.trigger(p.Events.update,this.frameCount,this.timeDelta);return this.render()},render:function(){this.renderer.render();return this.trigger(p.Events.render,this.frameCount)},add:function(a){var c=a;c instanceof Array||(c=d.toArray(arguments));this.scene.add(c);
return this},remove:function(a){var c=a;c instanceof Array||(c=d.toArray(arguments));this.scene.remove(c);return this},clear:function(){this.scene.remove(d.toArray(this.scene.children));return this},makeLine:function(a,c,f,e){a=new p.Line(a,c,f,e);this.scene.add(a);return a},makeRectangle:function(a,c,f,e){a=new p.Rectangle(a,c,f,e);this.scene.add(a);return a},makeRoundedRectangle:function(a,c,f,e,g){a=new p.RoundedRectangle(a,c,f,e,g);this.scene.add(a);return a},makeCircle:function(a,c,f){a=new p.Circle(a,
c,f);this.scene.add(a);return a},makeEllipse:function(a,c,f,e){a=new p.Ellipse(a,c,f,e);this.scene.add(a);return a},makeStar:function(a,c,f,e,g){a=new p.Star(a,c,f,e,g);this.scene.add(a);return a},makeCurve:function(a){var c=arguments.length,f=a;if(!d.isArray(a))for(var f=[],e=0;e<c;e+=2){var g=arguments[e];if(!d.isNumber(g))break;f.push(new p.Anchor(g,arguments[e+1]))}c=arguments[c-1];f=new p.Path(f,!(d.isBoolean(c)&&c),!0);c=f.getBoundingClientRect();f.center().translation.set(c.left+c.width/2,
c.top+c.height/2);this.scene.add(f);return f},makePolygon:function(a,c,f,e){a=new p.Polygon(a,c,f,e);this.scene.add(a);return a},makeArcSegment:function(a,c,f,e,g,d,n){a=new p.ArcSegment(a,c,f,e,g,d,n);this.scene.add(a);return a},makePath:function(a){var c=arguments.length,f=a;if(!d.isArray(a))for(var f=[],e=0;e<c;e+=2){var g=arguments[e];if(!d.isNumber(g))break;f.push(new p.Anchor(g,arguments[e+1]))}c=arguments[c-1];f=new p.Path(f,!(d.isBoolean(c)&&c));c=f.getBoundingClientRect();f.center().translation.set(c.left+
c.width/2,c.top+c.height/2);this.scene.add(f);return f},makeText:function(a,c,f,e){a=new p.Text(a,c,f,e);this.add(a);return a},makeLinearGradient:function(a,c,f,e){var g=x.call(arguments,4),g=new p.LinearGradient(a,c,f,e,g);this.add(g);return g},makeRadialGradient:function(a,c,f){var e=x.call(arguments,3),e=new p.RadialGradient(a,c,f,e);this.add(e);return e},makeSprite:function(a,c,f,e,g,d,n){a=new p.Sprite(a,c,f,e,g,d);n&&a.play();this.add(a);return a},makeImageSequence:function(a,c,f,e,g){a=new p.ImageSequence(a,
c,f,e);g&&a.play();this.add(a);return a},makeTexture:function(a,c){return new p.Texture(a,c)},makeGroup:function(a){var c=a;c instanceof Array||(c=d.toArray(arguments));var f=new p.Group;this.scene.add(f);f.add(c);return f},interpret:function(a,c){var f=a.tagName.toLowerCase();if(!(f in p.Utils.read))return null;a=p.Utils.read[f].call(this,a);c&&a instanceof p.Group?this.add(a.children):this.add(a);return a},load:function(a,c){var f=[],e;if(/.*\.svg/ig.test(a))return p.Utils.xhr(a,d.bind(function(a){w.temp.innerHTML=
a;for(e=0;e<w.temp.children.length;e++)g=w.temp.children[e],f.push(this.interpret(g));c(1>=f.length?f[0]:f,1>=w.temp.children.length?w.temp.children[0]:w.temp.children)},this)),this;w.temp.innerHTML=a;for(e=0;e<w.temp.children.length;e++){var g=w.temp.children[e];f.push(this.interpret(g))}c(1>=f.length?f[0]:f,1>=w.temp.children.length?w.temp.children[0]:w.temp.children);return this}});var L=w.getRequestAnimationFrame(); true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return p}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;return p}(("undefined"!==typeof global?global:this).Two);(function(c){var k=c.Utils;c=c.Registry=function(){this.map={}};k.extend(c,{});k.extend(c.prototype,{add:function(c,k){this.map[c]=k;return this},remove:function(c){delete this.map[c];return this},get:function(c){return this.map[c]},contains:function(c){return c in this.map}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Vector=function(c,a){this.x=c||0;this.y=a||0};k.extend(m,{zero:new c.Vector});k.extend(m.prototype,c.Utils.Events,{set:function(c,a){this.x=c;this.y=a;return this},copy:function(c){this.x=c.x;this.y=c.y;return this},clear:function(){this.y=this.x=0;return this},clone:function(){return new m(this.x,this.y)},add:function(c,a){this.x=c.x+a.x;this.y=c.y+a.y;return this},addSelf:function(c){this.x+=c.x;this.y+=c.y;return this},sub:function(c,a){this.x=c.x-a.x;this.y=c.y-
a.y;return this},subSelf:function(c){this.x-=c.x;this.y-=c.y;return this},multiplySelf:function(c){this.x*=c.x;this.y*=c.y;return this},multiplyScalar:function(c){this.x*=c;this.y*=c;return this},divideScalar:function(c){c?(this.x/=c,this.y/=c):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this.x*c.x+this.y*c.y},lengthSquared:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},
distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){var a=this.x-c.x;c=this.y-c.y;return a*a+c*c},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c,a){a="undefined"===typeof a?.0001:a;return this.distanceTo(c)<a},lerp:function(c,a){return this.set((c.x-this.x)*a+this.x,(c.y-this.y)*a+this.y)},isZero:function(c){c="undefined"===typeof c?.0001:c;return this.length()<c},toString:function(){return this.x+", "+this.y},toObject:function(){return{x:this.x,
y:this.y}},rotate:function(c){var a=Math.cos(c);c=Math.sin(c);this.x=this.x*a-this.y*c;this.y=this.x*c+this.y*a;return this}});var l={set:function(e,a){this._x=e;this._y=a;return this.trigger(c.Events.change)},copy:function(e){this._x=e.x;this._y=e.y;return this.trigger(c.Events.change)},clear:function(){this._y=this._x=0;return this.trigger(c.Events.change)},clone:function(){return new m(this._x,this._y)},add:function(e,a){this._x=e.x+a.x;this._y=e.y+a.y;return this.trigger(c.Events.change)},addSelf:function(e){this._x+=
e.x;this._y+=e.y;return this.trigger(c.Events.change)},sub:function(e,a){this._x=e.x-a.x;this._y=e.y-a.y;return this.trigger(c.Events.change)},subSelf:function(e){this._x-=e.x;this._y-=e.y;return this.trigger(c.Events.change)},multiplySelf:function(e){this._x*=e.x;this._y*=e.y;return this.trigger(c.Events.change)},multiplyScalar:function(e){this._x*=e;this._y*=e;return this.trigger(c.Events.change)},divideScalar:function(e){return e?(this._x/=e,this._y/=e,this.trigger(c.Events.change)):this.clear()},
negate:function(){return this.multiplyScalar(-1)},dot:function(c){return this._x*c.x+this._y*c.y},lengthSquared:function(){return this._x*this._x+this._y*this._y},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(c){return Math.sqrt(this.distanceToSquared(c))},distanceToSquared:function(c){var a=this._x-c.x;c=this._y-c.y;return a*a+c*c},setLength:function(c){return this.normalize().multiplyScalar(c)},equals:function(c,
a){a="undefined"===typeof a?.0001:a;return this.distanceTo(c)<a},lerp:function(c,a){return this.set((c.x-this._x)*a+this._x,(c.y-this._y)*a+this._y)},isZero:function(c){c="undefined"===typeof c?.0001:c;return this.length()<c},toString:function(){return this._x+", "+this._y},toObject:function(){return{x:this._x,y:this._y}},rotate:function(c){var a=Math.cos(c);c=Math.sin(c);this._x=this._x*a-this._y*c;this._y=this._x*c+this._y*a;return this}},h={enumerable:!0,get:function(){return this._x},set:function(e){this._x=
e;this.trigger(c.Events.change,"x")}},d={enumerable:!0,get:function(){return this._y},set:function(e){this._y=e;this.trigger(c.Events.change,"y")}};c.Vector.prototype.bind=c.Vector.prototype.on=function(){this._bound||(this._x=this.x,this._y=this.y,Object.defineProperty(this,"x",h),Object.defineProperty(this,"y",d),k.extend(this,l),this._bound=!0);c.Utils.Events.bind.apply(this,arguments);return this}})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Commands,m=c.Utils,l=c.Anchor=function(d,e,a,g,n,f,t){c.Vector.call(this,d,e);this._broadcast=m.bind(function(){this.trigger(c.Events.change)},this);this._command=t||k.move;this._relative=!0;if(!t)return this;l.AppendCurveProperties(this);m.isNumber(a)&&(this.controls.left.x=a);m.isNumber(g)&&(this.controls.left.y=g);m.isNumber(n)&&(this.controls.right.x=n);m.isNumber(f)&&(this.controls.right.y=f)};m.extend(l,{AppendCurveProperties:function(d){d.controls={left:new c.Vector(0,
0),right:new c.Vector(0,0)}}});var h={listen:function(){m.isObject(this.controls)||l.AppendCurveProperties(this);this.controls.left.bind(c.Events.change,this._broadcast);this.controls.right.bind(c.Events.change,this._broadcast);return this},ignore:function(){this.controls.left.unbind(c.Events.change,this._broadcast);this.controls.right.unbind(c.Events.change,this._broadcast);return this},clone:function(){var d=this.controls,d=new c.Anchor(this.x,this.y,d&&d.left.x,d&&d.left.y,d&&d.right.x,d&&d.right.y,
this.command);d.relative=this._relative;return d},toObject:function(){var c={x:this.x,y:this.y};this._command&&(c.command=this._command);this._relative&&(c.relative=this._relative);this.controls&&(c.controls={left:this.controls.left.toObject(),right:this.controls.right.toObject()});return c},toString:function(){return this.controls?[this._x,this._y,this.controls.left.x,this.controls.left.y,this.controls.right.x,this.controls.right.y].join(", "):[this._x,this._y].join(", ")}};Object.defineProperty(l.prototype,
"command",{enumerable:!0,get:function(){return this._command},set:function(d){this._command=d;this._command!==k.curve||m.isObject(this.controls)||l.AppendCurveProperties(this);return this.trigger(c.Events.change)}});Object.defineProperty(l.prototype,"relative",{enumerable:!0,get:function(){return this._relative},set:function(d){if(this._relative==d)return this;this._relative=!!d;return this.trigger(c.Events.change)}});m.extend(l.prototype,c.Vector.prototype,h);c.Anchor.prototype.bind=c.Anchor.prototype.on=
function(){c.Vector.prototype.bind.apply(this,arguments);m.extend(this,h)};c.Anchor.prototype.unbind=c.Anchor.prototype.off=function(){c.Vector.prototype.unbind.apply(this,arguments);m.extend(this,h)}})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=Math.cos,m=Math.sin,l=Math.tan,h=c.Utils,d=c.Matrix=function(e,a,g,d,f,t){this.elements=new c.Array(9);var n=e;h.isArray(n)||(n=h.toArray(arguments));this.identity().set(n)};h.extend(d,{Identity:[1,0,0,0,1,0,0,0,1],Multiply:function(e,a,g){if(3>=a.length){g=a[0]||0;var d=a[1]||0;a=a[2]||0;return{x:e[0]*g+e[1]*d+e[2]*a,y:e[3]*g+e[4]*d+e[5]*a,z:e[6]*g+e[7]*d+e[8]*a}}var d=e[0],f=e[1],t=e[2],v=e[3],h=e[4],k=e[5],m=e[6],l=e[7];e=e[8];var u=a[0],r=a[1],q=a[2],w=a[3],p=a[4],C=a[5],E=
a[6],H=a[7];a=a[8];g=g||new c.Array(9);g[0]=d*u+f*w+t*E;g[1]=d*r+f*p+t*H;g[2]=d*q+f*C+t*a;g[3]=v*u+h*w+k*E;g[4]=v*r+h*p+k*H;g[5]=v*q+h*C+k*a;g[6]=m*u+l*w+e*E;g[7]=m*r+l*p+e*H;g[8]=m*q+l*C+e*a;return g}});h.extend(d.prototype,c.Utils.Events,{set:function(e){var a=e;h.isArray(a)||(a=h.toArray(arguments));h.extend(this.elements,a);return this.trigger(c.Events.change)},identity:function(){this.set(d.Identity);return this},multiply:function(e,a,g,d,f,t,v,k,m){var n=arguments,B=n.length;if(1>=B)return h.each(this.elements,
function(a,c){this.elements[c]=a*e},this),this.trigger(c.Events.change);if(3>=B)return e=e||0,a=a||0,g=g||0,f=this.elements,{x:f[0]*e+f[1]*a+f[2]*g,y:f[3]*e+f[4]*a+f[5]*g,z:f[6]*e+f[7]*a+f[8]*g};var l=this.elements,B=l[0],z=l[1],q=l[2],w=l[3],p=l[4],C=l[5],E=l[6],H=l[7],l=l[8],G=n[0],F=n[1],I=n[2],O=n[3],N=n[4],P=n[5],M=n[6],L=n[7],n=n[8];this.elements[0]=B*G+z*O+q*M;this.elements[1]=B*F+z*N+q*L;this.elements[2]=B*I+z*P+q*n;this.elements[3]=w*G+p*O+C*M;this.elements[4]=w*F+p*N+C*L;this.elements[5]=
w*I+p*P+C*n;this.elements[6]=E*G+H*O+l*M;this.elements[7]=E*F+H*N+l*L;this.elements[8]=E*I+H*P+l*n;return this.trigger(c.Events.change)},inverse:function(e){var a=this.elements;e=e||new c.Matrix;var g=a[0],d=a[1],f=a[2],t=a[3],v=a[4],h=a[5],k=a[6],l=a[7],a=a[8],m=a*v-h*l,u=-a*t+h*k,r=l*t-v*k,q=g*m+d*u+f*r;if(!q)return null;q=1/q;e.elements[0]=m*q;e.elements[1]=(-a*d+f*l)*q;e.elements[2]=(h*d-f*v)*q;e.elements[3]=u*q;e.elements[4]=(a*g-f*k)*q;e.elements[5]=(-h*g+f*t)*q;e.elements[6]=r*q;e.elements[7]=
(-l*g+d*k)*q;e.elements[8]=(v*g-d*t)*q;return e},scale:function(c,a){1>=arguments.length&&(a=c);return this.multiply(c,0,0,0,a,0,0,0,1)},rotate:function(c){var a=k(c);c=m(c);return this.multiply(a,-c,0,c,a,0,0,0,1)},translate:function(c,a){return this.multiply(1,0,c,0,1,a,0,0,1)},skewX:function(c){c=l(c);return this.multiply(1,c,0,0,1,0,0,0,1)},skewY:function(c){c=l(c);return this.multiply(1,0,0,c,1,0,0,0,1)},toString:function(c){var a=[];this.toArray(c,a);return a.join(" ")},toArray:function(c,a){var g=
this.elements,e=!!a,f=parseFloat(g[0].toFixed(3)),d=parseFloat(g[1].toFixed(3)),v=parseFloat(g[2].toFixed(3)),h=parseFloat(g[3].toFixed(3)),k=parseFloat(g[4].toFixed(3)),l=parseFloat(g[5].toFixed(3));if(c){c=parseFloat(g[6].toFixed(3));var m=parseFloat(g[7].toFixed(3)),g=parseFloat(g[8].toFixed(3));if(e){a[0]=f;a[1]=h;a[2]=c;a[3]=d;a[4]=k;a[5]=m;a[6]=v;a[7]=l;a[8]=g;return}return[f,h,c,d,k,m,v,l,g]}if(e)a[0]=f,a[1]=h,a[2]=d,a[3]=k,a[4]=v,a[5]=l;else return[f,h,d,k,v,l]},clone:function(){var e=this.elements[0];
var a=this.elements[1];var g=this.elements[2];var d=this.elements[3];var f=this.elements[4];return new c.Matrix(e,a,g,d,f,this.elements[5],this.elements[6],this.elements[7],this.elements[8])}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils.mod,m=c.Utils.toFixed,l=c.Utils,h={version:1.1,ns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",alignments:{left:"start",center:"middle",right:"end"},createElement:function(c,a){var g=document.createElementNS(h.ns,c);"svg"===c&&(a=l.defaults(a||{},{version:h.version}));l.isEmpty(a)||h.setAttributes(g,a);return g},setAttributes:function(c,a){for(var g=Object.keys(a),e=0;e<g.length;e++)/href/.test(g[e])?c.setAttributeNS(h.xlink,g[e],a[g[e]]):c.setAttribute(g[e],
a[g[e]]);return this},removeAttributes:function(c,a){for(var g in a)c.removeAttribute(g);return this},toString:function(e,a){for(var g=e.length,d=g-1,f,t="",h=0;h<g;h++){var l=e[h],z=a?k(h-1,g):Math.max(h-1,0);a&&k(h+1,g);var A=e[z];var x=m(l._x);var u=m(l._y);switch(l._command){case c.Commands.close:var r=c.Commands.close;break;case c.Commands.curve:var q=A.controls&&A.controls.right||c.Vector.zero;r=l.controls&&l.controls.left||c.Vector.zero;A._relative?(z=m(q.x+A.x),A=m(q.y+A.y)):(z=m(q.x),A=m(q.y));
if(l._relative){q=m(r.x+l.x);var w=m(r.y+l.y)}else q=m(r.x),w=m(r.y);r=(0===h?c.Commands.move:c.Commands.curve)+" "+z+" "+A+" "+q+" "+w+" "+x+" "+u;break;case c.Commands.move:f=l;r=c.Commands.move+" "+x+" "+u;break;default:r=l._command+" "+x+" "+u}h>=d&&a&&(l._command===c.Commands.curve&&(u=f,A=l.controls&&l.controls.right||l,x=u.controls&&u.controls.left||u,l._relative?(z=m(A.x+l.x),A=m(A.y+l.y)):(z=m(A.x),A=m(A.y)),u._relative?(q=m(x.x+u.x),w=m(x.y+u.y)):(q=m(x.x),w=m(x.y)),x=m(u.x),u=m(u.y),r+=
" C "+z+" "+A+" "+q+" "+w+" "+x+" "+u),r+=" Z");t+=r+" "}return t},getClip:function(c){var a=c._renderer.clip;if(!a){for(var g=c;g.parent;)g=g.parent;a=c._renderer.clip=h.createElement("clipPath");g.defs.appendChild(a)}return a},group:{appendChild:function(c){var a=c._renderer.elem;if(a){var g=a.nodeName;!g||/(radial|linear)gradient/i.test(g)||c._clip||this.elem.appendChild(a)}},removeChild:function(c){var a=c._renderer.elem;a&&a.parentNode==this.elem&&a.nodeName&&(c._clip||this.elem.removeChild(a))},
orderChild:function(c){this.elem.appendChild(c._renderer.elem)},renderChild:function(c){h[c._renderer.type].render.call(c,this)},render:function(c){this._update();if(0===this._opacity&&!this._flagOpacity)return this;this._renderer.elem||(this._renderer.elem=h.createElement("g",{id:this.id}),c.appendChild(this._renderer.elem));var a={domElement:c,elem:this._renderer.elem};(this._matrix.manual||this._flagMatrix)&&this._renderer.elem.setAttribute("transform","matrix("+this._matrix.toString()+")");for(var g=
0;g<this.children.length;g++){var e=this.children[g];h[e._renderer.type].render.call(e,c)}this._flagOpacity&&this._renderer.elem.setAttribute("opacity",this._opacity);this._flagAdditions&&this.additions.forEach(h.group.appendChild,a);this._flagSubtractions&&this.subtractions.forEach(h.group.removeChild,a);this._flagOrder&&this.children.forEach(h.group.orderChild,a);this._flagMask&&(this._mask?this._renderer.elem.setAttribute("clip-path","url(#"+this._mask.id+")"):this._renderer.elem.removeAttribute("clip-path"));
return this.flagReset()}},path:{render:function(c){this._update();if(0===this._opacity&&!this._flagOpacity)return this;var a={};if(this._matrix.manual||this._flagMatrix)a.transform="matrix("+this._matrix.toString()+")";if(this._flagVertices){var g=h.toString(this._vertices,this._closed);a.d=g}this._fill&&this._fill._renderer&&(this._fill._update(),h[this._fill._renderer.type].render.call(this._fill,c,!0));this._flagFill&&(a.fill=this._fill&&this._fill.id?"url(#"+this._fill.id+")":this._fill);this._stroke&&
this._stroke._renderer&&(this._stroke._update(),h[this._stroke._renderer.type].render.call(this._stroke,c,!0));this._flagStroke&&(a.stroke=this._stroke&&this._stroke.id?"url(#"+this._stroke.id+")":this._stroke);this._flagLinewidth&&(a["stroke-width"]=this._linewidth);this._flagOpacity&&(a["stroke-opacity"]=this._opacity,a["fill-opacity"]=this._opacity);this._flagVisible&&(a.visibility=this._visible?"visible":"hidden");this._flagCap&&(a["stroke-linecap"]=this._cap);this._flagJoin&&(a["stroke-linejoin"]=
this._join);this._flagMiter&&(a["stroke-miterlimit"]=this._miter);this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,this._renderer.elem=h.createElement("path",a),c.appendChild(this._renderer.elem));this._flagClip&&(c=h.getClip(this),a=this._renderer.elem,this._clip?(a.removeAttribute("id"),c.setAttribute("id",this.id),c.appendChild(a)):(c.removeAttribute("id"),a.setAttribute("id",this.id),this.parent._renderer.elem.appendChild(a)));return this.flagReset()}},text:{render:function(c){this._update();
var a={};if(this._matrix.manual||this._flagMatrix)a.transform="matrix("+this._matrix.toString()+")";this._flagFamily&&(a["font-family"]=this._family);this._flagSize&&(a["font-size"]=this._size);this._flagLeading&&(a["line-height"]=this._leading);this._flagAlignment&&(a["text-anchor"]=h.alignments[this._alignment]||this._alignment);this._flagBaseline&&(a["alignment-baseline"]=a["dominant-baseline"]=this._baseline);this._flagStyle&&(a["font-style"]=this._style);this._flagWeight&&(a["font-weight"]=this._weight);
this._flagDecoration&&(a["text-decoration"]=this._decoration);this._fill&&this._fill._renderer&&(this._fill._update(),h[this._fill._renderer.type].render.call(this._fill,c,!0));this._flagFill&&(a.fill=this._fill&&this._fill.id?"url(#"+this._fill.id+")":this._fill);this._stroke&&this._stroke._renderer&&(this._stroke._update(),h[this._stroke._renderer.type].render.call(this._stroke,c,!0));this._flagStroke&&(a.stroke=this._stroke&&this._stroke.id?"url(#"+this._stroke.id+")":this._stroke);this._flagLinewidth&&
(a["stroke-width"]=this._linewidth);this._flagOpacity&&(a.opacity=this._opacity);this._flagVisible&&(a.visibility=this._visible?"visible":"hidden");this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,this._renderer.elem=h.createElement("text",a),c.defs.appendChild(this._renderer.elem));this._flagClip&&(c=h.getClip(this),a=this._renderer.elem,this._clip?(a.removeAttribute("id"),c.setAttribute("id",this.id),c.appendChild(a)):(c.removeAttribute("id"),a.setAttribute("id",this.id),
this.parent._renderer.elem.appendChild(a)));this._flagValue&&(this._renderer.elem.textContent=this._value);return this.flagReset()}},"linear-gradient":{render:function(c,a){a||this._update();a={};this._flagEndPoints&&(a.x1=this.left._x,a.y1=this.left._y,a.x2=this.right._x,a.y2=this.right._y);this._flagSpread&&(a.spreadMethod=this._spread);this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,a.gradientUnits="userSpaceOnUse",this._renderer.elem=h.createElement("linearGradient",a),
c.defs.appendChild(this._renderer.elem));if(this._flagStops){if(c=this._renderer.elem.childNodes.length!==this.stops.length)this._renderer.elem.childNodes.length=0;for(a=0;a<this.stops.length;a++){var g=this.stops[a],d={};g._flagOffset&&(d.offset=100*g._offset+"%");g._flagColor&&(d["stop-color"]=g._color);g._flagOpacity&&(d["stop-opacity"]=g._opacity);g._renderer.elem?h.setAttributes(g._renderer.elem,d):g._renderer.elem=h.createElement("stop",d);c&&this._renderer.elem.appendChild(g._renderer.elem);
g.flagReset()}}return this.flagReset()}},"radial-gradient":{render:function(c,a){a||this._update();a={};this._flagCenter&&(a.cx=this.center._x,a.cy=this.center._y);this._flagFocal&&(a.fx=this.focal._x,a.fy=this.focal._y);this._flagRadius&&(a.r=this._radius);this._flagSpread&&(a.spreadMethod=this._spread);this._renderer.elem?h.setAttributes(this._renderer.elem,a):(a.id=this.id,a.gradientUnits="userSpaceOnUse",this._renderer.elem=h.createElement("radialGradient",a),c.defs.appendChild(this._renderer.elem));
if(this._flagStops){if(c=this._renderer.elem.childNodes.length!==this.stops.length)this._renderer.elem.childNodes.length=0;for(a=0;a<this.stops.length;a++){var g=this.stops[a],d={};g._flagOffset&&(d.offset=100*g._offset+"%");g._flagColor&&(d["stop-color"]=g._color);g._flagOpacity&&(d["stop-opacity"]=g._opacity);g._renderer.elem?h.setAttributes(g._renderer.elem,d):g._renderer.elem=h.createElement("stop",d);c&&this._renderer.elem.appendChild(g._renderer.elem);g.flagReset()}}return this.flagReset()}},
texture:{render:function(d,a){a||this._update();a={};var g={x:0,y:0},e=this.image;if(this._flagLoaded&&this.loaded)switch(e.nodeName.toLowerCase()){case "canvas":g.href=g["xlink:href"]=e.toDataURL("image/png");break;case "img":case "image":g.href=g["xlink:href"]=this.src}if(this._flagOffset||this._flagLoaded||this._flagScale)a.x=this._offset.x,a.y=this._offset.y,e&&(a.x-=e.width/2,a.y-=e.height/2,this._scale instanceof c.Vector?(a.x*=this._scale.x,a.y*=this._scale.y):(a.x*=this._scale,a.y*=this._scale)),
0<a.x&&(a.x*=-1),0<a.y&&(a.y*=-1);if(this._flagScale||this._flagLoaded||this._flagRepeat)if(a.width=0,a.height=0,e){g.width=a.width=e.width;g.height=a.height=e.height;switch(this._repeat){case "no-repeat":a.width+=1,a.height+=1}this._scale instanceof c.Vector?(a.width*=this._scale.x,a.height*=this._scale.y):(a.width*=this._scale,a.height*=this._scale)}if(this._flagScale||this._flagLoaded)this._renderer.image?l.isEmpty(g)||h.setAttributes(this._renderer.image,g):this._renderer.image=h.createElement("image",
g);this._renderer.elem?l.isEmpty(a)||h.setAttributes(this._renderer.elem,a):(a.id=this.id,a.patternUnits="userSpaceOnUse",this._renderer.elem=h.createElement("pattern",a),d.defs.appendChild(this._renderer.elem));this._renderer.elem&&this._renderer.image&&!this._renderer.appended&&(this._renderer.elem.appendChild(this._renderer.image),this._renderer.appended=!0);return this.flagReset()}}},d=c[c.Types.svg]=function(d){this.domElement=d.domElement||h.createElement("svg");this.scene=new c.Group;this.scene.parent=
this;this.defs=h.createElement("defs");this.domElement.appendChild(this.defs);this.domElement.defs=this.defs;this.domElement.style.overflow="hidden"};l.extend(d,{Utils:h});l.extend(d.prototype,c.Utils.Events,{setSize:function(c,a){this.width=c;this.height=a;h.setAttributes(this.domElement,{width:c,height:a});return this},render:function(){h.group.render.call(this.scene,this.domElement);return this}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils.mod,m=c.Utils.toFixed,l=c.Utils.getRatio,h=c.Utils,d=function(a){return 1==a[0]&&0==a[3]&&0==a[1]&&1==a[4]&&0==a[2]&&0==a[5]},e={isHidden:/(none|transparent)/i,alignments:{left:"start",middle:"center",right:"end"},shim:function(a){a.tagName="canvas";a.nodeType=1;return a},group:{renderChild:function(a){e[a._renderer.type].render.call(a,this.ctx,!0,this.clip)},render:function(a){this._update();var c=this._matrix.elements,f=this.parent;this._renderer.opacity=this._opacity*
(f&&f._renderer?f._renderer.opacity:1);var f=d(c),g=this._mask;this._renderer.context||(this._renderer.context={});this._renderer.context.ctx=a;f||(a.save(),a.transform(c[0],c[3],c[1],c[4],c[2],c[5]));g&&e[g._renderer.type].render.call(g,a,!0);if(0<this.opacity&&0!==this.scale)for(c=0;c<this.children.length;c++)g=this.children[c],e[g._renderer.type].render.call(g,a);f||a.restore();return this.flagReset()}},path:{render:function(a,n,f){this._update();var g=this._matrix.elements;var v=this._stroke;
var l=this._linewidth;var z=this._fill;var A=this._opacity*this.parent._renderer.opacity;var x=this._visible;var u=this._cap;var r=this._join;var q=this._miter;var w=this._closed;var p=this._vertices;var C=p.length;var E=C-1;var H=d(g);var G=this._clip;if(!n&&(!x||G))return this;H||(a.save(),a.transform(g[0],g[3],g[1],g[4],g[2],g[5]));z&&(h.isString(z)?a.fillStyle=z:(e[z._renderer.type].render.call(z,a),a.fillStyle=z._renderer.effect));v&&(h.isString(v)?a.strokeStyle=v:(e[v._renderer.type].render.call(v,
a),a.strokeStyle=v._renderer.effect));l&&(a.lineWidth=l);q&&(a.miterLimit=q);r&&(a.lineJoin=r);u&&(a.lineCap=u);h.isNumber(A)&&(a.globalAlpha=A);a.beginPath();for(g=0;g<p.length;g++)switch(n=p[g],x=m(n._x),u=m(n._y),n._command){case c.Commands.close:a.closePath();break;case c.Commands.curve:A=w?k(g-1,C):Math.max(g-1,0);w&&k(g+1,C);r=p[A];q=r.controls&&r.controls.right||c.Vector.zero;var F=n.controls&&n.controls.left||c.Vector.zero;r._relative?(A=q.x+m(r._x),q=q.y+m(r._y)):(A=m(q.x),q=m(q.y));n._relative?
(r=F.x+m(n._x),F=F.y+m(n._y)):(r=m(F.x),F=m(F.y));a.bezierCurveTo(A,q,r,F,x,u);g>=E&&w&&(u=I,r=n.controls&&n.controls.right||c.Vector.zero,x=u.controls&&u.controls.left||c.Vector.zero,n._relative?(A=r.x+m(n._x),q=r.y+m(n._y)):(A=m(r.x),q=m(r.y)),u._relative?(r=x.x+m(u._x),F=x.y+m(u._y)):(r=m(x.x),F=m(x.y)),x=m(u._x),u=m(u._y),a.bezierCurveTo(A,q,r,F,x,u));break;case c.Commands.line:a.lineTo(x,u);break;case c.Commands.move:var I=n;a.moveTo(x,u)}w&&a.closePath();if(!G&&!f){if(!e.isHidden.test(z)){if(w=
z._renderer&&z._renderer.offset)a.save(),a.translate(-z._renderer.offset.x,-z._renderer.offset.y),a.scale(z._renderer.scale.x,z._renderer.scale.y);a.fill();w&&a.restore()}if(!e.isHidden.test(v)){if(w=v._renderer&&v._renderer.offset)a.save(),a.translate(-v._renderer.offset.x,-v._renderer.offset.y),a.scale(v._renderer.scale.x,v._renderer.scale.y),a.lineWidth=l/v._renderer.scale.x;a.stroke();w&&a.restore()}}H||a.restore();G&&!f&&a.clip();return this.flagReset()}},text:{render:function(a,c,f){this._update();
var g=this._matrix.elements,n=this._stroke,k=this._linewidth,l=this._fill,A=this._opacity*this.parent._renderer.opacity,x=this._visible,u=d(g),r=l._renderer&&l._renderer.offset&&n._renderer&&n._renderer.offset,q=this._clip;if(!c&&(!x||q))return this;u||(a.save(),a.transform(g[0],g[3],g[1],g[4],g[2],g[5]));r||(a.font=[this._style,this._weight,this._size+"px/"+this._leading+"px",this._family].join(" "));a.textAlign=e.alignments[this._alignment]||this._alignment;a.textBaseline=this._baseline;l&&(h.isString(l)?
a.fillStyle=l:(e[l._renderer.type].render.call(l,a),a.fillStyle=l._renderer.effect));n&&(h.isString(n)?a.strokeStyle=n:(e[n._renderer.type].render.call(n,a),a.strokeStyle=n._renderer.effect));k&&(a.lineWidth=k);h.isNumber(A)&&(a.globalAlpha=A);q||f||(e.isHidden.test(l)||(l._renderer&&l._renderer.offset?(c=m(l._renderer.scale.x),g=m(l._renderer.scale.y),a.save(),a.translate(-m(l._renderer.offset.x),-m(l._renderer.offset.y)),a.scale(c,g),c=this._size/l._renderer.scale.y,g=this._leading/l._renderer.scale.y,
a.font=[this._style,this._weight,m(c)+"px/",m(g)+"px",this._family].join(" "),c=l._renderer.offset.x/l._renderer.scale.x,l=l._renderer.offset.y/l._renderer.scale.y,a.fillText(this.value,m(c),m(l)),a.restore()):a.fillText(this.value,0,0)),e.isHidden.test(n)||(n._renderer&&n._renderer.offset?(c=m(n._renderer.scale.x),g=m(n._renderer.scale.y),a.save(),a.translate(-m(n._renderer.offset.x),-m(n._renderer.offset.y)),a.scale(c,g),c=this._size/n._renderer.scale.y,g=this._leading/n._renderer.scale.y,a.font=
[this._style,this._weight,m(c)+"px/",m(g)+"px",this._family].join(" "),c=n._renderer.offset.x/n._renderer.scale.x,l=n._renderer.offset.y/n._renderer.scale.y,n=k/n._renderer.scale.x,a.lineWidth=m(n),a.strokeText(this.value,m(c),m(l)),a.restore()):a.strokeText(this.value,0,0)));u||a.restore();q&&!f&&a.clip();return this.flagReset()}},"linear-gradient":{render:function(a){this._update();if(!this._renderer.effect||this._flagEndPoints||this._flagStops)for(this._renderer.effect=a.createLinearGradient(this.left._x,
this.left._y,this.right._x,this.right._y),a=0;a<this.stops.length;a++){var c=this.stops[a];this._renderer.effect.addColorStop(c._offset,c._color)}return this.flagReset()}},"radial-gradient":{render:function(a){this._update();if(!this._renderer.effect||this._flagCenter||this._flagFocal||this._flagRadius||this._flagStops)for(this._renderer.effect=a.createRadialGradient(this.center._x,this.center._y,0,this.focal._x,this.focal._y,this._radius),a=0;a<this.stops.length;a++){var c=this.stops[a];this._renderer.effect.addColorStop(c._offset,
c._color)}return this.flagReset()}},texture:{render:function(a){this._update();var d=this.image;if(!this._renderer.effect||(this._flagLoaded||this._flagImage||this._flagVideo||this._flagRepeat)&&this.loaded)this._renderer.effect=a.createPattern(this.image,this._repeat);if(this._flagOffset||this._flagLoaded||this._flagScale)this._renderer.offset instanceof c.Vector||(this._renderer.offset=new c.Vector),this._renderer.offset.x=-this._offset.x,this._renderer.offset.y=-this._offset.y,d&&(this._renderer.offset.x+=
d.width/2,this._renderer.offset.y+=d.height/2,this._scale instanceof c.Vector?(this._renderer.offset.x*=this._scale.x,this._renderer.offset.y*=this._scale.y):(this._renderer.offset.x*=this._scale,this._renderer.offset.y*=this._scale));if(this._flagScale||this._flagLoaded)this._renderer.scale instanceof c.Vector||(this._renderer.scale=new c.Vector),this._scale instanceof c.Vector?this._renderer.scale.copy(this._scale):this._renderer.scale.set(this._scale,this._scale);return this.flagReset()}}},a=c[c.Types.canvas]=
function(a){var d=!1!==a.smoothing;this.domElement=a.domElement||document.createElement("canvas");this.ctx=this.domElement.getContext("2d");this.overdraw=a.overdraw||!1;h.isUndefined(this.ctx.imageSmoothingEnabled)||(this.ctx.imageSmoothingEnabled=d);this.scene=new c.Group;this.scene.parent=this};h.extend(a,{Utils:e});h.extend(a.prototype,c.Utils.Events,{setSize:function(a,c,f){this.width=a;this.height=c;this.ratio=h.isUndefined(f)?l(this.ctx):f;this.domElement.width=a*this.ratio;this.domElement.height=
c*this.ratio;this.domElement.style&&h.extend(this.domElement.style,{width:a+"px",height:c+"px"});return this},render:function(){var a=1===this.ratio;a||(this.ctx.save(),this.ctx.scale(this.ratio,this.ratio));this.overdraw||this.ctx.clearRect(0,0,this.width,this.height);e.group.render.call(this.scene,this.ctx);a||this.ctx.restore();return this}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.root,m=c.Matrix.Multiply,l=c.Utils.mod,h=[1,0,0,0,1,0,0,0,1],d=new c.Array(9),e=c.Utils.getRatio,a=c.Utils.toFixed,g=c.Utils,n={isHidden:/(none|transparent)/i,canvas:k.document?k.document.createElement("canvas"):{getContext:g.identity},alignments:{left:"start",middle:"center",right:"end"},matrix:new c.Matrix,uv:new c.Array([0,0,1,0,0,1,0,1,1,0,1,1]),group:{removeChild:function(a,c){if(a.children)for(var f=0;f<a.children.length;f++)n.group.removeChild(a.children[f],c);else c.deleteTexture(a._renderer.texture),
delete a._renderer.texture},renderChild:function(a){n[a._renderer.type].render.call(a,this.gl,this.program)},render:function(a,g){this._update();var f=this.parent,e=f._matrix&&f._matrix.manual||f._flagMatrix,h=this._matrix.manual||this._flagMatrix;if(e||h)this._renderer.matrix||(this._renderer.matrix=new c.Array(9)),this._matrix.toArray(!0,d),m(d,f._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*f._renderer.scale,e&&(this._flagMatrix=!0);this._mask&&(a.enable(a.STENCIL_TEST),
a.stencilFunc(a.ALWAYS,1,1),a.colorMask(!1,!1,!1,!0),a.stencilOp(a.KEEP,a.KEEP,a.INCR),n[this._mask._renderer.type].render.call(this._mask,a,g,this),a.colorMask(!0,!0,!0,!0),a.stencilFunc(a.NOTEQUAL,0,1),a.stencilOp(a.KEEP,a.KEEP,a.KEEP));this._flagOpacity=f._flagOpacity||this._flagOpacity;this._renderer.opacity=this._opacity*(f&&f._renderer?f._renderer.opacity:1);if(this._flagSubtractions)for(f=0;f<this.subtractions.length;f++)n.group.removeChild(this.subtractions[f],a);this.children.forEach(n.group.renderChild,
{gl:a,program:g});this._mask&&(a.colorMask(!1,!1,!1,!1),a.stencilOp(a.KEEP,a.KEEP,a.DECR),n[this._mask._renderer.type].render.call(this._mask,a,g,this),a.colorMask(!0,!0,!0,!0),a.stencilFunc(a.NOTEQUAL,0,1),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.disable(a.STENCIL_TEST));return this.flagReset()}},path:{updateCanvas:function(f){var d=f._vertices;var e=this.canvas;var h=this.ctx;var k=f._renderer.scale;var m=f._stroke,x=f._linewidth,u=f._fill;var r=f._renderer.opacity||f._opacity;var q=f._cap;var w=f._join;
var p=f._miter;var C=f._closed,E=d.length,H=E-1;e.width=Math.max(Math.ceil(f._renderer.rect.width*k),1);e.height=Math.max(Math.ceil(f._renderer.rect.height*k),1);var G=f._renderer.rect.centroid,F=G.x,G=G.y;h.clearRect(0,0,e.width,e.height);u&&(g.isString(u)?h.fillStyle=u:(n[u._renderer.type].render.call(u,h,f),h.fillStyle=u._renderer.effect));m&&(g.isString(m)?h.strokeStyle=m:(n[m._renderer.type].render.call(m,h,f),h.strokeStyle=m._renderer.effect));x&&(h.lineWidth=x);p&&(h.miterLimit=p);w&&(h.lineJoin=
w);q&&(h.lineCap=q);g.isNumber(r)&&(h.globalAlpha=r);h.save();h.scale(k,k);h.translate(F,G);h.beginPath();for(f=0;f<d.length;f++)switch(b=d[f],k=a(b._x),r=a(b._y),b._command){case c.Commands.close:h.closePath();break;case c.Commands.curve:e=C?l(f-1,E):Math.max(f-1,0);C&&l(f+1,E);q=d[e];w=q.controls&&q.controls.right||c.Vector.zero;p=b.controls&&b.controls.left||c.Vector.zero;q._relative?(e=a(w.x+q._x),w=a(w.y+q._y)):(e=a(w.x),w=a(w.y));b._relative?(q=a(p.x+b._x),p=a(p.y+b._y)):(q=a(p.x),p=a(p.y));
h.bezierCurveTo(e,w,q,p,k,r);f>=H&&C&&(r=I,q=b.controls&&b.controls.right||c.Vector.zero,k=r.controls&&r.controls.left||c.Vector.zero,b._relative?(e=a(q.x+b._x),w=a(q.y+b._y)):(e=a(q.x),w=a(q.y)),r._relative?(q=a(k.x+r._x),p=a(k.y+r._y)):(q=a(k.x),p=a(k.y)),k=a(r._x),r=a(r._y),h.bezierCurveTo(e,w,q,p,k,r));break;case c.Commands.line:h.lineTo(k,r);break;case c.Commands.move:var I=b;h.moveTo(k,r)}C&&h.closePath();if(!n.isHidden.test(u)){if(d=u._renderer&&u._renderer.offset)h.save(),h.translate(-u._renderer.offset.x,
-u._renderer.offset.y),h.scale(u._renderer.scale.x,u._renderer.scale.y);h.fill();d&&h.restore()}if(!n.isHidden.test(m)){if(d=m._renderer&&m._renderer.offset)h.save(),h.translate(-m._renderer.offset.x,-m._renderer.offset.y),h.scale(m._renderer.scale.x,m._renderer.scale.y),h.lineWidth=x/m._renderer.scale.x;h.stroke();d&&h.restore()}h.restore()},getBoundingClientRect:function(a,c,d){var f=Infinity,e=-Infinity,n=Infinity,h=-Infinity;a.forEach(function(a){var c=a.x,d=a.y,g=a.controls;n=Math.min(d,n);f=
Math.min(c,f);e=Math.max(c,e);h=Math.max(d,h);if(a.controls){var k=g.left;var t=g.right;k&&t&&(g=a._relative?k.x+c:k.x,k=a._relative?k.y+d:k.y,c=a._relative?t.x+c:t.x,a=a._relative?t.y+d:t.y,g&&k&&c&&a&&(n=Math.min(k,a,n),f=Math.min(g,c,f),e=Math.max(g,c,e),h=Math.max(k,a,h)))}});g.isNumber(c)&&(n-=c,f-=c,e+=c,h+=c);d.top=n;d.left=f;d.right=e;d.bottom=h;d.width=e-f;d.height=h-n;d.centroid||(d.centroid={});d.centroid.x=-f;d.centroid.y=-n},render:function(a,g,e){if(!this._visible||!this._opacity)return this;
this._update();var f=this.parent,h=this._matrix.manual||this._flagMatrix,k=this._flagVertices||this._flagFill||this._fill instanceof c.LinearGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagEndPoints)||this._fill instanceof c.RadialGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagRadius||this._fill._flagCenter||this._fill._flagFocal)||this._fill instanceof c.Texture&&(this._fill._flagLoaded&&this._fill.loaded||this._fill._flagOffset||this._fill._flagScale)||
this._stroke instanceof c.LinearGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagEndPoints)||this._stroke instanceof c.RadialGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagRadius||this._stroke._flagCenter||this._stroke._flagFocal)||this._stroke instanceof c.Texture&&(this._stroke._flagLoaded&&this._stroke.loaded||this._stroke._flagOffset||this._fill._flagScale)||this._flagStroke||this._flagLinewidth||this._flagOpacity||f._flagOpacity||
this._flagVisible||this._flagCap||this._flagJoin||this._flagMiter||this._flagScale||!this._renderer.texture;if(f._matrix.manual||f._flagMatrix||h)this._renderer.matrix||(this._renderer.matrix=new c.Array(9)),this._matrix.toArray(!0,d),m(d,f._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*f._renderer.scale;k&&(this._renderer.rect||(this._renderer.rect={}),this._renderer.triangles||(this._renderer.triangles=new c.Array(12)),this._renderer.opacity=this._opacity*f._renderer.opacity,
n.path.getBoundingClientRect(this._vertices,this._linewidth,this._renderer.rect),n.getTriangles(this._renderer.rect,this._renderer.triangles),n.updateBuffer.call(n,a,this,g),n.updateTexture.call(n,a,this));if(!this._clip||e)return a.bindBuffer(a.ARRAY_BUFFER,this._renderer.textureCoordsBuffer),a.vertexAttribPointer(g.textureCoords,2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,this._renderer.texture),a.uniformMatrix3fv(g.matrix,!1,this._renderer.matrix),a.bindBuffer(a.ARRAY_BUFFER,this._renderer.buffer),
a.vertexAttribPointer(g.position,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLES,0,6),this.flagReset()}},text:{updateCanvas:function(c){var f=this.canvas,d=this.ctx,e=c._renderer.scale,h=c._stroke,k=c._linewidth*e,l=c._fill,m=c._renderer.opacity||c._opacity;f.width=Math.max(Math.ceil(c._renderer.rect.width*e),1);f.height=Math.max(Math.ceil(c._renderer.rect.height*e),1);var r=c._renderer.rect.centroid,q=r.x,r=r.y,w=l._renderer&&l._renderer.offset&&h._renderer&&h._renderer.offset;d.clearRect(0,0,f.width,
f.height);w||(d.font=[c._style,c._weight,c._size+"px/"+c._leading+"px",c._family].join(" "));d.textAlign="center";d.textBaseline="middle";l&&(g.isString(l)?d.fillStyle=l:(n[l._renderer.type].render.call(l,d,c),d.fillStyle=l._renderer.effect));h&&(g.isString(h)?d.strokeStyle=h:(n[h._renderer.type].render.call(h,d,c),d.strokeStyle=h._renderer.effect));k&&(d.lineWidth=k);g.isNumber(m)&&(d.globalAlpha=m);d.save();d.scale(e,e);d.translate(q,r);n.isHidden.test(l)||(l._renderer&&l._renderer.offset?(f=a(l._renderer.scale.x),
e=a(l._renderer.scale.y),d.save(),d.translate(-a(l._renderer.offset.x),-a(l._renderer.offset.y)),d.scale(f,e),f=c._size/l._renderer.scale.y,e=c._leading/l._renderer.scale.y,d.font=[c._style,c._weight,a(f)+"px/",a(e)+"px",c._family].join(" "),f=l._renderer.offset.x/l._renderer.scale.x,l=l._renderer.offset.y/l._renderer.scale.y,d.fillText(c.value,a(f),a(l)),d.restore()):d.fillText(c.value,0,0));n.isHidden.test(h)||(h._renderer&&h._renderer.offset?(f=a(h._renderer.scale.x),e=a(h._renderer.scale.y),d.save(),
d.translate(-a(h._renderer.offset.x),-a(h._renderer.offset.y)),d.scale(f,e),f=c._size/h._renderer.scale.y,e=c._leading/h._renderer.scale.y,d.font=[c._style,c._weight,a(f)+"px/",a(e)+"px",c._family].join(" "),f=h._renderer.offset.x/h._renderer.scale.x,l=h._renderer.offset.y/h._renderer.scale.y,h=k/h._renderer.scale.x,d.lineWidth=a(h),d.strokeText(c.value,a(f),a(l)),d.restore()):d.strokeText(c.value,0,0));d.restore()},getBoundingClientRect:function(a,c){var f=n.ctx;f.font=[a._style,a._weight,a._size+
"px/"+a._leading+"px",a._family].join(" ");f.textAlign="center";f.textBaseline=a._baseline;var f=f.measureText(a._value).width,d=Math.max(a._size||a._leading);this._linewidth&&!n.isHidden.test(this._stroke)&&(d+=this._linewidth);var e=f/2,g=d/2;switch(n.alignments[a._alignment]||a._alignment){case n.alignments.left:c.left=0;c.right=f;break;case n.alignments.right:c.left=-f;c.right=0;break;default:c.left=-e,c.right=e}switch(a._baseline){case "bottom":c.top=-d;c.bottom=0;break;case "top":c.top=0;c.bottom=
d;break;default:c.top=-g,c.bottom=g}c.width=f;c.height=d;c.centroid||(c.centroid={});c.centroid.x=e;c.centroid.y=g},render:function(a,e,g){if(!this._visible||!this._opacity)return this;this._update();var f=this.parent,h=this._matrix.manual||this._flagMatrix,k=this._flagVertices||this._flagFill||this._fill instanceof c.LinearGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagEndPoints)||this._fill instanceof c.RadialGradient&&(this._fill._flagSpread||this._fill._flagStops||this._fill._flagRadius||
this._fill._flagCenter||this._fill._flagFocal)||this._fill instanceof c.Texture&&this._fill._flagLoaded&&this._fill.loaded||this._stroke instanceof c.LinearGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagEndPoints)||this._stroke instanceof c.RadialGradient&&(this._stroke._flagSpread||this._stroke._flagStops||this._stroke._flagRadius||this._stroke._flagCenter||this._stroke._flagFocal)||this._texture instanceof c.Texture&&this._texture._flagLoaded&&this._texture.loaded||
this._flagStroke||this._flagLinewidth||this._flagOpacity||f._flagOpacity||this._flagVisible||this._flagScale||this._flagValue||this._flagFamily||this._flagSize||this._flagLeading||this._flagAlignment||this._flagBaseline||this._flagStyle||this._flagWeight||this._flagDecoration||!this._renderer.texture;if(f._matrix.manual||f._flagMatrix||h)this._renderer.matrix||(this._renderer.matrix=new c.Array(9)),this._matrix.toArray(!0,d),m(d,f._renderer.matrix,this._renderer.matrix),this._renderer.scale=this._scale*
f._renderer.scale;k&&(this._renderer.rect||(this._renderer.rect={}),this._renderer.triangles||(this._renderer.triangles=new c.Array(12)),this._renderer.opacity=this._opacity*f._renderer.opacity,n.text.getBoundingClientRect(this,this._renderer.rect),n.getTriangles(this._renderer.rect,this._renderer.triangles),n.updateBuffer.call(n,a,this,e),n.updateTexture.call(n,a,this));if(!this._clip||g)return a.bindBuffer(a.ARRAY_BUFFER,this._renderer.textureCoordsBuffer),a.vertexAttribPointer(e.textureCoords,
2,a.FLOAT,!1,0,0),a.bindTexture(a.TEXTURE_2D,this._renderer.texture),a.uniformMatrix3fv(e.matrix,!1,this._renderer.matrix),a.bindBuffer(a.ARRAY_BUFFER,this._renderer.buffer),a.vertexAttribPointer(e.position,2,a.FLOAT,!1,0,0),a.drawArrays(a.TRIANGLES,0,6),this.flagReset()}},"linear-gradient":{render:function(a,c){if(a.canvas.getContext("2d")){this._update();if(!this._renderer.effect||this._flagEndPoints||this._flagStops)for(this._renderer.effect=a.createLinearGradient(this.left._x,this.left._y,this.right._x,
this.right._y),a=0;a<this.stops.length;a++)c=this.stops[a],this._renderer.effect.addColorStop(c._offset,c._color);return this.flagReset()}}},"radial-gradient":{render:function(a,c){if(a.canvas.getContext("2d")){this._update();if(!this._renderer.effect||this._flagCenter||this._flagFocal||this._flagRadius||this._flagStops)for(this._renderer.effect=a.createRadialGradient(this.center._x,this.center._y,0,this.focal._x,this.focal._y,this._radius),a=0;a<this.stops.length;a++)c=this.stops[a],this._renderer.effect.addColorStop(c._offset,
c._color);return this.flagReset()}}},texture:{render:function(a,d){if(a.canvas.getContext("2d")){this._update();d=this.image;if(!this._renderer.effect||(this._flagLoaded||this._flagRepeat)&&this.loaded)this._renderer.effect=a.createPattern(d,this._repeat);if(this._flagOffset||this._flagLoaded||this._flagScale)this._renderer.offset instanceof c.Vector||(this._renderer.offset=new c.Vector),this._renderer.offset.x=this._offset.x,this._renderer.offset.y=this._offset.y,d&&(this._renderer.offset.x-=d.width/
2,this._renderer.offset.y+=d.height/2,this._scale instanceof c.Vector?(this._renderer.offset.x*=this._scale.x,this._renderer.offset.y*=this._scale.y):(this._renderer.offset.x*=this._scale,this._renderer.offset.y*=this._scale));if(this._flagScale||this._flagLoaded)this._renderer.scale instanceof c.Vector||(this._renderer.scale=new c.Vector),this._scale instanceof c.Vector?this._renderer.scale.copy(this._scale):this._renderer.scale.set(this._scale,this._scale);return this.flagReset()}}},getTriangles:function(a,
c){var f=a.top,d=a.left,e=a.right;a=a.bottom;c[0]=d;c[1]=f;c[2]=e;c[3]=f;c[4]=d;c[5]=a;c[6]=d;c[7]=a;c[8]=e;c[9]=f;c[10]=e;c[11]=a},updateTexture:function(a,c){this[c._renderer.type].updateCanvas.call(n,c);c._renderer.texture&&a.deleteTexture(c._renderer.texture);a.bindBuffer(a.ARRAY_BUFFER,c._renderer.textureCoordsBuffer);c._renderer.texture=a.createTexture();a.bindTexture(a.TEXTURE_2D,c._renderer.texture);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,
a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);0>=this.canvas.width||0>=this.canvas.height||a.texImage2D(a.TEXTURE_2D,0,a.RGBA,a.RGBA,a.UNSIGNED_BYTE,this.canvas)},updateBuffer:function(a,c,d){g.isObject(c._renderer.buffer)&&a.deleteBuffer(c._renderer.buffer);c._renderer.buffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c._renderer.buffer);a.enableVertexAttribArray(d.position);a.bufferData(a.ARRAY_BUFFER,c._renderer.triangles,a.STATIC_DRAW);g.isObject(c._renderer.textureCoordsBuffer)&&
a.deleteBuffer(c._renderer.textureCoordsBuffer);c._renderer.textureCoordsBuffer=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,c._renderer.textureCoordsBuffer);a.enableVertexAttribArray(d.textureCoords);a.bufferData(a.ARRAY_BUFFER,this.uv,a.STATIC_DRAW)},program:{create:function(a,d){var f=a.createProgram();g.each(d,function(c){a.attachShader(f,c)});a.linkProgram(f);if(!a.getProgramParameter(f,a.LINK_STATUS))throw d=a.getProgramInfoLog(f),a.deleteProgram(f),new c.Utils.Error("unable to link program: "+
d);return f}},shaders:{create:function(a,d,e){e=a.createShader(a[e]);a.shaderSource(e,d);a.compileShader(e);if(!a.getShaderParameter(e,a.COMPILE_STATUS))throw d=a.getShaderInfoLog(e),a.deleteShader(e),new c.Utils.Error("unable to compile shader "+e+": "+d);return e},types:{vertex:"VERTEX_SHADER",fragment:"FRAGMENT_SHADER"},vertex:"attribute vec2 a_position;\nattribute vec2 a_textureCoords;\n\nuniform mat3 u_matrix;\nuniform vec2 u_resolution;\n\nvarying vec2 v_textureCoords;\n\nvoid main() {\n   vec2 projected \x3d (u_matrix * vec3(a_position, 1.0)).xy;\n   vec2 normal \x3d projected / u_resolution;\n   vec2 clipspace \x3d (normal * 2.0) - 1.0;\n\n   gl_Position \x3d vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);\n   v_textureCoords \x3d a_textureCoords;\n}",
fragment:"precision mediump float;\n\nuniform sampler2D u_image;\nvarying vec2 v_textureCoords;\n\nvoid main() {\n  gl_FragColor \x3d texture2D(u_image, v_textureCoords);\n}"},TextureRegistry:new c.Registry};n.ctx=n.canvas.getContext("2d");k=c[c.Types.webgl]=function(a){this.domElement=a.domElement||document.createElement("canvas");this.scene=new c.Group;this.scene.parent=this;this._renderer={matrix:new c.Array(h),scale:1,opacity:1};this._flagMatrix=!0;a=g.defaults(a||{},{antialias:!1,alpha:!0,premultipliedAlpha:!0,
stencil:!0,preserveDrawingBuffer:!0,overdraw:!1});this.overdraw=a.overdraw;a=this.ctx=this.domElement.getContext("webgl",a)||this.domElement.getContext("experimental-webgl",a);if(!this.ctx)throw new c.Utils.Error("unable to create a webgl context. Try using another renderer.");var d=n.shaders.create(a,n.shaders.vertex,n.shaders.types.vertex);var f=n.shaders.create(a,n.shaders.fragment,n.shaders.types.fragment);this.program=n.program.create(a,[d,f]);a.useProgram(this.program);this.program.position=
a.getAttribLocation(this.program,"a_position");this.program.matrix=a.getUniformLocation(this.program,"u_matrix");this.program.textureCoords=a.getAttribLocation(this.program,"a_textureCoords");a.disable(a.DEPTH_TEST);a.enable(a.BLEND);a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD);a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)};g.extend(k,{Utils:n});g.extend(k.prototype,c.Utils.Events,{setSize:function(a,c,d){this.width=a;this.height=c;this.ratio=g.isUndefined(d)?
e(this.ctx):d;this.domElement.width=a*this.ratio;this.domElement.height=c*this.ratio;g.extend(this.domElement.style,{width:a+"px",height:c+"px"});a*=this.ratio;c*=this.ratio;this._renderer.matrix[0]=this._renderer.matrix[4]=this._renderer.scale=this.ratio;this._flagMatrix=!0;this.ctx.viewport(0,0,a,c);d=this.ctx.getUniformLocation(this.program,"u_resolution");this.ctx.uniform2f(d,a,c);return this},render:function(){var a=this.ctx;this.overdraw||a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT);n.group.render.call(this.scene,
a,this.program);this._flagMatrix=!1;return this}})})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Shape=function(){this._renderer={};this._renderer.flagMatrix=k.bind(m.FlagMatrix,this);this.isShape=!0;this.id=c.Identifier+c.uniqueId();this.classList=[];this._matrix=new c.Matrix;this.translation=new c.Vector;this.rotation=0;this.scale=1};k.extend(m,{FlagMatrix:function(){this._flagMatrix=!0},MakeObservable:function(k){Object.defineProperty(k,"translation",{enumerable:!0,get:function(){return this._translation},set:function(h){this._translation&&this._translation.unbind(c.Events.change,
this._renderer.flagMatrix);this._translation=h;this._translation.bind(c.Events.change,this._renderer.flagMatrix);m.FlagMatrix.call(this)}});Object.defineProperty(k,"rotation",{enumerable:!0,get:function(){return this._rotation},set:function(c){this._rotation=c;this._flagMatrix=!0}});Object.defineProperty(k,"scale",{enumerable:!0,get:function(){return this._scale},set:function(h){this._scale instanceof c.Vector&&this._scale.unbind(c.Events.change,this._renderer.flagMatrix);this._scale=h;this._scale instanceof
c.Vector&&this._scale.bind(c.Events.change,this._renderer.flagMatrix);this._flagScale=this._flagMatrix=!0}})}});k.extend(m.prototype,c.Utils.Events,{_flagMatrix:!0,_flagScale:!1,_rotation:0,_scale:1,_translation:null,addTo:function(c){c.add(this);return this},clone:function(){var c=new m;c.translation.copy(this.translation);c.rotation=this.rotation;c.scale=this.scale;k.each(m.Properties,function(h){c[h]=this[h]},this);return c._update()},_update:function(k){!this._matrix.manual&&this._flagMatrix&&
(this._matrix.identity().translate(this.translation.x,this.translation.y),this._scale instanceof c.Vector?this._matrix.scale(this._scale.x,this._scale.y):this._matrix.scale(this._scale),this._matrix.rotate(this.rotation));k&&this.parent&&this.parent._update&&this.parent._update();return this},flagReset:function(){this._flagMatrix=this._flagScale=!1;return this}});m.MakeObservable(m.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){function k(a,d,e){var f=d.controls&&d.controls.right,g=a.controls&&a.controls.left;var n=d.x;var h=d.y;var k=(f||d).x;var l=(f||d).y;var m=(g||a).x;var t=(g||a).y;var w=a.x;var p=a.y;f&&d._relative&&(k+=d.x,l+=d.y);g&&a._relative&&(m+=a.x,t+=a.y);return c.Utils.getCurveLength(n,h,k,l,m,t,w,p,e)}function m(a,d,e){var f=d.controls&&d.controls.right,g=a.controls&&a.controls.left;var h=d.x;var n=d.y;var k=(f||d).x;var l=(f||d).y;var m=(g||a).x;var t=(g||a).y;var w=a.x;var p=a.y;f&&d._relative&&
(k+=d.x,l+=d.y);g&&a._relative&&(m+=a.x,t+=a.y);return c.Utils.subdivide(h,n,k,l,m,t,w,p,e)}var l=Math.min,h=Math.max,d=Math.round,e=c.Utils.getComputedMatrix,a=c.Utils;a.each(c.Commands,function(a,c){});var g=c.Path=function(d,f,e,h){c.Shape.call(this);this._renderer.type="path";this._renderer.flagVertices=a.bind(g.FlagVertices,this);this._renderer.bindVertices=a.bind(g.BindVertices,this);this._renderer.unbindVertices=a.bind(g.UnbindVertices,this);this._renderer.flagFill=a.bind(g.FlagFill,this);
this._renderer.flagStroke=a.bind(g.FlagStroke,this);this._closed=!!f;this._curved=!!e;this.beginning=0;this.ending=1;this.fill="#fff";this.stroke="#000";this.opacity=this.linewidth=1;this.visible=!0;this.cap="butt";this.join="miter";this.miter=4;this._vertices=[];this.vertices=d;this.automatic=!h};a.extend(g,{Properties:"fill stroke linewidth opacity visible cap join miter closed curved automatic beginning ending".split(" "),FlagVertices:function(){this._flagLength=this._flagVertices=!0},BindVertices:function(a){for(var d=
a.length;d--;)a[d].bind(c.Events.change,this._renderer.flagVertices);this._renderer.flagVertices()},UnbindVertices:function(a){for(var d=a.length;d--;)a[d].unbind(c.Events.change,this._renderer.flagVertices);this._renderer.flagVertices()},FlagFill:function(){this._flagFill=!0},FlagStroke:function(){this._flagStroke=!0},MakeObservable:function(d){c.Shape.MakeObservable(d);a.each(g.Properties.slice(2,8),c.Utils.defineProperty,d);Object.defineProperty(d,"fill",{enumerable:!0,get:function(){return this._fill},
set:function(a){(this._fill instanceof c.Gradient||this._fill instanceof c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.unbind(c.Events.change,this._renderer.flagFill);this._fill=a;this._flagFill=!0;(this._fill instanceof c.Gradient||this._fill instanceof c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.bind(c.Events.change,this._renderer.flagFill)}});Object.defineProperty(d,"stroke",{enumerable:!0,
get:function(){return this._stroke},set:function(a){(this._stroke instanceof c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.unbind(c.Events.change,this._renderer.flagStroke);this._stroke=a;this._flagStroke=!0;(this._stroke instanceof c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.bind(c.Events.change,this._renderer.flagStroke)}});
Object.defineProperty(d,"length",{get:function(){this._flagLength&&this._updateLength();return this._length}});Object.defineProperty(d,"closed",{enumerable:!0,get:function(){return this._closed},set:function(a){this._closed=!!a;this._flagVertices=!0}});Object.defineProperty(d,"curved",{enumerable:!0,get:function(){return this._curved},set:function(a){this._curved=!!a;this._flagVertices=!0}});Object.defineProperty(d,"automatic",{enumerable:!0,get:function(){return this._automatic},set:function(c){if(c!==
this._automatic){var d=(this._automatic=!!c)?"ignore":"listen";a.each(this.vertices,function(a){a[d]()})}}});Object.defineProperty(d,"beginning",{enumerable:!0,get:function(){return this._beginning},set:function(a){this._beginning=a;this._flagVertices=!0}});Object.defineProperty(d,"ending",{enumerable:!0,get:function(){return this._ending},set:function(a){this._ending=a;this._flagVertices=!0}});Object.defineProperty(d,"vertices",{enumerable:!0,get:function(){return this._collection},set:function(a){var d=
this._renderer.bindVertices,e=this._renderer.unbindVertices;this._collection&&this._collection.unbind(c.Events.insert,d).unbind(c.Events.remove,e);this._collection=new c.Utils.Collection((a||[]).slice(0));this._collection.bind(c.Events.insert,d).bind(c.Events.remove,e);d(this._collection)}});Object.defineProperty(d,"clip",{enumerable:!0,get:function(){return this._clip},set:function(a){this._clip=a;this._flagClip=!0}})}});a.extend(g.prototype,c.Shape.prototype,{_flagVertices:!0,_flagLength:!0,_flagFill:!0,
_flagStroke:!0,_flagLinewidth:!0,_flagOpacity:!0,_flagVisible:!0,_flagCap:!0,_flagJoin:!0,_flagMiter:!0,_flagClip:!1,_length:0,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,_clip:!1,clone:function(d){d=d||this.parent;var e=a.map(this.vertices,function(a){return a.clone()}),h=new g(e,this.closed,this.curved,!this.automatic);a.each(c.Path.Properties,function(a){h[a]=this[a]},this);h.translation.copy(this.translation);
h.rotation=this.rotation;h.scale=this.scale;d&&d.add(h);return h},toObject:function(){var d={vertices:a.map(this.vertices,function(a){return a.toObject()})};a.each(c.Shape.Properties,function(a){d[a]=this[a]},this);d.translation=this.translation.toObject;d.rotation=this.rotation;d.scale=this.scale;return d},noFill:function(){this.fill="transparent";return this},noStroke:function(){this.stroke="transparent";return this},corner:function(){var c=this.getBoundingClientRect(!0);c.centroid={x:c.left+c.width/
2,y:c.top+c.height/2};a.each(this.vertices,function(a){a.addSelf(c.centroid)});return this},center:function(){var c=this.getBoundingClientRect(!0);c.centroid={x:c.left+c.width/2,y:c.top+c.height/2};a.each(this.vertices,function(a){a.subSelf(c.centroid)});return this},remove:function(){if(!this.parent)return this;this.parent.remove(this);return this},getBoundingClientRect:function(a){var c,d=Infinity,g=-Infinity,k=Infinity,n=-Infinity;this._update(!0);a=a?this._matrix:e(this);var m=this.linewidth/
2;var x=this._vertices.length;if(0>=x){var u=a.multiply(0,0,1);return{top:u.y,left:u.x,right:u.x,bottom:u.y,width:0,height:0}}for(c=0;c<x;c++){u=this._vertices[c];var r=u.x;u=u.y;u=a.multiply(r,u,1);k=l(u.y-m,k);d=l(u.x-m,d);g=h(u.x+m,g);n=h(u.y+m,n)}return{top:k,left:d,right:g,bottom:n,width:g-d,height:n-k}},getPointAt:function(d,e){var g,f;var h=this.length*Math.min(Math.max(d,0),1);var k=this.vertices.length;var n=k-1;var l=g=null;var m=0;var r=this._lengths.length;for(f=0;m<r;m++){if(f+this._lengths[m]>=
h){this._closed?(g=c.Utils.mod(m,k),l=c.Utils.mod(m-1,k),0===m&&(g=l,l=m)):(g=m,l=Math.min(Math.max(m-1,0),n));g=this.vertices[g];l=this.vertices[l];h-=f;0!==this._lengths[m]&&(d=h/this._lengths[m]);break}f+=this._lengths[m]}if(a.isNull(g)||a.isNull(l))return null;var q=l.controls&&l.controls.right;var w=g.controls&&g.controls.left;n=l.x;h=l.y;r=(q||l).x;m=(q||l).y;var p=(w||g).x;f=(w||g).y;var C=g.x;k=g.y;q&&l._relative&&(r+=l.x,m+=l.y);w&&g._relative&&(p+=g.x,f+=g.y);g=c.Utils.getPointOnCubicBezier(d,
n,r,p,C);d=c.Utils.getPointOnCubicBezier(d,h,m,f,k);return a.isObject(e)?(e.x=g,e.y=d,e):new c.Vector(g,d)},plot:function(){if(this.curved)return c.Utils.getCurveFromPoints(this._vertices,this.closed),this;for(var a=0;a<this._vertices.length;a++)this._vertices[a]._command=0===a?c.Commands.move:c.Commands.line;return this},subdivide:function(d){this._update();var e=this.vertices.length-1,g=this.vertices[e],h=this._closed||this.vertices[e]._command===c.Commands.close,k=[];a.each(this.vertices,function(f,
n){if(!(0>=n)||h)if(f.command===c.Commands.move)k.push(new c.Anchor(g.x,g.y)),0<n&&(k[k.length-1].command=c.Commands.line);else{var l=m(f,g,d);k=k.concat(l);a.each(l,function(a,d){a.command=0>=d&&g.command===c.Commands.move?c.Commands.move:c.Commands.line});n>=e&&(this._closed&&this._automatic?(g=f,l=m(f,g,d),k=k.concat(l),a.each(l,function(a,d){a.command=0>=d&&g.command===c.Commands.move?c.Commands.move:c.Commands.line})):h&&k.push(new c.Anchor(f.x,f.y)),k[k.length-1].command=h?c.Commands.close:
c.Commands.line)}g=f},this);this._curved=this._automatic=!1;this.vertices=k;return this},_updateLength:function(d){this._update();var e=this.vertices.length,g=e-1,h=this.vertices[g],n=this._closed||this.vertices[g]._command===c.Commands.close,l=0;a.isUndefined(this._lengths)&&(this._lengths=[]);a.each(this.vertices,function(a,f){0>=f&&!n||a.command===c.Commands.move?(h=a,this._lengths[f]=0):(this._lengths[f]=k(a,h,d),l+=this._lengths[f],f>=g&&n&&(h=this.vertices[(f+1)%e],this._lengths[f+1]=k(a,h,
d),l+=this._lengths[f+1]),h=a)},this);this._length=l;return this},_update:function(){if(this._flagVertices){var a=this.vertices.length-1;var e=d(this._beginning*a);a=d(this._ending*a);this._vertices.length=0;for(var g=e;g<a+1;g++)e=this.vertices[g],this._vertices.push(e);this._automatic&&this.plot()}c.Shape.prototype._update.apply(this,arguments);return this},flagReset:function(){this._flagVertices=this._flagFill=this._flagStroke=this._flagLinewidth=this._flagOpacity=this._flagVisible=this._flagCap=
this._flagJoin=this._flagMiter=this._flagClip=!1;c.Shape.prototype.flagReset.call(this);return this}});g.MakeObservable(g.prototype)})(("undefined"!==typeof global?global:this).Two);(function(c){var k=c.Path,m=c.Utils,l=c.Line=function(h,d,e,a){e=(e-h)/2;a=(a-d)/2;k.call(this,[new c.Anchor(-e,-a),new c.Anchor(e,a)]);this.translation.set(h+e,d+a)};m.extend(l.prototype,k.prototype);k.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=c.Utils,l=c.Rectangle=function(h,d,e,a){k.call(this,[new c.Anchor,new c.Anchor,new c.Anchor,new c.Anchor],!0);this.width=e;this.height=a;this._update();this.translation.set(h,d)};m.extend(l,{Properties:["width","height"],MakeObservable:function(h){k.MakeObservable(h);m.each(l.Properties,c.Utils.defineProperty,h)}});m.extend(l.prototype,k.prototype,{_width:0,_height:0,_flagWidth:0,_flagHeight:0,_update:function(){if(this._flagWidth||this._flagHeight){var c=this._width/2,
d=this._height/2;this.vertices[0].set(-c,-d);this.vertices[1].set(c,-d);this.vertices[2].set(c,d);this.vertices[3].set(-c,d)}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=!1;k.prototype.flagReset.call(this);return this}});l.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Ellipse=function(a,e,h,f){d.isNumber(f)||(f=h);var g=d.map(d.range(c.Resolution),function(a){return new c.Anchor},this);k.call(this,g,!0,!0);this.width=2*h;this.height=2*f;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["width","height"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,{_width:0,_height:0,_flagWidth:!1,_flagHeight:!1,
_update:function(){if(this._flagWidth||this._flagHeight)for(var a=0,c=this.vertices.length;a<c;a++){var d=a/c*m,e=this._width*l(d)/2,d=this._height*h(d)/2;this.vertices[a].set(e,d)}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=!1;k.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Circle=function(a,e,h){var g=d.map(d.range(c.Resolution),function(a){return new c.Anchor},this);k.call(this,g,!0,!0);this.radius=h;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["radius"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,{_radius:0,_flagRadius:!1,_update:function(){if(this._flagRadius)for(var a=0,c=this.vertices.length;a<
c;a++){var d=a/c*m,e=this._radius*l(d),d=this._radius*h(d);this.vertices[a].set(e,d)}k.prototype._update.call(this);return this},flagReset:function(){this._flagRadius=!1;k.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Polygon=function(a,e,h,f){f=Math.max(f||0,3);var g=d.map(d.range(f),function(a){return new c.Anchor});k.call(this,g,!0);this.width=2*h;this.height=2*h;this.sides=f;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["width","height","sides"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,{_width:0,_height:0,_sides:0,_flagWidth:!1,
_flagHeight:!1,_flagSides:!1,_update:function(){if(this._flagWidth||this._flagHeight||this._flagSides){var a=this._sides,d=this.vertices.length;d>a&&this.vertices.splice(a-1,d-a);for(var e=0;e<a;e++){var f=(e+.5)/a*m+Math.PI/2,t=this._width*l(f),f=this._height*h(f);e>=d?this.vertices.push(new c.Anchor(t,f)):this.vertices[e].set(t,f)}}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=this._flagSides=!1;k.prototype.flagReset.call(this);return this}});
e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){function k(a,c){for(;0>a;)a+=c;return a%c}var m=c.Path,l=2*Math.PI,h=Math.PI/2,d=c.Utils,e=c.ArcSegment=function(a,e,h,f,k,l,B){B=d.map(d.range(B||3*c.Resolution),function(){return new c.Anchor});m.call(this,B,!1,!1,!0);this.innerRadius=h;this.outerRadius=f;this.startAngle=k;this.endAngle=l;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["startAngle","endAngle","innerRadius","outerRadius"],MakeObservable:function(a){m.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,
a)}});d.extend(e.prototype,m.prototype,{_flagStartAngle:!1,_flagEndAngle:!1,_flagInnerRadius:!1,_flagOuterRadius:!1,_startAngle:0,_endAngle:l,_innerRadius:0,_outerRadius:0,_update:function(){if(this._flagStartAngle||this._flagEndAngle||this._flagInnerRadius||this._flagOuterRadius){var a=this._startAngle,d=this._endAngle,e=this._innerRadius,f=this._outerRadius,t=k(a,l)===k(d,l),v=0<e,B=this.vertices,z=v?B.length/2:B.length,A=0;t?z--:v||(z-=2);for(var x=0,u=z-1;x<z;x++){var r=x/u;var q=B[A];r=r*(d-
a)+a;var w=(d-a)/z;var p=f*Math.cos(r);var C=f*Math.sin(r);switch(x){case 0:var E=c.Commands.move;break;default:E=c.Commands.curve}q.command=E;q.x=p;q.y=C;q.controls.left.clear();q.controls.right.clear();q.command===c.Commands.curve&&(C=f*w/Math.PI,q.controls.left.x=C*Math.cos(r-h),q.controls.left.y=C*Math.sin(r-h),q.controls.right.x=C*Math.cos(r+h),q.controls.right.y=C*Math.sin(r+h),1===x&&q.controls.left.multiplyScalar(2),x===u&&q.controls.right.multiplyScalar(2));A++}if(v)for(t?(B[A].command=c.Commands.close,
A++):(z--,u=z-1),x=0;x<z;x++)r=x/u,q=B[A],r=(1-r)*(d-a)+a,w=(d-a)/z,p=e*Math.cos(r),C=e*Math.sin(r),E=c.Commands.curve,0>=x&&(E=t?c.Commands.move:c.Commands.line),q.command=E,q.x=p,q.y=C,q.controls.left.clear(),q.controls.right.clear(),q.command===c.Commands.curve&&(C=e*w/Math.PI,q.controls.left.x=C*Math.cos(r+h),q.controls.left.y=C*Math.sin(r+h),q.controls.right.x=C*Math.cos(r-h),q.controls.right.y=C*Math.sin(r-h),1===x&&q.controls.left.multiplyScalar(2),x===u&&q.controls.right.multiplyScalar(2)),
A++;else t||(B[A].command=c.Commands.line,B[A].x=0,B[A].y=0,A++);B[A].command=c.Commands.close}m.prototype._update.call(this);return this},flagReset:function(){m.prototype.flagReset.call(this);this._flagStartAngle=this._flagEndAngle=this._flagInnerRadius=this._flagOuterRadius=!1;return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=2*Math.PI,l=Math.cos,h=Math.sin,d=c.Utils,e=c.Star=function(a,e,h,f,l){d.isNumber(f)||(f=h/2);if(!d.isNumber(l)||0>=l)l=5;var g=d.map(d.range(2*l),function(a){return new c.Anchor});k.call(this,g,!0);this.innerRadius=f;this.outerRadius=h;this.sides=l;this._update();this.translation.set(a,e)};d.extend(e,{Properties:["innerRadius","outerRadius","sides"],MakeObservable:function(a){k.MakeObservable(a);d.each(e.Properties,c.Utils.defineProperty,a)}});d.extend(e.prototype,k.prototype,
{_innerRadius:0,_outerRadius:0,_sides:0,_flagInnerRadius:!1,_flagOuterRadius:!1,_flagSides:!1,_update:function(){if(this._flagInnerRadius||this._flagOuterRadius||this._flagSides){var a=2*this._sides,d=this.vertices.length;d>a&&this.vertices.splice(a-1,d-a);for(var e=0;e<a;e++){var f=(e+.5)/a*m,t=e%2?this._innerRadius:this._outerRadius,v=t*l(f),f=t*h(f);e>=d?this.vertices.push(new c.Anchor(v,f)):this.vertices[e].set(v,f)}}k.prototype._update.call(this);return this},flagReset:function(){this._flagInnerRadius=
this._flagOuterRadius=this._flagSides=!1;k.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Path,m=c.Utils,l=c.RoundedRectangle=function(h,d,e,a,g){m.isNumber(g)||(g=Math.floor(Math.min(e,a)/12));var l=m.map(m.range(10),function(a){return new c.Anchor(0,0,0,0,0,0,0===a?c.Commands.move:c.Commands.curve)});l[l.length-1].command=c.Commands.close;k.call(this,l,!1,!1,!0);this.width=e;this.height=a;this.radius=g;this._update();this.translation.set(h,d)};m.extend(l,{Properties:["width","height","radius"],MakeObservable:function(h){k.MakeObservable(h);m.each(l.Properties,c.Utils.defineProperty,
h)}});m.extend(l.prototype,k.prototype,{_width:0,_height:0,_radius:0,_flagWidth:!1,_flagHeight:!1,_flagRadius:!1,_update:function(){if(this._flagWidth||this._flagHeight||this._flagRadius){var c=this._width,d=this._height,e=Math.min(Math.max(this._radius,0),Math.min(c,d)),c=c/2,a=d/2,d=this.vertices[0];d.x=-(c-e);d.y=-a;d=this.vertices[1];d.x=c-e;d.y=-a;d.controls.left.clear();d.controls.right.x=e;d.controls.right.y=0;d=this.vertices[2];d.x=c;d.y=-(a-e);d.controls.right.clear();d.controls.left.clear();
d=this.vertices[3];d.x=c;d.y=a-e;d.controls.left.clear();d.controls.right.x=0;d.controls.right.y=e;d=this.vertices[4];d.x=c-e;d.y=a;d.controls.right.clear();d.controls.left.clear();d=this.vertices[5];d.x=-(c-e);d.y=a;d.controls.left.clear();d.controls.right.x=-e;d.controls.right.y=0;d=this.vertices[6];d.x=-c;d.y=a-e;d.controls.left.clear();d.controls.right.clear();d=this.vertices[7];d.x=-c;d.y=-(a-e);d.controls.left.clear();d.controls.right.x=0;d.controls.right.y=-e;d=this.vertices[8];d.x=-(c-e);
d.y=-a;d.controls.left.clear();d.controls.right.clear();d=this.vertices[9];d.copy(this.vertices[8])}k.prototype._update.call(this);return this},flagReset:function(){this._flagWidth=this._flagHeight=this._flagRadius=!1;k.prototype.flagReset.call(this);return this}});l.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.root,m=c.Utils.getComputedMatrix,l=c.Utils;(k.document?k.document.createElement("canvas"):{getContext:l.identity}).getContext("2d");var h=c.Text=function(d,e,a,g){c.Shape.call(this);this._renderer.type="text";this._renderer.flagFill=l.bind(h.FlagFill,this);this._renderer.flagStroke=l.bind(h.FlagStroke,this);this.value=d;l.isNumber(e)&&(this.translation.x=e);l.isNumber(a)&&(this.translation.y=a);if(!l.isObject(g))return this;l.each(c.Text.Properties,function(a){a in g&&(this[a]=
g[a])},this)};l.extend(c.Text,{Properties:"value family size leading alignment linewidth style weight decoration baseline opacity visible fill stroke".split(" "),FlagFill:function(){this._flagFill=!0},FlagStroke:function(){this._flagStroke=!0},MakeObservable:function(d){c.Shape.MakeObservable(d);l.each(c.Text.Properties.slice(0,12),c.Utils.defineProperty,d);Object.defineProperty(d,"fill",{enumerable:!0,get:function(){return this._fill},set:function(d){(this._fill instanceof c.Gradient||this._fill instanceof
c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.unbind(c.Events.change,this._renderer.flagFill);this._fill=d;this._flagFill=!0;(this._fill instanceof c.Gradient||this._fill instanceof c.LinearGradient||this._fill instanceof c.RadialGradient||this._fill instanceof c.Texture)&&this._fill.bind(c.Events.change,this._renderer.flagFill)}});Object.defineProperty(d,"stroke",{enumerable:!0,get:function(){return this._stroke},set:function(d){(this._stroke instanceof
c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.unbind(c.Events.change,this._renderer.flagStroke);this._stroke=d;this._flagStroke=!0;(this._stroke instanceof c.Gradient||this._stroke instanceof c.LinearGradient||this._stroke instanceof c.RadialGradient||this._stroke instanceof c.Texture)&&this._stroke.bind(c.Events.change,this._renderer.flagStroke)}});Object.defineProperty(d,"clip",{enumerable:!0,get:function(){return this._clip},
set:function(c){this._clip=c;this._flagClip=!0}})}});l.extend(c.Text.prototype,c.Shape.prototype,{_flagValue:!0,_flagFamily:!0,_flagSize:!0,_flagLeading:!0,_flagAlignment:!0,_flagBaseline:!0,_flagStyle:!0,_flagWeight:!0,_flagDecoration:!0,_flagFill:!0,_flagStroke:!0,_flagLinewidth:!0,_flagOpacity:!0,_flagVisible:!0,_flagClip:!1,_value:"",_family:"sans-serif",_size:13,_leading:17,_alignment:"center",_baseline:"middle",_style:"normal",_weight:500,_decoration:"none",_fill:"#000",_stroke:"transparent",
_linewidth:1,_opacity:1,_visible:!0,_clip:!1,remove:function(){if(!this.parent)return this;this.parent.remove(this);return this},clone:function(d){d=d||this.parent;var e=new c.Text(this.value);e.translation.copy(this.translation);e.rotation=this.rotation;e.scale=this.scale;l.each(c.Text.Properties,function(a){e[a]=this[a]},this);d&&d.add(e);return e},toObject:function(){var d={translation:this.translation.toObject(),rotation:this.rotation,scale:this.scale};l.each(c.Text.Properties,function(c){d[c]=
this[c]},this);return d},noStroke:function(){this.stroke="transparent";return this},noFill:function(){this.fill="transparent";return this},getBoundingClientRect:function(c){this._update(!0);c=(c?this._matrix:m(this)).multiply(0,0,1);return{top:c.x,left:c.y,right:c.x,bottom:c.y,width:0,height:0}},flagReset:function(){this._flagValue=this._flagFamily=this._flagSize=this._flagLeading=this._flagAlignment=this._flagFill=this._flagStroke=this._flagLinewidth=this._flagOpaicty=this._flagVisible=this._flagClip=
this._flagDecoration=this._flagBaseline=!1;c.Shape.prototype.flagReset.call(this);return this}});c.Text.MakeObservable(c.Text.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Stop=function(c,d,e){this._renderer={};this._renderer.type="stop";this.offset=k.isNumber(c)?c:0>=m.Index?0:1;this.opacity=k.isNumber(e)?e:1;this.color=k.isString(d)?d:0>=m.Index?"#fff":"#000";m.Index=(m.Index+1)%2};k.extend(m,{Index:0,Properties:["offset","opacity","color"],MakeObservable:function(c){k.each(m.Properties,function(c){var d="_"+c,a="_flag"+c.charAt(0).toUpperCase()+c.slice(1);Object.defineProperty(this,c,{enumerable:!0,get:function(){return this[d]},set:function(c){this[d]=
c;this[a]=!0;this.parent&&(this.parent._flagStops=!0)}})},c)}});k.extend(m.prototype,c.Utils.Events,{clone:function(){var c=new m;k.each(m.Properties,function(d){c[d]=this[d]},this);return c},toObject:function(){var c={};k.each(m.Properties,function(d){c[d]=this[d]},this);return c},flagReset:function(){this._flagOffset=this._flagColor=this._flagOpacity=!1;return this}});m.MakeObservable(m.prototype);var l=c.Gradient=function(h){this._renderer={};this._renderer.type="gradient";this.id=c.Identifier+
c.uniqueId();this.classList=[];this._renderer.flagStops=k.bind(l.FlagStops,this);this._renderer.bindStops=k.bind(l.BindStops,this);this._renderer.unbindStops=k.bind(l.UnbindStops,this);this.spread="pad";this.stops=h};k.extend(l,{Stop:m,Properties:["spread"],MakeObservable:function(h){k.each(l.Properties,c.Utils.defineProperty,h);Object.defineProperty(h,"stops",{enumerable:!0,get:function(){return this._stops},set:function(d){var e=this._renderer.bindStops,a=this._renderer.unbindStops;this._stops&&
this._stops.unbind(c.Events.insert,e).unbind(c.Events.remove,a);this._stops=new c.Utils.Collection((d||[]).slice(0));this._stops.bind(c.Events.insert,e).bind(c.Events.remove,a);e(this._stops)}})},FlagStops:function(){this._flagStops=!0},BindStops:function(h){for(var d=h.length;d--;)h[d].bind(c.Events.change,this._renderer.flagStops),h[d].parent=this;this._renderer.flagStops()},UnbindStops:function(h){for(var d=h.length;d--;)h[d].unbind(c.Events.change,this._renderer.flagStops),delete h[d].parent;
this._renderer.flagStops()}});k.extend(l.prototype,c.Utils.Events,{_flagStops:!1,_flagSpread:!1,clone:function(h){h=h||this.parent;var d=k.map(this.stops,function(a){return a.clone()}),e=new l(d);k.each(c.Gradient.Properties,function(a){e[a]=this[a]},this);h&&h.add(e);return e},toObject:function(){var c={stops:k.map(this.stops,function(c){return c.toObject()})};k.each(l.Properties,function(d){c[d]=this[d]},this);return c},_update:function(){(this._flagSpread||this._flagStops)&&this.trigger(c.Events.change);
return this},flagReset:function(){this._flagSpread=this._flagStops=!1;return this}});l.MakeObservable(l.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.LinearGradient=function(l,h,d,e,a){c.Gradient.call(this,a);this._renderer.type="linear-gradient";a=k.bind(m.FlagEndPoints,this);this.left=(new c.Vector).bind(c.Events.change,a);this.right=(new c.Vector).bind(c.Events.change,a);k.isNumber(l)&&(this.left.x=l);k.isNumber(h)&&(this.left.y=h);k.isNumber(d)&&(this.right.x=d);k.isNumber(e)&&(this.right.y=e)};k.extend(m,{Stop:c.Gradient.Stop,MakeObservable:function(k){c.Gradient.MakeObservable(k)},FlagEndPoints:function(){this._flagEndPoints=
!0}});k.extend(m.prototype,c.Gradient.prototype,{_flagEndPoints:!1,clone:function(l){l=l||this.parent;var h=k.map(this.stops,function(c){return c.clone()}),d=new m(this.left._x,this.left._y,this.right._x,this.right._y,h);k.each(c.Gradient.Properties,function(c){d[c]=this[c]},this);l&&l.add(d);return d},toObject:function(){var k=c.Gradient.prototype.toObject.call(this);k.left=this.left.toObject();k.right=this.right.toObject();return k},_update:function(){(this._flagEndPoints||this._flagSpread||this._flagStops)&&
this.trigger(c.Events.change);return this},flagReset:function(){this._flagEndPoints=!1;c.Gradient.prototype.flagReset.call(this);return this}});m.MakeObservable(m.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.RadialGradient=function(l,h,d,e,a,g){c.Gradient.call(this,e);this._renderer.type="radial-gradient";this.center=(new c.Vector).bind(c.Events.change,k.bind(function(){this._flagCenter=!0},this));this.radius=k.isNumber(d)?d:20;this.focal=(new c.Vector).bind(c.Events.change,k.bind(function(){this._flagFocal=!0},this));k.isNumber(l)&&(this.center.x=l);k.isNumber(h)&&(this.center.y=h);this.focal.copy(this.center);k.isNumber(a)&&(this.focal.x=a);k.isNumber(g)&&(this.focal.y=
g)};k.extend(m,{Stop:c.Gradient.Stop,Properties:["radius"],MakeObservable:function(l){c.Gradient.MakeObservable(l);k.each(m.Properties,c.Utils.defineProperty,l)}});k.extend(m.prototype,c.Gradient.prototype,{_flagRadius:!1,_flagCenter:!1,_flagFocal:!1,clone:function(l){l=l||this.parent;var h=k.map(this.stops,function(c){return c.clone()}),d=new m(this.center._x,this.center._y,this._radius,h,this.focal._x,this.focal._y);k.each(c.Gradient.Properties.concat(m.Properties),function(c){d[c]=this[c]},this);
l&&l.add(d);return d},toObject:function(){var l=c.Gradient.prototype.toObject.call(this);k.each(m.Properties,function(c){l[c]=this[c]},this);l.center=this.center.toObject();l.focal=this.focal.toObject();return l},_update:function(){(this._flagRadius||this._flatCenter||this._flagFocal||this._flagSpread||this._flagStops)&&this.trigger(c.Events.change);return this},flagReset:function(){this._flagRadius=this._flagCenter=this._flagFocal=!1;c.Gradient.prototype.flagReset.call(this);return this}});m.MakeObservable(m.prototype)})(("undefined"!==
typeof global?global:this).Two);
(function(c){var k=c.Utils,m,l=/\.(mp4|webm)$/i;this.document&&(m=document.createElement("a"));var h=c.Texture=function(d,e){this._renderer={};this._renderer.type="texture";this._renderer.flagOffset=k.bind(h.FlagOffset,this);this._renderer.flagScale=k.bind(h.FlagScale,this);this.id=c.Identifier+c.uniqueId();this.classList=[];this.offset=new c.Vector;if(k.isFunction(e)){var a=k.bind(function(){this.unbind(c.Events.load,a);k.isFunction(e)&&e()},this);this.bind(c.Events.load,a)}k.isString(d)?this.src=
d:k.isElement(d)&&(this.image=d);this._update()};k.extend(h,{Properties:["src","loaded","repeat"],ImageRegistry:new c.Registry,getAbsoluteURL:function(c){if(!m)return c;m.href=c;return m.href},getImage:function(c){c=h.getAbsoluteURL(c);if(h.ImageRegistry.contains(c))return h.ImageRegistry.get(c);c=l.test(c)?document.createElement("video"):document.createElement("img");c.crossOrigin="anonymous";return c},Register:{canvas:function(c,e){c._src="#"+c.id;h.ImageRegistry.add(c.src,c.image);k.isFunction(e)&&
e()},img:function(d,e){var a=function(c){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);k.isFunction(e)&&e()},g=function(e){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);throw new c.Utils.Error("unable to load "+d.src);};k.isNumber(d.image.width)&&0<d.image.width&&k.isNumber(d.image.height)&&0<d.image.height?a():(d.image.addEventListener("load",a,!1),d.image.addEventListener("error",g,!1));d._src=h.getAbsoluteURL(d._src);d.image&&
d.image.getAttribute("two-src")||(d.image.setAttribute("two-src",d.src),h.ImageRegistry.add(d.src,d.image),d.image.src=d.src)},video:function(d,e){var a=function(c){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);d.image.width=d.image.videoWidth;d.image.height=d.image.videoHeight;d.image.play();k.isFunction(e)&&e()},g=function(e){d.image.removeEventListener("load",a,!1);d.image.removeEventListener("error",g,!1);throw new c.Utils.Error("unable to load "+d.src);};
d._src=h.getAbsoluteURL(d._src);d.image.addEventListener("canplaythrough",a,!1);d.image.addEventListener("error",g,!1);d.image&&d.image.getAttribute("two-src")||(d.image.setAttribute("two-src",d.src),h.ImageRegistry.add(d.src,d.image),d.image.src=d.src,d.image.loop=!0,d.image.load())}},load:function(c,e){var a=c.image,d=a&&a.nodeName.toLowerCase();c._flagImage&&(/canvas/i.test(d)?h.Register.canvas(c,e):(c._src=a.getAttribute("two-src")||a.src,h.Register[d](c,e)));c._flagSrc&&(a||(c.image=h.getImage(c.src)),
d=c.image.nodeName.toLowerCase(),h.Register[d](c,e))},FlagOffset:function(){this._flagOffset=!0},FlagScale:function(){this._flagScale=!0},MakeObservable:function(d){k.each(h.Properties,c.Utils.defineProperty,d);Object.defineProperty(d,"image",{enumerable:!0,get:function(){return this._image},set:function(c){switch(c&&c.nodeName.toLowerCase()){case "canvas":var a="#"+c.id;break;default:a=c.src}h.ImageRegistry.contains(a)?this._image=h.ImageRegistry.get(c.src):this._image=c;this._flagImage=!0}});Object.defineProperty(d,
"offset",{enumerable:!0,get:function(){return this._offset},set:function(d){this._offset&&this._offset.unbind(c.Events.change,this._renderer.flagOffset);this._offset=d;this._offset.bind(c.Events.change,this._renderer.flagOffset);this._flagOffset=!0}});Object.defineProperty(d,"scale",{enumerable:!0,get:function(){return this._scale},set:function(d){this._scale instanceof c.Vector&&this._scale.unbind(c.Events.change,this._renderer.flagScale);this._scale=d;this._scale instanceof c.Vector&&this._scale.bind(c.Events.change,
this._renderer.flagScale);this._flagScale=!0}})}});k.extend(h.prototype,c.Utils.Events,c.Shape.prototype,{_flagSrc:!1,_flagImage:!1,_flagVideo:!1,_flagLoaded:!1,_flagRepeat:!1,_flagOffset:!1,_flagScale:!1,_src:"",_image:null,_loaded:!1,_repeat:"no-repeat",_scale:1,_offset:null,clone:function(){return new h(this.src)},toObject:function(){return{src:this.src,image:this.image}},_update:function(){if(this._flagSrc||this._flagImage||this._flagVideo)if(this.trigger(c.Events.change),this._flagSrc||this._flagImage)this.loaded=
!1,h.load(this,k.bind(function(){this.loaded=!0;this.trigger(c.Events.change).trigger(c.Events.load)},this));this._image&&4<=this._image.readyState&&(this._flagVideo=!0);return this},flagReset:function(){this._flagSrc=this._flagImage=this._flagLoaded=this._flagVideo=this._flagScale=this._flagOffset=!1;return this}});h.MakeObservable(h.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Path,l=c.Rectangle,h=c.Sprite=function(d,e,a,g,h,f){m.call(this,[new c.Anchor,new c.Anchor,new c.Anchor,new c.Anchor],!0);this.noStroke();this.noFill();d instanceof c.Texture?this.texture=d:k.isString(d)&&(this.texture=new c.Texture(d));this._update();this.translation.set(e||0,a||0);k.isNumber(g)&&(this.columns=g);k.isNumber(h)&&(this.rows=h);k.isNumber(f)&&(this.frameRate=f)};k.extend(h,{Properties:["texture","columns","rows","frameRate","index"],MakeObservable:function(d){l.MakeObservable(d);
k.each(h.Properties,c.Utils.defineProperty,d)}});k.extend(h.prototype,l.prototype,{_flagTexture:!1,_flagColumns:!1,_flagRows:!1,_flagFrameRate:!1,flagIndex:!1,_amount:1,_duration:0,_startTime:0,_playing:!1,_firstFrame:0,_lastFrame:0,_loop:!0,_texture:null,_columns:1,_rows:1,_frameRate:0,_index:0,play:function(c,e,a){this._playing=!0;this._firstFrame=0;this._lastFrame=this.amount-1;this._startTime=k.performance.now();k.isNumber(c)&&(this._firstFrame=c);k.isNumber(e)&&(this._lastFrame=e);k.isFunction(a)?
this._onLastFrame=a:delete this._onLastFrame;this._index!==this._firstFrame&&(this._startTime-=1E3*Math.abs(this._index-this._firstFrame)/this._frameRate);return this},pause:function(){this._playing=!1;return this},stop:function(){this._playing=!1;this._index=0;return this},clone:function(c){c=c||this.parent;var d=new h(this.texture,this.translation.x,this.translation.y,this.columns,this.rows,this.frameRate);this.playing&&(d.play(this._firstFrame,this._lastFrame),d._loop=this._loop);c&&c.add(d);return d},
_update:function(){var c=this._texture,e=this._columns,a=this._rows;if(this._flagColumns||this._flagRows)this._amount=this._columns*this._rows;this._flagFrameRate&&(this._duration=1E3*this._amount/this._frameRate);this._flagTexture&&(this.fill=this._texture);if(this._texture.loaded){var g=c.image.width;var h=c.image.height;var f=g/e;a=h/a;var m=this._amount;this.width!==f&&(this.width=f);this.height!==a&&(this.height=a);if(this._playing&&0<this._frameRate){k.isNaN(this._lastFrame)&&(this._lastFrame=
m-1);m=k.performance.now()-this._startTime;var v=this._lastFrame+1;var B=1E3*(v-this._firstFrame)/this._frameRate;m=this._loop?m%B:Math.min(m,B);m=k.lerp(this._firstFrame,v,m/B);m=Math.floor(m);m!==this._index&&(this._index=m,m>=this._lastFrame-1&&this._onLastFrame&&this._onLastFrame())}f=this._index%e*-f+(g-f)/2;e=-a*Math.floor(this._index/e)+(h-a)/2;f!==c.offset.x&&(c.offset.x=f);e!==c.offset.y&&(c.offset.y=e)}l.prototype._update.call(this);return this},flagReset:function(){this._flagTexture=this._flagColumns=
this._flagRows=this._flagFrameRate=!1;l.prototype.flagReset.call(this);return this}});h.MakeObservable(h.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){var k=c.Utils,m=c.Path,l=c.Rectangle,h=c.ImageSequence=function(d,e,a,g){m.call(this,[new c.Anchor,new c.Anchor,new c.Anchor,new c.Anchor],!0);this._renderer.flagTextures=k.bind(h.FlagTextures,this);this._renderer.bindTextures=k.bind(h.BindTextures,this);this._renderer.unbindTextures=k.bind(h.UnbindTextures,this);this.noStroke();this.noFill();this.textures=k.map(d,h.GenerateTexture,this);this._update();this.translation.set(e||0,a||0);k.isNumber(g)?this.frameRate=g:this.frameRate=h.DefaultFrameRate};
k.extend(h,{Properties:["frameRate","index"],DefaultFrameRate:30,FlagTextures:function(){this._flagTextures=!0},BindTextures:function(d){for(var e=d.length;e--;)d[e].bind(c.Events.change,this._renderer.flagTextures);this._renderer.flagTextures()},UnbindTextures:function(d){for(var e=d.length;e--;)d[e].unbind(c.Events.change,this._renderer.flagTextures);this._renderer.flagTextures()},MakeObservable:function(d){l.MakeObservable(d);k.each(h.Properties,c.Utils.defineProperty,d);Object.defineProperty(d,
"textures",{enumerable:!0,get:function(){return this._textures},set:function(d){var a=this._renderer.bindTextures,e=this._renderer.unbindTextures;this._textures&&this._textures.unbind(c.Events.insert,a).unbind(c.Events.remove,e);this._textures=new c.Utils.Collection((d||[]).slice(0));this._textures.bind(c.Events.insert,a).bind(c.Events.remove,e);a(this._textures)}})},GenerateTexture:function(d){if(d instanceof c.Texture)return d;if(k.isString(d))return new c.Texture(d)}});k.extend(h.prototype,l.prototype,
{_flagTextures:!1,_flagFrameRate:!1,_flagIndex:!1,_amount:1,_duration:0,_index:0,_startTime:0,_playing:!1,_firstFrame:0,_lastFrame:0,_loop:!0,_textures:null,_frameRate:0,play:function(c,e,a){this._playing=!0;this._firstFrame=0;this._lastFrame=this.amount-1;this._startTime=k.performance.now();k.isNumber(c)&&(this._firstFrame=c);k.isNumber(e)&&(this._lastFrame=e);k.isFunction(a)?this._onLastFrame=a:delete this._onLastFrame;this._index!==this._firstFrame&&(this._startTime-=1E3*Math.abs(this._index-this._firstFrame)/
this._frameRate);return this},pause:function(){this._playing=!1;return this},stop:function(){this._playing=!1;this._index=0;return this},clone:function(c){c=c||this.parent;var d=new h(this.textures,this.translation.x,this.translation.y,this.frameRate);d._loop=this._loop;this._playing&&d.play();c&&c.add(d);return d},_update:function(){var d=this._textures;this._flagTextures&&(this._amount=d.length);this._flagFrameRate&&(this._duration=1E3*this._amount/this._frameRate);if(this._playing&&0<this._frameRate){var e=
this._amount;k.isNaN(this._lastFrame)&&(this._lastFrame=e-1);e=k.performance.now()-this._startTime;var a=this._lastFrame+1;var g=1E3*(a-this._firstFrame)/this._frameRate;e=this._loop?e%g:Math.min(e,g);e=k.lerp(this._firstFrame,a,e/g);e=Math.floor(e);e!==this._index&&(this._index=e,a=d[this._index],a.loaded&&(d=a.image.width,g=a.image.height,this.width!==d&&(this.width=d),this.height!==g&&(this.height=g),this.fill=a,e>=this._lastFrame-1&&this._onLastFrame&&this._onLastFrame()))}else!this._flagIndex&&
this.fill instanceof c.Texture||(a=d[this._index],a.loaded&&(d=a.image.width,g=a.image.height,this.width!==d&&(this.width=d),this.height!==g&&(this.height=g)),this.fill=a);l.prototype._update.call(this);return this},flagReset:function(){this._flagTextures=this._flagFrameRate=!1;l.prototype.flagReset.call(this);return this}});h.MakeObservable(h.prototype)})(("undefined"!==typeof global?global:this).Two);
(function(c){function k(a,c){var d=a.parent;if(d===c)this.additions.push(a),this._flagAdditions=!0;else{if(d&&d.children.ids[a.id]){var e=h.indexOf(d.children,a);d.children.splice(e,1);e=h.indexOf(d.additions,a);0<=e?d.additions.splice(e,1):(d.subtractions.push(a),d._flagSubtractions=!0)}c?(a.parent=c,this.additions.push(a),this._flagAdditions=!0):(e=h.indexOf(this.additions,a),0<=e?this.additions.splice(e,1):(this.subtractions.push(a),this._flagSubtractions=!0),delete a.parent)}}var m=Math.min,l=
Math.max,h=c.Utils,d=function(){c.Utils.Collection.apply(this,arguments);Object.defineProperty(this,"_events",{value:{},enumerable:!1});this.ids={};this.on(c.Events.insert,this.attach);this.on(c.Events.remove,this.detach);d.prototype.attach.apply(this,arguments)};d.prototype=new c.Utils.Collection;d.prototype.constructor=d;h.extend(d.prototype,{attach:function(a){for(var c=0;c<a.length;c++)this.ids[a[c].id]=a[c];return this},detach:function(a){for(var c=0;c<a.length;c++)delete this.ids[a[c].id];return this}});
var e=c.Group=function(){c.Shape.call(this,!0);this._renderer.type="group";this.additions=[];this.subtractions=[];this.children=arguments};h.extend(e,{Children:d,InsertChildren:function(a){for(var c=0;c<a.length;c++)k.call(this,a[c],this)},RemoveChildren:function(a){for(var c=0;c<a.length;c++)k.call(this,a[c])},OrderChildren:function(a){this._flagOrder=!0},MakeObservable:function(a){var g=c.Path.Properties.slice(0),k=h.indexOf(g,"opacity");0<=k&&(g.splice(k,1),Object.defineProperty(a,"opacity",{enumerable:!0,
get:function(){return this._opacity},set:function(a){this._flagOpacity=this._opacity!=a;this._opacity=a}}));c.Shape.MakeObservable(a);e.MakeGetterSetters(a,g);Object.defineProperty(a,"children",{enumerable:!0,get:function(){return this._children},set:function(a){var g=h.bind(e.InsertChildren,this),f=h.bind(e.RemoveChildren,this),k=h.bind(e.OrderChildren,this);this._children&&this._children.unbind();this._children=new d(a);this._children.bind(c.Events.insert,g);this._children.bind(c.Events.remove,
f);this._children.bind(c.Events.order,k)}});Object.defineProperty(a,"mask",{enumerable:!0,get:function(){return this._mask},set:function(a){this._mask=a;this._flagMask=!0;a.clip||(a.clip=!0)}})},MakeGetterSetters:function(a,c){h.isArray(c)||(c=[c]);h.each(c,function(c){e.MakeGetterSetter(a,c)})},MakeGetterSetter:function(a,c){var d="_"+c;Object.defineProperty(a,c,{enumerable:!0,get:function(){return this[d]},set:function(a){this[d]=a;h.each(this.children,function(d){d[c]=a})}})}});h.extend(e.prototype,
c.Shape.prototype,{_flagAdditions:!1,_flagSubtractions:!1,_flagOrder:!1,_flagOpacity:!0,_flagMask:!1,_fill:"#fff",_stroke:"#000",_linewidth:1,_opacity:1,_visible:!0,_cap:"round",_join:"round",_miter:4,_closed:!0,_curved:!1,_automatic:!0,_beginning:0,_ending:1,_mask:null,clone:function(a){a=a||this.parent;var c=new e,d=h.map(this.children,function(a){return a.clone(c)});c.add(d);c.opacity=this.opacity;this.mask&&(c.mask=this.mask);c.translation.copy(this.translation);c.rotation=this.rotation;c.scale=
this.scale;a&&a.add(c);return c},toObject:function(){var a={children:[],translation:this.translation.toObject(),rotation:this.rotation,scale:this.scale,opacity:this.opacity,mask:this.mask?this.mask.toObject():null};h.each(this.children,function(c,d){a.children[d]=c.toObject()},this);return a},corner:function(){var a=this.getBoundingClientRect(!0),c={x:a.left,y:a.top};this.children.forEach(function(a){a.translation.subSelf(c)});return this},center:function(){var a=this.getBoundingClientRect(!0);a.centroid=
{x:a.left+a.width/2,y:a.top+a.height/2};this.children.forEach(function(c){c.isShape&&c.translation.subSelf(a.centroid)});return this},getById:function(a){var c=function(a,d){if(a.id===d)return a;if(a.children)for(var e=a.children.length;e--;){var f=c(a.children[e],d);if(f)return f}};return c(this,a)||null},getByClassName:function(a){var c=[],d=function(a,e){-1!=a.classList.indexOf(e)?c.push(a):a.children&&a.children.forEach(function(a){d(a,e)});return c};return d(this,a)},getByType:function(a){var d=
[],e=function(a,g){for(var f in a.children)a.children[f]instanceof g?d.push(a.children[f]):a.children[f]instanceof c.Group&&e(a.children[f],g);return d};return e(this,a)},add:function(a){a=a instanceof Array?a.slice():h.toArray(arguments);for(var c=0;c<a.length;c++)a[c]&&a[c].id&&this.children.push(a[c]);return this},remove:function(a){var c=this.parent;if(0>=arguments.length&&c)return c.remove(this),this;a=a instanceof Array?a.slice():h.toArray(arguments);for(c=0;c<a.length;c++)a[c]&&this.children.ids[a[c].id]&&
this.children.splice(h.indexOf(this.children,a[c]),1);return this},getBoundingClientRect:function(a){var c;this._update(!0);var d=Infinity,e=-Infinity,k=Infinity,v=-Infinity;this.children.forEach(function(f){/(linear-gradient|radial-gradient|gradient)/.test(f._renderer.type)||(c=f.getBoundingClientRect(a),h.isNumber(c.top)&&h.isNumber(c.left)&&h.isNumber(c.right)&&h.isNumber(c.bottom)&&(k=m(c.top,k),d=m(c.left,d),e=l(c.right,e),v=l(c.bottom,v)))},this);return{top:k,left:d,right:e,bottom:v,width:e-
d,height:v-k}},noFill:function(){this.children.forEach(function(a){a.noFill()});return this},noStroke:function(){this.children.forEach(function(a){a.noStroke()});return this},subdivide:function(){var a=arguments;this.children.forEach(function(c){c.subdivide.apply(c,a)});return this},flagReset:function(){this._flagAdditions&&(this.additions.length=0,this._flagAdditions=!1);this._flagSubtractions&&(this.subtractions.length=0,this._flagSubtractions=!1);this._flagOrder=this._flagMask=this._flagOpacity=
!1;c.Shape.prototype.flagReset.call(this);return this}});e.MakeObservable(e.prototype)})(("undefined"!==typeof global?global:this).Two);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (Object({"NODE_ENV":"production","BASE_URL":"/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name || value != null) {
      return true
    }
    return value
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      const self = super();
      self.attachShadow({ mode: 'open' });

      const wrapper = self._wrapper = new Vue({
        name: 'shadow-root',
        customElement: self,
        shadowRoot: self.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === self) {
            syncAttribute(self, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            self.childNodes
          ));
        }
      });
      observer.observe(self, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/runtime/api.js
var api = __webpack_require__("24fb");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=058581d4&scoped=true&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('about',{staticClass:"about"}),_c('div',{staticClass:"profile-pic"},[_c('flipper',{staticClass:"profile",scopedSlots:_vm._u([{key:"front",fn:function(){return [_c('profilepic')]},proxy:true},{key:"back",fn:function(){return [_c('contact')]},proxy:true}])})],1),_c('div',{staticClass:"workedu"},[_c('work-edu')],1),_c('div',{staticClass:"skills"},[_c('skills')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=058581d4&scoped=true&shadow

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}

// CONCATENATED MODULE: ./node_modules/vue-class-component/dist/vue-class-component.esm.js
/**
  * vue-class-component v7.2.6
  * (c) 2015-present Evan You
  * @license MIT
  */


function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function mixins() {
  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {
    Ctors[_key] = arguments[_key];
  }

  return vue_runtime_esm["a" /* default */].extend({
    mixins: Ctors
  });
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      Object.defineProperty(_this, key, {
        get: function get() {
          return vm[key];
        },
        set: function set(value) {
          vm[key] = value;
        },
        configurable: true
      });
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  if (false) {}

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof vue_runtime_esm["a" /* default */] ? superProto.constructor : vue_runtime_esm["a" /* default */];
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if (false) {}

    Object.defineProperty(Extended, key, descriptor);
  });
}

function vue_class_component_esm_Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

vue_class_component_esm_Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/* harmony default export */ var vue_class_component_esm = (vue_class_component_esm_Component);


// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Emit.js
var Emit_spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Code copied from Vue/src/shared/util.js
var Emit_hyphenateRE = /\B([A-Z])/g;
var Emit_hyphenate = function (str) { return str.replace(Emit_hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (_target, propertyKey, descriptor) {
        var key = Emit_hyphenate(propertyKey);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var emit = function (returnValue) {
                var emitName = event || key;
                if (returnValue === undefined) {
                    if (args.length === 0) {
                        _this.$emit(emitName);
                    }
                    else if (args.length === 1) {
                        _this.$emit(emitName, args[0]);
                    }
                    else {
                        _this.$emit.apply(_this, Emit_spreadArrays([emitName], args));
                    }
                }
                else {
                    args.unshift(returnValue);
                    _this.$emit.apply(_this, Emit_spreadArrays([emitName], args));
                }
            };
            var returnValue = original.apply(this, args);
            if (isPromise(returnValue)) {
                returnValue.then(emit);
            }
            else {
                emit(returnValue);
            }
            return returnValue;
        };
    };
}
function isPromise(obj) {
    return obj instanceof Promise || (obj && typeof obj.then === 'function');
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Inject.js

/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/provideInject.js
function needToProduceProvide(original) {
    return (typeof original !== 'function' ||
        (!original.managed && !original.managedReactive));
}
function produceProvide(original) {
    var provide = function () {
        var _this = this;
        var rv = typeof original === 'function' ? original.call(this) : original;
        rv = Object.create(rv || null);
        // set reactive services (propagates previous services if necessary)
        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});
        for (var i in provide.managed) {
            rv[provide.managed[i]] = this[i];
        }
        var _loop_1 = function (i) {
            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`
            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {
                enumerable: true,
                configurable: true,
                get: function () { return _this[i]; },
            });
        };
        var this_1 = this;
        for (var i in provide.managedReactive) {
            _loop_1(i);
        }
        return rv;
    };
    provide.managed = {};
    provide.managedReactive = {};
    return provide;
}
/** Used for keying reactive provide/inject properties */
var reactiveInjectKey = '__reactiveInject__';
function inheritInjected(componentOptions) {
    // inject parent reactive services (if any)
    if (!Array.isArray(componentOptions.inject)) {
        componentOptions.inject = componentOptions.inject || {};
        componentOptions.inject[reactiveInjectKey] = {
            from: reactiveInjectKey,
            default: {},
        };
    }
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js


/**
 * decorator of a reactive inject
 * @param from key
 * @return PropertyDecorator
 */
function InjectReactive(options) {
    return createDecorator(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            var fromKey_1 = !!options ? options.from || options : key;
            var defaultVal_1 = (!!options && options.default) || undefined;
            if (!componentOptions.computed)
                componentOptions.computed = {};
            componentOptions.computed[key] = function () {
                var obj = this[reactiveInjectKey];
                return obj ? obj[fromKey_1] : defaultVal_1;
            };
            componentOptions.inject[reactiveInjectKey] = reactiveInjectKey;
        }
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/helpers/metadata.js
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            !options.hasOwnProperty('type') &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Model.js


/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
            componentOptions.model = { prop: k, event: event || k };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ModelSync.js


/**
 * decorator of synced model and prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function ModelSync(propName, event, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            componentOptions.model = { prop: propName, event: event || k };
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    // @ts-ignore
                    this.$emit(event, value);
                },
            };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Prop.js


/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/PropSync.js


/**
 * decorator of a synced prop
 * @param propName the name to interface with from outside, must be different from decorated property
 * @param options the options for the synced prop
 * @return PropertyDecorator | void
 */
function PropSync(propName, options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            ;
            (componentOptions.props || (componentOptions.props = {}))[propName] = options;
            (componentOptions.computed || (componentOptions.computed = {}))[k] = {
                get: function () {
                    return this[propName];
                },
                set: function (value) {
                    this.$emit("update:" + propName, value);
                },
            };
        })(target, key);
    };
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Provide.js


/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managed[k] = key || k;
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js


/**
 * decorator of a reactive provide
 * @param key key
 * @return PropertyDecorator | void
 */
function ProvideReactive(key) {
    return createDecorator(function (componentOptions, k) {
        var provide = componentOptions.provide;
        inheritInjected(componentOptions);
        if (needToProduceProvide(provide)) {
            provide = componentOptions.provide = produceProvide(provide);
        }
        provide.managedReactive[k] = key || k;
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Ref.js

/**
 * decorator of a ref prop
 * @param refKey the ref key defined in template
 */
function Ref(refKey) {
    return createDecorator(function (options, key) {
        options.computed = options.computed || {};
        options.computed[key] = {
            cache: false,
            get: function () {
                return this.$refs[refKey || key];
            },
        };
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/VModel.js

/**
 * decorator for capturings v-model binding to component
 * @param options the options for the prop
 */
function VModel(options) {
    if (options === void 0) { options = {}; }
    var valueKey = 'value';
    return createDecorator(function (componentOptions, key) {
        ;
        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;
        (componentOptions.computed || (componentOptions.computed = {}))[key] = {
            get: function () {
                return this[valueKey];
            },
            set: function (value) {
                this.$emit('input', value);
            },
        };
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/decorators/Watch.js

/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return createDecorator(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        var watch = componentOptions.watch;
        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {
            watch[path] = [watch[path]];
        }
        else if (typeof watch[path] === 'undefined') {
            watch[path] = [];
        }
        watch[path].push({ handler: handler, deep: deep, immediate: immediate });
    });
}

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/index.js
/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */
/// <reference types='reflect-metadata'/>
















// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/profilepic.vue?vue&type=template&id=2c8ab5a7&scoped=true&
var profilepicvue_type_template_id_2c8ab5a7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"profilepic",attrs:{"src":__webpack_require__("c6e0")}})}
var profilepicvue_type_template_id_2c8ab5a7_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/profilepic.vue?vue&type=template&id=2c8ab5a7&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/profilepic.vue?vue&type=script&lang=ts&


let profilepicvue_type_script_lang_ts_profilepic = class profilepic extends vue_runtime_esm["a" /* default */] {};

__decorate([Prop()], profilepicvue_type_script_lang_ts_profilepic.prototype, "msg", void 0);

profilepicvue_type_script_lang_ts_profilepic = __decorate([vue_class_component_esm], profilepicvue_type_script_lang_ts_profilepic);
/* harmony default export */ var profilepicvue_type_script_lang_ts_ = (profilepicvue_type_script_lang_ts_profilepic);
// CONCATENATED MODULE: ./src/components/profilepic.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_profilepicvue_type_script_lang_ts_ = (profilepicvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/profilepic.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("f02f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  components_profilepicvue_type_script_lang_ts_,
  profilepicvue_type_template_id_2c8ab5a7_scoped_true_render,
  profilepicvue_type_template_id_2c8ab5a7_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "2c8ab5a7",
  null
  ,true
)

/* harmony default export */ var components_profilepic = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/contact.vue?vue&type=template&id=3292255c&scoped=true&
var contactvue_type_template_id_3292255c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var contactvue_type_template_id_3292255c_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"contact"},[_c('div',{staticClass:"contact-segment"},[_vm._v(" Tobias Feldballe ")]),_c('div',{staticClass:"contact-segment"},[_vm._v(" +45 51968275 ")]),_c('div',{staticClass:"contact-segment"},[_vm._v(" tobias@osandweb.dk ")])])}]


// CONCATENATED MODULE: ./src/components/contact.vue?vue&type=template&id=3292255c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/contact.vue?vue&type=script&lang=ts&


let contactvue_type_script_lang_ts_contact = class contact extends vue_runtime_esm["a" /* default */] {};
contactvue_type_script_lang_ts_contact = __decorate([vue_class_component_esm], contactvue_type_script_lang_ts_contact);
/* harmony default export */ var contactvue_type_script_lang_ts_ = (contactvue_type_script_lang_ts_contact);
// CONCATENATED MODULE: ./src/components/contact.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_contactvue_type_script_lang_ts_ = (contactvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/contact.vue



function contact_injectStyles (context) {
  
  var style0 = __webpack_require__("7fd8")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var contact_component = normalizeComponent(
  components_contactvue_type_script_lang_ts_,
  contactvue_type_template_id_3292255c_scoped_true_render,
  contactvue_type_template_id_3292255c_scoped_true_staticRenderFns,
  false,
  contact_injectStyles,
  "3292255c",
  null
  ,true
)

/* harmony default export */ var components_contact = (contact_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/flipper.vue?vue&type=template&id=95e3aa6a&scoped=true&
var flippervue_type_template_id_95e3aa6a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flip-card"},[_c('div',{staticClass:"flip-card-inner"},[_c('div',{staticClass:"flip-card-front"},[_vm._t("front")],2),_c('div',{staticClass:"flip-card-back"},[_vm._t("back")],2)])])}
var flippervue_type_template_id_95e3aa6a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/global/flipper.vue?vue&type=template&id=95e3aa6a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/global/flipper.vue?vue&type=script&lang=ts&


let flippervue_type_script_lang_ts_flipper = class flipper extends vue_runtime_esm["a" /* default */] {};
flippervue_type_script_lang_ts_flipper = __decorate([vue_class_component_esm], flippervue_type_script_lang_ts_flipper);
/* harmony default export */ var flippervue_type_script_lang_ts_ = (flippervue_type_script_lang_ts_flipper);
// CONCATENATED MODULE: ./src/components/global/flipper.vue?vue&type=script&lang=ts&
 /* harmony default export */ var global_flippervue_type_script_lang_ts_ = (flippervue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/global/flipper.vue



function flipper_injectStyles (context) {
  
  var style0 = __webpack_require__("0698")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var flipper_component = normalizeComponent(
  global_flippervue_type_script_lang_ts_,
  flippervue_type_template_id_95e3aa6a_scoped_true_render,
  flippervue_type_template_id_95e3aa6a_scoped_true_staticRenderFns,
  false,
  flipper_injectStyles,
  "95e3aa6a",
  null
  ,true
)

/* harmony default export */ var global_flipper = (flipper_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/about.vue?vue&type=template&id=bcc1e63a&scoped=true&
var aboutvue_type_template_id_bcc1e63a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var aboutvue_type_template_id_bcc1e63a_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v(" About me ")]),_c('p',[_vm._v(" I am primarily a backend developer, interested in GoLang, MongoDB, ElasticSearch, MySQL and information security. My proudest moment was summarised by a penetration tester, on a former project: ")]),_c('div',{staticClass:"quote"},[_vm._v(" Great work resolving all these problems so quickly, I have never seen another client fixing so many problems as quickly as you did. You obviously really care about securing this application. Kind Regards Penetration Tester, NCCGroup ")])])}]


// CONCATENATED MODULE: ./src/components/about.vue?vue&type=template&id=bcc1e63a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/about.vue?vue&type=script&lang=ts&


let aboutvue_type_script_lang_ts_about = class about extends vue_runtime_esm["a" /* default */] {};
aboutvue_type_script_lang_ts_about = __decorate([vue_class_component_esm], aboutvue_type_script_lang_ts_about);
/* harmony default export */ var aboutvue_type_script_lang_ts_ = (aboutvue_type_script_lang_ts_about);
// CONCATENATED MODULE: ./src/components/about.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_aboutvue_type_script_lang_ts_ = (aboutvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/about.vue



function about_injectStyles (context) {
  
  var style0 = __webpack_require__("1628")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var about_component = normalizeComponent(
  components_aboutvue_type_script_lang_ts_,
  aboutvue_type_template_id_bcc1e63a_scoped_true_render,
  aboutvue_type_template_id_bcc1e63a_scoped_true_staticRenderFns,
  false,
  about_injectStyles,
  "bcc1e63a",
  null
  ,true
)

/* harmony default export */ var components_about = (about_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/workEdu.vue?vue&type=template&id=18be15c8&scoped=true&
var workEduvue_type_template_id_18be15c8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var workEduvue_type_template_id_18be15c8_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"workedu"},[_c('h2',[_vm._v("Work")]),_c('table',{staticClass:"styled-table"},[_c('tbody',[_c('tr',[_c('td',{staticClass:"left-col"},[_vm._v("2020-Now")]),_c('td',{staticClass:"right-col"},[_vm._v(" Jumpstory, Software developer "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Python")]),_c('li',[_vm._v("MySql")]),_c('li',[_vm._v("Laravel/PHP8")]),_c('li',[_vm._v("Vue (Typescript, Javascript)")]),_c('li',[_vm._v("Machine learning")]),_c('li',[_vm._v("ElasticSearch")]),_c('li',[_vm._v("Aws (Cloudfront, Lambda, S3, EC2)")]),_c('li',[_vm._v("Docker")])])])])]),_c('tr',[_c('td',{staticClass:"left-col"},[_vm._v("2020")]),_c('td',{staticClass:"right-col"},[_vm._v(" Laban, Software developer "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Python")]),_c('li',[_vm._v("Javascript")]),_c('li',[_vm._v("Data mining")])])])])]),_c('tr',{staticClass:"second-row"},[_c('td',{staticClass:"left-col"},[_vm._v("2020-2021")]),_c('td',{staticClass:"right-col"},[_vm._v(" Tiki-media "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Full stack developer")]),_c('li',[_vm._v("Frontend: Ionic/Angular")]),_c('li',[_vm._v("Backend: GoLang")])])])])]),_c('tr',[_c('td',{staticClass:"left-col"},[_vm._v("2019-2020")]),_c('td',{staticClass:"right-col"},[_vm._v(" Intellifinder, Consultant, Software developer "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Security")]),_c('li',[_vm._v("DevOps")]),_c('li',[_vm._v("CodeIgniter/PHP7")]),_c('li',[_vm._v("Angular (Typescript, Javascript)")]),_c('li',[_vm._v("MongoDB optimization")]),_c('li',[_vm._v("OAuth2/OpenID Connect")]),_c('li',[_vm._v("Docker/Kubernetes")])])])])]),_c('tr',[_c('td',{staticClass:"left-col"},[_vm._v("2018-Now")]),_c('td',{staticClass:"right-col"},[_vm._v(" Kluboplevelser,CTO, Developer "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Python")]),_c('li',[_vm._v("Django")]),_c('li',[_vm._v("MySQL")]),_c('li',[_vm._v("Javascript")]),_c('li',[_vm._v("Docker/Kubernetes")])])])])]),_c('tr',{staticClass:"second-row"},[_c('td',{staticClass:"left-col"},[_vm._v("2014-Now")]),_c('td',{staticClass:"right-col"},[_vm._v(" Tellie.dk, Software programmer / co-owner "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Project lead")]),_c('li',[_vm._v("Python")]),_c('li',[_vm._v("Golang")]),_c('li',[_vm._v("Docker/Kubernetes")]),_c('li',[_vm._v("DevOps")]),_c('li',[_vm._v("Elastic Search")]),_c('li',[_vm._v("C++")])])])])]),_c('tr',[_c('td',{staticClass:"left-col"},[_vm._v("2010-2014")]),_c('td',{staticClass:"right-col"},[_vm._v(" Virtuad, CTO, programmer and prototype developer "),_c('div',{staticClass:"additional-info"},[_c('ul',[_c('li',[_vm._v("Project development and leading")]),_c('li',[_vm._v("OpenCV Programming (in C++)")])])])])])])])])}]


// CONCATENATED MODULE: ./src/components/workEdu.vue?vue&type=template&id=18be15c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/workEdu.vue?vue&type=script&lang=ts&


let workEduvue_type_script_lang_ts_WorkEdu = class WorkEdu extends vue_runtime_esm["a" /* default */] {};
workEduvue_type_script_lang_ts_WorkEdu = __decorate([vue_class_component_esm({
  components: {}
})], workEduvue_type_script_lang_ts_WorkEdu);
/* harmony default export */ var workEduvue_type_script_lang_ts_ = (workEduvue_type_script_lang_ts_WorkEdu);
// CONCATENATED MODULE: ./src/components/workEdu.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_workEduvue_type_script_lang_ts_ = (workEduvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/workEdu.vue



function workEdu_injectStyles (context) {
  
  var style0 = __webpack_require__("2087")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var workEdu_component = normalizeComponent(
  components_workEduvue_type_script_lang_ts_,
  workEduvue_type_template_id_18be15c8_scoped_true_render,
  workEduvue_type_template_id_18be15c8_scoped_true_staticRenderFns,
  false,
  workEdu_injectStyles,
  "18be15c8",
  null
  ,true
)

/* harmony default export */ var workEdu = (workEdu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f9cbf9fe-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/skills.vue?vue&type=template&id=ab662326&
var skillsvue_type_template_id_ab662326_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h2',[_vm._v("Skills")]),_c('p',[_vm._v(" I have designed this chart from scratch with two.js. As you can quite clearly see, I have rated my design skills to be a rock solid 1 on the chart.! ")]),_c('button',{on:{"click":function($event){return _vm.resize()}}},[_c('div',{ref:"skills",attrs:{"id":"skills"}})])])}
var skillsvue_type_template_id_ab662326_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/skills.vue?vue&type=template&id=ab662326&

// EXTERNAL MODULE: ./node_modules/twojs-ts/two.js
var two = __webpack_require__("384f");
var two_default = /*#__PURE__*/__webpack_require__.n(two);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/skills.vue?vue&type=script&lang=ts&



let skillsvue_type_script_lang_ts_skills = class skills extends vue_runtime_esm["a" /* default */] {
  constructor() {
    super(...arguments);
    this.skillWidth = 900;
    this.skillHeight = 600;
    this.FiverSkills = [{
      name: "Typescript",
      experience: 5
    }, {
      name: "Communication",
      experience: 5
    }, {
      name: "TDD",
      experience: 5
    }];
    this.FourSkills = [{
      name: "Python",
      experience: 4
    }, {
      name: "GoLang",
      experience: 4
    }, {
      name: "Angular",
      experience: 4
    }, {
      name: "Ionic",
      experience: 4
    }, {
      name: "HTML5",
      experience: 4
    }, {
      name: "Docker",
      experience: 4
    }];
    this.ThreeSkills = [{
      name: "PHP8",
      experience: 3
    }, {
      name: "Mysql",
      experience: 3
    }, {
      name: "AWS Lambda",
      experience: 3
    }, {
      name: "AWS S3",
      experience: 3
    }, {
      name: "Elastic Search",
      experience: 3
    }, {
      name: "CSS3",
      experience: 3
    }, {
      name: "Flask",
      experience: 3
    }];
    this.TwoSkills = [{
      name: "Django",
      experience: 2
    }, {
      name: "C#",
      experience: 2
    }, {
      name: "Kubernetes",
      experience: 2
    }, {
      name: "AWS Cloudfront",
      experience: 2
    }];
    this.OneSkills = [{
      name: "Design",
      experience: 1
    }, {
      name: ".NET Core",
      experience: 1
    }];
  }

  mounted() {
    if (window.innerWidth < 900) {
      this.skillWidth = window.innerWidth * 0.9;
    }

    const elem = this.$refs.skills;
    this.two = new two_default.a({
      width: this.skillWidth,
      height: this.skillHeight
    }).appendTo(elem);
    this.createCoordinateSystem();
    this.createSkills();
    this.two.update();
  }

  createCoordinateSystem() {
    const background = this.two.makeRectangle(900 / 2, this.skillHeight / 2, 900, this.skillHeight);
    background.linewidth = 0;
    background.fill = "#f3f3f3";
    const yAxis = this.two.makeLine(50, 0, 50, this.skillHeight);
    yAxis.linewidth = 2;

    for (let i = 1; i < 6; i++) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const text = this.two.makeText(i.toString(), 25, this.skillHeight - i * 100, null);
      text.size = 20;
    }
  }

  createSkills() {
    const allSkills = [this.FiverSkills, this.FourSkills, this.ThreeSkills, this.TwoSkills, this.OneSkills];
    allSkills.forEach((skills, upperIndex) => {
      setTimeout(() => {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            this.createSkill(100 * (index + 1), this.skillHeight - skill.experience * 100, skill.name);
          }, 600 * index);
        });
      }, 900 * upperIndex);
    });
  }

  createSkill(x, y, skillName) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const text = this.two.makeText(skillName, 0, 0, null);
    text.size = 20;
    text.rotation = 0.25 * Math.PI;
    const circle = this.two.makeCircle(0, 0, 45);
    circle.fill = "#3880ff";
    circle.opacity = 0.2; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    const group = this.two.makeGroup(circle, text);
    group.translation.set(x, y);
    group.scale = 0; // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    this.two.bind("update", frameCount => {
      group.scale += (1 - group.scale) * 0.03;
    }).play();
  }

  resize() {
    if (window.innerWidth < 900) {
      this.two.width = 900;
    }

    document.documentElement.requestFullscreen();
    screen.orientation.lock("landscape");
  }

};

__decorate([Prop()], skillsvue_type_script_lang_ts_skills.prototype, "msg", void 0);

skillsvue_type_script_lang_ts_skills = __decorate([vue_class_component_esm], skillsvue_type_script_lang_ts_skills);
/* harmony default export */ var skillsvue_type_script_lang_ts_ = (skillsvue_type_script_lang_ts_skills);
// CONCATENATED MODULE: ./src/components/skills.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_skillsvue_type_script_lang_ts_ = (skillsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/skills.vue



function skills_injectStyles (context) {
  
  
}

/* normalize component */

var skills_component = normalizeComponent(
  components_skillsvue_type_script_lang_ts_,
  skillsvue_type_template_id_ab662326_render,
  skillsvue_type_template_id_ab662326_staticRenderFns,
  false,
  skills_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ var components_skills = (skills_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--14-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=ts&shadow








let Appvue_type_script_lang_ts_shadow_App = class App extends vue_runtime_esm["a" /* default */] {};
Appvue_type_script_lang_ts_shadow_App = __decorate([vue_class_component_esm({
  components: {
    profilepic: components_profilepic,
    contact: components_contact,
    flipper: global_flipper,
    about: components_about,
    WorkEdu: workEdu,
    skills: components_skills
  }
})], Appvue_type_script_lang_ts_shadow_App);
/* harmony default export */ var Appvue_type_script_lang_ts_shadow = (Appvue_type_script_lang_ts_shadow_App);
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=ts&shadow
 /* harmony default export */ var src_Appvue_type_script_lang_ts_shadow = (Appvue_type_script_lang_ts_shadow); 
// CONCATENATED MODULE: ./src/App.vue?shadow



function Appshadow_injectStyles (context) {
  
  var style0 = __webpack_require__("b9a0")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Appshadow_component = normalizeComponent(
  src_Appvue_type_script_lang_ts_shadow,
  render,
  staticRenderFns,
  false,
  Appshadow_injectStyles,
  "058581d4",
  null
  ,true
)

/* harmony default export */ var Appshadow = (Appshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('vue-resume', vue_wc_wrapper(vue_runtime_esm["a" /* default */], Appshadow))

/***/ }),

/***/ "66da":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".styled-table[data-v-18be15c8]{border-collapse:collapse;margin:25px 0;font-size:.9em;min-width:100%;box-shadow:0 0 20px rgba(0,0,0,.15);font-weight:700}.styled-table td[data-v-18be15c8],.styled-table th[data-v-18be15c8]{padding:12px 15px;filter:drop-shadow(15px 10px 4px #c2c2c2)}.styled-table tbody tr[data-v-18be15c8]{border-bottom:1px solid #ddd;color:#009879}.styled-table tbody tr[data-v-18be15c8]:nth-of-type(2n){background-color:#f3f3f3}.styled-table tbody tr[data-v-18be15c8]:last-of-type{border-bottom:2px solid #009879}td[data-v-18be15c8]{vertical-align:top;table-layout:fixed;overflow:hidden;word-wrap:break-word}td .left-col[data-v-18be15c8]{width:30%}td .right-col[data-v-18be15c8]{width:70%}.additional-info[data-v-18be15c8]{display:none}td:active .additional-info[data-v-18be15c8],td:hover .additional-info[data-v-18be15c8]{overflow:hidden;display:inline;word-wrap:break-word;display:block}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e25b");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2817074c", content, shadowRoot)
};

/***/ }),

/***/ "77ec":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".quote[data-v-bcc1e63a]{text-decoration:underline}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7fd4":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("77ec");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("7980cd3e", content, shadowRoot)
};

/***/ }),

/***/ "7fd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_3292255c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7333");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_3292255c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_3292255c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_3292255c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_3292255c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8e42":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("66da");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0a43bf5c", content, shadowRoot)
};

/***/ }),

/***/ "91f7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("06a9");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("d8069562", content, shadowRoot)
};

/***/ }),

/***/ "952a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("caef");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("00c0f452", content, shadowRoot)
};

/***/ }),

/***/ "b9a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_058581d4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("91f7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_058581d4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_058581d4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_058581d4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_058581d4_scoped_true_lang_css_shadow__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "c6e0":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/profilepic.970aeec0.jpeg";

/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "caef":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".profilepic[data-v-2c8ab5a7]{width:100%;filter:drop-shadow(15px 10px 4px #c2c2c2)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e25b":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contact[data-v-3292255c]{width:100%;margin:10%;height:100%}.contact-segment[data-v-3292255c]{margin-top:15px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e2bd":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("efdf");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("289673c6", content, shadowRoot)
};

/***/ }),

/***/ "efdf":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flip-card[data-v-95e3aa6a]{background-color:transparent;border:1px solid #f1f1f1;perspective:1000px}.flip-card-inner[data-v-95e3aa6a]{position:relative;width:100%;height:100%;text-align:left;transition:transform .8s;transform-style:preserve-3d}.flip-card:active .flip-card-inner[data-v-95e3aa6a],.flip-card:hover .flip-card-inner[data-v-95e3aa6a]{transform:rotateY(180deg)}.flip-card-back[data-v-95e3aa6a],.flip-card-front[data-v-95e3aa6a]{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.flip-card-front[data-v-95e3aa6a]{color:#000}.flip-card-back[data-v-95e3aa6a]{color:#000;background-color:#fff;transform:rotateY(180deg)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "f02f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilepic_vue_vue_type_style_index_0_id_2c8ab5a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("952a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilepic_vue_vue_type_style_index_0_id_2c8ab5a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilepic_vue_vue_type_style_index_0_id_2c8ab5a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilepic_vue_vue_type_style_index_0_id_2c8ab5a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profilepic_vue_vue_type_style_index_0_id_2c8ab5a7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

/******/ });
//# sourceMappingURL=vue-resume.js.map