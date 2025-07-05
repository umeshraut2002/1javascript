let chaiTypes = ["Masala chai", "ginger tea", "Darjeeling Tea", "Noon Tea"];

// chaiTypes.forEach((chai) => {
//     console.log(chai);
// })

// spred

let newChai = ["Oolong Tea", "Chamolina Tea", "Nilgiri Tea"];

let allChai = [...chaiTypes, ...newChai];

allChai.forEach((chai, index) => {
    console.log(`${index + 1}: ${chai}`);
})