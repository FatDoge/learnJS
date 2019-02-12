function *foo(x) {
  const y = x * (yield) ? 1 : 0;
  return y;
}

const it = foo(6)
it.next();
const res = it.next()
console.log(res.value)
console.log(it.next())