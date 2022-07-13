// task -> https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

//"Count Number of Pairs With Absolute Difference K"

const countKDifference = (nums, k) => {
    let res = 0
    // 106 ms
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i < j && (nums[i] - nums[j] === k || nums[j] - nums[i] === k)) {
            res++
        }
      }
    }

    //146 ms
    // nums.forEach((_, idxI, arr) => {
    //     nums.forEach((_, idxJ, arr) => {
    //         idxI < idxJ && (arr[idxI] - arr[idxJ] === k || arr[idxJ] - arr[idxI] === k) ? res++ : null
    //     });
    // });
    
    return res
}
  
console.log(countKDifference([1,2,2,1], 1))