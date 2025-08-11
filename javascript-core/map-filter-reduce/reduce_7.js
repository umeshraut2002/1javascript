// (Transform to lookup object):
// From an array of products, create an object where each product's id becomes the key, and the value is the full product object.

const products = [
  { id: "p1", name: "Tea", price: 50 },
  { id: "p2", name: "Coffee", price: 120 },
  { id: "p3", name: "Juice", price: 70 }
];



// Output chahiye (something like):
// {
//   p1: { id: "p1", name: "Tea", price: 50 },
//   p2: { id: "p2", name: "Coffee", price: 120 },
//   p3: { id: "p3", name: "Juice", price: 70 }
// }
