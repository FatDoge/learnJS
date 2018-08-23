let s=new Set();
let x={id:1},
    y={id:2};
s.add(x);
s.add(y);
s.add(x);
s.add(0)
s.add(-0)
console.log([...s])
console.log(s.size);
console.log(s.delete(y))
console.log(s.size);
console.log([...s])
s.forEach(x=>{
    console.log(x)
})
console.log(s.has(0))