const categoriesElement = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesElement.length}`);
categoriesElement.forEach((element) => {
    console.log(`Category: ${element.querySelector('h2').textContent}`);
    console.log(`Elements: ${element.querySelector('ul').children.length}`);
})
