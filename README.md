# lodash-amd v3.10.1

The [compatibility & modern builds](https://github.com/lodash/lodash/wiki/Build-Differences) of [lodash](https://lodash.com/) exported as [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) modules.

Generated using [lodash-cli](https://www.npmjs.com/package/lodash-cli):
```bash
$ lodash modularize compat exports=amd -o ./compat && lodash compat exports=amd -d -o ./compat/main.js
$ lodash modularize modern exports=amd -o ./modern && lodash modern exports=amd -d -o ./modern/main.js
```

## Deprecated

The `lodash-amd` package is deprecated in favor of [lodash@amd](https://github.com/lodash/lodash/tree/3.10.1-amd) & [lodash-compat@amd](https://github.com/lodash/lodash-compat/tree/3.10.1-amd) ≥ v3.0.0.

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

See the [package source](https://github.com/lodash/lodash-amd/tree/3.10.1) for more details.
