/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./baseForIn', '../objects/isFunction'], function(baseForIn, isFunction) {

  /** `Object#toString` result shortcuts */
  var objectClass = '[object Object]';

  /** Used for native method references */
  var objectProto = Object.prototype;

  /** Used to resolve the internal `[[Class]]` of values */
  var toString = objectProto.toString;

  /** Native method shortcuts */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * A fallback implementation of `_.isPlainObject` which checks if `value`
   * is an object created by the `Object` constructor or has a `[[Prototype]]`
   * of `null`.
   *
   * Note: This method assumes objects created by the `Object` constructor
   * have no inherited enumerable properties.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   */
  function shimIsPlainObject(value) {
    var ctor,
        result;

    // avoid non `Object` objects, `arguments` objects, and DOM elements
    if (!(value && toString.call(value) == objectClass) ||
        (!hasOwnProperty.call(value, 'constructor') &&
          (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor)))) {
      return false;
    }
    // In most environments an object's own properties are iterated before
    // its inherited properties. If the last iterated property is an object's
    // own property then there are no inherited enumerable properties.
    baseForIn(value, function(value, key) {
      result = key;
    });
    return typeof result == 'undefined' || hasOwnProperty.call(value, result);
  }

  return shimIsPlainObject;
});
