const foo = () => {
  return new Promise((resolve, reject) => {
    resolve('good!')
  })
}

foo()
.then(res => console.log(res))
.catch(err => new Error(err))

function *generator() {
  const y = yield foo();
  return y;
}

const it = generator()
it.next().value.then(res => console.log(res))