// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2)
// console.log(doubled)

// const numbers = [...Array(100).keys()]
// console.log([...Array(100).keys()])


// let a = [1, 2, 3, 4, 5]
// let b = [...a, a[0] = 2]
// b[0] = 5
// b
// const data = [
//   {
//     "id": "1",
//     "userId": "1",
//     "createTime": 7094,
//     "topicId": "1",
//     "content": "我的老天鹅",
//     "likeCount": 9624,
//     "commentCount": 601,
//     "auditStatus": 0,
//     "hidden": false,
//     "modifyAfterAudit": false
//   },
//   {
//     "id": "2",
//     "userId": "2",
//     "createTime": 7094,
//     "topicId": "2",
//     "content": "我的老大狗",
//     "likeCount": 9624,
//     "commentCount": 601,
//     "auditStatus": 1,
//     "hidden": false,
//     "modifyAfterAudit": true
//   },
//   {
//     "id": "3",
//     "userId": "3",
//     "createTime": 7094,
//     "topicId": "3",
//     "content": "怎么回事啊弟弟",
//     "likeCount": 9624,
//     "commentCount": 601,
//     "auditStatus": 2,
//     "hidden": false,
//     "modifyAfterAudit": false
//   }
// ]
// console.log(data.filter(item=>item.modifyAfterAudit === true))


// let data1 = [1,2,3]
// let data2 = [...data1]
// data2
// data1[0] = 2
// data2
// console.log(data1 === data2)

// let data3 = [1,2,3,4]
// let data4 = [1,2,3,4]
// console.log(data3 === data4)

// console.log([1]===[1])

// let data = {
//   x: 1,
//   y: {
//     z:1
//   }
// }
// let data2 = {...data}
// console.log(data.y === data.y)

// const data = {
//   type: String,
//   default: () => 'fatdoge'
// }

// const data2 = {
//   type: String,
//   default: 'fatdoge'
// }
// console.log(data.default())
// console.log(data2.default)
// const arr = [1,3,7,9,12,13,15,56]
// console.log(arr.includes(2))

let props = {
  schedule: {
    channelList: {
      items: [
        {
          id: 1
        }
      ]
    }
  }
}
const { schedule } = props
console.log(schedule.channelList)
console.log(props.schedule.channelList)
console.log(schedule.channelList === props.schedule.channelList)
props.schedule = {
  channelList: {
    items: [
      {
        id:10000
      }
    ]
  }
}
console.log(schedule.channelList === props.schedule.channelList)
console.log(schedule.channelList)
console.log(props.schedule.channelList)


console.log({}==={})
console.log([]===[])
console.log(1===1)

console.log([]==0)
console.log([].length)

const contacts = {
  name: 'said',
  famillyName: 'Hayani',
  age: 22
};

let {name:otherName, famillyName, myAge} = contacts;

console.log(otherName);// said