// - given a sentence reverse order: "the sky is blue" -> "euld si yks eht" */

// let sentence = "the sky is blue"

function reverse(str) {
    let intoArray = str.split("") 
    let reverseArray = intoArray.reverse()
    let reverseString = reverseArray.join("")
    return reverseString
    
}
console.log(reverse("hello"));