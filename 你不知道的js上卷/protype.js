let myObject={
    a:2
}
let anotherObject=Object.create(myObject);
console.log(anotherObject.a);
for(let x in anotherObject){
    console.log(`found:${x}`)
}
console.log(('a' in anotherObject))
console.log(anotherObject.hasOwnProperty('a'))
console.log(myObject.hasOwnProperty('a'))
// anotherObject.a++;
// console.log(anotherObject.a)
// console.log(myObject.a)
myObject.a++;
console.log(anotherObject.a)
console.log(myObject.a)
function Foo(){

}
let a=new Foo();
console.log(Object.getPrototypeOf(a)===Foo.prototype);

function NothingSpecial(){
    console.log("Don't mind me!");
}
let nothingSpecial = new NothingSpecial();
console.log(nothingSpecial)

