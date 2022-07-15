// -- function assignGrade

function assignGrade (score) {
    if (score >= 9 && score <= 10) {
        console.log("Awesome, you got an A")
    } else if (score >= 8 && score < 9) {
        console.log("B")
    } else if (score >= 7 && score < 8) {
        console.log("C")
    } else if(score >= 6 && score < 7) {
        console.log("D")
    } else {
        console.log("F")
    }
}
//let grade = 
console.log(assignGrade(9))  // - To check why undefined!!
//console.log(grade)
