const fibonacci = num => {
  const arr = [];
  arr[1] = 1;
  arr[2] = 2;
  for(let i = 3; i <= num; i++) {
    arr[i] = arr[i-1] +arr[i-2]
  }
  return arr[num]
}

console.log(fibonacci(5))