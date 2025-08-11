// From an array of words, create an object that shows the frequency/count of each word.

const words = ["tea", "coffee", "tea", "juice", "tea", "coffee"];

const frequency = words.reduce((acc, val) => {
    if(acc[val]){
         acc[val] += 1;
    }
    else{
         acc[val] = 1;
    }

    return acc;
}, {})

console.log(frequency);

/*
{
  tea: 3,
  coffee: 2,
  juice: 1
}
*/