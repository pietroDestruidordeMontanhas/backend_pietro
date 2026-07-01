const input = require('readline-sync')

function reverter(array) {
    let resultado = []
      for (let i = array.length - 1; i >= 0; i--) {
        resultado.push(array[i])
    }
        return resultado
}
let listaOriginal = [10, 20, 30, 40, 50]

console.log("Original:", listaOriginal);
console.log("Invertido:", reverter(listaOriginal));