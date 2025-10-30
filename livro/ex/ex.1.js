const prompt = require("prompt-sync")()
//entrada de dados 
const salario = Number(prompt("Salario: "))
const tempo = Number(prompt("Tempo: "))
//processamento
const quadrienios = Math.floor(tempo / 4)
const bonus = salario * quadrienios / 100

//saida de dados 
console.log(`Você tem direito ${quadrienios} quadrienios`)
console.log(`Salario final R$: ${(salario + bonus).toFixed(2)}`)

