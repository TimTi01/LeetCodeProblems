// task -> https://leetcode.com/problems/build-array-from-permutation/

//"Build Array from Permutation"

const buildArray = (nums) => {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        res.splice(i, 0, nums[nums[i]])
    }

    return res
}   

console.log(buildArray([0,2,1,5,3,4]));