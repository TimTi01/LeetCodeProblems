// task -> https://leetcode.com/problems/sorting-the-sentence/

//"Sorting the Sentence"
// Переделать на цикл for
const sortSentence = (s) => {
    let strArr = s.split(' ')
    let newStrArr = []

    strArr.forEach((el, i) => {
        let position = el[el.length - 1] - 1
        let word = el.substring(0, el.length - 1)
        newStrArr[position] = word
    });

    return newStrArr.join(' ')
}

console.log(sortSentence("lGaWqAkfVIFhqBzRs3 l2 bwKhelcNiyNBpjGUN1")); //"bwKhelcNiyNBpjGUN l lGaWqAkfVIFhqBzRs"