/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utilities/escape', './strings/escapeRegExp', './utilities/template', './utilities/templateSettings', './utilities/unescape'], function(escape, escapeRegExp, template, templateSettings, unescape) {

  return {
    'escape': escape,
    'escapeRegExp': escapeRegExp,
    'template': template,
    'templateSettings': templateSettings,
    'unescape': unescape
  };
});
