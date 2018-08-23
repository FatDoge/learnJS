let EVENT_LOGIN=Symbol.for('event.login');

let a = Symbol.for('event.login');
a
console.log(Symbol.keyFor(EVENT_LOGIN))

var arr = [4, 5, 6, 7, 8, 9];
for (var v of arr) {
    console.log(v);
}
// 4 5 6 7 8 9
// 定义一个只在奇数索引值产生值的迭代器
arr[Symbol.iterator] = function* () {
    var idx = 1;
    do {
        yield this[idx];
    } while ((idx += 2) < this.length);
};
for (var v of arr) {
    console.log(v);
}
console.log([...arr[Symbol.iterator]()])
let it = arr[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
// 5 7 9