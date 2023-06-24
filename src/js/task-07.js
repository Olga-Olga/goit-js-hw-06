const elem = document.querySelector("#font-size-control")
const spanEl = document.querySelector("#text")
console.dir(spanEl);

elem.addEventListener("input", callback) 


function callback({ target }) {

    console.dir(target.value)
    // target.classList.add("#text")
 //console.log(spanEl.style);
     spanEl.style.fontSize = `${target.value}px` ;


}


