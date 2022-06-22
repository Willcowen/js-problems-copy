function doubleString(string) {
    const resultsArr = []
    for (const letter of string) {
    resultsArr.push(letter, letter)
    }
    return resultsArr.join('')
}

doubleString('1234!_ ')

