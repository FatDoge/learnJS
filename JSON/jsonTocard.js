const JSON = {
  "groupId": 1,
  "requiredCondition": {
    "userInfoCondition": {
      "sex": 1,
      "minAge": 10,
      "maxAge": 100,
      "province": "浙江",
      "city": "杭州",
      "momStatus": 2,
      "childSex": 2,
      "minChildAge": 1,
      "maxChildAge": 3
    },
    "tradeCondition": {
      "allTime": false,
      "startTime": 1521181890331,
      "endTime": 1547101890331,
      "channel": "h5",
      "minBuyCount": 0,
      "maxBuyCount": 100
    }
  }
}

const CONDITION_MAP = {
  requiredCondition: '必要条件',
  notRequiredCondition: '非必要条件',
  userInfoCondition: '用户信息',
  sex: '性别',
  minAge: '年龄',
  maxAge: ''
};