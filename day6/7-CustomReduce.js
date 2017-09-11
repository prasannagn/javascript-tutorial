const students = [
    {name: "Prasanna", grades: [35, 75, null, 88, 68]},
    {name: "Govind", grades: [100, 75, 79, 88, null]},
    {name: "Rajkumar", grades: [null, 75, 100, 88, 35]},
    {name: "Punith", grades: [50, 75, 35, null, 68]}
];

const clean = (list) => list.map(i=> !i ? 0 : i);
const dropLowest = (list) => list.sort((a,b) => a-b).slice(1);
const sum = (list) => list.reduce((acc,item) => acc + item);
const average = (list) => sum(list) / list.length;

function studentStats(student) {
    const {name} =student;
    const grades = dropLowest(clean(student.grades));
    const avg = average(grades);
    const top = Math.max(...grades);
    return {name, avg, top, grades}
}

console.log(students.map(studentStats));

