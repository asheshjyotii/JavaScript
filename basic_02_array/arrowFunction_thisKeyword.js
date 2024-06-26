const user = {
    username : "Ashesh",
    price : 999,
    

    welcomeMessage : function() {
        a=22
        console.log(`${this.username}, Welcome to synkus.com`)
        console.log(this);
        function test() {
            b =12
            console.log(this);
        }
    }
    // ,test : function () {
    //     b =12
    //     console.log(this);
    // }
   
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log("+++")
// user.test()

// console.log(this)
function test(){
    console.log("Normal",this)
}
//++++++++using arrow functions+++++
const coffe = () =>{
    username = "ashesh"
    console.log("Arrow",this)
}
test()
coffe()

//implicite return

const addTwo = (num1,num2)=>(num1+num2)
const obj = ()=>({username: "asheshjyoti"})

console.log(addTwo(1,5))
console.log(obj())