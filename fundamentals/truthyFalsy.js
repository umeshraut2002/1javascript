function truthyFalsy(value){
    if(value){
        console.log("Truthy");
    }
    else{
        console.log("Falsy");
    }
}

truthyFalsy(1);
truthyFalsy(0);
truthyFalsy("Umesh");
truthyFalsy("");
truthyFalsy([]);
truthyFalsy({});