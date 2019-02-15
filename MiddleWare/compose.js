let init = (...args) => args.reduce((ele1, ele2) => ele1 + ele2, 0)
let step2 = (val) => val + 2
let step3 = (val) => val + 3
let step4 = (val) => val + 4

const steps = [step4, step3, step2, init]

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => 
    (...args) => {
      return a(b(...args))
    }
  )
}

console.log('结果:', compose(...steps)(1))

/*
 * args: 1 3 6 10
 *
 */