// From an array of numbers, find the maximum number using reduce.

const nums = [5, 12, 98, 34, 2];

const maxNum = nums.reduce((acc, val) => {
    if(val > acc){
        return val;
    } else {
        return acc;
    }
});

console.log(maxNum);