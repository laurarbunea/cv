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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export getCookie */
/* harmony export (immutable) */ __webpack_exports__["d"] = querySelectArray;
/* unused harmony export debounce */
/* unused harmony export uuid */
/* harmony export (immutable) */ __webpack_exports__["c"] = tabFocus;
/* unused harmony export addYouTubePlayerAPI */
/* unused harmony export getWidth */
/* unused harmony export getHeight */
/* unused harmony export getEventTarget */
/* unused harmony export IS_IE11 */
/* harmony export (immutable) */ __webpack_exports__["a"] = initFeatureDetection;
/* harmony export (immutable) */ __webpack_exports__["b"] = initFlexboxSupport;
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        /* eslint-disable */
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();

            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + '=') {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
        /* eslint-enable */
    }

    return cookieValue;
}

function querySelectArray(selector) {
    var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    return Array.prototype.slice.call(el.querySelectorAll(selector));
}

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var _this = this,
        _arguments = arguments;

    var timeout = void 0;
    return function () {
        var self = _this;
        // eslint-disable-next-line prefer-rest-params
        var args = _arguments;
        var later = function later() {
            timeout = null;
            if (!immediate) func.apply(self, args);
        };

        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(self, args);
    };
}

// Generates a UUID
function uuid() {
    /* eslint-disable */
    var i = void 0;
    var random = void 0;
    var uuidGen = '';
    for (i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuidGen += '-';
        }

        uuidGen += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
    }

    return uuidGen;
    /* eslint-enable */
}

// Remove CSS outlines in an accessible manner
// Make sure you have an empty style tag that
// lives after your main style sheet
function tabFocus() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.accessTab';

    var tabFocusElmt = document.querySelector(selector);
    window.addEventListener('mousedown', function () {
        tabFocusElmt.innerHTML = '';
    });

    window.addEventListener('keydown', function (e) {
        var isTabKey = e.keyCode === 9;
        if (isTabKey) {
            tabFocusElmt.innerHTML = 'a:focus { outline: solid 3px #6cc6ee; }';
        }
    });
}

// Adds the YouTube Player API
function addYouTubePlayerAPI() {
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Returns the width of an element.
function getWidth(elem) {
    return elem.offsetWidth || elem.clientWidth;
}

// Returns the height of an element.
function getHeight(elem) {
    return elem.offsetHeight || elem.clientHeight;
}

// Returns event target, supporting IE6-8
function getEventTarget(event) {
    if (event) {
        return event.target || event.srcElement;
    }
    return false;
}

var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;

function initFeatureDetection() {
    var touchClass = 'ontouchstart' in window ? 'touch' : 'no-touch';
    document.documentElement.className = document.documentElement.className + ' ' + touchClass;

    if (IS_IE11) {
        document.documentElement.className = document.documentElement.className + ' ie11';
    }
}

function initFlexboxSupport() {
    var docStyles = document.documentElement.style;
    var hasFlexbox = 'flexWrap' in docStyles || 'WebkitFlexWrap' in docStyles || 'msFlexWrap' in docStyles;
    document.documentElement.className += hasFlexbox ? ' flexbox' : ' no-flexbox';
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(11);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quicktube__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_collapse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_tabs__ = __webpack_require__(8);






var IS_IE11 = !window.ActiveXObject && 'ActiveXObject' in window;

var site = {
    /**
     * Initialises the site's modules.
     * Each module defines its own init function, this is just the glue.
     */
    init: function init() {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* initFeatureDetection */])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* initFlexboxSupport */])();
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* tabFocus */])();
        __WEBPACK_IMPORTED_MODULE_2__components_collapse__["a" /* default */].init();
        __WEBPACK_IMPORTED_MODULE_3__components_tabs__["a" /* default */].init();
        __WEBPACK_IMPORTED_MODULE_0_quicktube__["a" /* default */].init();

        if (IS_IE11) {
            document.documentElement.className = document.documentElement.className + ' ie11';
        }
    }
};

site.init();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is automatically included in the JS bundle.
 * Don't import it manually.
 */
/* eslint-disable global-require */

// It will use the native implementation if it's present and isn't buggy.
Object.assign = __webpack_require__(20);

__webpack_require__(9);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);


var ACTIVE_CLASS = 'collapse--in';
var ACTIVE_CLASS_EXIT = 'collapse--exit';

/* harmony default export */ __webpack_exports__["a"] = ({
    init: function init() {
        var _this = this;

        this.triggers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* querySelectArray */])('[data-collapse-trigger]');

        if (this.triggers.length > 0) {
            this.triggers.forEach(function (trigger) {
                trigger.addEventListener('click', _this.handleClick.bind(_this, trigger));
            });

            if (location.hash !== '#' && !location.hash.match(/^#+$/) && location.hash) {
                var el = document.querySelector(location.hash);

                if (el) {
                    el.classList.add(ACTIVE_CLASS);
                    this.toggleAriaStates(true, el);
                }

                if (location.hash === '#__debug__') {
                    this.triggers.forEach(function (trigger) {
                        var href = trigger.getAttribute('href');
                        _this.openContent(document.querySelector(href));
                    });
                }
            }
        }
    },
    handleTransition: function handleTransition(container) {
        container.classList.add(ACTIVE_CLASS_EXIT);

        var onEndTransition = function onEndTransition() {
            container.removeEventListener('animationend', onEndTransition);
            container.classList.remove(ACTIVE_CLASS_EXIT);
        };

        container.addEventListener('animationend', onEndTransition);
    },
    openContent: function openContent(item) {
        item.classList.add(ACTIVE_CLASS);
        this.toggleAriaStates(true, item);
    },
    closeContent: function closeContent(item) {
        this.toggleAriaStates(false, item);
        item.classList.add(ACTIVE_CLASS_EXIT);
        item.classList.remove(ACTIVE_CLASS);

        this.handleTransition(item);
    },
    handleClick: function handleClick(trigger, e) {
        var href = trigger.getAttribute('href');
        var container = document.querySelector(href);

        e.preventDefault();

        if ('history' in window) {
            history.replaceState({}, '', href);
        }

        if (container.classList.contains(ACTIVE_CLASS)) {
            this.closeContent(container);
        } else {
            this.openContent(container);
        }
    },
    toggleAriaStates: function toggleAriaStates(active, item) {
        var content = item.querySelector('[data-collapse-content]');
        var trigger = item.querySelector('[data-collapse-trigger]');
        var slug = item.id.replace('href-', '');

        if (content) {
            trigger.setAttribute('aria-controls', 'control-' + slug);
            content.setAttribute('aria-labelledby', 'label-' + slug);

            trigger.setAttribute('aria-expanded', active);
            content.setAttribute('aria-hidden', !active);
        }
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var TRIGGER_ACTIVE_CLASS = 'tabs__btn--active';
var HIDE_CONTENT_CLASS = 'tabs__content--hidden';

var KEYCODE = {
    RIGHT: 39,
    LEFT: 37
};

var showActiveContent = function showActiveContent(triggerEl, tabContent) {
    triggerEl.classList.add(TRIGGER_ACTIVE_CLASS);
    triggerEl.setAttribute('aria-expanded', true);
    tabContent.classList.remove(HIDE_CONTENT_CLASS);
};

var Tabs = function () {
    function Tabs(tabGroup) {
        var _this = this;

        _classCallCheck(this, Tabs);

        this.tabs = tabGroup;
        this.tabTriggers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* querySelectArray */])('[data-tab-trigger]', this.tabs);
        this.tabContents = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* querySelectArray */])('[data-tab-content]', this.tabs);

        this.onClick = this.onClick.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
        this.addAriaAttributes = this.addAriaAttributes.bind(this);
        this.resetActiveStates = this.resetActiveStates.bind(this);

        this.addAriaAttributes();

        this.tabTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', _this.onClick);
            trigger.addEventListener('keydown', _this.onKeydown);
        });

        var activeTrigger = this.tabTriggers[0];
        var activeContents = this.tabContents[0];

        // Not ideal if there are duplicated ids on one page. Will open both blocks of content from the one hash
        // This is an edge case and an adequate solution since we don't have unique ids.
        if (window.location.hash) {
            var locationHashEl = this.tabs.querySelector(window.location.hash);
            var locationHashTrigger = this.tabs.querySelector('[href=\'' + window.location.hash + '\']');

            if (locationHashEl) {
                activeTrigger = locationHashTrigger;
                activeContents = locationHashEl;
            }
        }

        this.resetActiveStates();
        showActiveContent(activeTrigger, activeContents);
    }

    _createClass(Tabs, [{
        key: 'onClick',
        value: function onClick(event) {
            var trigger = event.target.closest('[data-tab-trigger]');
            var href = trigger.getAttribute('href');
            event.preventDefault();
            event.stopPropagation();

            history.replaceState({}, '', href);

            this.tabTriggers.filter(function (t) {
                return t !== trigger;
            }).forEach(function (t) {
                return t.classList.remove(TRIGGER_ACTIVE_CLASS);
            });

            if (!trigger.classList.contains(TRIGGER_ACTIVE_CLASS)) {
                var tabContentItem = this.tabs.querySelector(href);
                this.resetActiveStates();
                showActiveContent(trigger, tabContentItem);
            }
        }
    }, {
        key: 'onKeydown',
        value: function onKeydown(event) {
            switch (event.keyCode) {
                case KEYCODE.RIGHT:
                    this.handleArrowKeyPress(event.target.nextElementSibling);
                    break;
                case KEYCODE.LEFT:
                    this.handleArrowKeyPress(event.target.previousElementSibling);
                    break;
                default:
                    break;
            }
        }
    }, {
        key: 'handleArrowKeyPress',
        value: function handleArrowKeyPress(sibling) {
            var _this2 = this;

            // Function receives a read only sibling node so need to grab matching
            // element from stored triggers in order to handle display toggling
            this.tabTriggers.forEach(function (trigger) {
                if (trigger === sibling) {
                    var href = trigger.getAttribute('href');
                    _this2.resetActiveStates();
                    showActiveContent(trigger, _this2.tabs.querySelector(href));
                    trigger.focus();
                }
            });
        }
    }, {
        key: 'addAriaAttributes',
        value: function addAriaAttributes() {
            var _this3 = this;

            this.tabTriggers.forEach(function (trigger) {
                var href = trigger.getAttribute('href');
                var controlId = href.replace('#', '');
                trigger.setAttribute('role', 'tab');
                trigger.setAttribute('aria-controls', controlId);

                if (trigger.classList.contains(TRIGGER_ACTIVE_CLASS)) {
                    var tabContentItem = _this3.tabs.querySelector(href);
                    showActiveContent(trigger, tabContentItem);
                } else {
                    trigger.setAttribute('aria-expanded', false);
                }
            });

            this.tabContents.forEach(function (content) {
                content.setAttribute('role', 'tabpanel');
            });
        }
    }, {
        key: 'resetActiveStates',
        value: function resetActiveStates() {
            this.tabTriggers.forEach(function (trigger) {
                trigger.classList.remove(TRIGGER_ACTIVE_CLASS);
                trigger.setAttribute('aria-expanded', false);
            });

            this.tabContents.forEach(function (content) {
                content.classList.add(HIDE_CONTENT_CLASS);
            });
        }
    }]);

    return Tabs;
}();

