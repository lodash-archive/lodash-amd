/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internals/baseCreateCallback', '../internals/baseForRight', './keys'], function(baseCreateCallback, baseForRight, keys) {

  /**
   * This method is like `_.forOwn` except that it iterates over elements of a
   * collection in the opposite order.
   *
   * @static
   * @memberOf _
   * @category Objects
   * @param {Object} object The object to iterate over.
   * @param {Function} [callback=identity] The function called per iteration.
   * @param {*} [thisArg] The `this` binding of `callback`.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
   *   console.log(key);
   * });
   * // => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
   */
  function forOwnRight(object, callback, thisArg) {
    callback = baseCreateCallback(callback, thisArg, 3);
    return baseForRight(object, callback, keys);
  }

  return forOwnRight;
});
