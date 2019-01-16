const arr1 = [
  {
    id: 1,
    data: 1
  },
  {
    id:2,
    data: 2
  },
  {
    id: 3,
    data: 3
  }
]
const arr2 = [
  {
    id: 2,
    data: 2
  },
  {
    id: 3,
    data: 3
  },
  {
    id: 4,
    data: 4
  }
]

const arr3 = arr1.filter( item => !arr2.some( e => item.id === e.id))
console.log(arr3)
const arr4 = arr1.filter( item => arr2.every( e => item.id !== e.id))
console.log(arr4)
const arr5 = arr1.filter(item => arr2.some(e => item.id === e.id))
console.log(arr5)
