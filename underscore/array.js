/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./array/compact', './array/difference', './array/drop', './array/findIndex', './array/first', './array/flatten', './array/indexOf', './array/initial', './array/intersection', './array/last', './array/lastIndexOf', './array/rest', './array/slice', './array/sortedIndex', './array/take', './array/union', './array/uniq', './array/without', './array/zip', './array/zipObject'], function(compact, difference, drop, findIndex, first, flatten, indexOf, initial, intersection, last, lastIndexOf, rest, slice, sortedIndex, take, union, uniq, without, zip, zipObject) {

  return {
    'compact': compact,
    'difference': difference,
    'drop': drop,
    'findIndex': findIndex,
    'first': first,
    'flatten': flatten,
    'head': first,
    'indexOf': indexOf,
    'initial': initial,
    'intersection': intersection,
    'last': last,
    'lastIndexOf': lastIndexOf,
    'object': zipObject,
    'rest': rest,
    'slice': slice,
    'sortedIndex': sortedIndex,
    'tail': rest,
    'take': take,
    'union': union,
    'uniq': uniq,
    'unique': uniq,
    'unzip': zip,
    'without': without,
    'zip': zip,
    'zipObject': zipObject
  };
});
