// let s=new WeakSet();
// let x={id:1},
//     y={id:2};
// s.add(x);
// s.add(y);
// console.log(s)
// console.log(s.has(x))
// let q=Array.of(3)
// q

// let array=[1,1,2,2,3,3,4,4,5,5]
// let arr=new Set(array)
// let myarr=Array.from(arr)
// myarr
// function removeWithoutCopy(arr, item) {
//     for(var i=0,len=arr.length;i<len;i++){
//         if(i===len-1&&arr[i]!==item){
//             return arr
//         }
//         else if(arr[i]===item){
//             arr.splice(i,1)
//             removeWithoutCopy(arr,item)
//         }
//     }
//     return arr
// }
// let arr1 = [1, 2, 2, 3, 4, 2, 2]
// console.log(removeWithoutCopy(arr1,2))
// arr1
// function insert(arr, item, index) {
//     var res = [].concat(arr);
//     res.splice(index,0,item)
//     return res;
// }
// let res=[1,2,3,4]
// console.log(insert(res,'z',3))

// // function time(str, num) {
// //     return str.repeat(num)
// // }
// // console.log(time('ccc',3))

// function duplicates(arr){
//     var res = [];
//     arr.forEach(function(value){
//         if(arr.indexOf(value)!==arr.lastIndexOf(value)&&res.indexOf(value)===-1){
//             res.push(value)
//         }
//     });
//     return res        
// }
// console.log(duplicates([1,2,4,4,3,3,1,5,3]))
// function square(arr) {
//     var res = [];
//     for(var i=0,len=arr.length;i<len;i++){
//         res.push(arr[i]*arr[i])
//     }
//     return res
// }
// console.log(square([1,2,3,4]))
// function findAllOccurrences(arr, target) {
// var res=[];
// for(var i=0,len=arr.length;i<len;i++){
//     if(arr[i]===target){
//         res.push(i)
//     }
// }
// return res
// }
// console.log(findAllOccurrences('abcdefabc','a'))
// function getValue(flag) {
//     if (flag) {
//         function getValue() { return 'a'; }
//     } else {
//         function getValue() { return 'b'; }
//     }

//     return getValue();
// }
// console.log(getValue(true))

// function parse2Int(num) {
//     return parseInt(num,10);
// }
// console.log(parse2Int('0x12'))

// function count(start, end) {
// console.log(start++);
// var id=setInterval(function(){
//     if(start<=end){
//         console.log(start++)
//     }else{
//         clearInterval(id)
//     }
    
// },100)
// return {
//     cancel:function(){
//         clearInterval(id)
//     }
// }
// }
// count(1,6)

// function fizzBuzz(num) {
//     if(num%3===0&&num%5===0)
//         return 'fizzbuzz';
//     if(num%3===0)
//         return 'fizz';
//     if(num%5===0)
//         return 'buzz';
//     if (num === null || Object.prototype.toString.call(num) !== '[object Number]')
//         return false
//     else return num;
// }
// console.log(fizzBuzz(NaN))

// function argsAsArray(fn, arr) {
//     return fn.apply(this,arr)
// }
// function fn(...args){
//     console.log(args)
// }
// argsAsArray(fn,[1,2,3])

// let obj={name:'iceman'};
// function fn(){
//     console.log(this)
//     console.log(this.name)
// }
// fn()
// fn.call(obj)

// function functionFunction(str) {

//     return function f(){
//     return str+', '+arguments[0]
// }
// }
// console.log(functionFunction('Hello')('world'))

// function makeClosures(arr, fn) {
// var result=[];
// arr.forEach(function(e){
//     result.push(function(){
//         return fn(e)
//     })
// })
// return result
// }
// console.log(makeClosures([1,2,3],function(x){return x*x})[1]())
// var sayIt = function (greeting, name, punctuation) {
//      return greeting + ', ' + name + (punctuation || '!'); 
//     };  
// function partial(fn, str1, str2) {
//     return function result(str3) {
//         return fn(str1, str2,str3)
//     }
// }
// console.log(sayIt('Hello','Ellie','!!!'))
// console.log(partial(sayIt,'Hello','Ellie')('!!!'))
// function callIt(fn) {
//     var res=[]
//     for(var i=1,len=arguments.length;i<len;i++){
//         res.push(arguments[i])
//     }
//     return fn.apply(null,res)
// }
// console.log(callIt(function(x,y,z){return x*y*z},2,3,4))

