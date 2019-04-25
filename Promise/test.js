const myPromise = require('./myPromise')

let p = new myPromise((resolve, reject) => {
  resolve('helloworld')
})
.then( res => {
  console.log(res)
})