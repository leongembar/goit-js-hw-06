const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elenentContainerEl = document.querySelector('#ingredients') 

const arrayIngredients = ingredients.map((el) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = el;
  itemEl.classList.add('item');
  return itemEl;
})

elenentContainerEl.prepend(...arrayIngredients);

