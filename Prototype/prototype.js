// /*1、字面量方式*/
// var a = {};
// console.log(a.__proto__); //Object {}

// console.log(a.__proto__ === a.constructor.prototype); //true
// console.log(a.constructor===Object)
// console.log(a.__proto__===Object.prototype)

// /*2、构造器方式*/
// var A = function () {};
// var a = new A();
// console.log(a.__proto__); //A {}
// console.log(A.__proto__===Function.prototype)
// console.log(A.prototype.__proto__===Object.prototype)
// console.log(Object.__proto__===Function.prototype)
// console.log(Object.prototype.__proto__)
// console.log(a.__proto__ === A.prototype); //true
// console.log(Function.__proto__===Function.prototype)

/*3、Object.create()方式*/
var a1 = {
    a: 1
}
var a2 = Object.create(a1);
console.log(a2.__proto__); //Object {a: 1}

console.log(a2.__proto__ === a2.constructor.prototype); //false（此处即为图1中的例外情况）


// function Person() {}
// var person1 = new Person();
// console.log(person1.__proto__ === Person.prototype); // true
// console.log(Person.prototype.__proto__ === Object.prototype) //true
// console.log(Object.prototype.__proto__) //null

// Person.__proto__ == Function.prototype; //true
// console.log(Function.prototype) // function(){} (空函数)

// var num = new Array()
// console.log(num.__proto__ == Array.prototype) // true
// console.log(Array.prototype.__proto__ == Object.prototype) // true
// console.log(Array.prototype) // [] (空数组)
// console.log(Object.prototype.__proto__) //null

// console.log(Array.__proto__ == Function.prototype) // true
// console.log(Function.prototype.__proto__===Object.prototype)


var animal = function () {};
var dog = function () {};

animal.price = 2000;
dog.prototype = animal;
var tidy = new dog();
console.log(dog.prototype.price)
console.log(dog.price) //undefined
console.log(tidy.price) // 2000
