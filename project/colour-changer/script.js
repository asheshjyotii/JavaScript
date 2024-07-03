let buttons = document.querySelectorAll(".button")
//console.log(buttons);
const body = document.querySelector("body")
const bod_items= document.querySelectorAll(".text")

buttons.forEach((button)=> {
    //console.log(button)
    button.addEventListener("click", (event)=>{
        console.log("event->",event)
        console.log("event.target->",event.target)
        if(event.target.id === "grey"){
            console.log()
            body.style.backgroundColor = "grey"
            bod_items.forEach((text)=>{
                text.style.color="white"
            })
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = "white"

            bod_items.forEach((text)=>{
                console.log("text->", text)
                console.log("text.style->", text.style)
                text.style.color="black"
            })
            
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = "#27187e"
            bod_items.forEach((text)=>{
                console.log("text->", text)
                console.log("text.style->", text.style)
                text.style.color="white"
            })
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = "#FFF44F"
            bod_items.forEach((text)=>{
                console.log("text->", text)
                console.log("text.style->", text.style)
                text.style.color="black"
            })
        }
    })
})