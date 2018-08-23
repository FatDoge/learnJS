let delay=time=>{
    return new Promise(
        (resolve,reject)=>{
            setTimeout(resolve, time);
        }
    )
}

delay(1000)//1
.then(function STEP2(){
    console.log('step2 after 1000ms');
    return delay(2000)
})
.then(function STEP3(){
    console.log('step3 after 2000ms')
})

.then(function STEP4(){
    console.log('step4!')
    return delay(3000)
})
.then(function STEP5(){
    console.log('step5 after 3000ms')
})