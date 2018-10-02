const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";

  //在这行以下修改代码
  const resultDisplayArray = arr.map(item => {
    return `<li class="text-warning">${item}</li>`
  });
  console.log(resultDisplayArray)
  let resultDisplayArray2=[]
  for(var i=0;i<arr.length;i++){
    let a = `<li class="text-warning">${arr[i]}</li>`
    resultDisplayArray2.push(a)
  }
  console.log(resultDisplayArray2)
  // 在这行以上修改代码

  return resultDisplayArray[0]===resultDisplayArray2[0];
}
/**
 * makeList(result.failure) 应该返回：
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray)