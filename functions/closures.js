function increament(){
    let a = 28;

    return function () {  
        console.log(a);
    }
}

increament();