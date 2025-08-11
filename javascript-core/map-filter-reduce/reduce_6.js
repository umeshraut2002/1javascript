// From an array of students with their class, create an object that groups students by class.

const students = [
  { name: "Vihaan", class: "A" },
  { name: "Pratiksha", class: "A" },
  { name: "Nitin", class: "B" },
  { name: "Amjali", class: "B" },
  { name: "Manisha", class: "C" }
];

const classGroup = students.reduce((acc, val) => {
    if(val.class === "A"){
        acc[val];
    }else{
        acc[val];
    }

    return acc;

}, {})


console.log(classGroup);

// {
//   A: [ { name: "Vihaan", class: "A" }, { name: "Nitin", class: "A" } ],
//   B: [ { name: "Pratiksha", class: "B" }, { name: "Amjali", class: "B" } ],
//   C: [ { name: "Manisha", class: "C" } ]
// }
