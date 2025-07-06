// From an array of users, count how many users are active.

const users = [
  { name: "Vihaan", active: true },
  { name: "Pratiksha", active: false },
  { name: "Nitin", active: true },
  { name: "Amjali", active: true }
];

const activeUsers = users.reduce((acc, val) => {
    if(val.active){
        return acc + 1;
    }
    else{
        return acc;
    }
},0);

console.log(activeUsers)