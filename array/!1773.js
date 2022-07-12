// task -> https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

//"Count Items Matching a Rule"

let items = [["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"],["qqqq","qqqq","qqqq"]]
let ruleKey = "name"
let ruleValue = "qqqq"

const countMatches = (items, ruleKey, ruleValue) => {
    let res = 0
    let ruleKeys = ['type','color','name']
    let keyiIndex = ruleKeys.indexOf(ruleKey)

    for (let i = 0; i < items.length; i++) {
        if (items[i][keyiIndex] === ruleValue) {
            res++
        }
    }

    return res
}

console.log(countMatches(items, ruleKey, ruleValue));