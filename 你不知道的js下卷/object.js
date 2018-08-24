// let o={
//     foo:42,
//     [Symbol("bar")]:'hello world',
//     baz:true
// }
// console.log(Object.getOwnPropertySymbols(o));
// console.log(o)



var a = { name:'小明' };
var b = cloneObj(a);
function cloneObj(obj) {
    var f = function (){ };
        f.prototype = obj;
    return new f();
}
console.log(a)
console.log(b.name)