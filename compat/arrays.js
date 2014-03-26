/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./arrays/compact', './arrays/difference', './arrays/drop', './arrays/dropRight', './arrays/dropRightWhile', './arrays/dropWhile', './arrays/findIndex', './arrays/findLastIndex', './arrays/first', './arrays/flatten', './arrays/indexOf', './arrays/initial', './arrays/intersection', './arrays/last', './arrays/lastIndexOf', './arrays/pull', './arrays/range', './arrays/remove', './arrays/rest', './arrays/slice', './arrays/sortedIndex', './arrays/take', './arrays/takeRight', './arrays/takeRightWhile', './arrays/takeWhile', './arrays/union', './arrays/uniq', './arrays/without', './arrays/xor', './arrays/zip', './arrays/zipObject'], function(compact, difference, drop, dropRight, dropRightWhile, dropWhile, findIndex, findLastIndex, first, flatten, indexOf, initial, intersection, last, lastIndexOf, pull, range, remove, rest, slice, sortedIndex, take, takeRight, takeRightWhile, takeWhile, union, uniq, without, xor, zip, zipObject) {

  return {
    'compact': compact,
    'difference': difference,
    'drop': drop,
    'dropRight': dropRight,
    'dropRightWhile': dropRightWhile,
    'dropWhile': dropWhile,
    'findIndex': findIndex,
    'findLastIndex': findLastIndex,
    'first': first,
    'flatten': flatten,
    'head': first,
    'indexOf': indexOf,
    'initial': initial,
    'intersection': intersection,
    'last': last,
    'lastIndexOf': lastIndexOf,
    'object': zipObject,
    'pull': pull,
    'range': range,
    'remove': remove,
    'rest': rest,
    'slice': slice,
    'sortedIndex': sortedIndex,
    'tail': rest,
    'take': take,
    'takeRight': takeRight,
    'takeRightWhile': takeRightWhile,
    'takeWhile': takeWhile,
    'union': union,
    'uniq': uniq,
    'unique': uniq,
    'unzip': zip,
    'without': without,
    'xor': xor,
    'zip': zip,
    'zipObject': zipObject
  };
});
