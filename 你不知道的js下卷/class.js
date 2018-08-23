class Foo{
    constructor(a,b){
        this.x=a;
        this.y=b;
    }
    gimmeXY(){
        return this.x*this.y
    }
}
let f=new Foo(5,15)
console.log(f.x);
console.log(f.y);
console.log(f.gimmeXY());
class Bar extends Foo{
    constructor(a,b,c){
        super(a,b);
        this.z=c;
    }
    gimmeXYZ(){
        return super.gimmeXY()*this.z;
    }
}
let b=new Bar(5,15,25);
console.log(b.x);
console.log(b.y);
console.log(b.z);
console.log(b.gimmeXYZ());




