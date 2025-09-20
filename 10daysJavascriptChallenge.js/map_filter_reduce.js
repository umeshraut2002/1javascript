// filter takes call back 

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.filter( num => {
    return num > 4;
})

console.log(newNums); 

// exercise 1 

// const users = [
//   { id: 1, name: "Amit", active: true },
//   { id: 2, name: "Sneha", active: false },
//   { id: 3, name: "Rahul", active: true },
//   { id: 4, name: "Priya", active: false }
// ];

// const activeUsers = users.filter( user => {
//     return user.active;
// })

// console.log(activeUsers);

// const products = [
//   { name: "Laptop", price: 55000 },
//   { name: "Mouse", price: 500 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Book", price: 300 }
// ];

// const higherPriceProducts =products.filter( product => {
//     return product.price > 500;
// })

// console.log(higherPriceProducts);

// ****************** MAP *********************


// each element should be multiplied by 10 

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplies = myNums.map( num => {
    return num * 10;
})

console.log(multiplies);

