const input = require('readline-sync')
let s = Number(input.question())
let o = Number(input.question())

let conta = s
function calculadora( s, o, dom){



return dom(s, o)

}

console.log(calculadora(s, o, (x, y) => x + y))
console.log(calculadora(s, o, (x, y) => x - y))
console.log(calculadora(s, o, (x, y) => x * y))