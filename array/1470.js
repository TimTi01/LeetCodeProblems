// task -> https://leetcode.com/problems/shuffle-the-array/

//"Shuffle the Array"

const minMovesToSeat = (nums, n) => {
    let res = []
    
    for (let i = 0; i < nums.length - n; i++) {
        res.push(nums[i])
        res.push(nums[i+n])
    }

    return res
}   

console.log(minMovesToSeat([2,5,1,3,4,7], 3));