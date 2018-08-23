function generators(){
    for(var i=0;i<10;i++){
        yield i*2;
    }
}
console.log(generators());