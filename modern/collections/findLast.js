/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../arrays/findLastIndex', '../objects/findLastKey'], function(findLastIndex, findLastKey) {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /**
   * Used as the maximum length an array-like object.
   * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
   * for more details.
   */
  var maxSafeInteger = Math.pow(2, 53) - 1;

  /**
   * This method is like `_.find` except that it iterates over elements of a
   * collection from right to left.
   *
   * @static
   * @memberOf _
   * @category Collections
   * @param {Array|Object|string} collection The collection to search.
   * @param {Function|Object|string} [predicate=identity] The function called
   *  per iteration. If a property name or object is provided it will be used
   *  to create a "_.pluck" or "_.where" style callback, respectively.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {*} Returns the found element, else `undefined`.
   * @example
   *
   * _.findLast([1, 2, 3, 4], function(num) {
   *   return num % 2 == 1;
   * });
   * // => 3
   */
  function findLast(collection, predicate, thisArg) {
    var length = collection ? collection.length : 0;
    if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
      var index = findLastIndex(collection, predicate, thisArg);
      return index > -1 ? collection[index] : undefined;
    }
    var key = findLastKey(collection, predicate, thisArg);
    return typeof key == 'string' ? collection[key] : undefined;
  }

  return findLast;
});
