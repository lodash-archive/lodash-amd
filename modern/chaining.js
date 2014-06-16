/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./chaining/chain', './chaining/tap', './chaining/wrapperChain', './chaining/wrapperToString', './chaining/wrapperValueOf'], function(chain, tap, wrapperChain, wrapperToString, wrapperValueOf) {

  return {
    'chain': chain,
    'tap': tap,
    'toJSON': wrapperValueOf,
    'value': wrapperValueOf,
    'wrapperChain': wrapperChain,
    'wrapperToString': wrapperToString,
    'wrapperValueOf': wrapperValueOf
  };
});
