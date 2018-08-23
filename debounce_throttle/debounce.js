var debounce = function (idle, action) {
    var last
    return function () {
        var ctx = this, args = arguments
        clearTimeout(last)
        last = setTimeout(function () {
            action.apply(ctx, args)
        }, idle)
    }
}
let showMessage = function () {
    console.log('show it!')
}
debounce(3000,showMessage)()