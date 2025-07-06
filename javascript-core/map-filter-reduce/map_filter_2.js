// From an array of product objects, return an array of names of products whose price is less than 1000.

const products = [
  { name: "Tea Cup", price: 200 },
  { name: "Electric Kettle", price: 1200 },
  { name: "Tea Pack", price: 450 },
  { name: "Tea Table", price: 2500 }
];

function lessThan(products){
    return products
    .filter((ele) => ele.price < 1000)
    .map((ele) => ele.name)
}

console.log(lessThan(products))