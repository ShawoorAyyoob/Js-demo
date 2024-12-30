let marks = 50;
let grade;
let result;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 60) {
  grade = "B";
} else if (marks >= 40) {
  grade = "C";
  result = "You"
} else if (marks >= 20) {
  grade = "D";
} else {
  grade = "E";
}
console.log(`${grade} . ${result}`)

switch (grade) {
  case "A":
    console.log("Outstanding");
    break;
  case "B":
    console.log("Passed");
    break;
  case "C":
    console.log("Average");
    break;
  default:
    console.log("Try Again Later");
    break;
}