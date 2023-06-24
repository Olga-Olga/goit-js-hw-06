const inputElement = document.querySelector("#validation-input")

inputElement.addEventListener("blur", inputHandler);

function inputHandler({target}) {
    
    if (target.value.length === Number(target.dataset.length)) {
        inputElement.classList.add("valid");
        inputElement.classList.remove("invalid");
        return;
    }
    inputElement.classList.add("invalid");
    
}
