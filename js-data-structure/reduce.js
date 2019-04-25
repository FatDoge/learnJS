const data = [
  {
    id: 1,
    age: 1,
  },
  {
    id: 2,
    age: 2,
  },
  {
    id: 3,
    age: 3,
  },
  {
    id: 4,
    age: 4,
  },
  {
    id: 5,
    age: 5,
  },
]

const result = data.reduce((acc, prev) => {
  return acc + prev.age
}, 0)

result

const AddUpByKey = (dataArray, key, initialValue = 0) => {
  return dataArray.reduce((acc, prev) => {
    return acc + prev[key]
  }, initialValue)
}

console.log(AddUpByKey(data, 'age'))


