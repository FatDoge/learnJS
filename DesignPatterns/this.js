/*
*this指向:1、作为对象的方法来调用,this指向该对象
*2、作为普通函数调用,this指向全局对象
*3、构造器调用,this指向返回的对象,若显式返回一个对象,则运算结果最终这个对象
*4、Function.prototype.call或Function.prototype.apply调用动态改变传入函数的this
*
*/
// var MyClass = function () {
//   this.name = 'sven';
//   return {
//     age: 1,
//     ...this
//   }
// };
// var obj = new MyClass();
// console.log(obj)

// var obj1 = {
//   name: 'sven',
//   getName(){
//     return this.name
//   }
// }

// var obj2 = {
//   name: 'anne'
// }

// console.log(obj1.getName())
// console.log(obj1.getName.call(obj2))

// var func = function (a, b, c) {
//   console.log([a, b, c]); // 输出 [ 1, 2, 3 ]
// };
// func.apply(null, [1, 2, 3]);
// func.call(null,1,2,3)

// // let a = [1,2,3]
// // console.log(a.push(2))
// // console.log(a)

// var a = {};
// Array.prototype.push.call(a, 'first');
// console.log(a)
// console.log(a.length); // 输出： 1
// console.log(a[0]); // first
// let a = [1,4,3]
// let res1 = a.sort(function(a, b) {
//   return a - b;
// });
// console.log(a)
// console.log(res1)
// // 输出: [ 1, 3, 4 ]
// //从大到小排列
// let res2 = [1, 4, 3].sort(function (a, b) {
//   return b - a;
// });
// console.log(res2)
// 输出: [ 4, 3, 1 ]

var throttle = function (fn, interval) {
  var __self = fn, // 保存需要被延迟执行的函数引用
    timer, // 定时器
    firstTime = true; // 是否是第一次调用
  return function () {
    var args = arguments,
      __me = this;
    if (firstTime) { // 如果是第一次调用，不需延迟执行
      __self.apply(__me, args);
      return firstTime = false;
    }
    if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成
      return false;
    }
    timer = setTimeout(function () { // 延迟一段时间执行
      clearTimeout(timer);
      timer = null;
      __self.apply(__me, args);
    }, interval || 500);
  };
};
window.onresize = throttle(function () {
  console.log(1);
}, 500);