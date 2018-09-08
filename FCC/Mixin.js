let funModule = (() => {
    return {
        isCuteMixin(obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin(obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})()
let obj={}
funModule.isCuteMixin(obj)
funModule.singMixin(obj)
console.log(obj.isCute())
obj.sing()