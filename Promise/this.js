function A(){
  let self = this;
  self.a = 0;
  console.log(self)
}

A.prototype.b = function() {
  console.log(this)
  this.a = 1
}

A.prototype.b = () => {
  console.log(this)
  this.a = 1
}
let a = new A()
console.log(a)
a.b()
console.log(a)
