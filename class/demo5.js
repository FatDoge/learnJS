class MyArray extends Array {
    // Overwrite species to the parent Array constructor
    static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1, 2, 3);
a
var mapped = a.map(x => x * x);
mapped
console.log(mapped instanceof MyArray);
// false
console.log(mapped instanceof Array);
// true