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

const one = next => args => {
  console.log(next)
  return next(args)
}

const two = next => args => {
  console.log(next)
  if(next) {
    return next(args)
  } else {
    console.log('last')
  }
}

compose(one, two)()('1234')