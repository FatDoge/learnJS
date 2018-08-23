// class Animal {
//     speak() {
//         return this;
//     }
//     static eat() {
//         return this;
//     }
// }

// let obj = new Animal();
// obj.speak(); // Animal {}
// let speak = obj.speak;
// console.log(obj.speak())
// console.log(speak()); // undefined

// Animal.eat() // class Animal
// let eat = Animal.eat;
// console.log(eat()); // undefined

function Animal() { }

Animal.prototype.speak = function () {
    return this;
}

Animal.eat = function () {
    return this;
}

let obj = new Animal();
let speak = obj.speak;
console.log(speak()); // global object

let eat = Animal.eat;
console.log(eat()); // global object