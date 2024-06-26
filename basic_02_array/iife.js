// (IIFE) to deprecate global poisoning & the functions we want execute as soon as the application starts like database connection.


//named iife
(function test(){
    console.log("DB connected")
})();
//now if we use another invoked funciton after this it wont run unless we put ; after the prev, since the iife function doesnt know where to end the context
(function test(){
    console.log("DB connected2")
})();

// unnamed iife
((name)=>{
    console.log("DB connected", name)
})("ashesh")


(()=>{
    user ="ashesh"
})()