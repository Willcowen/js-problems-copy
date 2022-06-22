const fibonacci = (a, b) => {
const fibArray = [a, b]
for (let i = 0; i < 98; i++) {
    const lastNumber = fibArray[fibArray.length-1]
    const secondLastNumber = fibArray[fibArray.length-2]
    fibArray.push(lastNumber + secondLastNumber)
}
return fibArray
}

//Computes the list of the first 100 Fibonacci numbers. 
//The first two Fibonacci numbers are 1 and 1. 
//The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number. 
//The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

//Take input 1, 1 - add them together, store value second value '1' and sum of previous values '2' then add them together again (push this value into the array) and repeat.

console.log(fibonacci(1, 1))