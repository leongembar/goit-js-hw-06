const textInputEl = document.querySelector('#validation-input');
const textInputLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener('blur', checkedLength);
function checkedLength(event)
{
    if (event.currentTarget.value.length === textInputLength) {
        textInputEl.classList.add('valid');
    }

    else (
        textInputEl.classList.add('invalid')
    )
    
}
