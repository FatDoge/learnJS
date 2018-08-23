let numbers=[1,2,3,4,5,4,3,2,1];

let everyResult=numbers.every((item,index,array)=>{return (item>2)});
console.log(everyResult);//false

let someResult = numbers.some((item, index, array) => { return (item > 2) });
console.log(someResult);//true

let filterResult=numbers.filter((item,index,array)=>{return (item>2)});
console.log(filterResult);//[3,4,5,4,3]

let mapResult=numbers.map((item,index,array)=>{return item*2});
console.log(mapResult);//[2,4,6,8,10,8,6,4,2]

numbers.forEach((item,index,array)=>{return numbers[index]=item*2});//处理数组
console.log(numbers);

let values=[1,2,3,4,5,6,7,8];
let max=Math.max.apply(Math,values);
console.log(max);//8

//利用apply进行数组的合并
let arr1=[1,2,3,4,5,6,7,8,9];
let arr2=[9,8,7,6,5,4,3,2,1];
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);

let a=[1,2,3,4,5];
let ite=Iterator(a);

