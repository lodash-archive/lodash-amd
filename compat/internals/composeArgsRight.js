/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define([], function() {

  /* Native method shortcuts for methods with the same name as other `lodash` methods */
  var nativeMax = Math.max;

  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array} partialRightArg An array of arguments to append to those provided.
   * @param {Array} partialHolders An array of `partialRightArgs` placeholder indexes.
   * @param {Array|Object} args The provided arguments.
   * @returns {Array} Returns a new array of composed arguments.
   */
  function composeArgsRight(partialRightArgs, partialRightHolders, args) {
    var index = -1,
        length = partialRightHolders.length,
        argsIndex = -1,
        argsLength = nativeMax(args.length - length, 0),
        rightIndex = -1,
        rightLength = partialRightArgs.length,
        result = Array(argsLength + rightLength);

    while (++argsIndex < argsLength) {
      result[argsIndex] = args[argsIndex];
    }
    var pad = argsIndex;
    while (++rightIndex < rightLength) {
      result[pad + rightIndex] = partialRightArgs[rightIndex];
    }
    while (++index < length) {
      result[pad + partialHolders[index]] = args[argsIndex++];
    }
    return result;
  }

  return composeArgsRight;
});