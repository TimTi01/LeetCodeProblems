// task -> https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

//"Minimum Number of Moves to Seat Everyone"

const arrayStringsAreEqual = (word1, word2) => {
    let str1 = ''
    let str2 = ''

    for (const item of word1) {
        str1 += item    
    }

    for (const item of word2) {
        str2 += item    
    }
    
    return str1 === str2
}   

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));