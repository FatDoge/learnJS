const state = {
  b: {
    c: {
      age: 1
    }
  }
}
const obj = state.b.c
const { b: { c: obj1 }} = state
state.b = {
  ...state.b,
  c: {
    age:2
  }
}

const fake = {}

const { c: baba = {} } = fake
console.log(baba)
console.log(obj)
console.log(obj1)
console.log(state.b.c)