/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utilities/constant', './functions/createCallback', './utilities/escape', './utilities/identity', './utilities/matches', './utilities/mixin', './utilities/noConflict', './utilities/noop', './utilities/now', './utilities/parseInt', './utilities/property', './utilities/random', './arrays/range', './utilities/result', './utilities/template', './utilities/templateSettings', './utilities/times', './utilities/unescape', './utilities/uniqueId'], function(constant, createCallback, escape, identity, matches, mixin, noConflict, noop, now, parseInt, property, random, range, result, template, templateSettings, times, unescape, uniqueId) {

  return {
    'callback': createCallback,
    'constant': constant,
    'createCallback': createCallback,
    'escape': escape,
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
    'template': template,
    'templateSettings': templateSettings,
    'times': times,
    'unescape': unescape,
    'uniqueId': uniqueId
  };
});
