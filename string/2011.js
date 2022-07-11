// task -> https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

//"Final Value of Variable After Performing Operations"

const finalValueAfterOperations = (operations) => {
    let count = 0

    for (const operation of operations) {
        operation === "--X" || operation === "X--" 
            ? count-- 
            : count++
    }

    return count
}

console.log(finalValueAfterOperations(["--X","X++","X++"]));