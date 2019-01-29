/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var maxHeight = Math.max.apply(null, height);
    var maxHeightI = 0;
    var result = 0;
    var x = 0, y = 0;
    var leftArea = 0, rightArea = 0;
    var l = 0, r = height.length - 1;
    var sum = 0
    for(var i = 0; i<height.length; i++){
        if(height[i] == maxHeight){
            maxHeightI = i;
        }
        sum += height[i];
    };
    while(l < maxHeightI){
        if(height[l] > x){
            leftArea += (height[l]- x) * (maxHeightI - l);
            l++;
            x = height[l];
            
        }else{
            l++;
        }
    };
    while(r > maxHeightI){
        if(height[r] > y){
            rightArea += (height[r]- y) * (r - maxHeightI);
            r--;
            y = height[r];
            
        }else{
            r--;
        }
    };
    return result = leftArea + rightArea + maxHeight - sum;
};


console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
const testReturn = () => {
  let res = 0;
  return res = 1+2
}

console.log(testReturn())