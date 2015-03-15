define(['../internal/arrayMap', '../internal/baseDifference', '../internal/baseFlatten', '../internal/bindCallback', './keysIn', '../internal/pickByArray', '../internal/pickByCallback', '../function/restParam'], function(arrayMap, baseDifference, baseFlatten, bindCallback, keysIn, pickByArray, pickByCallback, restParam) {

  /**
   * The opposite of `_.pick`; this method creates an object composed of the
   * own and inherited enumerable properties of `object` that are not omitted.
   * Property names may be specified as individual arguments or as arrays of
   * property names. If `predicate` is provided it is invoked for each property
   * of `object` omitting the properties `predicate` returns truthy for. The
   * predicate is bound to `thisArg` and invoked with three arguments:
   * (value, key, object).
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The source object.
   * @param {Function|...(string|string[])} [predicate] The function invoked per
   *  iteration or property names to omit, specified as individual property
   *  names or arrays of property names.
   * @param {*} [thisArg] The `this` binding of `predicate`.
   * @returns {Object} Returns the new object.
   * @example
   *
   * var object = { 'user': 'fred', 'age': 40 };
   *
   * _.omit(object, 'age');
   * // => { 'user': 'fred' }
   *
   * _.omit(object, _.isNumber);
   * // => { 'user': 'fred' }
   */
  var omit = restParam(function(object, props) {
    if (object == null) {
      return {};
    }
    if (typeof props[0] != 'function') {
      var props = arrayMap(baseFlatten(props), String);
      return pickByArray(object, baseDifference(keysIn(object), props));
    }
    var predicate = bindCallback(props[0], props[1], 3);
    return pickByCallback(object, function(value, key, object) {
      return !predicate(value, key, object);
    });
  });

  return omit;
});
