function timesTables(num) {
    const resultsArr = []
    for(let i = 1; i <= 12; i++) {
        resultsArr.push(i*num)
    }
    return resultsArr
}

console.log(timesTables(5))