// task -> https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

//"Maximum Number of Words Found in Sentences"

const mostWordsFound = (sentences) => {
    let res = 0

    for (const sentence of sentences) {
        let sLength = sentence.split(' ').length
        res < sLength ? res = sLength : null
    }

    return res
}

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));