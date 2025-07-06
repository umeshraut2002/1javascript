// From an array of students, return roll numbers of students who scored more than 75 marks.

const students = [
  { roll: 101, marks: 90 },
  { roll: 102, marks: 67 },
  { roll: 103, marks: 80 },
  { roll: 104, marks: 45 }
];


function firstClassStudents(students){
    return students
    .filter((ele) => {
        return ele.marks > 75;
    })
    .map((ele) => {
        return ele.roll;
    })
}

console.log(firstClassStudents(students));