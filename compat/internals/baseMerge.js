/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./arrayEach', './baseForOwn', '../objects/isArray', './isArrayLike', '../objects/isPlainObject'], function(arrayEach, baseForOwn, isArray, isArrayLike, isPlainObject) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /**
   * The base implementation of `_.merge` without support for argument juggling,
   * multiple sources, and `this` binding.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {Function} [callback] The function to customize merging properties.
   * @param {Array} [stackA=[]] Tracks traversed source objects.
   * @param {Array} [stackB=[]] Associates values with source counterparts.
   * @returns {Object} Returns the destination object.
   */
  function baseMerge(object, source, callback, stackA, stackB) {
    var isSrcArr = isArrayLike(source);
    (isSrcArr ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
      var isArr = srcValue && isArrayLike(srcValue),
          isObj = srcValue && isPlainObject(srcValue),
          value = object[key];

      if (!(isArr || isObj)) {
        result = callback ? callback(value, srcValue, key, object, source) : undefined;
        if (typeof result == 'undefined') {
          result = srcValue;
        }
        if (isSrcArr || typeof result != 'undefined') {
          object[key] = result;
        }
        return;
      }
      // avoid merging previously merged cyclic sources
      stackA || (stackA = []);
      stackB || (stackB = []);

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == srcValue) {
          object[key] = stackB[length];
          return;
        }
      }
      var result = callback ? callback(value, srcValue, key, object, source) : undefined,
          isShallow = typeof result != 'undefined';

      if (!isShallow) {
        result = isArr
          ? (isArray(value) ? value : [])
          : (isPlainObject(value) ? value : {});
      }
      // add the source value to the stack of traversed objects
      // and associate it with its merged value
      stackA.push(srcValue);
      stackB.push(result);

      // recursively merge objects and arrays (susceptible to call stack limits)
      if (!isShallow) {
        baseMerge(result, srcValue, callback, stackA, stackB);
      }
      object[key] = result;
    });

    return object;
  }

  return baseMerge;
});