// function partialUsingArguments(fn) {
//     let args=Array.prototype.slice.call(arguments,1)
//     let result=function(){
//         return fn.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)))
//     }
//     return result
// }
// let add=(x,y,z)=>{
//     return x+y+z;
// }
// console.log(partialUsingArguments(add,1,2)(3))

// function curryIt(fn) {
//     var n=fn.length,
//             args=[];
//     function f(arg){
//         args.push(arg)
//         if (args.length < n) {
//             return f;
//         } else {
//             return fn.apply(null, args);
//         }
//     }
//     return f;
// }
// var fn = function (a, b, c,d) { return a + b + c+d };
// console.log(curryIt(fn)(1)(2)(3)(1))
// function createModule(str1, str2) {
// var obj={
//     greeting:str1,
//     name:str2,
//     sayIt:function(){
//         return this.greeting+','+this.name
//     }
// }
// return obj
// }
// console.log(createModule('hello','fatdoge'))

// function valueAtBit(num, bit) {
// var res=[]
// while(num>0){
//     res.push(num%2)
//     num=parseInt(num/2)
// }
// return res[bit-1]
// }
// console.log(valueAtBit(2,2))
// function base10(str) {
// var sum=0,
// arr=Array.prototype.slice.call(str);
// for(var i=arr.length,len=arr.length;i>=0;i--){
//     if(arr[i]==='1'){
//         sum+=Math.pow(2,len-i-1)
//     }
// }
// return sum
// }
// console.log(base10('11000000'))

// function convertToBinary(num) {
//     var res=num.toString(2)
//     while(res.length<8){
//         res='0'+res
//     }
//     return res;
// }
// console.log(convertToBinary(65))
// function multiply(a, b) {
// var num=a*b;
//     return num.toFixed(4)
// }
// console.log(multiply(3,0.0001))

// function alterContext(fn, obj) {
//     return fn.call(obj)
// }
// console.log(alterContext(function () { 
//     return this.greeting + ', ' + this.name + '!'; 
// }, { name: 'Rebecca', greeting: 'Yo' }))

// function alterObjects(constructor, greeting) {
// constructor.prototype.greeting=greeting
// }
// var C = function (name) { 
//     this.name = name; 
//     return this; 
// };
// var obj1 = new C('Rebecca');
// obj1
// alterObjects(C, 'What\'s up'); 
// obj1
// console.log(obj1.greeting);

// function iterate(obj) {
//     var res=[]
//     for (item in obj){
//         if(obj.hasOwnProperty(item))
//         console.log(item)
//         res.push(item+": "+obj[item]);
//     }
//     return res
// }
// var C = function () { this.foo = 'bar'; this.baz = 'bim'; };
// C.prototype.bop = 'bip';
// console.log(new C())
// console.log(iterate(new C()));

// function containsNumber(str) {
//     var arr=Array.prototype.slice.call(str);
//     for(var i=0,len=arr.length;i<len;i++){
//         if(Object.prototype.toString.call(Number(arr[i]))==='[object Number]'&&!isNaN(arr[i])){
//             return true;
//         }
//     }
//     return false;
// }
// console.log(containsNumber('abc'))
function containsRepeatingLetter(str) {
//     var arr=Array.prototype.slice.call(str.trim())
// for(var i=0,len=arr.length;i<len;i++){
//     if(arr[i]===arr[i+1]){
//         return true;
//     }
// }
//     return false;
    return /([a-zA-Z])\1/.test(str);
}
console.log(containsRepeatingLetter('a a'))

function endsWithVowel(str) {
    return /[aeiou]$/i.test(str)
}
console.log(endsWithVowel('gorill'))

function matchesPattern(str) {
    return /^(\d{3}-){2}\d{4}$/.test(str)
}
console.log(matchesPattern('111-111-1111'))