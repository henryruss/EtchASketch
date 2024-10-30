
const container = document.getElementById("container");
const button = document.getElementById("button");

    document.addEventListener("DOMContentLoaded", function() {
    console.log("before loop");
    for (let i=0; i<(16*16); i++){
        
        
        const lilDiv = document.createElement("div");
        lilDiv.classList.add("lilDiv");
        lilDiv.addEventListener("mouseover", function(){
            lilDiv.style.backgroundColor = "purple";
        })
        lilDiv.addEventListener("mouseout", function(){
            lilDiv.style.backgroundColor = "blueviolet";
        })
        container.appendChild(lilDiv);

    }
    console.log("after loop")
});

button.addEventListener("click", function(){
    
    container.scrollIntoView();
    removeGrid();
    const userInput = prompt("Enter the side length of your grid");
    const divWidth = container.clientWidth / userInput;
    const divHeight = (window.innerHeight-100) / userInput;

    
    console.log("userInput = "+userInput)
    console.log("divWidth = "+divWidth)
    for (let i = 0; i< (userInput*userInput); i++){
        const lilDiv = document.createElement("div");
        lilDiv.classList.add("lilDiv");
        lilDiv.style.width = `${divWidth}px`;
        lilDiv.style.height = `${divHeight}px`;
        lilDiv.addEventListener("mouseover", function(){
            lilDiv.style.backgroundColor = "purple";
        })
        lilDiv.addEventListener("mouseout", function(){
            lilDiv.style.backgroundColor = "blueviolet";
        })
        container.appendChild(lilDiv);

    }
});

function removeGrid(){
    console.log("buttonPressed")
    const removeList = document.querySelectorAll(".lilDiv")
    removeList.forEach(function(element){
        container.removeChild(element);
    })
    
    };




