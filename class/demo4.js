var Animal = {
    speak() {
        console.log(this.name + ' makes a noise.');
    }
};

class Dog {
    constructor(name) {
        this.name = name;
    }
}

Object.setPrototypeOf(Dog.prototype, Animal);// If you do not do this you will get a TypeError when you invoke speak
var d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.