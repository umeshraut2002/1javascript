function trafficLight(color){
    switch(color){
        case "red":
            console.log("Stop");
            break;

        case "yellow":
            console.log("Slow Down");
            break;

        case "green":
            console.log("Go");
        
        default:
            console.log("Chalaan Kat Do");
    }
}

trafficLight("red")