/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./utilities/escape', './utilities/template', './utilities/templateSettings', './strings/trim', './strings/trimLeft', './strings/trimRight', './utilities/unescape'], function(escape, template, templateSettings, trim, trimLeft, trimRight, unescape) {

  return {
    'escape': escape,
    'template': template,
    'templateSettings': templateSettings,
    'trim': trim,
    'trimLeft': trimLeft,
    'trimRight': trimRight,
    'unescape': unescape
  };
});
