// const test = function*() {
//   yield setTimeout(() => {
//     return 111
//   }, 0);
//   yield setTimeout(() => {
//     return 222
//   }, 0);
// }
// const t = test()
// console.log(t.next())
// console.log(t.next())

// const test1 = function () {
//   setTimeout(() => {
//     console.log('111')
//   }, 0);
//   setTimeout(() => {
//     console.log('222')
//   }, 0);
//   console.log('333')
// }
// test1()
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let sum = 0
  for(key in obj) {
    obj[key].online ? sum++ : null
  }
  return sum
  // 请把你的代码写在这条注释以下
  // 请把你的代码写在这条注释以上
}

console.log(countOnline(users));