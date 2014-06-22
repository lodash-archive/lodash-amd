/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./collection/contains', './collection/countBy', './collection/every', './collection/filter', './collection/find', './collection/findWhere', './collection/forEach', './collection/groupBy', './collection/indexBy', './collection/invoke', './collection/map', './collection/max', './collection/min', './collection/partition', './collection/pluck', './collection/reduce', './collection/reduceRight', './collection/reject', './collection/sample', './collection/shuffle', './collection/size', './collection/some', './collection/sortBy', './collection/toArray', './collection/where'], function(contains, countBy, every, filter, find, findWhere, forEach, groupBy, indexBy, invoke, map, max, min, partition, pluck, reduce, reduceRight, reject, sample, shuffle, size, some, sortBy, toArray, where) {

  return {
    'all': every,
    'any': some,
    'collect': map,
    'contains': contains,
    'countBy': countBy,
    'detect': find,
    'each': forEach,
    'every': every,
    'filter': filter,
    'find': find,
    'findWhere': findWhere,
    'foldl': reduce,
    'foldr': reduceRight,
    'forEach': forEach,
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
