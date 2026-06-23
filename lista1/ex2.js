const input = require('readline-sync')

let base = input.question()
let altura = input.question()
let area = base * altura
let perimetro = 2 * (area + altura)

console.log(area)
console.log(perimetro)