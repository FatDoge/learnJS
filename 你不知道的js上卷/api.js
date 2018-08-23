let fatdoge={
    /**
     * 接口地址
     */
    url:'http://localhost:8080/api',
    think:function(words){
        console.log(words);
    },
    /**
     * @fatdoge
     * 登录
     */
    login:function(username,password){
        axios.get(`${this.url}/login`)
        .then(function(res){
            console.log(res);
        })
    },
    /**
     * @fatdoge
     * 注册
     */
    register:function(info){

    }
}
fatdoge.login();