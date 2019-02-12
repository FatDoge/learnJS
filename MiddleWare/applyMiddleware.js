const applyMiddleware = (...middleware) => {
  console.log(middleware)
}

applyMiddleware(1, 2, 3, 4, 5, 6)