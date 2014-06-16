/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./slice'], function(slice) {

  /**
   * Gets all but the last element of `array`.
   *
   * Note: The `n` and `predicate` arguments are deprecated; replace with
   * `_.dropRight` and `_.dropRightWhile` respectively.
   *
   * @static
   * @memberOf _
   * @category Arrays
   * @param {Array} array The array to query.
   * @returns {Array} Returns the slice of `array`.
   * @example
   *
   * _.initial([1, 2, 3]);
   * // => [1, 2]
   */
  function initial(array, n, guard) {
    var length = array ? array.length : 0;
    if (n == null || guard) {
      n = 1;
    }
    n = length - (n || 0);
    return slice(array, 0, n < 0 ? 0 : n);
  }

  return initial;
});
