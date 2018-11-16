// let action={
//   type:'GREETING',
//   payload:{
//     msg:'hello,world'
//   }
// }
// const add = (state, { payload: todo }) => {
//   return state.concat(todo);
// };
// let state=[1]
// console.log(add(state,action))
// let initialState= {
//   products: [
//     { name: 'dva', id: 1, key: 1 },
//     { name: 'antd', id: 2, key: 2 },
//     { name: 'fatdoge', id: 3, key: 3 },
//     { name: 'bilibili', id: 4, key: 4 },

//   ]
// }
// const add=({products}) => (
//   {products}
// )
// console.log(add(initialState))

// function *generatorDemo(){
//   yield 1
//   yield 2
// }
// let it=generatorDemo()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// 正常异步执行
// function demo() {
//   new Promise(function (resolve, reject) {
//     resolve(3)
//   }).then((value) => {
//     console.log(value)
//   })
//   console.log(4)
// }
// demo();         // 执行结果依次是：4，3

// // 生成器异步转同步
// let gen = null;
// function* genDemo() {
//   yield setTimeout(() => {
//     console.log(3);
//     gen.next();
//   }, 100)
//   console.log(4)
// }
// gen = genDemo();
// gen.next()  // // 执行结果依次是：3，4

// // async...await...异步转同步
// async function asyncDemo() {
//   await new Promise(function (resolve, reject) {
//     resolve(3)
//   }).then((value) => {
//     console.log(value)
//   })
//   console.log(4)
// }
// asyncDemo();    // 执行结果依次是：3，4

// function* ticketGenerator() {
//   for (var i = 0; true; i++)
//     yield i; //一定要打分号
// }
// var takeANumber = ticketGenerator()
// console.log(takeANumber.next().value) //{value: 1, done: false}
// console.log(takeANumber.next().value) //{value: 2, done: false}
// console.log(takeANumber.next().value) //{value: 3, done: false}
// console.log(takeANumber.next().value) //{value: 4, done: false}
// console.log(takeANumber.next().value) //{value: 4, done: false}

// function *fab(max) {
//   var count = 0, last = 0, current = 1;

//   while (count++ < max) {
//     yield current;
//     var tmp = current;
//     current += last;
//     last = tmp;
//   }
// }

// for (var i of fab(10)) {
//   console.log(i);
// }

// let formData1 = {
//   name: 'fatdoge',
// }

// let formData2 = {
//   js: 'primary'
// }

// let formData3 = {
//   list: [0,1,2,3],
//   changeIt: 'hello!'
// }
// let data = {
//   ...formData1,
//   ...formData2,
//   result:{
//     ...formData1,
//     ...formData3,
//     changeIt: 'hello world!'
//   }
// }
// console.log(data)
// let handleClick = (id = null,name)=>{
//   console.log(id,name)
// }
let data = {
  obj1: {
    age: 42
  }
}
// let obj1 = data.obj1
let { obj1 } = data
console.log(obj1)