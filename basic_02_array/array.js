// Arrays
const myArr = [1,2,3,4,5,6,"ashesh",true]

console.log(myArr[2]) // 3

myArr.unshift(9)// add at the first but time consuming]

console.log(myArr.splice(1,3)) //changes the original array

console.log(myArr)


let cat = ["new","old"]
let dog = ["next", "more"]

console.log(cat.concat(dog))

console.log(...cat) // this demotes ,that is array becomes palin

let depth_array = [1,2,3,[4,5,6],[7,8,[9,10,11]]]

console.log(depth_array.flat(1))
console.log(depth_array.flat(Infinity))

// convert to array

console.log(Array.from("Ashesh"))//string, object
let a = 1,b = 2, c=5
console.log(Array.of(a,b,c))// variables
