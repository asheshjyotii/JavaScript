//When database doesnt return propervalue
let val1
let dataBaseReturn = undefined
val1 = dataBaseReturn ?? null // expected answer is 0 

console.log(val1)

// when database returns proper value

let val2
let dataBaseReturn2 = 5
val2 = dataBaseReturn2 ?? null

console.log(val2)