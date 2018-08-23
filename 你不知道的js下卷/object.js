let o={
    foo:42,
    [Symbol("bar")]:'hello world',
    baz:true
}
console.log(Object.getOwnPropertySymbols(o));
console.log(o)