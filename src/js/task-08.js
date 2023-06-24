
const form = document.querySelector(".login-form");

form.addEventListener("submit", callback)

function callback(event) {
    event.preventDefault();
    const thisElements = event.target.elements

    console.dir(event.target);
    if (thisElements.email.value === "" || thisElements.password.value === "") //незаповнені поля 
    {
        alert("все поля должны быть заполнены");
        return;
    }

    const inpotObj = {
        email: thisElements.email.value,
        password: thisElements.password.value
    }
    

    console.dir(inpotObj);
    event.target.reset()

}

