// the info inside the {} braces are its scope it wont leak
// var has no scope so it will be treated as global

function one(){
    const username ="asheshjyoti"
    
    function two(){
        const website = "synkus.com"
        console.log(username);
    }
    //console.log(website); //error
    two() // two is a child funciton and is also known as clousure function as it can accesses the parent properties 
}
// one()


// ++++++++++++++++++Hoisting+++++++++++++++++++++++++++

console.log(add(12))//Hoisting 
function add (num){
    return 2+num;
}




const addOn = function (num){ //hoisting not possible in variable declared variable
    return 2+num;
}

console.log(addOn(5))