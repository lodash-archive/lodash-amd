# lodash-amd v3.10.2

The compatibility & modern builds of [lodash](https://lodash.com/) exported as [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules.

## Discontinued

This package has been discontinued in favor of [lodash@amd](https://github.com/lodash/lodash/tree/amd).

## Installation

Defining a build as `'lodash'`.

```js
require({
  'packages': [
    { 'name': 'lodash', 'location': 'lodash-amd/modern' }
  ]
}, ['lodash/array/chunk'], function(chunk) {
  // use `chunk`
});
```

See the [package source](https://github.com/lodash/lodash-amd/tree/3.10.2) for more details.
