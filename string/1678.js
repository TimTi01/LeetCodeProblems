// task -> https://leetcode.com/problems/goal-parser-interpretation/

//"Goal Parser Interpretation"

const interpret = (command) => {
    let strArr = command.split('')
    
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === '(' && strArr[i+1] === ')') {
            strArr.splice(i, 2, 'o')
        } else if (strArr[i] === '(' && strArr[i+1] === 'a') {
            strArr.splice(i, 4, 'al')
        }
    }

    return strArr.join('')
}

console.log(interpret("G()()()()(al)"));