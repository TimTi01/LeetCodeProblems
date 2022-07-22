// task -> https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/

//"Cells in a Range on an Excel Sheet"

const countConsistentStrings = (allowed, words) => {
    let count = 0

    for (const word of words) {
        for (let lt = 0; lt < word.length; lt++) {
            if (!allowed.includes(word[lt]) ) {
                count++
                break
            }
        }
    }

    return words.length - count
}

console.log(countConsistentStrings("fstqyienx", ["n","eeitfns","eqqqsfs","i","feniqis","lhoa","yqyitei","sqtn","kug","z","neqqis"]));
// console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
// console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));
// console.log(countConsistentStrings("cad", ["cc","acd","b","ba","bac","bad","ac","d"]));