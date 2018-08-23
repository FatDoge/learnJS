let myPromise=function(){
    console.log('I promise!');
    return new Promise(function(resolve,reject){
        resolve('love u!');
        reject('again!')
    })
}
myPromise()
.then(
    (response)=>{
        console.log(response)
        return new Promise(function(resolve,reject){
            resolve('forever!');
            reject('again!')
        })
    },
    (reject)=>{console.log(reject)}
)
.then(
    (response)=>{console.log(response)},
    (reject)=>{console.log(reject)}
)