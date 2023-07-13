const categoriesElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesElement.length}`);
categoriesElement.forEach((element) => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
})
