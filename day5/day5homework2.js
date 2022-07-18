// - Write a function that converts USD to any other currency of choice.

function currencyConv(usaDollar) {
    poundSte = usaDollar * 0.84
    return poundSte
}
let myDollars = 150
console.log("My amount in pounds to travel is", currencyConv(myDollars), "pounds")