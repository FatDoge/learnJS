class Person{
    constructor(name){
        this.name=name;
    }
    get name(){
        console.log('getter');
        return this._name;
    }
    set name(name){
        console.log('setter')
        this._name=name;
    }
}
let p=new Person('fatdoge')
console.log(p.name)
console.log(p._name)

var obj = {}
//第一种情况：writable设置为false，不能重写。
Object.defineProperty(obj, "newKey", {
    configurable:true,
    value: "hello",
    writable: false
});
//更改newKey的值
obj.newKey = "change value";
console.log(obj.newKey);  //hello

//第二种情况：writable设置为true，可以重写
Object.defineProperty(obj, "newKey", {
    value: "hello",
    writable: true
});
//更改newKey的值
obj.newKey = "change value";
console.log(obj.newKey);  //change value