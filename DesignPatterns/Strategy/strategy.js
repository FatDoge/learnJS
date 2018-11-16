let strategies = {
  'S': salary => salary * 4,
  'A': salary => salary * 3,
  'B': salary => salary * 2
}
//Context
let calculateBonus = (level = 'B', salary = 0) => strategies[level](salary)

console.log(calculateBonus('S', 20000))
console.log(calculateBonus('A', 10000))

