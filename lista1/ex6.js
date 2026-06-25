const input = require('readline-sync')
let n = input.question()

for(let i = n; i >= 0; i--){
    console.log(i)
    if(i === 0){
        console.log("fim")
    }
}