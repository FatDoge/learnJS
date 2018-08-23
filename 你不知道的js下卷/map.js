let m=new Map();
let x={id:1},
    y={id:2};

m.set(x,'foo');
m.set(y,'bar');
console.log(m.get(x));
console.log(m.get(y));
m
console.log(m.size)
let vals=[...m.entries()]
let keys=[...m.keys()]
let vals1=[...m.values()]
console.log(m.has(x))
keys
vals1
vals
// m.delete(y)
// m
// m.clear()
// m
// console.log(m.size)

let m1=new Map([[x,3],[y,2]])
console.log([...m1.values()])
console.log(m1.get(y))
console.log(Array.from(m1.values()))