function createMultiplesArray(num, length) {
let resultsArr = [];
for(let i = num; i<=num*length; i+=num) {
    resultsArr.push(i)
}
return resultsArr
}

createMultiplesArray(17, 6)