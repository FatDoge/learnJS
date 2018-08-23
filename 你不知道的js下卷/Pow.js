let a=2;
console.log(a**3)
a**=4
a

var o1 = { a: 1, b: 2 },
    o2 = { c: 3 },
    o3 = { ...o1, ...o2, d: 4 };
    console.log(o3)
console.log(o3.a, o3.b, o3.c, o3.d);
// 1 2 3 4

var vals = ["foo", "bar", 42, "baz"];
if (vals.includes(42)) {
    console.log('get it!')
}

var v1 = SIMD.float32x4(3.14159, 21.0, 32.3, 55.55);
var v2 = SIMD.float32x4(2.1, 3.2, 4.3, 5.4);
SIMD.float32x4.mul(v1, v2);
// [ 6.597339, 67.2, 138.89, 299.97 ]