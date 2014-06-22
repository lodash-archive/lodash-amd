/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="amd" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./function/after', './function/bind', './function/bindAll', './function/bindKey', './function/compose', './function/curry', './function/debounce', './function/defer', './function/delay', './function/memoize', './function/negate', './function/once', './function/partial', './function/partialRight', './function/throttle', './function/wrap'], function(after, bind, bindAll, bindKey, compose, curry, debounce, defer, delay, memoize, negate, once, partial, partialRight, throttle, wrap) {

  return {
    'after': after,
    'bind': bind,
    'bindAll': bindAll,
    'bindKey': bindKey,
    'compose': compose,
    'curry': curry,
    'debounce': debounce,
    'defer': defer,
    'delay': delay,
    'memoize': memoize,
    'negate': negate,
    'once': once,
    'partial': partial,
    'partialRight': partialRight,
    'throttle': throttle,
    'wrap': wrap
  };
});
