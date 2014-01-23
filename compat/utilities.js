/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utilities/constant', './functions/createCallback', './utilities/escape', './utilities/identity', './utilities/match', './utilities/mixin', './utilities/noConflict', './utilities/noop', './utilities/now', './utilities/parseInt', './utilities/property', './utilities/random', './utilities/result', './utilities/template', './utilities/templateSettings', './utilities/times', './utilities/unescape', './utilities/uniqueId'], function(constant, createCallback, escape, identity, match, mixin, noConflict, noop, now, parseInt, property, random, result, template, templateSettings, times, unescape, uniqueId) {

  return {
    'callback': createCallback,
    'constant': constant,
    'createCallback': createCallback,
    'escape': escape,
    'identity': identity,
    'match': match,
    'mixin': mixin,
    'noConflict': noConflict,
    'noop': noop,
    'now': now,
    'parseInt': parseInt,
    'property': property,
    'random': random,
    'result': result,
    'template': template,
    'templateSettings': templateSettings,
    'times': times,
    'unescape': unescape,
    'uniqueId': uniqueId
  };
});
