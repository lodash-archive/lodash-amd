/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./arrayPool'], function(arrayPool) {

  /** Used as the max size of the `arrayPool` and `objectPool` */
  var MAX_POOL_SIZE = 40;

  /**
   * Releases `array` back to the array pool.
   *
   * @private
   * @param {Array} array The array to release.
   */
  function releaseArray(array) {
    array.length = 0;
    if (arrayPool.length < MAX_POOL_SIZE) {
      arrayPool.push(array);
    }
  }

  return releaseArray;
});
