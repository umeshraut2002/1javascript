// filter takes call back 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.filter( num => {
    return num > 4;
})

console.log(newNums);