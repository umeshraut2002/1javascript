// Calculate the total price of all items in the cart.


const cart = [
  { item: "Chai", price: 40 },
  { item: "Coffee", price: 100 },
  { item: "Snacks", price: 60 }
];

const totalPrice = cart.reduce((acc, val) => {
    return acc += val.price;
},0);

console.log(totalPrice);