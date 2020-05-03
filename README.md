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

`$ babel --plugins transform-negative-indices`

```javascript
const array = [1, 2, 3]
const foo = array[array.length - 1]

array[array.length - 2] = 42
```

# DESCRIPTION

This is a [Babel](https://www.npmjs.com/package/babel)
[plugin](https://babeljs.io/docs/advanced/plugins/) which transforms negative
array indices into offsets from the end of the array, e.g. `array[-1]` becomes
`array[array.length - 1]`.

## USAGE

### .babelrc

`$ cat .babelrc`

```json
{
    "plugins": ["transform-negative-indices"]
}
```

### CLI

```sh
$ babel --plugins transform-negative-indices script.js
```

### API

```javascript
require('babel-core').transform('code', {
    plugins: ['transform-negative-indices']
})
```

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

- [Maintained node versions](https://nodejs.org/en/about/releases/)

# SEE ALSO

- [babel-plugin-array-last-index](https://www.npmjs.com/package/babel-plugin-array-last-index)
- [babel-plugin-negative-array-indices](https://www.npmjs.com/package/babel-plugin-negative-array-indices)

# VERSION

1.0.0

# AUTHOR

- [Dan Rouse](https://github.com/danrouse) - original version
- [chocolateboy](mailto:chocolate@cpan.org) - maintainer

# COPYRIGHT AND LICENSE

Copyright © 2016-2020 by Dan Rouse.

This is free software; you can redistribute it and/or modify it under the terms
of the [MIT License](https://opensource.org/licenses/MIT).
