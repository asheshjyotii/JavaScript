// ------------Array---------
let arr= [1,2,3,4,5]
for (let i of arr) {
    console.log(i)
}
//-----------------------
let name = "Ashesh Jyoti Majumdar"
console.log("words in Your name without space")
for(let words of name){
    if(words == " ")
        continue;
    
    console.log(`->${words}`)
}

//-------------Map------------
let country = new Map()
country.set("IN","India")
country.set("US","USA")
country.set("EU","Europe")
for(const[key,value]of country){
    console.log(key,value)
}