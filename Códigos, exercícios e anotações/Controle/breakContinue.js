const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x in nums){
    if(x == 5){ //quando for 5 ele para
        break // Não age no if, age no bloco mais próximo dele, no caso o for
    }
    console.log (`${x} = ${nums[x]}`)
}

console.log()

for (y in nums){ 
    if (y==5) continue //ele interrompe essa posição, e pula pra próxima
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums){
        if( a == 2 && b == 3) break externo
        console.log(`par = ${a},${b}`)
    }
}

