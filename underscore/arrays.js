/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./arrays/compact', './arrays/difference', './arrays/drop', './arrays/findIndex', './arrays/first', './arrays/flatten', './arrays/indexOf', './arrays/initial', './arrays/intersection', './arrays/last', './arrays/lastIndexOf', './arrays/range', './arrays/rest', './arrays/slice', './arrays/sortedIndex', './arrays/take', './arrays/union', './arrays/uniq', './arrays/without', './arrays/zip', './arrays/zipObject'], function(compact, difference, drop, findIndex, first, flatten, indexOf, initial, intersection, last, lastIndexOf, range, rest, slice, sortedIndex, take, union, uniq, without, zip, zipObject) {

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
    'range': range,
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
