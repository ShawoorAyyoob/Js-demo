class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
}
const students = [
    { name: "Alice", marks: 75 },
    { name: "Bob", marks: 45 },
    { name: "Charlie", marks: 65 },
    { name: "David", marks: 85 },
];

let newMarks = students.filter((students) => students.marks > 60);
console.log(newMarks);

let totalMarks = mark.reduce((total, mark) => total + mark, 0);
console.log(totalMarks);
let avgMarks = marks.reduce(totalMarks / mark);
console.log(avgMarks);
