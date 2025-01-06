let studentScores = [];
studentScores.push(45, 78, 88, 92, 56);
studentScores.pop();
studentScores.push(67, 89);

let updtdScrs = studentScores.map((n) => n + 5);
console.log(`Orginal Scores = ${studentScores}`);
console.log(`Updated Scores = ${updtdScrs}`);