var tabs = {
    init: function init() {
        var tabGroups = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["d" /* querySelectArray */])('[data-tabs]');

        return tabGroups.map(function (tabGroup) {
            return new Tabs(tabGroup);
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (tabs);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// element-closest | CC0-1.0 | github.com/jonathantneal/closest

(function (ElementProto) {
	if (typeof ElementProto.matches !== 'function') {
		ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
			var element = this;
			var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
			var index = 0;

			while (elements[index] && elements[index] !== element) {
				++index;
			}

			return Boolean(elements[index]);
		};
	}

	if (typeof ElementProto.closest !== 'function') {
		ElementProto.closest = function closest(selector) {
			var element = this;

			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}

				element = element.parentNode;
			}

			return null;
		};
	}
})(window.Element.prototype);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2),
    getRawTag = __webpack_require__(12),
    objectToString = __webpack_require__(13);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(2);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    now = __webpack_require__(17),
    toNumber = __webpack_require__(19);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(10),
    isObjectLike = __webpack_require__(15);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(3);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(14),
    isObject = __webpack_require__(1);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1),
    isSymbol = __webpack_require__(16);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_throttle__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_throttle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_throttle__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var KEY_CODES = {
    ENTER: 13
};

var TIMEOUT_DELAY = 10000;
var YOUTUBE_API = 'https://www.youtube.com/iframe_api';
var YOUTUBE_EMBED = 'https://www.youtube.com/embed/';
var VIMEO_API = 'https://player.vimeo.com/api/player.js';
var VIMEO_EMBED = 'https://player.vimeo.com/video/';
var IFRAME_CLASS = 'quicktube__iframe';

// Mobile Safari exhibits a number of documented bugs with the
// youtube player API
// https://groups.google.com/forum/#!topic/youtube-api-gdata/vPgKhCu4Vng
var isMobileSafari = function isMobileSafari() {
    return (/Apple.*Mobile.*Safari/.test(navigator.userAgent)
    );
};

var trackEvent = function trackEvent(event) {
    var settings = Object.assign({
        eventCategory: 'Videos',
        eventAction: 'GTM',
        eventLabel: ''
    }, event);

    if (typeof window.ga === 'function') {
        window.ga('send', 'event', settings.eventCategory, settings.eventAction, settings.eventLabel);
    }
};

var createPlayerURL = function createPlayerURL(playerEmbedUrl, videoId, options) {
    var url = '' + playerEmbedUrl + videoId + '?autoplay=1';
    var optionKeys = Object.keys(options);
    optionKeys.forEach(function (key) {
        url += '&' + encodeURIComponent(key) + '=' + encodeURIComponent(options[key]);
    });
    return url;
};

var getCurrentSegment = function getCurrentSegment(currentPosition, duration) {
    var numberOfSegments = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

    var percentage = currentPosition / duration;
    // Ensure value is rounded to nearest whole segment eg. 1, 2, 3 , 4
    return (Math.floor(percentage * numberOfSegments) / numberOfSegments).toFixed(2);
};

var Quicktube = function () {
    function Quicktube(videoId, playerId, videoEl, videoEmbedUrl) {
        var _this = this;

        var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        _classCallCheck(this, Quicktube);

        this.videoId = videoId;
        this.videoEl = videoEl;
        this.playerId = playerId;
        this.videoPoster = this.videoEl.querySelector('[data-quicktube-poster]');
        this.videoPlatform = this.videoEl.getAttribute('data-quicktube-platform');
        this.videoTitle = undefined;
        this.pageTitle = document.title;
        this.segment = undefined;

        // Bound functions
        this.onClick = this.onClick.bind(this);
        this.onPlayerReady = this.onPlayerReady.bind(this);
        this.onYoutubePlayerStateChange = this.onYoutubePlayerStateChange.bind(this);
        this.onPlayerPlay = this.onPlayerPlay.bind(this);
        this.onPlayerPause = this.onPlayerPause.bind(this);
        this.onPlayerEnded = this.onPlayerEnded.bind(this);
        this.onPlayerError = this.onPlayerError.bind(this);
        this.onPlayerPercent = this.onPlayerPercent.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.throttleOnPlayerPercent = __WEBPACK_IMPORTED_MODULE_0_lodash_throttle___default()(function () {
            _this.onPlayerPercent(_this.quicktubePlayer);
        }, TIMEOUT_DELAY);

        // Booleans
        this.isVimeo = this.videoEl.getAttribute('data-quicktube-platform') === 'vimeo';

        // Settings
        this.options = Object.assign({
            trackAnalytics: false,
            hideOnVideoEnd: false,
            activeClass: 'quicktube--playing',
            pausedClass: 'quicktube--paused',
            posterFrameHiddenClass: 'quicktube__poster--hidden'
        }, options);

        var playerOptions = this.isVimeo ? {
            autopause: 0
        } : {
            showInfo: 0,
            autohide: 1,
            color: 'white',
            playerapi: 'ytplayer',
            enablejsapi: 1,
            wmode: 'transparent'
        };

        this.playerURL = createPlayerURL(videoEmbedUrl, this.videoId, playerOptions);

        // Initial actions
        // Need to have unique id's so that multiple of the same video can exist on a page without breaking
        var playEl = this.videoEl.querySelector('[data-quicktube-play]');
        playEl.setAttribute('data-play-guid', this.playerId);

        playEl.addEventListener('click', this.onClick);

        playEl.addEventListener('keydown', function (event) {
            if (event.keyCode === KEY_CODES.ENTER) {
                _this.onClick();
            }
        });
    }

    _createClass(Quicktube, [{
        key: 'onClick',
        value: function onClick() {
            var iframeContainer = this.videoEl.querySelector('[data-quicktube-video]');
            var hasPlayer = !!iframeContainer.querySelector('iframe');

            if (!hasPlayer) {
                this.createIframePlayer(iframeContainer);
            }

            // Only trigger force video play if not Mobile safari as playVideo function not supported
            if (!isMobileSafari()) {
                if (this.quicktubePlayer) {
                    if (this.isVimeo) {
                        this.quicktubePlayer.play();
                    } else {
                        // It doesn't have playVideo function in the initial state. Is added after video is ready
                        var isLoaded = this.quicktubePlayer.playVideo;

                        if (isLoaded) {
                            this.quicktubePlayer.playVideo();
                        }
                    }
                }
            }

            // Check if video isn't already playing
            if (!this.videoEl.getAttribute('data-video-playing')) {
                this.hidePosterFrame();
                this.addActiveState();
            }
        }
    }, {
        key: 'addActiveState',
        value: function addActiveState() {
            this.videoEl.classList.add(this.options.activeClass);
            this.videoEl.classList.remove(this.options.pausedClass);
        }
    }, {
        key: 'removeActiveState',
        value: function removeActiveState() {
            this.videoEl.classList.remove(this.options.activeClass);
            this.videoEl.classList.add(this.options.pausedClass);
            this.videoEl.removeAttribute('data-video-playing');
        }
    }, {
        key: 'stopVideo',
        value: function stopVideo() {
            if (!this.quicktubePlayer) {
                return;
            }

            if (this.isVimeo) {
                this.quicktubePlayer.unload();
            } else {
                this.quicktubePlayer.stopVideo();
            }

            this.removeActiveState();
            this.showPosterFrame();
            this.videoEl.classList.remove(this.options.pausedClass);
        }
    }, {
        key: 'hidePosterFrame',
        value: function hidePosterFrame() {
            this.videoPoster.classList.add(this.options.posterFrameHiddenClass);
        }
    }, {
        key: 'showPosterFrame',
        value: function showPosterFrame() {
            this.videoPoster.classList.remove(this.options.posterFrameHiddenClass);
        }
    }, {
        key: 'onPlayerPause',
        value: function onPlayerPause() {
            this.removeActiveState();

            if (this.options.trackAnalytics) {
                var label = 'Video Paused - ' + this.videoTitle;
                trackEvent({
                    eventCategory: this.videoPlatform,
                    eventAction: this.pageTitle,
                    eventLabel: label
                });
            }
        }
    }, {
        key: 'onPlayerPlay',
        value: function onPlayerPlay() {
            this.videoEl.setAttribute('data-video-playing', true);
            this.addActiveState();

            if (this.options.trackAnalytics) {
                var label = 'Video Played - ' + this.videoTitle;
                trackEvent({
                    eventCategory: this.videoPlatform,
                    eventAction: this.pageTitle,
                    eventLabel: label
                });
            }
        }
    }, {
        key: 'onPlayerEnded',
        value: function onPlayerEnded() {
            if (this.options.trackAnalytics) {
                var label = 'Video Ended - ' + this.videoTitle;
                trackEvent({
                    eventCategory: this.videoPlatform,
                    eventAction: this.pageTitle,
                    eventLabel: label
                });
            }

            if (this.options.hideOnVideoEnd) {
                this.stopVideo();
            }
        }

        // report the % played if it matches 0%, 25%, 50%, 75% or completed

    }, {
        key: 'onPlayerPercent',
        value: function onPlayerPercent(originalEvent) {
            var _this2 = this;

            if (this.options.trackAnalytics) {
                var event = originalEvent;

                if (this.isVimeo) {
                    event.getCurrentTime().then(function (seconds) {
                        event.getDuration().then(function (duration) {
                            _this2.trackSegment(event, duration, seconds);
                        });
                    });
                } else if (event.getPlayerState() === YT.PlayerState.PLAYING) {
                    // Do we need this? It may already be playing state before we even call the PlayerPercent function
                    // Yes, it fires twice without this if test
                    var videoDuration = event.getDuration();
                    var videoProgress = event.getCurrentTime();

                    this.trackSegment(event, videoDuration, videoProgress);
                }
            }
        }
    }, {
        key: 'createIframePlayer',
        value: function createIframePlayer(iframeContainer) {
            var _this3 = this;

            var iframe = document.createElement('iframe');
            iframe.src = this.playerURL;
            iframe.width = '100%';
            iframe.className = IFRAME_CLASS;
            iframeContainer.appendChild(iframe);

            if (this.isVimeo) {
                this.quicktubePlayer = new Vimeo.Player(iframe);

                this.quicktubePlayer.on('loaded', function () {
                    _this3.onPlayerReady();
                });

                // TODO Vimeo returns title with a promise, sigh! Figure out what best option is for
                // writing a fail case since we'll still wanna track the events, just provide a default title as an alternative
                this.quicktubePlayer.getVideoTitle().then(function (title) {
                    _this3.videoTitle = title;

                    _this3.quicktubePlayer.on('play', function () {
                        _this3.onPlayerPlay();
                    });

                    _this3.quicktubePlayer.on('pause', function () {
                        _this3.onPlayerPause();
                    });

                    _this3.quicktubePlayer.on('ended', function () {
                        _this3.onPlayerEnded();
                    });

                    _this3.quicktubePlayer.on('timeupdate', _this3.throttleOnPlayerPercent);

                    _this3.quicktubePlayer.on('error', function () {
                        _this3.onPlayerError();
                    });
                });
            } else {
                this.quicktubePlayer = new YT.Player(iframe, {
                    events: {
                        onReady: this.onPlayerReady,
                        onStateChange: this.onYoutubePlayerStateChange,
                        onError: this.onPlayerError
                    }
                });
            }
        }
    }, {
        key: 'onPlayerReady',
        value: function onPlayerReady() {
            var isPlaying = this.videoEl.getAttribute('data-video-playing');
            if (!isMobileSafari() && !isPlaying) {
                this.videoEl.setAttribute('data-video-playing', true);
            }
        }

        // listen for play, pause, percentage play, and end states

    }, {
        key: 'onYoutubePlayerStateChange',
        value: function onYoutubePlayerStateChange(event) {
            var videoData = event.target.getVideoData();
            this.videoTitle = videoData.title;

            if (event.data === YT.PlayerState.PLAYING) {
                // Report % played every second
                setTimeout(this.onPlayerPercent(event.target), TIMEOUT_DELAY);
                this.onPlayerPlay();
            }

            if (event.data === YT.PlayerState.PAUSED) {
                this.onPlayerPause();
            }

            if (event.data === YT.PlayerState.ENDED) {
                this.onPlayerEnded();
            }
        }
    }, {
        key: 'trackSegment',
        value: function trackSegment(event, videoDuration, videoProgress) {
            var currentSegment = void 0;
            // If less than 1.5 seconds from the end of the video
            if (videoDuration - videoProgress <= 1.5) {
                currentSegment = 1;
            } else {
                currentSegment = getCurrentSegment(videoProgress, videoDuration);
            }

            // Only fire tracking event at 0, .25, .50, .75 or 1 segment mark
            if (!this.segment || currentSegment > this.segment) {
                this.segment = currentSegment;
                var label = currentSegment * 100 + '% Video played - ' + this.videoTitle;
                trackEvent({
                    eventCategory: this.videoPlatform,
                    eventAction: this.pageTitle,
                    eventLabel: label
                });
            }

            if (this.segment !== 1 && this.videoPlatform === 'youtube') {
                setTimeout(this.onPlayerPercent.bind(this, event), 1000);
            }
        }
    }, {
        key: 'onPlayerError',
        value: function onPlayerError() {
            if (this.options.trackAnalytics) {
                var label = 'Video error - id: ' + this.videoId + ', page: ' + this.pageTitle;
                trackEvent({
                    eventCategory: this.videoPlatform,
                    eventAction: this.pageTitle,
                    eventLabel: label
                });
            }
        }
    }]);

    return Quicktube;
}();

