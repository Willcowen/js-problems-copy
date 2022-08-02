/* # Random Number Generator

Create your own method for generating a random number between two other numbers.

It is common to use _time_ as a means of generating a random number, but there are other ways, too - can you find one?
*/

function RandomNumberGenerator (a, b) {
    console.log(a, b)
    const min = Math.ceil(a);
    const max = Math.floor(b);
    const random =  Math.floor(Math.random() * (max - min) + min)
    return random; //The maximum is exclusive and the minimum is inclusive
}

RandomNumberGenerator(1, 100)