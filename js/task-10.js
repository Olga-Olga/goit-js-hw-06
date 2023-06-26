function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const fromElement = document.querySelector("#controls").children
//console.dir(fromElement);

const btnElementCreate = document.querySelector('button[data-create]')
const btnElementDestroy = document.querySelector('[data-destroy]')
const inputElement = document.querySelector('input[type=number]')
const boxElement = document.getElementById("boxes");

btnElementCreate.addEventListener("click", handlerButtonDraw);
btnElementDestroy.removeEventListener("click", handlerButtonDraw);

btnElementDestroy.addEventListener("click", destroyBoxes);

boxElement.style.display = "flex";
boxElement.style.flexDirection = "column";
boxElement.style.alignItems = "center";
  
let quantityValue = 0;

function handlerButtonDraw() {
  if (!inputElement.value) {
    alert("Enter valid number")
    return;
  }
  quantityValue = Number(inputElement.value);
  createBoxes(quantityValue)
}

function createBoxes(param) { 
    console.dir(boxElement.children.length);
    let start = boxElement.children.length;
    const collectionDivElements = [];
  for (let i = 0; i < (param); i += 1) {
    const x = document.createElement("div")
    x.style.width = `${30 + i * 10 + start*10}px`;
    x.style.height = `${30 + i * 10 + start*10}px`;
    x.textContent = start + i + 1;
    x.style.textAlign = "center";
    x.style.color = "white"
    x.style.backgroundColor = getRandomHexColor();
    collectionDivElements.push(x);
  }


  boxElement.append(...collectionDivElements)
  
  }

function destroyBoxes() {
  boxElement.innerHTML = '';
  inputElement.value = 0;
  quantityValue = 0;
}
