// Ek array of numbers lo [2, 4, 6, 8] aur har number ka square print karo.

// Ek string "JavaScript" ke har letter ko uppercase me print karo.

// Ek Set banao jisme cities ho aur for...of se print karo.

let numbers = [2, 4, 6, 8];

for(let item of numbers){
    console.log(`${item * item}`);
}

const language = "javascript";

for(let ch of language){
    console.log(ch.toUpperCase())
}
