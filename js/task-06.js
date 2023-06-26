const inputElement = document.querySelector("#validation-input")

inputElement.addEventListener("blur", inputHandler);

function inputHandler(event) {
    const {value, dataset, classList} = event.target
    
    if (value.length === Number(dataset.length)) {
        classList.add("valid");
        classList.remove("invalid");
        return;
    }
    classList.add("invalid");
    
}
