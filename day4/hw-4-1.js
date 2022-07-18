// -- function assignGrade

function assignGrade(score) {
if (score >= 9 && score <= 10) {
console.log("A");
} else if (score >= 8 && score < 9) {
console.log("B");
} else if (score >= 7 && score < 8) {
console.log("C");
} else if (score >= 6 && score < 7) {
console.log("D");
} else {
console.log("F");
}
}
let grade = 8.9
assignGrade(grade);
