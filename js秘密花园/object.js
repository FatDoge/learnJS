// var test = {
//     'case': 'I am a keyword so I must be notated as a string',
//     delete: 'I am a keyword too so me' //出错： S y n t a x E r r o r
// };
// console.log(test.delete)
// let foo = function bar() {
//     console.log('yep')
//     bar()
// }//赋值语句只在运行时执行
// console.log(this)

// function foo(){
//     console.log(this)
// }
// let bar=new foo()
// bar

// let test={
//     foo(){
//         console.log(this)
//     }
// }
// test.foo()

function Foo() { }
Foo.prototype.method = function (a, b, c) {
    console.log(this, a, b, c);
};

Foo.method = function () {
    Function.call.apply(Foo.prototype.method, arguments);
};
Foo.method(1,2,3,4,1)
// bar();
// var bar=function(){}
let it = Array.of(3)
console.log(typeof new Function(""))
let id = setTimeout(Foo, 1000)
clearTimeout(id)