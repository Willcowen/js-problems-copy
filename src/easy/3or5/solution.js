function multiples(input){
    let resultsArr = []
    for(let i = 3; i< input; i++){
        if (i%3 === 0 || i%5 === 0) {
            resultsArr.push(i)
        }
    }
    return resultsArr.reduce((a, b) => a + b)
}

multiples(1000)