class Course{
    title;
    instructor;
    duration;
    level;

    constructor(t,i,d,l){
        this.title = t;
        this.instructor = i;
        this.duration = d;
        this.level = l;
    }
}
const course1 = new Course('English', 'James', 1 , 'Beginner');
const course2 = new Course('Arabic', 'Hamed', 2, 'Advanced');
const course3 = new Course('React', 'John', 3, 'Intermediate');
const course4 = new Course('BackEnd', 'Alex', 4, 'Beginner');

const courses = [];
courses.push(course1, course2, course3, course4);

let courseLevel = courses.filter(course => course.level == 'Beginner');
console.log(courseLevel);

let totalDuration = courses.reduce((total,course) => total + course.duration,0);
console.log(`Total duration is ${totalDuration}`);