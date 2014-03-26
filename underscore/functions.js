/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./functions/after', './functions/bind', './functions/bindAll', './functions/compose', './functions/createCallback', './functions/debounce', './functions/defer', './functions/delay', './functions/memoize', './functions/negate', './functions/once', './functions/partial', './functions/throttle', './functions/wrap'], function(after, bind, bindAll, compose, createCallback, debounce, defer, delay, memoize, negate, once, partial, throttle, wrap) {

  return {
    'after': after,
    'bind': bind,
    'bindAll': bindAll,
    'callback': createCallback,
    'compose': compose,
    'createCallback': createCallback,
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
