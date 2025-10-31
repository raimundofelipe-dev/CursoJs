const prompt = require("prompt-sync")()

const veiculo = prompt("Veiculo : ")
const preco = Number(prompt("Preço: "))

const entrada = preco / 2 
const parcela = (preco / 2) / 12

console.log(`${veiculo}`)
console.log(`Entrada é R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)