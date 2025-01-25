let marks = 50;
let grade;
let result;

if (marks >= 90) {
  grade = "A";
  result = "Distinction";
} else if (marks >= 60) {
  grade = "B";
  result = "1st Grade";
} else if (marks >= 40) {
  grade = "C";
  result = "2nd Grade";
} else if (marks >= 20) {
  grade = "D";
  result = "3rd Grade";
} else {
  grade = "E";
  result = "Failed";
}
console.log(`${grade} . ${result}`)