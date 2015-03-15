define(['./assign', '../internal/assignDefaults', '../function/restParam'], function(assign, assignDefaults, restParam) {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /**
   * Assigns own enumerable properties of source object(s) to the destination
   * object for all destination properties that resolve to `undefined`. Once a
   * property is set, additional values of the same property are ignored.
   *
   * @static
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
   * // => { 'user': 'barney', 'age': 36 }
   */
  var defaults = restParam(function(args) {
    var object = args[0];
    if (object == null) {
      return object;
    }
    args.push(assignDefaults);
    return assign.apply(undefined, args);
  });

  return defaults;
});
