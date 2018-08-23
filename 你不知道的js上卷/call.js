function foo(a){
    this.a=a;
}
var a = 1
let bar = new foo(2);
console.log(bar);