// From an array of users, return an array of names of users older than 25 using filter and map.

const userData = [
    {name: "vihaan", age: 23},
    {name: "pratiksha", age: 22},
    {name: "Nitin", age: 55},
    {name: "amjali", age: 44},
    {name: "manisha", age: 33},
];

function olderThan(userData){
    return userData
    .filter((ele) => ele.age > 25)
    .map((ele) => ele.name)
}

console.log(olderThan(userData));