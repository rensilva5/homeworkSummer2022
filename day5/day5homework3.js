/* - The FizzBuzz problem is a classic test given in coding interviews. The task is simple:
 - Print integers 1 to N, but print "Fizz" if an integer is divisible by 3, "Buzz" if an
 - integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5. */

 //-----

//let A = 18
 
//  function FizzBuzz(n) {
//     for (let i = 1; i < n; i++) {
//     if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz")
//     } else {
//         console.log(i)
//     }
//  }
// }
//  //console.log
//  (FizzBuzz(31))

function fizzbuzz(n) {
    let results = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0) {
        } else if (i % 5 === 0) {
            results.push("Buzz")
        } else if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz")
        } else
            results.push(i)
        }
        return results
    }
    let finalResult = fizzbuzz(33)  
    console.log(finalResult)






























function fizzBuzz(n) {
    let result = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("fizzBuzz")
        } else if (i % 3 === 0) {
            result.push("fizz")
        } else if (i % 5 === 0) {
            result.push("Buzz")
        } else
            result.push(i)
    } 
    return result
}
console.log(fizzBuzz(33))