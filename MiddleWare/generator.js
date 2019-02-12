function* generatorFunc() {
  console.log('123');
  yield 'stop';
  console.log('456');
  yield 'stop again';
  console.log('789');
  return 'finish';
}
let gen = generatorFunc();
console.log(gen.next());
// 123
// {"value":"stop","done":false}
console.log(gen.next());
// 456
// {"value":"stop again","done":false}
console.log(gen.next());
// 789
// {"value":"finish","done":true}