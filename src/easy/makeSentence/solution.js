function makeSentence (string) {
const punctuation = [',', '.', '!', ';']
string = string.charAt(0).toUpperCase() + string.slice(1)
if (punctuation.includes(string.charAt(string.length - 1))) {
    return string
}

else return string + '.'
}

makeSentence('hello there, my name is Will!')
makeSentence('hello there, my name is Will')