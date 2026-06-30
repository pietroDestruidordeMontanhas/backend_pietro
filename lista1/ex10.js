const input = require('readline-sync')

let p = input.question()
let l = input.question()
let c = 0

function bomdia(p, l){
    for(let i = 0; i < p.length; i ++){
        if(p[i] === l){
            c++
        } 
    }
    return c 
}
console.log(bomdia(p, l))