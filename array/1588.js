// task -> https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

//"Minimum Number of Moves to Seat Everyone"

const minMovesToSeat = (seats, students) => {
    let sortSeatsArr = seats.sort((a, b) =>  a - b)
    let sortStudentsArr = students.sort((a, b) =>  a - b)
    let totalMoves = 0

    sortSeatsArr.forEach((_, idx) => {
        sortSeatsArr[idx] > sortStudentsArr[idx] ? totalMoves += sortSeatsArr[idx] - sortStudentsArr[idx] : null
        sortSeatsArr[idx] < sortStudentsArr[idx] ? totalMoves += sortStudentsArr[idx] - sortSeatsArr[idx] : null
    });

    return totalMoves

}   

console.log(minMovesToSeat([4,1,5,9], [1,3,2,6]));