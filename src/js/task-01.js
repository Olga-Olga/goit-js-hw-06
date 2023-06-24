const ulElement = document.querySelector('#categories');
const liArrays = ulElement.querySelectorAll(".item")
console.log(`Number of categories: ${liArrays.length}`);


liArrays.forEach(li => {
    console.log("Category:", li.querySelector("h2").textContent);
    console.log("Elements: ", li.querySelectorAll("li").length)
})

