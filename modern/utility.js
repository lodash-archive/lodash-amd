/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utility/callback', './utility/constant', './utility/identity', './utility/matches', './utility/mixin', './utility/noConflict', './utility/noop', './utility/now', './utility/parseInt', './utility/property', './utility/random', './utility/range', './utility/result', './utility/times', './utility/uniqueId'], function(callback, constant, identity, matches, mixin, noConflict, noop, now, parseInt, property, random, range, result, times, uniqueId) {

  return {
    'callback': callback,
    'constant': constant,
    'identity': identity,
    'matches': matches,
    'mixin': mixin,
    'noConflict': noConflict,
    'noop': noop,
    'now': now,
    'parseInt': parseInt,
    'property': property,
    'random': random,
    'range': range,
    'result': result,
    'times': times,
    'uniqueId': uniqueId
  };
});
