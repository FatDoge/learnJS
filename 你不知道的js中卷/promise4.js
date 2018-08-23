let p=new Promise((resolve,reject)=>{
    reject('Oops!');
})
let p2=p.then(
    function fulfilled(){
        console.log('done!')
    },
    function(err){
        throw err
    }
)
.then(
    (resolve)=>{console.log(resolve)},
)
.catch(
    (reject) => { console.log(reject) }
)