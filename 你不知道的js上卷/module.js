function fatdoge(){
    const copyRightInfo='fatdoge!!!';
    let doSomeThing=()=> {
        console.log('do it!')
    }

    let copyRight=()=>{
        console.log(copyRightInfo)
    }

    let publicApi = {
        doSomeThing: doSomeThing,
        copyRight: copyRight
    }

    return publicApi
}
let fd=fatdoge();
fd.copyRight();