const prompt = require("prompt-sync")()
const peso = Number(prompt("Peso(kg): "))
const consumo = Number(prompt("Consumo por dia(gr): "))

const pesog = peso * 1000
const a = Math.floor(pesog / consumo)
const sobra = pesog % consumo 


console.log(`Dias que a ração dura: ${a} dias`)
console.log(`Sobra: ${sobra}gr`)