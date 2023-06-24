const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elementsOfIngridients = ingredients.map(ingredient => {
  const oneIngrid = document.createElement("li");
  oneIngrid.textContent = ingredient
  oneIngrid.classList.add("item")
  console.dir(oneIngrid);
  return oneIngrid
})

  const targetOnHtml = document.querySelector("#ingredients")
  targetOnHtml.append(...elementsOfIngridients)