var insertScript = function insertScript(url) {
    var isAlreadyInserted = document.querySelector('[src="' + url + '"]');

    if (!isAlreadyInserted) {
        var firstScript = document.querySelector('script');
        var newScript = document.createElement('script');
        newScript.src = url;
        firstScript.parentNode.insertBefore(newScript, firstScript);
    }
};

Quicktube.init = function () {
    var players = Array.prototype.slice.call(document.querySelectorAll('[data-quicktube]'));

    return players.map(function (player, i) {
        var isVimeo = player.getAttribute('data-quicktube-platform') === 'vimeo';
        var videoId = player.getAttribute('data-quicktube');
        var playerId = player.getAttribute('data-quicktube-quid') || 'quicktube-' + i;
        var options = JSON.parse(player.getAttribute('data-quicktube-options'));
        var videoDomain = void 0;

        if (isVimeo) {
            // Inject the Vimeo Player API
            insertScript(VIMEO_API);
            videoDomain = VIMEO_EMBED;
        } else {
            // Inject the YouTube API
            insertScript(YOUTUBE_API);
            videoDomain = YOUTUBE_EMBED;
        }

        return new Quicktube(videoId, playerId, player, videoDomain, options);
    });
};

/* harmony default export */ __webpack_exports__["a"] = (Quicktube);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(5);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWY3MDQzYTYzMDhmNmVkZjYwZjQiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljX3NyYy9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljX3NyYy9qcy9zaXRlLmpzIiwid2VicGFjazovLy8uL3N0YXRpY19zcmMvanMvdXRpbHMvcG9seWZpbGxzLmpzIiwid2VicGFjazovLy8uL3N0YXRpY19zcmMvanMvY29tcG9uZW50cy9jb2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zdGF0aWNfc3JjL2pzL2NvbXBvbmVudHMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9+L2VsZW1lbnQtY2xvc2VzdC9lbGVtZW50LWNsb3Nlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL25vdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90aHJvdHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9+L29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWlja3R1YmUvZXMvcXVpY2t0dWJlLmpzIl0sIm5hbWVzIjpbImdldENvb2tpZSIsIm5hbWUiLCJjb29raWVWYWx1ZSIsImRvY3VtZW50IiwiY29va2llIiwiY29va2llcyIsInNwbGl0IiwiaSIsImxlbmd0aCIsInRyaW0iLCJzdWJzdHJpbmciLCJkZWNvZGVVUklDb21wb25lbnQiLCJxdWVyeVNlbGVjdEFycmF5Iiwic2VsZWN0b3IiLCJlbCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJpbW1lZGlhdGUiLCJ0aW1lb3V0Iiwic2VsZiIsImFyZ3MiLCJsYXRlciIsImFwcGx5IiwiY2FsbE5vdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1dWlkIiwicmFuZG9tIiwidXVpZEdlbiIsIk1hdGgiLCJ0b1N0cmluZyIsInRhYkZvY3VzIiwidGFiRm9jdXNFbG10IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lckhUTUwiLCJlIiwiaXNUYWJLZXkiLCJrZXlDb2RlIiwiYWRkWW91VHViZVBsYXllckFQSSIsInRhZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJmaXJzdFNjcmlwdFRhZyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImdldFdpZHRoIiwiZWxlbSIsIm9mZnNldFdpZHRoIiwiY2xpZW50V2lkdGgiLCJnZXRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJnZXRFdmVudFRhcmdldCIsImV2ZW50IiwidGFyZ2V0Iiwic3JjRWxlbWVudCIsIklTX0lFMTEiLCJnbG9iYWwiLCJBY3RpdmVYT2JqZWN0IiwiaW5pdEZlYXR1cmVEZXRlY3Rpb24iLCJ0b3VjaENsYXNzIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5pdEZsZXhib3hTdXBwb3J0IiwiZG9jU3R5bGVzIiwic3R5bGUiLCJoYXNGbGV4Ym94Iiwic2l0ZSIsImluaXQiLCJjb2xsYXBzZSIsInRhYnNDb250cm9sbGVyIiwicXVpY2t0dWJlIiwiT2JqZWN0IiwiYXNzaWduIiwicmVxdWlyZSIsIkFDVElWRV9DTEFTUyIsIkFDVElWRV9DTEFTU19FWElUIiwidHJpZ2dlcnMiLCJmb3JFYWNoIiwidHJpZ2dlciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImxvY2F0aW9uIiwiaGFzaCIsIm1hdGNoIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlQXJpYVN0YXRlcyIsImhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJvcGVuQ29udGVudCIsImhhbmRsZVRyYW5zaXRpb24iLCJjb250YWluZXIiLCJvbkVuZFRyYW5zaXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwiaXRlbSIsImNsb3NlQ29udGVudCIsInByZXZlbnREZWZhdWx0IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImNvbnRhaW5zIiwiYWN0aXZlIiwiY29udGVudCIsInNsdWciLCJpZCIsInJlcGxhY2UiLCJzZXRBdHRyaWJ1dGUiLCJUUklHR0VSX0FDVElWRV9DTEFTUyIsIkhJREVfQ09OVEVOVF9DTEFTUyIsIktFWUNPREUiLCJSSUdIVCIsIkxFRlQiLCJzaG93QWN0aXZlQ29udGVudCIsInRyaWdnZXJFbCIsInRhYkNvbnRlbnQiLCJUYWJzIiwidGFiR3JvdXAiLCJ0YWJzIiwidGFiVHJpZ2dlcnMiLCJ0YWJDb250ZW50cyIsIm9uQ2xpY2siLCJvbktleWRvd24iLCJhZGRBcmlhQXR0cmlidXRlcyIsInJlc2V0QWN0aXZlU3RhdGVzIiwiYWN0aXZlVHJpZ2dlciIsImFjdGl2ZUNvbnRlbnRzIiwibG9jYXRpb25IYXNoRWwiLCJsb2NhdGlvbkhhc2hUcmlnZ2VyIiwiY2xvc2VzdCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbHRlciIsInQiLCJ0YWJDb250ZW50SXRlbSIsImhhbmRsZUFycm93S2V5UHJlc3MiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwic2libGluZyIsImZvY3VzIiwiY29udHJvbElkIiwidGFiR3JvdXBzIiwibWFwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVPLFNBQVNBLFNBQVQsQ0FBbUJDLElBQW5CLEVBQXlCO0FBQzVCLFFBQUlDLGNBQWMsSUFBbEI7QUFDQSxRQUFJQyxTQUFTQyxNQUFULElBQW1CRCxTQUFTQyxNQUFULEtBQW9CLEVBQTNDLEVBQStDO0FBQzNDLFlBQU1DLFVBQVVGLFNBQVNDLE1BQVQsQ0FBZ0JFLEtBQWhCLENBQXNCLEdBQXRCLENBQWhCO0FBQ0E7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsUUFBUUcsTUFBNUIsRUFBb0NELEdBQXBDLEVBQXlDO0FBQ3JDLGdCQUFNSCxTQUFTQyxRQUFRRSxDQUFSLEVBQVdFLElBQVgsRUFBZjs7QUFFQTtBQUNBLGdCQUFJTCxPQUFPTSxTQUFQLENBQWlCLENBQWpCLEVBQW9CVCxLQUFLTyxNQUFMLEdBQWMsQ0FBbEMsTUFBNENQLElBQTVDLE1BQUosRUFBeUQ7QUFDckRDLDhCQUFjUyxtQkFBbUJQLE9BQU9NLFNB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBLG9FIiwiZmlsZSI6InNpdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBhZjcwNDNhNjMwOGY2ZWRmNjBmNCIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWUobmFtZSkge1xuICAgIGxldCBjb29raWVWYWx1ZSA9IG51bGw7XG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZSAmJiBkb2N1bWVudC5jb29raWUgIT09ICcnKSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjb29raWUgPSBjb29raWVzW2ldLnRyaW0oKTtcblxuICAgICAgICAgICAgLy8gRG9lcyB0aGlzIGNvb2tpZSBzdHJpbmcgYmVnaW4gd2l0aCB0aGUgbmFtZSB3ZSB3YW50P1xuICAgICAgICAgICAgaWYgKGNvb2tpZS5zdWJzdHJpbmcoMCwgbmFtZS5sZW5ndGggKyAxKSA9PT0gYCR7bmFtZX09YCkge1xuICAgICAgICAgICAgICAgIGNvb2tpZVZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuICAgIH1cblxuICAgIHJldHVybiBjb29raWVWYWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U2VsZWN0QXJyYXkoc2VsZWN0b3IsIGVsID0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xufVxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gICAgbGV0IHRpbWVvdXQ7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICAgICAgY29uc3QgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgICAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLyBHZW5lcmF0ZXMgYSBVVUlEXG5leHBvcnQgZnVuY3Rpb24gdXVpZCgpIHtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGxldCBpO1xuICAgIGxldCByYW5kb207XG4gICAgbGV0IHV1aWRHZW4gPSAnJztcbiAgICBmb3IgKGkgPSAwOyBpIDwgMzI7IGkrKykge1xuICAgICAgICByYW5kb20gPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICBpZiAoaSA9PT0gOCB8fCBpID09PSAxMiB8fCBpID09PSAxNiB8fCBpID09PSAyMCkge1xuICAgICAgICAgICAgdXVpZEdlbiArPSAnLSc7XG4gICAgICAgIH1cblxuICAgICAgICB1dWlkR2VuICs9IChpID09PSAxMiA/IDQgOiBpID09PSAxNiA/IHJhbmRvbSAmIDMgfCA4IDogcmFuZG9tKS50b1N0cmluZygxNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV1aWRHZW47XG4gICAgLyogZXNsaW50LWVuYWJsZSAqL1xufVxuXG4vLyBSZW1vdmUgQ1NTIG91dGxpbmVzIGluIGFuIGFjY2Vzc2libGUgbWFubmVyXG4vLyBNYWtlIHN1cmUgeW91IGhhdmUgYW4gZW1wdHkgc3R5bGUgdGFnIHRoYXRcbi8vIGxpdmVzIGFmdGVyIHlvdXIgbWFpbiBzdHlsZSBzaGVldFxuZXhwb3J0IGZ1bmN0aW9uIHRhYkZvY3VzKHNlbGVjdG9yID0gJy5hY2Nlc3NUYWInKSB7XG4gICAgY29uc3QgdGFiRm9jdXNFbG10ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgICAgdGFiRm9jdXNFbG10LmlubmVySFRNTCA9ICcnO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpc1RhYktleSA9IGUua2V5Q29kZSA9PT0gOTtcbiAgICAgICAgaWYgKGlzVGFiS2V5KSB7XG4gICAgICAgICAgICB0YWJGb2N1c0VsbXQuaW5uZXJIVE1MID0gJ2E6Zm9jdXMgeyBvdXRsaW5lOiBzb2xpZCAzcHggIzZjYzZlZTsgfSc7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8gQWRkcyB0aGUgWW91VHViZSBQbGF5ZXIgQVBJXG5leHBvcnQgZnVuY3Rpb24gYWRkWW91VHViZVBsYXllckFQSSgpIHtcbiAgICBjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICB0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuICAgIGNvbnN0IGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgIGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xufVxuXG4vLyBSZXR1cm5zIHRoZSB3aWR0aCBvZiBhbiBlbGVtZW50LlxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLmNsaWVudFdpZHRoO1xufVxuXG4vLyBSZXR1cm5zIHRoZSBoZWlnaHQgb2YgYW4gZWxlbWVudC5cbmV4cG9ydCBmdW5jdGlvbiBnZXRIZWlnaHQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmNsaWVudEhlaWdodDtcbn1cblxuLy8gUmV0dXJucyBldmVudCB0YXJnZXQsIHN1cHBvcnRpbmcgSUU2LThcbmV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudFRhcmdldChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGNvbnN0IElTX0lFMTEgPSAhZ2xvYmFsLkFjdGl2ZVhPYmplY3QgJiYgJ0FjdGl2ZVhPYmplY3QnIGluIGdsb2JhbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGZWF0dXJlRGV0ZWN0aW9uKCkge1xuICAgIGNvbnN0IHRvdWNoQ2xhc3MgPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgPyAndG91Y2gnIDogJ25vLXRvdWNoJztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZX0gJHt0b3VjaENsYXNzfWA7XG5cbiAgICBpZiAoSVNfSUUxMSkge1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZX0gaWUxMWA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZsZXhib3hTdXBwb3J0KCkge1xuICAgIGNvbnN0IGRvY1N0eWxlcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbiAgICBjb25zdCBoYXNGbGV4Ym94ID0gJ2ZsZXhXcmFwJyBpbiBkb2NTdHlsZXMgfHwgJ1dlYmtpdEZsZXhXcmFwJyBpbiBkb2NTdHlsZXMgfHwgJ21zRmxleFdyYXAnIGluIGRvY1N0eWxlcztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lICs9IGhhc0ZsZXhib3ggPyAnIGZsZXhib3gnIDogJyBuby1mbGV4Ym94Jztcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRpY19zcmMvanMvdXRpbHMvaW5kZXguanMiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgcXVpY2t0dWJlIGZyb20gJ3F1aWNrdHViZSc7XG5cbmltcG9ydCB7IHRhYkZvY3VzLCBpbml0RmVhdHVyZURldGVjdGlvbiwgaW5pdEZsZXhib3hTdXBwb3J0IH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgIGNvbGxhcHNlICBmcm9tICcuL2NvbXBvbmVudHMvY29sbGFwc2UnO1xuaW1wb3J0ICB0YWJzQ29udHJvbGxlciAgZnJvbSAnLi9jb21wb25lbnRzL3RhYnMnO1xuXG5jb25zdCBJU19JRTExID0gIXdpbmRvdy5BY3RpdmVYT2JqZWN0ICYmICdBY3RpdmVYT2JqZWN0JyBpbiB3aW5kb3c7XG5cbmNvbnN0IHNpdGUgPSB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIHNpdGUncyBtb2R1bGVzLlxuICAgICAqIEVhY2ggbW9kdWxlIGRlZmluZXMgaXRzIG93biBpbml0IGZ1bmN0aW9uLCB0aGlzIGlzIGp1c3QgdGhlIGdsdWUuXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaW5pdEZlYXR1cmVEZXRlY3Rpb24oKTtcbiAgICAgICAgaW5pdEZsZXhib3hTdXBwb3J0KCk7XG4gICAgICAgIHRhYkZvY3VzKCk7XG4gICAgICAgIGNvbGxhcHNlLmluaXQoKTtcbiAgICAgICAgdGFic0NvbnRyb2xsZXIuaW5pdCgpO1xuICAgICAgICBxdWlja3R1YmUuaW5pdCgpO1xuXG4gICAgICAgIGlmIChJU19JRTExKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gYCR7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZX0gaWUxMWA7XG4gICAgICAgIH1cbiAgICB9LFxufTtcblxuc2l0ZS5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0aWNfc3JjL2pzL3NpdGUuanMiLCIvKipcbiAqIFRoaXMgZmlsZSBpcyBhdXRvbWF0aWNhbGx5IGluY2x1ZGVkIGluIHRoZSBKUyBidW5kbGUuXG4gKiBEb24ndCBpbXBvcnQgaXQgbWFudWFsbHkuXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGdsb2JhbC1yZXF1aXJlICovXG5cbi8vIEl0IHdpbGwgdXNlIHRoZSBuYXRpdmUgaW1wbGVtZW50YXRpb24gaWYgaXQncyBwcmVzZW50IGFuZCBpc24ndCBidWdneS5cbk9iamVjdC5hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnJlcXVpcmUoJ2VsZW1lbnQtY2xvc2VzdCcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljX3NyYy9qcy91dGlscy9wb2x5ZmlsbHMuanMiLCJpbXBvcnQgeyBxdWVyeVNlbGVjdEFycmF5IH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1MgPSAnY29sbGFwc2UtLWluJztcbmNvbnN0IEFDVElWRV9DTEFTU19FWElUID0gJ2NvbGxhcHNlLS1leGl0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMgPSBxdWVyeVNlbGVjdEFycmF5KCdbZGF0YS1jb2xsYXBzZS10cmlnZ2VyXScpO1xuXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcywgdHJpZ2dlcikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhdGlvbi5oYXNoICE9PSAnIycgJiYgIWxvY2F0aW9uLmhhc2gubWF0Y2goL14jKyQvKSAmJiBsb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxvY2F0aW9uLmhhc2gpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVBcmlhU3RhdGVzKHRydWUsIGVsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24uaGFzaCA9PT0gJyNfX2RlYnVnX18nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaHJlZiA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5Db250ZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZikpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaGFuZGxlVHJhbnNpdGlvbihjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTX0VYSVQpO1xuXG4gICAgICAgIGNvbnN0IG9uRW5kVHJhbnNpdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkVuZFRyYW5zaXRpb24pO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoQUNUSVZFX0NMQVNTX0VYSVQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkVuZFRyYW5zaXRpb24pO1xuICAgIH0sXG5cbiAgICBvcGVuQ29udGVudChpdGVtKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChBQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB0aGlzLnRvZ2dsZUFyaWFTdGF0ZXModHJ1ZSwgaXRlbSk7XG4gICAgfSxcblxuICAgIGNsb3NlQ29udGVudChpdGVtKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQXJpYVN0YXRlcyhmYWxzZSwgaXRlbSk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChBQ1RJVkVfQ0xBU1NfRVhJVCk7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShBQ1RJVkVfQ0xBU1MpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlVHJhbnNpdGlvbihpdGVtKTtcbiAgICB9LFxuXG4gICAgaGFuZGxlQ2xpY2sodHJpZ2dlciwgZSkge1xuICAgICAgICBjb25zdCBocmVmID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihocmVmKTtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCdoaXN0b3J5JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgaHJlZik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhBQ1RJVkVfQ0xBU1MpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlQ29udGVudChjb250YWluZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuQ29udGVudChjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRvZ2dsZUFyaWFTdGF0ZXMoYWN0aXZlLCBpdGVtKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbGxhcHNlLWNvbnRlbnRdJyk7XG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNvbGxhcHNlLXRyaWdnZXJdJyk7XG4gICAgICAgIGNvbnN0IHNsdWcgPSBpdGVtLmlkLnJlcGxhY2UoJ2hyZWYtJywgJycpO1xuXG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycsIGBjb250cm9sLSR7c2x1Z31gKTtcbiAgICAgICAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBgbGFiZWwtJHtzbHVnfWApO1xuXG4gICAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGFjdGl2ZSk7XG4gICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAhYWN0aXZlKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljX3NyYy9qcy9jb21wb25lbnRzL2NvbGxhcHNlLmpzIiwiaW1wb3J0IHsgcXVlcnlTZWxlY3RBcnJheSB9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgVFJJR0dFUl9BQ1RJVkVfQ0xBU1MgPSAndGFic19fYnRuLS1hY3RpdmUnO1xuY29uc3QgSElERV9DT05URU5UX0NMQVNTID0gJ3RhYnNfX2NvbnRlbnQtLWhpZGRlbic7XG5cbmNvbnN0IEtFWUNPREUgPSB7XG4gICAgUklHSFQ6IDM5LFxuICAgIExFRlQ6IDM3LFxufTtcblxuY29uc3Qgc2hvd0FjdGl2ZUNvbnRlbnQgPSAodHJpZ2dlckVsLCB0YWJDb250ZW50KSA9PiB7XG4gICAgdHJpZ2dlckVsLmNsYXNzTGlzdC5hZGQoVFJJR0dFUl9BQ1RJVkVfQ0xBU1MpO1xuICAgIHRyaWdnZXJFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcbiAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoSElERV9DT05URU5UX0NMQVNTKTtcbn07XG5cbmNsYXNzIFRhYnMge1xuXG4gICAgY29uc3RydWN0b3IodGFiR3JvdXApIHtcbiAgICAgICAgdGhpcy50YWJzID0gdGFiR3JvdXA7XG4gICAgICAgIHRoaXMudGFiVHJpZ2dlcnMgPSBxdWVyeVNlbGVjdEFycmF5KCdbZGF0YS10YWItdHJpZ2dlcl0nLCB0aGlzLnRhYnMpO1xuICAgICAgICB0aGlzLnRhYkNvbnRlbnRzID0gcXVlcnlTZWxlY3RBcnJheSgnW2RhdGEtdGFiLWNvbnRlbnRdJywgdGhpcy50YWJzKTtcblxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbktleWRvd24gPSB0aGlzLm9uS2V5ZG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmFkZEFyaWFBdHRyaWJ1dGVzID0gdGhpcy5hZGRBcmlhQXR0cmlidXRlcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlc2V0QWN0aXZlU3RhdGVzID0gdGhpcy5yZXNldEFjdGl2ZVN0YXRlcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYWRkQXJpYUF0dHJpYnV0ZXMoKTtcblxuICAgICAgICB0aGlzLnRhYlRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICAgICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleWRvd24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgYWN0aXZlVHJpZ2dlciA9IHRoaXMudGFiVHJpZ2dlcnNbMF07XG4gICAgICAgIGxldCBhY3RpdmVDb250ZW50cyA9IHRoaXMudGFiQ29udGVudHNbMF07XG5cbiAgICAgICAgLy8gTm90IGlkZWFsIGlmIHRoZXJlIGFyZSBkdXBsaWNhdGVkIGlkcyBvbiBvbmUgcGFnZS4gV2lsbCBvcGVuIGJvdGggYmxvY2tzIG9mIGNvbnRlbnQgZnJvbSB0aGUgb25lIGhhc2hcbiAgICAgICAgLy8gVGhpcyBpcyBhbiBlZGdlIGNhc2UgYW5kIGFuIGFkZXF1YXRlIHNvbHV0aW9uIHNpbmNlIHdlIGRvbid0IGhhdmUgdW5pcXVlIGlkcy5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhdGlvbkhhc2hFbCA9IHRoaXMudGFicy5xdWVyeVNlbGVjdG9yKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2F0aW9uSGFzaFRyaWdnZXIgPSB0aGlzLnRhYnMucXVlcnlTZWxlY3RvcihgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKTtcblxuICAgICAgICAgICAgaWYgKGxvY2F0aW9uSGFzaEVsKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVHJpZ2dlciA9IGxvY2F0aW9uSGFzaFRyaWdnZXI7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGVudHMgPSBsb2NhdGlvbkhhc2hFbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRBY3RpdmVTdGF0ZXMoKTtcbiAgICAgICAgc2hvd0FjdGl2ZUNvbnRlbnQoYWN0aXZlVHJpZ2dlciwgYWN0aXZlQ29udGVudHMpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdHJpZ2dlciA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS10YWItdHJpZ2dlcl0nKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCAnJywgaHJlZik7XG5cbiAgICAgICAgdGhpcy50YWJUcmlnZ2Vycy5maWx0ZXIodCA9PiB0ICE9PSB0cmlnZ2VyKVxuICAgICAgICAgICAgLmZvckVhY2godCA9PiB0LmNsYXNzTGlzdC5yZW1vdmUoVFJJR0dFUl9BQ1RJVkVfQ0xBU1MpKTtcblxuICAgICAgICBpZiAoIXRyaWdnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFRSSUdHRVJfQUNUSVZFX0NMQVNTKSkge1xuICAgICAgICAgICAgY29uc3QgdGFiQ29udGVudEl0ZW0gPSB0aGlzLnRhYnMucXVlcnlTZWxlY3RvcihocmVmKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmVTdGF0ZXMoKTtcbiAgICAgICAgICAgIHNob3dBY3RpdmVDb250ZW50KHRyaWdnZXIsIHRhYkNvbnRlbnRJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uS2V5ZG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSBLRVlDT0RFLlJJR0hUOlxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcnJvd0tleVByZXNzKGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgS0VZQ09ERS5MRUZUOlxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcnJvd0tleVByZXNzKGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBcnJvd0tleVByZXNzKHNpYmxpbmcpIHtcbiAgICAgICAgLy8gRnVuY3Rpb24gcmVjZWl2ZXMgYSByZWFkIG9ubHkgc2libGluZyBub2RlIHNvIG5lZWQgdG8gZ3JhYiBtYXRjaGluZ1xuICAgICAgICAvLyBlbGVtZW50IGZyb20gc3RvcmVkIHRyaWdnZXJzIGluIG9yZGVyIHRvIGhhbmRsZSBkaXNwbGF5IHRvZ2dsaW5nXG4gICAgICAgIHRoaXMudGFiVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgaWYgKHRyaWdnZXIgPT09IHNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gdHJpZ2dlci5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZlU3RhdGVzKCk7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZUNvbnRlbnQodHJpZ2dlciwgdGhpcy50YWJzLnF1ZXJ5U2VsZWN0b3IoaHJlZikpO1xuICAgICAgICAgICAgICAgIHRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkQXJpYUF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHRoaXMudGFiVHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sSWQgPSBocmVmLnJlcGxhY2UoJyMnLCAnJyk7XG4gICAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWInKTtcbiAgICAgICAgICAgIHRyaWdnZXIuc2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJywgY29udHJvbElkKTtcblxuICAgICAgICAgICAgaWYgKHRyaWdnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFRSSUdHRVJfQUNUSVZFX0NMQVNTKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhYkNvbnRlbnRJdGVtID0gdGhpcy50YWJzLnF1ZXJ5U2VsZWN0b3IoaHJlZik7XG4gICAgICAgICAgICAgICAgc2hvd0FjdGl2ZUNvbnRlbnQodHJpZ2dlciwgdGFiQ29udGVudEl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50YWJDb250ZW50cy5mb3JFYWNoKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICd0YWJwYW5lbCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXNldEFjdGl2ZVN0YXRlcygpIHtcbiAgICAgICAgdGhpcy50YWJUcmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyKSA9PiB7XG4gICAgICAgICAgICB0cmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoVFJJR0dFUl9BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgdHJpZ2dlci5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudGFiQ29udGVudHMuZm9yRWFjaCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29udGVudC5jbGFzc0xpc3QuYWRkKEhJREVfQ09OVEVOVF9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5jb25zdCB0YWJzID0ge1xuICAgIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHRhYkdyb3VwcyA9IHF1ZXJ5U2VsZWN0QXJyYXkoJ1tkYXRhLXRhYnNdJyk7XG5cbiAgICAgICAgcmV0dXJuIHRhYkdyb3Vwcy5tYXAodGFiR3JvdXAgPT4gbmV3IFRhYnModGFiR3JvdXApKTtcbiAgICB9LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RhdGljX3NyYy9qcy9jb21wb25lbnRzL3RhYnMuanMiLCIvLyBlbGVtZW50LWNsb3Nlc3QgfCBDQzAtMS4wIHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL2Nsb3Nlc3RcblxuKGZ1bmN0aW9uIChFbGVtZW50UHJvdG8pIHtcblx0aWYgKHR5cGVvZiBFbGVtZW50UHJvdG8ubWF0Y2hlcyAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdEVsZW1lbnRQcm90by5tYXRjaGVzID0gRWxlbWVudFByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IEVsZW1lbnRQcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudFByb3RvLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBmdW5jdGlvbiBtYXRjaGVzKHNlbGVjdG9yKSB7XG5cdFx0XHR2YXIgZWxlbWVudCA9IHRoaXM7XG5cdFx0XHR2YXIgZWxlbWVudHMgPSAoZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXHRcdFx0dmFyIGluZGV4ID0gMDtcblxuXHRcdFx0d2hpbGUgKGVsZW1lbnRzW2luZGV4XSAmJiBlbGVtZW50c1tpbmRleF0gIT09IGVsZW1lbnQpIHtcblx0XHRcdFx0KytpbmRleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIEJvb2xlYW4oZWxlbWVudHNbaW5kZXhdKTtcblx0XHR9O1xuXHR9XG5cblx0aWYgKHR5cGVvZiBFbGVtZW50UHJvdG8uY2xvc2VzdCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdEVsZW1lbnRQcm90by5jbG9zZXN0ID0gZnVuY3Rpb24gY2xvc2VzdChzZWxlY3Rvcikge1xuXHRcdFx0dmFyIGVsZW1lbnQgPSB0aGlzO1xuXG5cdFx0XHR3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW1lbnQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9O1xuXHR9XG59KSh3aW5kb3cuRWxlbWVudC5wcm90b3R5cGUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2VsZW1lbnQtY2xvc2VzdC9lbGVtZW50LWNsb3Nlc3QuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIG5vdyA9IHJlcXVpcmUoJy4vbm93JyksXG4gICAgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGVib3VuY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2RlYm91bmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gbm93O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9ub3cuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWJvdW5jZSA9IHJlcXVpcmUoJy4vZGVib3VuY2UnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdGhyb3R0bGVkIGZ1bmN0aW9uIHRoYXQgb25seSBpbnZva2VzIGBmdW5jYCBhdCBtb3N0IG9uY2UgcGVyXG4gKiBldmVyeSBgd2FpdGAgbWlsbGlzZWNvbmRzLiBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uIGNvbWVzIHdpdGggYSBgY2FuY2VsYFxuICogbWV0aG9kIHRvIGNhbmNlbCBkZWxheWVkIGBmdW5jYCBpbnZvY2F0aW9ucyBhbmQgYSBgZmx1c2hgIG1ldGhvZCB0b1xuICogaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uIFByb3ZpZGUgYG9wdGlvbnNgIHRvIGluZGljYXRlIHdoZXRoZXIgYGZ1bmNgXG4gKiBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGUgbGVhZGluZyBhbmQvb3IgdHJhaWxpbmcgZWRnZSBvZiB0aGUgYHdhaXRgXG4gKiB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWQgd2l0aCB0aGUgbGFzdCBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlXG4gKiB0aHJvdHRsZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlIHRocm90dGxlZCBmdW5jdGlvbiByZXR1cm4gdGhlXG4gKiByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgIGludm9jYXRpb24uXG4gKlxuICogKipOb3RlOioqIElmIGBsZWFkaW5nYCBhbmQgYHRyYWlsaW5nYCBvcHRpb25zIGFyZSBgdHJ1ZWAsIGBmdW5jYCBpc1xuICogaW52b2tlZCBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dCBvbmx5IGlmIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb25cbiAqIGlzIGludm9rZWQgbW9yZSB0aGFuIG9uY2UgZHVyaW5nIHRoZSBgd2FpdGAgdGltZW91dC5cbiAqXG4gKiBJZiBgd2FpdGAgaXMgYDBgIGFuZCBgbGVhZGluZ2AgaXMgYGZhbHNlYCwgYGZ1bmNgIGludm9jYXRpb24gaXMgZGVmZXJyZWRcbiAqIHVudGlsIHRvIHRoZSBuZXh0IHRpY2ssIHNpbWlsYXIgdG8gYHNldFRpbWVvdXRgIHdpdGggYSB0aW1lb3V0IG9mIGAwYC5cbiAqXG4gKiBTZWUgW0RhdmlkIENvcmJhY2hvJ3MgYXJ0aWNsZV0oaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9kZWJvdW5jaW5nLXRocm90dGxpbmctZXhwbGFpbmVkLWV4YW1wbGVzLylcbiAqIGZvciBkZXRhaWxzIG92ZXIgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gYF8udGhyb3R0bGVgIGFuZCBgXy5kZWJvdW5jZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbd2FpdD0wXSBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aHJvdHRsZSBpbnZvY2F0aW9ucyB0by5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gVGhlIG9wdGlvbnMgb2JqZWN0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sZWFkaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy50cmFpbGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB0aHJvdHRsZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIC8vIEF2b2lkIGV4Y2Vzc2l2ZWx5IHVwZGF0aW5nIHRoZSBwb3NpdGlvbiB3aGlsZSBzY3JvbGxpbmcuXG4gKiBqUXVlcnkod2luZG93KS5vbignc2Nyb2xsJywgXy50aHJvdHRsZSh1cGRhdGVQb3NpdGlvbiwgMTAwKSk7XG4gKlxuICogLy8gSW52b2tlIGByZW5ld1Rva2VuYCB3aGVuIHRoZSBjbGljayBldmVudCBpcyBmaXJlZCwgYnV0IG5vdCBtb3JlIHRoYW4gb25jZSBldmVyeSA1IG1pbnV0ZXMuXG4gKiB2YXIgdGhyb3R0bGVkID0gXy50aHJvdHRsZShyZW5ld1Rva2VuLCAzMDAwMDAsIHsgJ3RyYWlsaW5nJzogZmFsc2UgfSk7XG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgdGhyb3R0bGVkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIHRocm90dGxlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhyb3R0bGVkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxlYWRpbmcgPSB0cnVlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIGlmIChpc09iamVjdChvcHRpb25zKSkge1xuICAgIGxlYWRpbmcgPSAnbGVhZGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy5sZWFkaW5nIDogbGVhZGluZztcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG4gIHJldHVybiBkZWJvdW5jZShmdW5jLCB3YWl0LCB7XG4gICAgJ2xlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtYXhXYWl0Jzogd2FpdCxcbiAgICAndHJhaWxpbmcnOiB0cmFpbGluZ1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0aHJvdHRsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvdGhyb3R0bGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC90b051bWJlci5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoL3Rocm90dGxlJztcblxudmFyIEtFWV9DT0RFUyA9IHtcbiAgICBFTlRFUjogMTNcbn07XG5cbnZhciBUSU1FT1VUX0RFTEFZID0gMTAwMDA7XG52YXIgWU9VVFVCRV9BUEkgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG52YXIgWU9VVFVCRV9FTUJFRCA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nO1xudmFyIFZJTUVPX0FQSSA9ICdodHRwczovL3BsYXllci52aW1lby5jb20vYXBpL3BsYXllci5qcyc7XG52YXIgVklNRU9fRU1CRUQgPSAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyc7XG52YXIgSUZSQU1FX0NMQVNTID0gJ3F1aWNrdHViZV9faWZyYW1lJztcblxuLy8gTW9iaWxlIFNhZmFyaSBleGhpYml0cyBhIG51bWJlciBvZiBkb2N1bWVudGVkIGJ1Z3Mgd2l0aCB0aGVcbi8vIHlvdXR1YmUgcGxheWVyIEFQSVxuLy8gaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIXRvcGljL3lvdXR1YmUtYXBpLWdkYXRhL3ZQZ0toQ3U0Vm5nXG52YXIgaXNNb2JpbGVTYWZhcmkgPSBmdW5jdGlvbiBpc01vYmlsZVNhZmFyaSgpIHtcbiAgICByZXR1cm4gKC9BcHBsZS4qTW9iaWxlLipTYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudClcbiAgICApO1xufTtcblxudmFyIHRyYWNrRXZlbnQgPSBmdW5jdGlvbiB0cmFja0V2ZW50KGV2ZW50KSB7XG4gICAgdmFyIHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGV2ZW50Q2F0ZWdvcnk6ICdWaWRlb3MnLFxuICAgICAgICBldmVudEFjdGlvbjogJ0dUTScsXG4gICAgICAgIGV2ZW50TGFiZWw6ICcnXG4gICAgfSwgZXZlbnQpO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZ2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2luZG93LmdhKCdzZW5kJywgJ2V2ZW50Jywgc2V0dGluZ3MuZXZlbnRDYXRlZ29yeSwgc2V0dGluZ3MuZXZlbnRBY3Rpb24sIHNldHRpbmdzLmV2ZW50TGFiZWwpO1xuICAgIH1cbn07XG5cbnZhciBjcmVhdGVQbGF5ZXJVUkwgPSBmdW5jdGlvbiBjcmVhdGVQbGF5ZXJVUkwocGxheWVyRW1iZWRVcmwsIHZpZGVvSWQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdXJsID0gJycgKyBwbGF5ZXJFbWJlZFVybCArIHZpZGVvSWQgKyAnP2F1dG9wbGF5PTEnO1xuICAgIHZhciBvcHRpb25LZXlzID0gT2JqZWN0LmtleXMob3B0aW9ucyk7XG4gICAgb3B0aW9uS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdXJsICs9ICcmJyArIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9wdGlvbnNba2V5XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHVybDtcbn07XG5cbnZhciBnZXRDdXJyZW50U2VnbWVudCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRTZWdtZW50KGN1cnJlbnRQb3NpdGlvbiwgZHVyYXRpb24pIHtcbiAgICB2YXIgbnVtYmVyT2ZTZWdtZW50cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogNDtcblxuICAgIHZhciBwZXJjZW50YWdlID0gY3VycmVudFBvc2l0aW9uIC8gZHVyYXRpb247XG4gICAgLy8gRW5zdXJlIHZhbHVlIGlzIHJvdW5kZWQgdG8gbmVhcmVzdCB3aG9sZSBzZWdtZW50IGVnLiAxLCAyLCAzICwgNFxuICAgIHJldHVybiAoTWF0aC5mbG9vcihwZXJjZW50YWdlICogbnVtYmVyT2ZTZWdtZW50cykgLyBudW1iZXJPZlNlZ21lbnRzKS50b0ZpeGVkKDIpO1xufTtcblxudmFyIFF1aWNrdHViZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBRdWlja3R1YmUodmlkZW9JZCwgcGxheWVySWQsIHZpZGVvRWwsIHZpZGVvRW1iZWRVcmwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDoge307XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFF1aWNrdHViZSk7XG5cbiAgICAgICAgdGhpcy52aWRlb0lkID0gdmlkZW9JZDtcbiAgICAgICAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcbiAgICAgICAgdGhpcy5wbGF5ZXJJZCA9IHBsYXllcklkO1xuICAgICAgICB0aGlzLnZpZGVvUG9zdGVyID0gdGhpcy52aWRlb0VsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXF1aWNrdHViZS1wb3N0ZXJdJyk7XG4gICAgICAgIHRoaXMudmlkZW9QbGF0Zm9ybSA9IHRoaXMudmlkZW9FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcXVpY2t0dWJlLXBsYXRmb3JtJyk7XG4gICAgICAgIHRoaXMudmlkZW9UaXRsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5wYWdlVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcbiAgICAgICAgdGhpcy5zZWdtZW50ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIEJvdW5kIGZ1bmN0aW9uc1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBsYXllclJlYWR5ID0gdGhpcy5vblBsYXllclJlYWR5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Zb3V0dWJlUGxheWVyU3RhdGVDaGFuZ2UgPSB0aGlzLm9uWW91dHViZVBsYXllclN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25QbGF5ZXJQbGF5ID0gdGhpcy5vblBsYXllclBsYXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBsYXllclBhdXNlID0gdGhpcy5vblBsYXllclBhdXNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25QbGF5ZXJFbmRlZCA9IHRoaXMub25QbGF5ZXJFbmRlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uUGxheWVyRXJyb3IgPSB0aGlzLm9uUGxheWVyRXJyb3IuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBsYXllclBlcmNlbnQgPSB0aGlzLm9uUGxheWVyUGVyY2VudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0b3BWaWRlbyA9IHRoaXMuc3RvcFZpZGVvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudGhyb3R0bGVPblBsYXllclBlcmNlbnQgPSB0aHJvdHRsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5vblBsYXllclBlcmNlbnQoX3RoaXMucXVpY2t0dWJlUGxheWVyKTtcbiAgICAgICAgfSwgVElNRU9VVF9ERUxBWSk7XG5cbiAgICAgICAgLy8gQm9vbGVhbnNcbiAgICAgICAgdGhpcy5pc1ZpbWVvID0gdGhpcy52aWRlb0VsLmdldEF0dHJpYnV0ZSgnZGF0YS1xdWlja3R1YmUtcGxhdGZvcm0nKSA9PT0gJ3ZpbWVvJztcblxuICAgICAgICAvLyBTZXR0aW5nc1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIHRyYWNrQW5hbHl0aWNzOiBmYWxzZSxcbiAgICAgICAgICAgIGhpZGVPblZpZGVvRW5kOiBmYWxzZSxcbiAgICAgICAgICAgIGFjdGl2ZUNsYXNzOiAncXVpY2t0dWJlLS1wbGF5aW5nJyxcbiAgICAgICAgICAgIHBhdXNlZENsYXNzOiAncXVpY2t0dWJlLS1wYXVzZWQnLFxuICAgICAgICAgICAgcG9zdGVyRnJhbWVIaWRkZW5DbGFzczogJ3F1aWNrdHViZV9fcG9zdGVyLS1oaWRkZW4nXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciBwbGF5ZXJPcHRpb25zID0gdGhpcy5pc1ZpbWVvID8ge1xuICAgICAgICAgICAgYXV0b3BhdXNlOiAwXG4gICAgICAgIH0gOiB7XG4gICAgICAgICAgICBzaG93SW5mbzogMCxcbiAgICAgICAgICAgIGF1dG9oaWRlOiAxLFxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICBwbGF5ZXJhcGk6ICd5dHBsYXllcicsXG4gICAgICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgICAgIHdtb2RlOiAndHJhbnNwYXJlbnQnXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wbGF5ZXJVUkwgPSBjcmVhdGVQbGF5ZXJVUkwodmlkZW9FbWJlZFVybCwgdGhpcy52aWRlb0lkLCBwbGF5ZXJPcHRpb25zKTtcblxuICAgICAgICAvLyBJbml0aWFsIGFjdGlvbnNcbiAgICAgICAgLy8gTmVlZCB0byBoYXZlIHVuaXF1ZSBpZCdzIHNvIHRoYXQgbXVsdGlwbGUgb2YgdGhlIHNhbWUgdmlkZW8gY2FuIGV4aXN0IG9uIGEgcGFnZSB3aXRob3V0IGJyZWFraW5nXG4gICAgICAgIHZhciBwbGF5RWwgPSB0aGlzLnZpZGVvRWwucXVlcnlTZWxlY3RvcignW2RhdGEtcXVpY2t0dWJlLXBsYXldJyk7XG4gICAgICAgIHBsYXlFbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxheS1ndWlkJywgdGhpcy5wbGF5ZXJJZCk7XG5cbiAgICAgICAgcGxheUVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcblxuICAgICAgICBwbGF5RWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IEtFWV9DT0RFUy5FTlRFUikge1xuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFF1aWNrdHViZSwgW3tcbiAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuICAgICAgICAgICAgdmFyIGlmcmFtZUNvbnRhaW5lciA9IHRoaXMudmlkZW9FbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1xdWlja3R1YmUtdmlkZW9dJyk7XG4gICAgICAgICAgICB2YXIgaGFzUGxheWVyID0gISFpZnJhbWVDb250YWluZXIucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5cbiAgICAgICAgICAgIGlmICghaGFzUGxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVJZnJhbWVQbGF5ZXIoaWZyYW1lQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT25seSB0cmlnZ2VyIGZvcmNlIHZpZGVvIHBsYXkgaWYgbm90IE1vYmlsZSBzYWZhcmkgYXMgcGxheVZpZGVvIGZ1bmN0aW9uIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGVTYWZhcmkoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnF1aWNrdHViZVBsYXllcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1ZpbWVvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aWNrdHViZVBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJdCBkb2Vzbid0IGhhdmUgcGxheVZpZGVvIGZ1bmN0aW9uIGluIHRoZSBpbml0aWFsIHN0YXRlLiBJcyBhZGRlZCBhZnRlciB2aWRlbyBpcyByZWFkeVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzTG9hZGVkID0gdGhpcy5xdWlja3R1YmVQbGF5ZXIucGxheVZpZGVvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1aWNrdHViZVBsYXllci5wbGF5VmlkZW8oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmlkZW8gaXNuJ3QgYWxyZWFkeSBwbGF5aW5nXG4gICAgICAgICAgICBpZiAoIXRoaXMudmlkZW9FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlkZW8tcGxheWluZycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlUG9zdGVyRnJhbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFjdGl2ZVN0YXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2FkZEFjdGl2ZVN0YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEFjdGl2ZVN0YXRlKCkge1xuICAgICAgICAgICAgdGhpcy52aWRlb0VsLmNsYXNzTGlzdC5hZGQodGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMub3B0aW9ucy5wYXVzZWRDbGFzcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3JlbW92ZUFjdGl2ZVN0YXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZVN0YXRlKCkge1xuICAgICAgICAgICAgdGhpcy52aWRlb0VsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5vcHRpb25zLmFjdGl2ZUNsYXNzKTtcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbC5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5wYXVzZWRDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLnZpZGVvRWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXZpZGVvLXBsYXlpbmcnKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc3RvcFZpZGVvJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3BWaWRlbygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5xdWlja3R1YmVQbGF5ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmltZW8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1aWNrdHViZVBsYXllci51bmxvYWQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWlja3R1YmVQbGF5ZXIuc3RvcFZpZGVvKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlU3RhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Bvc3RlckZyYW1lKCk7XG4gICAgICAgICAgICB0aGlzLnZpZGVvRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMucGF1c2VkQ2xhc3MpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdoaWRlUG9zdGVyRnJhbWUnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaGlkZVBvc3RlckZyYW1lKCkge1xuICAgICAgICAgICAgdGhpcy52aWRlb1Bvc3Rlci5jbGFzc0xpc3QuYWRkKHRoaXMub3B0aW9ucy5wb3N0ZXJGcmFtZUhpZGRlbkNsYXNzKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2hvd1Bvc3RlckZyYW1lJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNob3dQb3N0ZXJGcmFtZSgpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW9Qb3N0ZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLm9wdGlvbnMucG9zdGVyRnJhbWVIaWRkZW5DbGFzcyk7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ29uUGxheWVyUGF1c2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25QbGF5ZXJQYXVzZSgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQWN0aXZlU3RhdGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50cmFja0FuYWx5dGljcykge1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICdWaWRlbyBQYXVzZWQgLSAnICsgdGhpcy52aWRlb1RpdGxlO1xuICAgICAgICAgICAgICAgIHRyYWNrRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBldmVudENhdGVnb3J5OiB0aGlzLnZpZGVvUGxhdGZvcm0sXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QWN0aW9uOiB0aGlzLnBhZ2VUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMYWJlbDogbGFiZWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25QbGF5ZXJQbGF5JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUGxheWVyUGxheSgpIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW9FbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmlkZW8tcGxheWluZycsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5hZGRBY3RpdmVTdGF0ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrQW5hbHl0aWNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gJ1ZpZGVvIFBsYXllZCAtICcgKyB0aGlzLnZpZGVvVGl0bGU7XG4gICAgICAgICAgICAgICAgdHJhY2tFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk6IHRoaXMudmlkZW9QbGF0Zm9ybSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRBY3Rpb246IHRoaXMucGFnZVRpdGxlLFxuICAgICAgICAgICAgICAgICAgICBldmVudExhYmVsOiBsYWJlbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblBsYXllckVuZGVkJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG9uUGxheWVyRW5kZWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrQW5hbHl0aWNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYmVsID0gJ1ZpZGVvIEVuZGVkIC0gJyArIHRoaXMudmlkZW9UaXRsZTtcbiAgICAgICAgICAgICAgICB0cmFja0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDYXRlZ29yeTogdGhpcy52aWRlb1BsYXRmb3JtLFxuICAgICAgICAgICAgICAgICAgICBldmVudEFjdGlvbjogdGhpcy5wYWdlVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGFiZWw6IGxhYmVsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZU9uVmlkZW9FbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BWaWRlbygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVwb3J0IHRoZSAlIHBsYXllZCBpZiBpdCBtYXRjaGVzIDAlLCAyNSUsIDUwJSwgNzUlIG9yIGNvbXBsZXRlZFxuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdvblBsYXllclBlcmNlbnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25QbGF5ZXJQZXJjZW50KG9yaWdpbmFsRXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnRyYWNrQW5hbHl0aWNzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gb3JpZ2luYWxFdmVudDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmltZW8pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZ2V0Q3VycmVudFRpbWUoKS50aGVuKGZ1bmN0aW9uIChzZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5nZXREdXJhdGlvbigpLnRoZW4oZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnRyYWNrU2VnbWVudChldmVudCwgZHVyYXRpb24sIHNlY29uZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZ2V0UGxheWVyU3RhdGUoKSA9PT0gWVQuUGxheWVyU3RhdGUuUExBWUlORykge1xuICAgICAgICAgICAgICAgICAgICAvLyBEbyB3ZSBuZWVkIHRoaXM/IEl0IG1heSBhbHJlYWR5IGJlIHBsYXlpbmcgc3RhdGUgYmVmb3JlIHdlIGV2ZW4gY2FsbCB0aGUgUGxheWVyUGVyY2VudCBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBZZXMsIGl0IGZpcmVzIHR3aWNlIHdpdGhvdXQgdGhpcyBpZiB0ZXN0XG4gICAgICAgICAgICAgICAgICAgIHZhciB2aWRlb0R1cmF0aW9uID0gZXZlbnQuZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZpZGVvUHJvZ3Jlc3MgPSBldmVudC5nZXRDdXJyZW50VGltZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJhY2tTZWdtZW50KGV2ZW50LCB2aWRlb0R1cmF0aW9uLCB2aWRlb1Byb2dyZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NyZWF0ZUlmcmFtZVBsYXllcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjcmVhdGVJZnJhbWVQbGF5ZXIoaWZyYW1lQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgICAgICAgaWZyYW1lLnNyYyA9IHRoaXMucGxheWVyVVJMO1xuICAgICAgICAgICAgaWZyYW1lLndpZHRoID0gJzEwMCUnO1xuICAgICAgICAgICAgaWZyYW1lLmNsYXNzTmFtZSA9IElGUkFNRV9DTEFTUztcbiAgICAgICAgICAgIGlmcmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpZnJhbWUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZpbWVvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5xdWlja3R1YmVQbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKGlmcmFtZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnF1aWNrdHViZVBsYXllci5vbignbG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpczMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBWaW1lbyByZXR1cm5zIHRpdGxlIHdpdGggYSBwcm9taXNlLCBzaWdoISBGaWd1cmUgb3V0IHdoYXQgYmVzdCBvcHRpb24gaXMgZm9yXG4gICAgICAgICAgICAgICAgLy8gd3JpdGluZyBhIGZhaWwgY2FzZSBzaW5jZSB3ZSdsbCBzdGlsbCB3YW5uYSB0cmFjayB0aGUgZXZlbnRzLCBqdXN0IHByb3ZpZGUgYSBkZWZhdWx0IHRpdGxlIGFzIGFuIGFsdGVybmF0aXZlXG4gICAgICAgICAgICAgICAgdGhpcy5xdWlja3R1YmVQbGF5ZXIuZ2V0VmlkZW9UaXRsZSgpLnRoZW4oZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy52aWRlb1RpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnF1aWNrdHViZVBsYXllci5vbigncGxheScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5vblBsYXllclBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzLnF1aWNrdHViZVBsYXllci5vbigncGF1c2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpczMub25QbGF5ZXJQYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpczMucXVpY2t0dWJlUGxheWVyLm9uKCdlbmRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzMy5vblBsYXllckVuZGVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5xdWlja3R1YmVQbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBfdGhpczMudGhyb3R0bGVPblBsYXllclBlcmNlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzMy5xdWlja3R1YmVQbGF5ZXIub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMzLm9uUGxheWVyRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucXVpY2t0dWJlUGxheWVyID0gbmV3IFlULlBsYXllcihpZnJhbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5OiB0aGlzLm9uUGxheWVyUmVhZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN0YXRlQ2hhbmdlOiB0aGlzLm9uWW91dHViZVBsYXllclN0YXRlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25FcnJvcjogdGhpcy5vblBsYXllckVycm9yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25QbGF5ZXJSZWFkeScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblBsYXllclJlYWR5KCkge1xuICAgICAgICAgICAgdmFyIGlzUGxheWluZyA9IHRoaXMudmlkZW9FbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmlkZW8tcGxheWluZycpO1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZVNhZmFyaSgpICYmICFpc1BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZGVvRWwuc2V0QXR0cmlidXRlKCdkYXRhLXZpZGVvLXBsYXlpbmcnLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgcGxheSwgcGF1c2UsIHBlcmNlbnRhZ2UgcGxheSwgYW5kIGVuZCBzdGF0ZXNcblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25Zb3V0dWJlUGxheWVyU3RhdGVDaGFuZ2UnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gb25Zb3V0dWJlUGxheWVyU3RhdGVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciB2aWRlb0RhdGEgPSBldmVudC50YXJnZXQuZ2V0VmlkZW9EYXRhKCk7XG4gICAgICAgICAgICB0aGlzLnZpZGVvVGl0bGUgPSB2aWRlb0RhdGEudGl0bGU7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhID09PSBZVC5QbGF5ZXJTdGF0ZS5QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVwb3J0ICUgcGxheWVkIGV2ZXJ5IHNlY29uZFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQodGhpcy5vblBsYXllclBlcmNlbnQoZXZlbnQudGFyZ2V0KSwgVElNRU9VVF9ERUxBWSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBsYXllclBsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBBVVNFRCkge1xuICAgICAgICAgICAgICAgIHRoaXMub25QbGF5ZXJQYXVzZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSA9PT0gWVQuUGxheWVyU3RhdGUuRU5ERUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uUGxheWVyRW5kZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndHJhY2tTZWdtZW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHRyYWNrU2VnbWVudChldmVudCwgdmlkZW9EdXJhdGlvbiwgdmlkZW9Qcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRTZWdtZW50ID0gdm9pZCAwO1xuICAgICAgICAgICAgLy8gSWYgbGVzcyB0aGFuIDEuNSBzZWNvbmRzIGZyb20gdGhlIGVuZCBvZiB0aGUgdmlkZW9cbiAgICAgICAgICAgIGlmICh2aWRlb0R1cmF0aW9uIC0gdmlkZW9Qcm9ncmVzcyA8PSAxLjUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VnbWVudCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWdtZW50ID0gZ2V0Q3VycmVudFNlZ21lbnQodmlkZW9Qcm9ncmVzcywgdmlkZW9EdXJhdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9ubHkgZmlyZSB0cmFja2luZyBldmVudCBhdCAwLCAuMjUsIC41MCwgLjc1IG9yIDEgc2VnbWVudCBtYXJrXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VnbWVudCB8fCBjdXJyZW50U2VnbWVudCA+IHRoaXMuc2VnbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudCA9IGN1cnJlbnRTZWdtZW50O1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9IGN1cnJlbnRTZWdtZW50ICogMTAwICsgJyUgVmlkZW8gcGxheWVkIC0gJyArIHRoaXMudmlkZW9UaXRsZTtcbiAgICAgICAgICAgICAgICB0cmFja0V2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRDYXRlZ29yeTogdGhpcy52aWRlb1BsYXRmb3JtLFxuICAgICAgICAgICAgICAgICAgICBldmVudEFjdGlvbjogdGhpcy5wYWdlVGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TGFiZWw6IGxhYmVsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNlZ21lbnQgIT09IDEgJiYgdGhpcy52aWRlb1BsYXRmb3JtID09PSAneW91dHViZScpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHRoaXMub25QbGF5ZXJQZXJjZW50LmJpbmQodGhpcywgZXZlbnQpLCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25QbGF5ZXJFcnJvcicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvblBsYXllckVycm9yKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy50cmFja0FuYWx5dGljcykge1xuICAgICAgICAgICAgICAgIHZhciBsYWJlbCA9ICdWaWRlbyBlcnJvciAtIGlkOiAnICsgdGhpcy52aWRlb0lkICsgJywgcGFnZTogJyArIHRoaXMucGFnZVRpdGxlO1xuICAgICAgICAgICAgICAgIHRyYWNrRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICBldmVudENhdGVnb3J5OiB0aGlzLnZpZGVvUGxhdGZvcm0sXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50QWN0aW9uOiB0aGlzLnBhZ2VUaXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRMYWJlbDogbGFiZWxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBRdWlja3R1YmU7XG59KCk7XG5cbnZhciBpbnNlcnRTY3JpcHQgPSBmdW5jdGlvbiBpbnNlcnRTY3JpcHQodXJsKSB7XG4gICAgdmFyIGlzQWxyZWFkeUluc2VydGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3NyYz1cIicgKyB1cmwgKyAnXCJdJyk7XG5cbiAgICBpZiAoIWlzQWxyZWFkeUluc2VydGVkKSB7XG4gICAgICAgIHZhciBmaXJzdFNjcmlwdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdCcpO1xuICAgICAgICB2YXIgbmV3U2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIG5ld1NjcmlwdC5zcmMgPSB1cmw7XG4gICAgICAgIGZpcnN0U2NyaXB0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld1NjcmlwdCwgZmlyc3RTY3JpcHQpO1xuICAgIH1cbn07XG5cblF1aWNrdHViZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwbGF5ZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcXVpY2t0dWJlXScpKTtcblxuICAgIHJldHVybiBwbGF5ZXJzLm1hcChmdW5jdGlvbiAocGxheWVyLCBpKSB7XG4gICAgICAgIHZhciBpc1ZpbWVvID0gcGxheWVyLmdldEF0dHJpYnV0ZSgnZGF0YS1xdWlja3R1YmUtcGxhdGZvcm0nKSA9PT0gJ3ZpbWVvJztcbiAgICAgICAgdmFyIHZpZGVvSWQgPSBwbGF5ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXF1aWNrdHViZScpO1xuICAgICAgICB2YXIgcGxheWVySWQgPSBwbGF5ZXIuZ2V0QXR0cmlidXRlKCdkYXRhLXF1aWNrdHViZS1xdWlkJykgfHwgJ3F1aWNrdHViZS0nICsgaTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBKU09OLnBhcnNlKHBsYXllci5nZXRBdHRyaWJ1dGUoJ2RhdGEtcXVpY2t0dWJlLW9wdGlvbnMnKSk7XG4gICAgICAgIHZhciB2aWRlb0RvbWFpbiA9IHZvaWQgMDtcblxuICAgICAgICBpZiAoaXNWaW1lbykge1xuICAgICAgICAgICAgLy8gSW5qZWN0IHRoZSBWaW1lbyBQbGF5ZXIgQVBJXG4gICAgICAgICAgICBpbnNlcnRTY3JpcHQoVklNRU9fQVBJKTtcbiAgICAgICAgICAgIHZpZGVvRG9tYWluID0gVklNRU9fRU1CRUQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJbmplY3QgdGhlIFlvdVR1YmUgQVBJXG4gICAgICAgICAgICBpbnNlcnRTY3JpcHQoWU9VVFVCRV9BUEkpO1xuICAgICAgICAgICAgdmlkZW9Eb21haW4gPSBZT1VUVUJFX0VNQkVEO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBRdWlja3R1YmUodmlkZW9JZCwgcGxheWVySWQsIHBsYXllciwgdmlkZW9Eb21haW4sIG9wdGlvbnMpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpY2t0dWJlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWlja3R1YmUvZXMvcXVpY2t0dWJlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9