var throttle = function (delay, action) {
    let last = 0;
    return function (rest) {
        var curr = +new Date()
        if (curr - last > delay) {
            console.log(curr - last)
            action.apply(this, arguments)
            console.log(...arguments)
            last = curr
        }
    }
}
let showMessage = function () {
    console.log('show it!')
}
throttle(3000, showMessage)(1,2,3)