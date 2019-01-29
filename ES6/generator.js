function *foo(x) {
  const y = x * (yield);
  return y;
}

const it = foo(6)
it.next();
const res = it.next(7)
console.log(res.value)
console.log(it.next())