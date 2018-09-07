// let arr=[1,2,3]
// let popShift=arr=>{
//     _arr=[...arr]
//     let poped=_arr.pop()
//     let shifted=_arr.shift()
//     return [shifted,poped];
// }
// console.log(popShift(arr))
// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//         // 请把你的代码写在这条注释以下
//         newArr.push([...arr])
//         // 请把你的代码写在这条注释以上
//         num--;
//     }
//     return newArr;
// }

// // 你可以修改这行代码来测试不同的输入：
// console.log(copyMachine([true, false, true], 2));

// function filteredArray(arr, elem) {
//     let newArr = [];
//     // 请把你的代码写在这条注释以下
//     for (let i = 0, len = arr.length; i < len; i++) {
//         if (arr[i].indexOf(elem) == -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     // 请把你的代码写在这条注释以上
//     return newArr;
// }

// // 你可以修改这行代码来测试不同的输入：
// console.log(filteredArray([
//     [10, 8, 3],
//     [14, 6, 23],
//     [3, 18, 6]
// ], 18))

// let users = {
//     Alan: {
//         age: 27,
//         online: false
//     },
//     Jeff: {
//         age: 32,
//         online: true
//     },
//     Sarah: {
//         age: 48,
//         online: false
//     },
//     Ryan: {
//         age: 19,
//         online: true
//     }
// };

// function countOnline(obj) {
//     // 请把你的代码写在这条注释以下
//     let sum = 0;
//     for (let item in obj) {
//         if (obj[item].online) {
//             sum++
//         }
//     }
//     return sum
//     // 请把你的代码写在这条注释以上
// }

// console.log(countOnline(users));

// function factorialize(num) {
//     let result = 1;
//     for(let i=1;i<=num;i++){
//         result=result*i;
//     }
//     return result;
// }

// console.log(factorialize(5));

// function findLongestWordLength(str) {
//     let arr=str.split(' '),
//     result=arr[0].length;
//     for(let i=1,len=arr.length;i<len;i++){
//         if(arr[i].length>result){
//             result=arr[i].length
//         }
//     }
//     return result;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// function largestOfFour(arr) {
//     // You can do this!
//     let result = []
//     for (let item of arr) {
//         result.push(Math.max(...item))
//     }
//     return result;
// }

// console.log(largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1]
// ]));

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));