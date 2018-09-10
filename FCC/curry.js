//Impartial function
function impartial(x, y, z) {
    return x + y + z;
}
var partialFn = impartial.bind(this,1,2);
console.log(partialFn(10)); // 返回 13

function add(x) {
    // 请在本行以下添加你的代码
    return function (y) {
        return function (z) {
            return x + y + z;
        }
    }
    // 请在本行以上添加你的代码
}
console.log(add(10)(20)(30));