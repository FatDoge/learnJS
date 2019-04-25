var a = {};
console.log(a.prototype);  //undefined
console.log(a.__proto__);  //Object {}

var b = function () { }
console.log(b.prototype);  //b {}
console.log(b.__proto__);  //function() {}