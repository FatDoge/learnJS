let axios=require('axios')
let getData=function(){
    return new Promise((resolve,reject)=>{
        axios.post('http://hduzjh.cn/LearningSys/class/upload')
            .then((response) => {
                resolve(response)
            })
            .catch((err)=>{
                reject(err)
            })
    }) 
}
getData()
.then(response=>{
    console.log(response.data)
})
.catch(reject=>{
    console.log(reject)
})