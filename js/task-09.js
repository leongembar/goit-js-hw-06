function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector('.change-color')
const stringColor = document.querySelector('.color')
const bodyEl = document.querySelector('body')

changeColorButton.addEventListener('click', onChangeColor)

function onChangeColor() {
  const color = getRandomHexColor();
  stringColor.textContent = color;
  bodyEl.style.backgroundColor = color;
}
