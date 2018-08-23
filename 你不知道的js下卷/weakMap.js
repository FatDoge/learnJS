let m=new WeakMap();
let x={id:1},
    y={id:2},
    z={id:3},
    w={id:4};

m.set(x,y)
x=null;
y=null;
m.set(z,w);
w=null
console.log(m.has(x))
console.log(m)
