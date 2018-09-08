// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// // 请把你的代码写在这条注释以下
// for (let property in canary) {
//     if (canary.hasOwnProperty(property)) {
//         ownProps.push(property)
//     }
// }
// function Dog(name) {
//     this.name = name;
// }
// // 请把你的代码写在这条注释以下
// let beagle = new Dog("Snoopy");

// Dog.prototype.numLegs = 4
// console.log(Dog.prototype.hasOwnProperty('numLegs'))
// console.log(Dog.prototype)

// function Animal() { }

// Animal.prototype = {
//     constructor: Animal,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };

// function Dog() { }

// // 请把你的代码写在这条注释以下
// Dog.prototype = Object.create(Animal.prototype)
// let beagle = new Dog();
// beagle.eat();  // 应该输出 "nom nom nom"

// let bird = {
//     name: "Donald",
//     numLegs: 2
// };

// let boat = {
//     name: "Warrior",
//     type: "race-boat"
// };

// // 请把你的代码写在这条注释以下
// let glideMixin = (obj) => {
//     return obj.glide = () => {
//         console.log('Gliding, wooosh!')
//     }
// }
// glideMixin(bird)
// glideMixin(boat)
// bird.glide()
// boat.glide()

// function Bird() {
//     let weight = 15;
//     this.getWeight = function () {
//         return weight;
//     }

// }
// let bird=new Bird()
// console.log(bird.weight)
// console.log(bird.getWeight())