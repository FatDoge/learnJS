let foo={
    a:42
}
let bar=Object.create(foo);
console.log(bar.a);