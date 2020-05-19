# babel-plugin-transform-negative-indices

[![Build Status](https://travis-ci.org/chocolateboy/babel-plugin-transform-negative-indices.svg)](https://travis-ci.org/chocolateboy/babel-plugin-transform-negative-indices)
[![NPM Version](https://img.shields.io/npm/v/babel-plugin-transform-negative-indices.svg)](https://www.npmjs.org/package/babel-plugin-transform-negative-indices)

<!-- toc -->

- [NAME](#name)
- [INSTALLATION](#installation)
- [SYNOPSIS](#synopsis)
- [DESCRIPTION](#description)
- [USAGE](#usage)
  - [.babelrc](#babelrc)
  - [CLI](#cli)
  - [API](#api)
- [DEVELOPMENT](#development)
  - [NPM Scripts](#npm-scripts)
- [COMPATIBILITY](#compatibility)
- [SEE ALSO](#see-also)
  - [Babel Plugins](#babel-plugins)
  - [Other](#other)
- [VERSION](#version)
- [AUTHOR](#author)
- [COPYRIGHT AND LICENSE](#copyright-and-license)

<!-- tocstop -->

# NAME

babel-plugin-transform-negative-indices - turn negative array indices into offsets from the end of the array

# INSTALLATION

```sh
$ npm install babel-plugin-transform-negative-indices
```

# SYNOPSIS

`$ cat test.js`

```javascript
const array = [1, 2, 3]
const foo = array[-1]

array[-2] = 42
```

`$ babel --plugins transform-negative-indices test.js`

```javascript
const array = [1, 2, 3]
const foo = array[array.length - 1]

array[array.length - 2] = 42
```

# DESCRIPTION

This is a [Babel](https://babeljs.io/)
[plugin](https://babeljs.io/docs/plugins/) which transforms negative
array indices into offsets from the end of the array, e.g. `array[-1]` becomes
`array[array.length - 1]`.

# USAGE

<details>

## .babelrc

`$ cat .babelrc`

```json
{
    "plugins": ["transform-negative-indices"]
}
```

## CLI

```sh
$ babel --plugins transform-negative-indices script.js
```

## API

```javascript
require('@babel/core').transform(code, {
    plugins: ['transform-negative-indices']
})
```

</details>

# DEVELOPMENT

<details>

## NPM Scripts

The following NPM scripts are available:

- build - compile the plugin and save it to the target directory
- clean - remove the target directory and its contents
- doctoc - generate the TOC (table of contents) in the README
- rebuild - clean the target directory and recompile the plugin
- test - recompile and run the test suite
- test:unit - run the test suite

</details>

# COMPATIBILITY

- Babel 6+ (only Babel 7+ is tested/supported)
- [Maintained node versions](https://github.com/nodejs/Release#release-schedule)

# SEE ALSO

## Babel Plugins

- <s>[babel-plugin-negative-array-indices](https://www.npmjs.com/package/babel-plugin-negative-array-indices)</s> - doesn't install / unmaintained
- [babel-plugin-array-last-index](https://www.npmjs.com/package/babel-plugin-array-last-index)

## Other

- [negative-array](https://www.npmjs.com/package/negative-array) - ES6 Proxy wrapper

# VERSION

1.0.3

# AUTHOR

- [Dan Rouse](https://github.com/danrouse)
- [chocolateboy](mailto:chocolate@cpan.org) - maintainer

# COPYRIGHT AND LICENSE

Copyright © 2016-2020 by Dan Rouse.

This is free software; you can redistribute it and/or modify it under the terms
of the [MIT License](https://opensource.org/licenses/MIT).
