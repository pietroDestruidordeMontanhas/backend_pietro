const input = require('readline-sync')
let t = 0
function rage (inicio, f ){
    let r = []
for(let i = inicio; i <= f; i++){
    r.push(i)
}
return r
}
function soma (array){
for (let n of array){
    t = t + n
}
return t
}
console.log(soma(rage(1, 10)))