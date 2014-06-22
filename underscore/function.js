/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./function/after', './function/bind', './function/bindAll', './function/compose', './function/debounce', './function/defer', './function/delay', './function/memoize', './function/negate', './function/once', './function/partial', './function/throttle', './function/wrap'], function(after, bind, bindAll, compose, debounce, defer, delay, memoize, negate, once, partial, throttle, wrap) {

  return {
    'after': after,
    'bind': bind,
    'bindAll': bindAll,
    'compose': compose,
    'debounce': debounce,
    'defer': defer,
    'delay': delay,
    'memoize': memoize,
    'negate': negate,
    'once': once,
    'partial': partial,
    'throttle': throttle,
    'wrap': wrap
  };
});
