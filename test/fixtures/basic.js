// these should work

let foo = array[-1]

array[-2] = 42

// these should be unchanged

let bar = array[0]
let baz = array[1]
let quux = array[42]

array[+42] = array[10 -1]
