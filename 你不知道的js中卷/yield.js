let x = 1;
function *foo(){
    x++;
    yield;//pause!
    console.log('x:',x);
    return x;
}
function bar(){
    x++;
}

let it=foo();
it;
//从这里启动foo()
console.log(it.next());
x;
bar();
x;
console.log(it.next());

// function *foo1(x,y){
//     return x*y;
// }
// let it1=foo1(6,7);
// let res1=it1.next();
// console.log(res1.value);
//生成器*foo(...)
function *foo2(x){
    let y=x*(yield);
    console.log('y:',y);
    return y;
}
//迭代器foo()
let it3=foo2(6);
it3.next();
let res3=it3.next(7);
console.log(res3.value);

// function *foo3(){
//     console.log('cool!')
//     return new Promise((resolve,reject)=>{
//         resolve('done!');
//         reject('bad job!')
//     })
// }
// let it4=foo3();
// let res4=it4.next();
// res4.value
// .then(
//     (resolve)=>{
//         console.log(resolve)
//     }
// )
// .catch(
//     (reject)=>{
//         console.log(reject)
//     }
// )
// it4.next()
function *foo3(x){
    let y=x*(yield 'hello!');
    return y;
}
let it5=foo3(6);
let res5=it5.next();
res5;
res5=it5.next(7)
res5;
