//数据源
let vm={
    value:0
}
//用于管理watcher的Dep对象
let Dep=function(){
    this.list=[];
    this.add=function(watcher){
        this.list.push(watcher)
    },
    this.notify=function(newValue){
        this.list.forEach(fn => {
            fn(newValue)
        });
    }
}
//模拟compile,通过对Html的解析生成一系列订阅者(watcher)
let renderInput=function(newValue){
    let el=document.querySelector('#inp');
    if(el){
        el.value=newValue
    }
}
let renderTitle=function(newValue){
    let el=document.querySelector('#h1');
    if(el){
        el.innerHTML=newValue
    }
}
//解析出来的watcher存入Dep待用
let dep=new Dep();
dep.add(renderInput);
dep.add(renderTitle);
let observer=function(vm,key,value){
    Object.defineProperty(vm,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            console.log('Get')
            return value
        },
        set:function(newValue){
            if(value!==newValue){
                value=newValue
                console.log('Update')
                //将变动通知给相关订阅者
                dep.notify(newValue)
            }
        }
    })
}
//页面引用的方法
let inputChange=function(ev){
    let value=Number.parseInt(ev.target.value)
    vm.value=(Number.isNaN(value))?0:value;
}
let btnAdd=function(){
    vm.value++
}
//数据初始化方法
let initMVVM=function(vm){
    Object.keys(vm).forEach(key => {
        observer(vm,key,vm[key])
    });
}

function showInfo(value){
    console.log(value)
}
//初始化数据源
initMVVM(vm)
dep.add(showInfo)
//初始化页面，将数据源渲染到UI
dep.notify(vm.value);
