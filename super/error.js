// class A {
//     greeting(){
//         this.greeting='hello'
//         return this.greeting
//     }
//  }
// class B extends A {
//     constructor() { 
//         super()
//     }
//     agreet(){
//         return super.greeting()
//     }
// }
// let b=new B(); // throw
// console.log(b.agreet())

class Rectangle {
    constructor(height, width) {
        this.init(height, width)
    }
    init(height, width){
        this.height = height;
        this.width = width;
    }
}
class Box extends Rectangle{
    constructor(height,width,zindex){
        super()
        this.init(height, width, zindex)
    }
    init(height, width, zindex){
        super.init(height, width)
        this.zindex=zindex
    }
}
let rectangle=new Box(1,1,1)
rectangle

function isNaN(o) {
    return o !== o;
}
