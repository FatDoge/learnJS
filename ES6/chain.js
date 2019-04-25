function Person(name = 'anoymous') {
  this._name = name;
  this.eat = function(food = 'shit') {
    console.log(`${this._name} eat ${food}`)
    return this;
  }
}

new Person('kobe')
.eat('apple')
.eat('banana')
.eat()

const promiseCase = () => new Promise((resolve, reject) => {
  resolve('hello,world!')
})

promiseCase()
.then(res => {
  console.log(res)
  return new Promise((resolve, reject) => {
    reject('oops!')
  })
})
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})

const asyncChain = async function(){
  const res = await A1()
  // do sth to process res
  const pRes = await A2({
    payload: res
  })
  
}

const gen = function*() {
  const res = yield A1()
}

class Animal {
  constructor(name) {
    this._name = name;
  }

  bark(voice){
    console.log(`${this._name} renders ${voice}`);
    return this;
  }
}

new Animal('cat').bark('miao~').bark('wang!')