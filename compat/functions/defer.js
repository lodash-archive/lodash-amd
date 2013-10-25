/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../objects/isFunction', '../internals/objectTypes', '../internals/reNative', '../internals/slice'], function(isFunction, objectTypes, reNative, slice) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /** Detect free variable `exports` */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module` */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports` */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to resolve the internal [[Class]] of values */
  var toString = objectProto.toString;

  var nativeBind = (function() {
    // Narwhal doesn't accept `undefined` as the `thisArg`
    try {
      var result = toString.bind;
      return reNative.test(result) && result.bind() && result;
    } catch(e) { }
    return false;
  }());

  /** Detect various environments */
  var isIeOpera = reNative.test(window.attachEvent),
      isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

  /**
   * Defers executing the `func` function until the current call stack has cleared.
   * Additional arguments will be provided to `func` when it is invoked.
   *
   * @static
   * @memberOf _
   * @category Functions
   * @param {Function} func The function to defer.
   * @param {...*} [arg] Arguments to invoke the function with.
   * @returns {number} Returns the timer id.
   * @example
   *
   * _.defer(function() { console.log('deferred'); });
   * // returns from the function before 'deferred' is logged
   */
  function defer(func) {
    if (!isFunction(func)) {
      throw new TypeError;
    }
    var args = slice(arguments, 1);
    return setTimeout(function() { func.apply(undefined, args); }, 1);
  }
  // use `setImmediate` if available in Node.js
  if (isV8 && moduleExports && typeof setImmediate == 'function') {
    defer = function(func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      return setImmediate.apply(root, arguments);
    };
  }

  return defer;
});
