/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="amd" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./chain/chain', './chain/lodash', './chain/tap', './chain/wrapperChain', './chain/wrapperToString', './chain/wrapperValueOf'], function(chain, lodash, tap, wrapperChain, wrapperToString, wrapperValueOf) {

  return {
    'chain': chain,
    'lodash': lodash,
    'tap': tap,
    'toJSON': wrapperValueOf,
    'value': wrapperValueOf,
    'wrapperChain': wrapperChain,
    'wrapperToString': wrapperToString,
    'wrapperValueOf': wrapperValueOf
  };
});
