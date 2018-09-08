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

// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     return str.substring(str.length - target.length) === target;
// }

// console.log(confirmEnding("Bastian", "n"));

// function repeatStringNumTimes(str, num) {
//     // repeat after me
//     let result=''
//     if(num<0){
//         return result
//     }
//     while(num--){
//         result=result.concat(str)
//     }
//     console.log(result)
//     return result;
// }    

// console.log(repeatStringNumTimes("abc", 3));
// function truncateString(str, num) {
//     // Clear out that junk in your trunk
//     if (str.length <= num) {
//         return str
//     }
//     str=str.split('').splice(0, num).join('').concat('...')
//     return str;
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// function findElement(arr, func) {
//     return arr.find(func)
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// function titleCase(str) {
//     let arr=str.split(' ')
//     for(let i=0,len=arr.length;i<len;i++){
//         arr[i]=arr[i].toLowerCase()
//         let arr2=arr[i].split('')
//         arr2[0]=arr2[0].toUpperCase()
//         arr[i]=arr2.join('')
//     }
//     return arr.join(' ')
// }

// console.log(titleCase("I'm a little tea pot"));

// function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     let temp=[...arr2]
//     let _slice=temp.splice(n)
//     temp.splice(n,arr1.length,...arr1)
//     temp.push(..._slice)
//     return temp;
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// function bouncer(arr) {
//     // Don't show a false ID to this bouncer.
//     let result=[]
//     for (let i = 0, len = arr.length; i < len; i++) {
//         console.log(arr[i])
//         if (arr[i]) {
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

// function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.
//     arr.push(num);
//     arr.sort((a,b)=>{
//         return a>b
//     })
//     return arr.indexOf(num);
// }

// console.log(getIndexToIns([3,10,5], 3));

// function mutation(arr) {
//     console.log(arr[1].toLowerCase().split(''))
//     console.log(arr[0].toLowerCase().split(''))

//     return arr[1].toLowerCase().split('').every(item=>{
//         return arr[0].toLowerCase().split('').indexOf(item)!==-1
//     })
    
// }

// console.log(mutation(["hello", "hello"]));
// console.log(['h','e','l','l','o'].indexOf('y'))

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let result=[]
     while(arr.length>=size){
         result.push(arr.splice(0,size))
     }
     if(arr.length>0){
         result.push(arr)
     }
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));