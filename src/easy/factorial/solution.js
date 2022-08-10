function factorial (num) {
    console.log(num)

    let numsArray = []
    for (let i = 1; i<=num ; i++) {
        numsArray.push(i)
    }
    console.log(numsArray)
    return numsArray.reduce((a, b) => a + b)
}

factorial(10)