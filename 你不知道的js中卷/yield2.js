var gimmeSomething = (function () {
    var nextVal;
    return function () {
        if (nextVal === undefined) {
            nextVal = 1;
        }
        else {
            nextVal = (3 * nextVal) + 6;
        }
        console.log(nextVal)
        return nextVal;
    };
})();
gimmeSomething(); // 1
gimmeSomething(); // 9
gimmeSomething(); // 33
gimmeSomething(); // 105

let foo=(function(){
    var x;
    return function(){if(x===undefined){
        x=1;
    }
    else{
        x++;
    }
    console.log(x)
    return x;
}
})()
foo()
foo()
foo()
foo()
foo()
console.log(foo)
foo=null;
console.log(foo)