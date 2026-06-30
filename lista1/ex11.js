const input = require('readline-sync')

let idade = input.question()
let pode = 16

function voto(pode, idade){
    if(idade >= pode){
        return("vc pode votar")
    }
    else{
        return("não pode votar")
    }
}
console.log(voto(pode, idade))
