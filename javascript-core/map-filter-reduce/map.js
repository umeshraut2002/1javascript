// Write a function that takes an array of numbers and returns an array of their squares using map.

let number = [1, 2, 3, 4, 5, 6];

function squareMethd(number){
    return number.map((ele) => {
        return ele * ele;
    });
}

console.log(squareMethd(number));