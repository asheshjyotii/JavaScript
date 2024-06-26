// the info inside the {} braces are its scope it wont leak
// var has no scope so it will be treated as global

function one(){
    const username ="asheshjyoti"
    
    function two(){
        const website = "synkus.com"
        console.log(usename);
    }
    console.log(website); 
    two()
}
one()