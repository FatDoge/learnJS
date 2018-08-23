function foo(...args){
    console.log(args)
}
foo(1,2,3)

let obj1={
    x:1,
    y:2
}
let {y}=obj1
y

let a=[1,2,3],
    b=[5,4,...a]

let [d,c]=a
d
c
b

let prefix="user_"
let o={
    baz:function(){}
}
o[prefix+'baz']=3
console.log(o[prefix+'baz'])