/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utilities/constant', './functions/createCallback', './utilities/escape', './utilities/identity', './utilities/matches', './utilities/mixin', './utilities/noConflict', './utilities/now', './utilities/property', './utilities/random', './arrays/range', './utilities/result', './utilities/template', './utilities/templateSettings', './utilities/times', './utilities/unescape', './utilities/uniqueId'], function(constant, createCallback, escape, identity, matches, mixin, noConflict, now, property, random, range, result, template, templateSettings, times, unescape, uniqueId) {

  return {
    'callback': createCallback,
    'constant': constant,
    'createCallback': createCallback,
    'escape': escape,
    'identity': identity,
    'matches': matches,
    'mixin': mixin,
    'noConflict': noConflict,
    'now': now,
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
