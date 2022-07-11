// task -> https://leetcode.com/problems/jewels-and-stones/

//"Jewels and Stones"

const mostWordsFound = (jewels, stones) => {
    let res = 0
    let jewelsArr = jewels.split('')
    let stonesArr = stones.split('')

    for (const jewel of jewelsArr) {
        for (const stone of stonesArr) {
            jewel === stone ? res++ : null
        }
    }

    return res
}

console.log(mostWordsFound("aA", "aAAbbbb"));