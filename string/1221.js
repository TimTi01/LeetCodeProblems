// task -> https://leetcode.com/problems/split-a-string-in-balanced-strings/

//"Split a String in Balanced Strings"

const balancedStringSplit = (s) => {
    let strArr = s.split('')
    let res = 0
    let balans = 0
    
    for (const i of strArr) {
      i === 'L' ? res++ : res--
      res === 0 ? balans++ : null
    }
    
    return balans
}

console.log(balancedStringSplit("RLRRLLRLRL"));