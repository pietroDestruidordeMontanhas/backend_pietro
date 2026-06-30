const input = require('readline-sync')

let a = input.question()
let b = input.question()

function menor(a, b){
    if(a < b){
        return a
    }
    else{
        return b
    }
}

console.log(menor(a , b))

let c = input.question()
let d = input.question()

let minor = (c, d) => {
    if(c < d){
        return c  
    }
    else{
        return d
    }
}
console.log(minor(c, d))