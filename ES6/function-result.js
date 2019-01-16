const getItemsValues = () => {
  test((err, params) => {
    if(!err) {
      console.log('1')
      return params
    }
  })

  return true
}

const test = (err, params) => {
  return params
}



console.log(getItemsValues())