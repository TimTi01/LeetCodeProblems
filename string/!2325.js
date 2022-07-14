// !Всё работает, нужно переписать(хотя б строчку 8) 
// task -> https://leetcode.com/problems/decode-the-message/

//"Decode the Message"
const finalValueAfterOperations = (key, message) => {
    const alpha = 'abcdefghijklmnopqrstuvwxyz'
    let alphaArr = alpha.split('')
    let newKeyArr = [...new Set(key.replace(/\s/g, '').split(''))]
    let map = new Map()
    let res = ''

    for (let i = 0; i < alphaArr.length; i++) {
        map.set(newKeyArr[i], alphaArr[i])
    }
    for (const i of message) {
        map.get(i) !== undefined ? res += map.get(i) : res += ' '
    }
    
    return res
}

console.log(finalValueAfterOperations("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));