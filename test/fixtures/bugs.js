// this didn't work in babel-plugin-array-last-index XXX fixed now
// https://github.com/lijinke666/babel-plugin-array-last-index/issues/3

foo = array[-1]

// babel-plugin-array-last-index intercepts `get` calls for some reason
// confirm we don't

const array = [1, 2, 3]

get(array, '[-1]')
