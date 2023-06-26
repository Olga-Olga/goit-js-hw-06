
const form = document.querySelector(".login-form");

form.addEventListener("submit", callback)

function callback(event) {
    event.preventDefault();
    const {email, password} = event.target.elements

     if (email.value === "" || password.value === "") //незаповнені поля 
    {
        alert("все поля должны быть заполнены");
        return;
    }

    const inpotObj = {
        email: email.value,
        password: password.value
    }
    

    console.dir(inpotObj);
    event.target.reset()

}

