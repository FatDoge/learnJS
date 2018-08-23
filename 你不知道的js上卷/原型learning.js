function Foo(name){
    this.name=name;
}
Foo.prototype.myName=function(){
    return this.name;
}
Foo.prototype.setName=function(name){
    this.name=name;
}
let a=new Foo('fatdoge')
console.log(a.myName());
function Bar(name,label){
    Foo.call(this,name);
    this.label=label;
}
Object.setPrototypeOf(Bar.prototype, Foo.prototype)
// Bar.prototype=Object.create(Foo.prototype);
// Bar.prototype=Foo.prototype
// Bar.prototype=new Foo()
console.log(Foo.prototype)
console.log(Bar.prototype)
Bar.prototype.myLabel=function(){
    return this.label;
}
console.log(Bar.prototype)
let b = new Bar('fatdog','admin');
b.setName('dog')
console.log(b.myName())
console.log(b.myLabel())
console.log(a.myName())
console.log(a.isPrototypeOf(b))

let nope=Object.create(null)
console.log(nope)