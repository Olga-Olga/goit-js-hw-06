const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

console.dir(outputElement);
inputElement.addEventListener("input", inputHandler)

function inputHandler(event) {
    console.log(event);
    if (event.target.value === "") {
        outputElement.textContent = "Anonymus"        
        return;
    }
    
    outputElement.textContent = event.target.value

}

