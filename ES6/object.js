// const data = {
//   info: {
//     name: 'fatdoge'
//   }
// } 

// const log = ({info}) => {
//   return info
// }
// console.log(log(data))

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const hashMap = {};
//     for(let i = 0, temp = nums.length; i < temp; i++) {
//       hashMap[nums[i]] = hashMap[nums[i]] ? hashMap[nums[i]].concat(i) : [i];
//       if (hashMap[target - nums[i]] && hashMap[target - nums[i]].length === 2) {
//         return hashMap[target - nums[i]]
//       }
//       if (hashMap[target - nums[i]] && hashMap[nums[i]] && hashMap[target - nums[i]] !== hashMap[nums[i]]) {
//           return [...hashMap[target-nums[i]], i]
//       }  
//   }  
// };

var twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0, temp = nums.length; i < temp; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i]
    }
    comp[target - nums[i]] = i
  }
};
console.log(twoSum([3,3,11,15], 6))
