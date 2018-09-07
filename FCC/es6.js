const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    "use strict";
    // 在这行以下修改代码
    const squaredIntegers =[] 
    arr.map(item => {
        if (Number.parseInt(item)===item) {
            squaredIntegers.push(item*item)
        }
    });
    // 在这行以上修改代码
    return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const sum = (function () {
    "use strict";
    return function sum(...rest) {
        return rest.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // 改变这一行
})();
console.log(arr2);

function getLength(str) {
    "use strict";

    // 在这行以下修改代码
    const { length: len } = str; // change this
    // 在这行以上修改代码

    return len; // 你必须在这行将<code>length</code>赋值给<code>len</code>

}

console.log(getLength('FreeCodeCamp'));

let a = 8, b = 6;
(() => {
    "use strict";
    // 在这行以下修改代码
    [a, b] = [b, a]
    // 在这行以上修改代码
})();
console.log(a); // 应该等于 6
console.log(b); // 应该等于 8

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // 在这行以下修改代码
    const resultDisplayArray = arr.map(item => {
        return `<li class="text-warning">${item}</li>`
    });
    // 在这行以上修改代码

    return resultDisplayArray;
}
/**
 * makeList(result.failure) 应该返回：
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat{
        constructor(temperature){
            this.temperature=temperature;
        }
        get getTemperature(){
            console.log('get')
            return this.temperature;
        }
        set setTemperature(newTemperature){
            console.log('set')
            this.temperature = 5 / 9 * (newTemperature - 32)
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // 使用华氏温度来初始化
console.log(thermos)
let temp = thermos.temperature; // 摄氏温度24.44度
console.log(thermos.temperature)
thermos.temperature = 26;
temp = thermos.temperature; // 摄氏温度26度