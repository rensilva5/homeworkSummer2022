/* -- Today's Lab :D WRITE FUNCTIONS FOR EACH!

 - Write a function to convert temperatures from Fahrenheit to Celsius.
 - Write a function that converts USD to any other currency of choice.
 - The FizzBuzz problem is a classic test given in coding interviews. The task is simple:
    Print integers 1 to N, but print "Fizz" if an integer is divisible by 3, "Buzz" if an
    integer is divisible by 5, and "FizzBuzz" if an integer is divisible by both 3 and 5.
 - You are given 2 arrays, one called shoppingList and one called cart.
 - Create a new version of shoppingList where the items in the cart have been removed.
 - given a sentence reverse order: "the sky is blue" -> "euld si yks eht" */

 // - Fahrenheit to Celsius
 function temConvertion (fahrenheit) {
    let celsius = ((fahrenheit -32) * 5) / 9
    return celsius
 }
 let TemInCelsius = 95
 console.log(temConvertion(TemInCelsius))