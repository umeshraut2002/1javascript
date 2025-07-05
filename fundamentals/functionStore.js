function calculateTtoal(amount){
    if(amount > 1000){
        console.log("You got flat 10% Discount");

        let discount = 10;
        let totalPay = (discount / 100) * amount;

        console.log(`You have to Pay: ${amount - totalPay}`);
    }
    else{
        console.log(`You Have to Pay: ${amount}`);
    }
}

calculateTtoal(2000);