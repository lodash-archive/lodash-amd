/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./arrays/compact', './arrays/difference', './arrays/findIndex', './arrays/findLastIndex', './arrays/first', './arrays/flatten', './arrays/indexOf', './arrays/initial', './arrays/intersection', './arrays/last', './arrays/lastIndexOf', './arrays/pull', './arrays/range', './arrays/remove', './arrays/rest', './arrays/slice', './arrays/sortedIndex', './arrays/union', './arrays/uniq', './arrays/without', './arrays/xor', './arrays/zip', './arrays/zipObject'], function(compact, difference, findIndex, findLastIndex, first, flatten, indexOf, initial, intersection, last, lastIndexOf, pull, range, remove, rest, slice, sortedIndex, union, uniq, without, xor, zip, zipObject) {

  return {
    'compact': compact,
    'difference': difference,
    'drop': rest,
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
    'take': first,
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
