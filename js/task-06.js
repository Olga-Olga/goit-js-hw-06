const inputElement = document.querySelector("#validation-input")

inputElement.addEventListener("blur", inputHandler);

function inputHandler({target}) {
    
    if (target.value.length === Number(target.dataset.length)) {
        target.classList.add("valid");
        target.classList.remove("invalid");
        return;
    }
    target.classList.add("invalid");
    
}
