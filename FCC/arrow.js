let f=(a)=>(b)=>{
  console.log(a,b)
}
f(1)(2)

// let a=/^13[1-9]\d{8}$/
// console.log(a.test(1311111111))

let a=(...args)=>{
  console.log(...args,'a')
  return args
}
let b=(...args)=>{
  console.log(...args,'b')
  return args
}

let c=(a)=>(b)=>{
  console.log([...a(1),...b(1)],'c')
}
c(a)(b)

let pipeline = (...funs) => val => funs.reduce((a, b) => b(a), val);
let plus = a => a + 1;
let mult = a => a * 2;
let addThenMult = pipeline(plus, mult);
console.log(addThenMult(5));