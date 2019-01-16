const obj = new Proxy({}, {
  get: (target, key, receiver) => {
    console.log(`getting ${key}!`)
    return Reflect.get(target, key, receiver)
  },
  set: (target, key, value, receiver) => {
    console.log(`setting ${key}!`)
    return Reflect.set(target, key, value, receiver)
  }
})

obj.count = 1
console.log(++obj.count)

const proxy = new Proxy({}, {
  get: (target, property) => {
    return 35
  }
})
console.log(proxy.time)
console.log(proxy.name);
console.log(proxy.title);