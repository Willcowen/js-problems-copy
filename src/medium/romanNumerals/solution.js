const romanNumerals = (romanNum) => {
const numerals = {
    I: 1,
    X: 10,
    C: 100,
    M: 1000,
}
let total = 0
console.log(romanNum)
const arr = romanNum.split('')
console.log('arr:', arr)
arr.forEach((element, index) => {
    console.log(index)
    total += numerals[element]
})

console.log(total)
}
romanNumerals('XII')