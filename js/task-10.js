function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumberEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('button[data-create]');
const buttonDestroyEl = document.querySelector('button[data-destroy]');
const divConteiner = document.querySelector('#boxes')
let divArray = [];

buttonCreateEl.addEventListener('click', createBoxes);

function createBoxes(amount) {
  amount = inputNumberEl.value;
  let widthEl = 20;
  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();
    widthEl += 10;
    const div = `<div style="width:${widthEl}px;height:${widthEl}px;background-color:${color}" ></div>`;
    divArray.push(div);
  }
  const divStr = divArray.join('');
  
  divConteiner.innerHTML = divStr;
}


buttonDestroyEl.addEventListener('click', () => {
  divConteiner.innerHTML = '';
  divArray = [];
})
