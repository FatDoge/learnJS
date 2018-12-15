const AIMain = (msg) => {
  return  msg.replace('吗','').replace('?','!').replace('是不是','才')
}
console.log(AIMain('你好吗?'))
console.log(AIMain("你是机器人吗?"));
console.log(AIMain("人类的本质是复读机"));
console.log(AIMain("滋瓷吗?"));
console.log(AIMain("你是不是傻"));
