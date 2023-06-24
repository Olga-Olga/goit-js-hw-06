

const btnElementIncrease = document.querySelector('button[data-action="increment"]')
const btnElementDecrease = document.querySelector('button[data-action="decrement"]')

btnElementIncrease.addEventListener("click", handlerButtonPlus);
btnElementDecrease.addEventListener("click", handlerButtonPlus);

let counterValue = 0;
const currentContent = document.getElementById("value")

function handlerButtonPlus(event) {
   event.target.dataset.action === "increment" ? counterValue += 1 : counterValue -= 1; 
   currentContent.textContent = counterValue;
}



