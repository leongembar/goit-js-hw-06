const textInputEl = document.querySelector('#validation-input');
const textInputLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener('blur', checkedLength);
function checkedLength(event)
{
    if (event.currentTarget.value.length === textInputLength) {
        textInputEl.classList.remove('invalid')
        textInputEl.classList.add('valid')
        
    }

    else {
        textInputEl.classList.remove('valid')
        textInputEl.classList.add('invalid')
    }
    
}
