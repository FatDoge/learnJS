// function splitify(str) {
//     // 请在本行以下添加你的代码
//     console.log(str.match(/\w+/g))
//     console.log(str.split(/\W+/g))

//     // 请在本行以上添加你的代码
// }
// splitify("Hello World,I-am code");

// 全局变量
var globalTitle = " Winter Is    Coming";

// 请在本行以下添加你的代码
function urlSlug(title) {
    return title.split(/\W/).filter(obj => obj !== '').join('-').toLowerCase()
}
// 请在本行以上添加你的代码

var winterComing = urlSlug(globalTitle); // 应为 "winter-is-coming"
console.log(winterComing)
console.log(globalTitle)