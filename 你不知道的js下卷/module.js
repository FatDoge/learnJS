let fred=(function User(name){
    let username,password;
    let doLogin=(myUsername,myPassword)=>{
        username=myUsername;
        password=myPassword;
        console.log(username,password)
    }
    let greeting=()=>{
        console.log(`Hello,${name}`)
    }
    let api={
        doLogin,
        greeting
    }
    return api;
})('fatdoge')
fred.doLogin('fatdoge','8888');
fred.greeting()
//import foo from './foo'
import foo from './foo'
foo.foo()