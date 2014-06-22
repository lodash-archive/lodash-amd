/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./object/assign', './object/clone', './object/defaults', './object/functions', './object/has', './object/invert', './object/isArguments', './object/isArray', './object/isBoolean', './object/isDate', './object/isElement', './object/isEmpty', './object/isEqual', './object/isFinite', './object/isFunction', './object/isNaN', './object/isNull', './object/isNumber', './object/isObject', './object/isRegExp', './object/isString', './object/isUndefined', './object/keys', './object/keysIn', './object/omit', './object/pairs', './object/pick', './object/values'], function(assign, clone, defaults, functions, has, invert, isArguments, isArray, isBoolean, isDate, isElement, isEmpty, isEqual, isFinite, isFunction, isNaN, isNull, isNumber, isObject, isRegExp, isString, isUndefined, keys, keysIn, omit, pairs, pick, values) {

  return {
    'assign': assign,
    'clone': clone,
    'defaults': defaults,
    'extend': assign,
    'functions': functions,
    'has': has,
    'invert': invert,
    'isArguments': isArguments,
    'isArray': isArray,
    'isBoolean': isBoolean,
    'isDate': isDate,
    'isElement': isElement,
    'isEmpty': isEmpty,
    'isEqual': isEqual,
    'isFinite': isFinite,
    'isFunction': isFunction,
    'isNaN': isNaN,
    'isNull': isNull,
    'isNumber': isNumber,
    'isObject': isObject,
    'isRegExp': isRegExp,
    'isString': isString,
    'isUndefined': isUndefined,
    'keys': keys,
    'keysIn': keysIn,
    'methods': functions,
    'omit': omit,
    'pairs': pairs,
    'pick': pick,
    'values': values
  };
});
