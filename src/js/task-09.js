function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
   // .padStart(6, 0)
    }`;

}

const bodyElement = document.body
const btnElement = document.querySelector(".change-color")
const spanElement = document.querySelector(".color")

btnElement.addEventListener("click", ({ target }) => {
  bodyElement.style.backgroundColor = getRandomHexColor();
spanElement.textContent = getRandomHexColor()
  console.log(bodyElement);
})
