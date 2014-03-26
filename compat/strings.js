/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./strings/camelCase', './strings/capitalize', './strings/endsWith', './utilities/escape', './strings/escapeRegExp', './strings/kebabCase', './strings/pad', './strings/padLeft', './strings/padRight', './strings/repeat', './strings/snakeCase', './strings/startsWith', './utilities/template', './utilities/templateSettings', './strings/trim', './strings/trimLeft', './strings/trimRight', './strings/truncate', './utilities/unescape'], function(camelCase, capitalize, endsWith, escape, escapeRegExp, kebabCase, pad, padLeft, padRight, repeat, snakeCase, startsWith, template, templateSettings, trim, trimLeft, trimRight, truncate, unescape) {

  return {
    'camelCase': camelCase,
    'capitalize': capitalize,
    'endsWith': endsWith,
    'escape': escape,
    'escapeRegExp': escapeRegExp,
    'kebabCase': kebabCase,
    'pad': pad,
    'padLeft': padLeft,
    'padRight': padRight,
    'repeat': repeat,
    'snakeCase': snakeCase,
    'startsWith': startsWith,
    'template': template,
    'templateSettings': templateSettings,
    'trim': trim,
    'trimLeft': trimLeft,
    'trimRight': trimRight,
    'truncate': truncate,
    'unescape': unescape
  };
});
