/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./string/camelCase', './string/capitalize', './string/endsWith', './string/escape', './string/escapeRegExp', './string/kebabCase', './string/pad', './string/padLeft', './string/padRight', './string/repeat', './string/snakeCase', './string/startsWith', './string/template', './string/templateSettings', './string/trim', './string/trimLeft', './string/trimRight', './string/trunc', './string/unescape'], function(camelCase, capitalize, endsWith, escape, escapeRegExp, kebabCase, pad, padLeft, padRight, repeat, snakeCase, startsWith, template, templateSettings, trim, trimLeft, trimRight, trunc, unescape) {

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
    'trunc': trunc,
    'unescape': unescape
  };
});
