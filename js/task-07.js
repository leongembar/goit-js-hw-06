const changeRange = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');
textFontSize.style.fontSize ='10px';
 

changeRange.addEventListener('input', changeFontSize); 
function changeFontSize(event) {
    console.log(textFontSize);
    textFontSize.style.fontSize = `${event.currentTarget.value}px`;
}