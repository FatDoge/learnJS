var Plane = function(){
this.blood = 100;
this.attackLevel = 1;
this.defenseLevel = 1;
};
var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;
console.log(plane)
var clonePlane = Object.create(plane);
console.log(clonePlane.__proto__); // 输出： Object {blood: 500, attackLevel: 10, defenseLevel: 7}

function Person(name) {
  this.name = name
}

Person.prototype.getName = function() {
  return this.name
}

const objectFactory = function() {
  let obj = new Object(),
      Constructor = Array.prototype.shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  let ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object'? ret : obj
}

let a = objectFactory(Person, 'sven')
console.log(a.name)
console.log(a.getName())
console.log(Object.getPrototypeOf(a) === Person.prototype)