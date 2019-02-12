function muti(num) {
  return (data) => (data2) => {
    return {
      num,
      data,
      data2
    }
  }
}

console.log(muti(1)(4)(5))

const test = () => {
  try{
    console.log(1)
    throw new Error('wrong')
    return
  } catch(err){
    throw new Error(err)
  }finally {
    console.log(2)
  }
}

test()

