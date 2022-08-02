/* # Range

Given a list of numbers, find the difference between the highest and lowest numbers in the list.
[10, 1, 6, 7, 8, 5, 9, 2, 3, 4] => 9
*/

function findDifference(numsArr) {
    console.log(numsArr.sort((a, b) => a - b))
    // sort the array numerically lowest - highest
    numsArr.sort((a, b) => a - b)
    // identify highest + lowest value
    const highest = numsArr[numsArr.length-1]
    const lowest = numsArr[0]
    console.log('highest:', highest, 'lowest:', lowest)
    const difference = highest - lowest
    //calculate difference
    console.log('difference:', difference)
    return difference
}

findDifference([10, 1, 6, 7, -8, 5, 9, 2, 3, -4])

