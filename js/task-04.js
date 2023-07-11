let count = 0;
// counterValueEl = document.querySelector("#value");
// console.log(counterValue)
const valueEl =  document.querySelector('#value');
const buttonDecrEl = document.querySelector('[data-action="decrement"]');
const buttonIncrEl = document.querySelector('[data-action="increment"]');

buttonDecrEl.addEventListener('click', plusValue)

function plusValue() {
    count -= 1;
     valueEl.textContent = count;
}

buttonIncrEl.addEventListener('click', minusValue)

function minusValue() {
    count += 1;
    valueEl.textContent = count;
}