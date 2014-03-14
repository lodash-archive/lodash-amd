/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /** Used as the maximum value returned by `toLength` */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /**
   * Converts `value` to an integer suitable for use as the length of an array-like
   * object. See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   */
  function toLength(value) {
    var result = +value || 0;
    return result < 0 ? 0 : (result < maxSafeInteger ? result : maxSafeInteger);
  }

  return toLength;
});
