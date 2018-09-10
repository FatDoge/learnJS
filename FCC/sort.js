// function ascendingOrder(arr) {
//     return arr.sort(function (a, b) {
//         return a-b
//     });
// }
// console.log(ascendingOrder([1, 5, 2, 3, 4]));
// // Returns [1, 2, 3, 4, 5]

// function reverseAlpha(arr) {
//     return arr.sort(function (a, b) {
//         if(a>b){
//             return -1
//         }else{
//             return 1
//         }
//     });
// }
// console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
// // 返回 ['z', 's', 'l', 'h', 'b']

// 需要被排序的数组
// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// // 对需要排序的数字和位置的临时存储
// var mapped = list.map(function (el, i) {
//     return {
//         index: i,
//         value: el.toLowerCase()
//     };
// })
// console.log(mapped)
// // 按照多个值排序数组
// mapped.sort(function (a, b) {
//     return +(a.value > b.value) || +(a.value === b.value) - 1;
// });

// // 根据索引得到排序的结果
// var result = mapped.map(function (el) {
//     return list[el.index];
// });
// console.log(result)

var globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // 请在本行以下添加你的代码
    let _arr = [].concat(arr);
    return _arr.sort()
    // 请在本行以上添加你的代码
}
console.log(nonMutatingSort(globalArray));