/* 单例模式核心=>确保只有一个实例,并提供全局访问
 *
 */
let user = (function() {
  let __name = 'sven',
      __age = 29

  return {
    getUserInfo: function() {
      return __name+'-'+__age
    }
  }
})()
console.log(user.getUserInfo())