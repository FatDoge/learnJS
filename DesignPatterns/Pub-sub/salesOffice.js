var event={
    clientList:[],
    listen:function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = []
        }
        this.clientList[key].push(fn)
    },
    triggle:function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key]
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments)
        }
    },
    remove:function(key,fn){
        var fns = this.clientList[key];
        if (!fns) { // 如果key 对应的消息没有被人订阅，则直接返回
            return false;
        }
        if (!fn) { // 如果没有传入具体的回调函数，表示需要取消key 对应消息的所有订阅
            fns && (fns.length = 0);
        } else {
            for (var l = fns.length - 1; l >= 0; l--) { // 反向遍历订阅的回调函数列表
                var _fn = fns[l];
                if (_fn === fn) {
                    fns.splice(l, 1); // 删除订阅者的回调函数
                }
            }
        }
    }
};
var installEvent = function (obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
};

var salesOffice={}
installEvent(salesOffice)
/******************************/
salesOffice.listen('xiaoming',fn1=(price,squareMeter)=>{
    console.log(`小明房屋价格:${price}`);
    console.log(`小明房屋面积:${squareMeter}`);
})

salesOffice.listen('xiaohong',fn2=(price, squareMeter) => {
    console.log(`小红房屋价格:${price}`);
    console.log(`小红房屋面积:${squareMeter}`);
})
/*****************************/
salesOffice.remove('xiaoming',fn1)
salesOffice.triggle('xiaoming',2000000,88)
salesOffice.triggle('xiaohong',3000000,110)
