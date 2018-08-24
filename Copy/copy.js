function clone(obj) {
    if (!obj || typeof (obj) != 'object') return obj;
    var r = Array.prototype.splice === obj.splice ? [] : {};
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            r[i] = clone(obj[i]);
        }
    }
    return r;
}
let obj={name:1}
let myObj=clone(obj)
myObj.name='fatdoge'
console.log(myObj)