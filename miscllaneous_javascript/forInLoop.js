// Ek object banao jisme book ka title, author, aur price ho aur sab print karo.

// Ek nested object banao aur sab properties ko for...in se print karo.

let book = {
    title: "rich dad poor dad",
    author: "robert",
    price: 200
}

for(let key in book){
    console.log(`${key} : ${book[key]}`);
}

// Ek nested object banao aur sab properties ko for...in se print karo.

const woldCup = {
    team: 11,
    teamName: {
        team1: "india",
        team2: "Pakistan",
        team3: "Australia"
    }
}

for(let key in woldCup){
    console.log(woldCup[key])
}