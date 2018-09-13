async function f() {
  let promise = new Promise((resolve, reject) => {
    resolve()
  })
  let result = await promise // 直到promise返回一个resolve值（*）
  console.log(result) // 'done!' 
}
f()

