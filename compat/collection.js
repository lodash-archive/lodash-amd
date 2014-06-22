/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./collection/at', './collection/contains', './collection/countBy', './collection/every', './collection/filter', './collection/find', './collection/findLast', './collection/findWhere', './collection/forEach', './collection/forEachRight', './collection/groupBy', './collection/indexBy', './collection/invoke', './collection/map', './collection/max', './collection/min', './collection/partition', './collection/pluck', './collection/reduce', './collection/reduceRight', './collection/reject', './collection/sample', './collection/shuffle', './collection/size', './collection/some', './collection/sortBy', './collection/toArray', './collection/where'], function(at, contains, countBy, every, filter, find, findLast, findWhere, forEach, forEachRight, groupBy, indexBy, invoke, map, max, min, partition, pluck, reduce, reduceRight, reject, sample, shuffle, size, some, sortBy, toArray, where) {

  return {
    'all': every,
    'any': some,
    'at': at,
    'collect': map,
    'contains': contains,
    'countBy': countBy,
    'detect': find,
    'each': forEach,
    'eachRight': forEachRight,
    'every': every,
    'filter': filter,
    'find': find,
    'findLast': findLast,
    'findWhere': findWhere,
    'foldl': reduce,
    'foldr': reduceRight,
    'forEach': forEach,
    'forEachRight': forEachRight,
    'groupBy': groupBy,
    'include': contains,
    'indexBy': indexBy,
    'inject': reduce,
    'invoke': invoke,
    'map': map,
    'max': max,
    'min': min,
    'partition': partition,
    'pluck': pluck,
    'reduce': reduce,
    'reduceRight': reduceRight,
    'reject': reject,
    'sample': sample,
    'select': filter,
    'shuffle': shuffle,
    'size': size,
    'some': some,
    'sortBy': sortBy,
    'toArray': toArray,
    'where': where
  };
});
