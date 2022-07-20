// - given a sentence reverse order: "the sky is blue" -> "euld si yks eht" */

// function reverse(str) {
//     let intoArray = str.split("") 
//     let reverseArray = intoArray.reverse()
//     let reverseString = reverseArray.join("")
//     return reverseString
// }
//console.log(reverse("hello"));

function sentence(str) {
    let toArray = str.split("")
    let toReverse = toArray.reverse()
    let joinSentence = toReverse.join("")
    return joinSentence
}

//let sentence = "the sky is blue"
console.log(sentence("the sky is blue"))