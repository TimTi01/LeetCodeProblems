// task -> https://leetcode.com/problems/truncate-sentence/

//"Truncate Sentence"

const truncateSentence = (s, k) => {
    let sArr = s.split(' ')
    let delCount = sArr.length - k
    sArr.splice(k, delCount) 
    return sArr.join(' ')
}   

console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
console.log(truncateSentence("chopper is not a tanuki", 5));