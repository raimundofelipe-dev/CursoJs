const num = [7,3,4,6]

//num.sort()
num.push(9)

console.log(num)
//console.log(num[0])
//console.log(`${num.length}`)
/*
for(let pos=0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem os valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`a posição ${pos} tem os valor ${num[pos]}`)
}