let a=[1,2,[3]]
console.log(a[2])
console.log(a[2] === '?')
console.log(a[2]==[3])
function foo(){
    let arr=Array.prototype.slice.call(arguments);
    arr.push('bam');
    console.log(arr);
}
foo('a','b')
console.log(a.reverse());
console.log(a);
let c=42.59;
console.log(c.toFixed(3))
let arr1=[1,2,3]
let arr2=arr1;
console.log(arr1)
console.log(arr2)
arr2.push(4);
arr2=[1,3]
console.log(arr1)
console.log(arr2)
console.log(void 2)

let is=(a,b)=>{
    //NaN判断
    if(a!==a){
        return b!==b
    //+-0判断    
    }else if (a===0&&b===0){
        return 1/a===1/b
    //其他
    }else{
        return a===b
    }
}
console.log(is(Infinity,-Infinity))
console.log(is(0,-0))
console.log(is(0,0))
console.log(is(NaN,NaN))
console.log(is(undefined,undefined))
var year=new Date().getFullYear();
console.log(year)
let t1=new Boolean(false);
console.log(t1)

let arr3=[1,2,3]
console.log(arr3)
delete arr3[1]
console.log(arr3)

let arr4=[1,2,3,4,5]
delete arr4[2]
console.log(arr4)
let {a1,b1}={
    a1:2,
    b1:3
}
console.log(a1,b1)

doA(function () {//1
    doB(); //3
    doC(function () {//4
        doD();//6
    })
    doE();//5
});
doF();//2