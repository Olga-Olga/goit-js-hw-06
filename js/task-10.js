function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fromElement = document.querySelector("#controls")
const btnElementCreate = document.querySelector('button[data-create]')
const btnElementDestroy = document.querySelector('[data-destroy]')
const inputElement = document.querySelector('input[type=number]')
const boxElement = document.getElementById("boxes");

btnElementCreate.addEventListener("click", handlerButtonDraw);
btnElementDestroy.removeEventListener("click", handlerButtonDraw);

btnElementDestroy.addEventListener("click", destroyBoxes);

let quantityValue = 0;
function handlerButtonDraw(event) {
  quantityValue = Number(inputElement.value);
  console.log(quantityValue);
  createBoxes(quantityValue)
}

function createBoxes(param) {
  const collectionDivElements = [];

  for (let i = 0; i < param; i += 1) {
    const x = document.createElement("div")
    x.style.width = `${30 + i * 10}px`;
    x.style.height = `${30 + i * 10}px`;
    x.style.height = `${30 + i * 10}px`;
    x.style.backgroundColor = getRandomHexColor();
    collectionDivElements.push(x);
      
  }

  
  const boxElement = document.getElementById("boxes");
  boxElement.innerHTML = '';
  boxElement.style.display = "flex";
  boxElement.style.flexDirection = "column";
  boxElement.style.alignItems = "center";
  console.log("boxElement");
  boxElement.append(...collectionDivElements)
  
}

function destroyBoxes() {
  boxElement.innerHTML = '';
  inputElement.value = 0;
}
