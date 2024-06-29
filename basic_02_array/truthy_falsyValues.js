import chalk  from "chalk" 
//---------------------------------
//Falsy values (always false)-> false, 0, -0, BigInt 0n, "", null, undefined, NaN


//Truty Valuse (all except falsy) -> "false", "0", " ", [], {}, function(){}
let location = "kolkata" //string is not empty

if(location){ // it is considered true
    console.log(chalk.green(`User's location is -> ${chalk.bold(location)}`))
}

let name = "" //when string is empty

if(name){// it is considered false
    console.log(chalk.green(`User's name is -> ${chalk.blue(name)}`))
}
else console.log(chalk.red("Name not found"))

let messages = ["hi","bye"]

if(messages){
    console.log(chalk.green(`User's messages are -> ${chalk.blue(messages)}`))
}

let banks = []// empty array

if(banks){// although empty array it is considered true!
    console.log(chalk.green(`User's banks are -> ${chalk.blue(banks)}`))
}
else console.log(chalk.red("No banks found"))