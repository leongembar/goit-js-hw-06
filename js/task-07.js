const changeRange = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

changeRange.addEventListener('input', changeFontSize); 
function changeFontSize(event) {
    textFontSize.style.fontSize = `${event.currentTarget.value}px`;
}