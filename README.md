# lodash-amd v1.3.1

A collection of Lo-Dash methods as AMD modules.

## Packages

Define a build as `'lodash'` (instead of `'lodash-amd/{build}'`)

```js
require({
  'packages': [
    { 'name': 'lodash', 'location': 'lodash-amd/modern', 'main': 'lodash' }
  ]
}, ['lodash/collections/forEach'], function(forEach){
  // use forEach
});
```

## Migrations

Easily migrate underscore code to lodash code.

```js
require({
  require({
  'packages': [
    { 'name': 'lodash', 'location': 'lodash-amd/modern', 'main': 'lodash' },
    { 'name': 'underscore', 'location': 'lodash-amd/underscore', 'main': 'lodash' }
  ]
}, [], function(){});
```

When working with code that must have underscore compatibility, just import the `'underscore'` dependency.
If you don't need underscore compatibility and want the benefits of lodash, import `'lodash'` dependency.
You can even mix and match.

```js
define(['underscore', 'lodash/collections/transform'], function(_, transform){
  // use _ prefixed code with underscore
  // use transform from lodash
});
```

Eventually, when underscore compatibility is no longer needed, just switch your `packages` configuration.

```js
require({
  require({
  'packages': [
    { 'name': 'lodash', 'location': 'lodash-amd/modern', 'main': 'lodash' },
    { 'name': 'underscore', 'location': 'lodash-amd/modern', 'main': 'lodash' }
  ]
}, [], function(){});
```

## Author

| [![twitter/jdalton](http://gravatar.com/avatar/299a3d891ff1920b69c364d061007043?s=70)](http://twitter.com/jdalton "Follow @jdalton on Twitter") |
|---|
| [John-David Dalton](http://allyoucanleet.com/) |

## Contributors

| [![twitter/blainebublitz](http://gravatar.com/avatar/ac1c67fd906c9fecd823ce302283b4c1?s=70)](http://twitter.com/blainebublitz "Follow @BlaineBublitz on Twitter") | [![twitter/kitcambridge](http://gravatar.com/avatar/6662a1d02f351b5ef2f8b4d815804661?s=70)](https://twitter.com/kitcambridge "Follow @kitcambridge on Twitter") | [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|---|---|
| [Blaine Bublitz](http://iceddev.com/) | [Kit Cambridge](http://kitcambridge.github.io/) | [Mathias Bynens](http://mathiasbynens.be/) |
