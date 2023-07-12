const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const emailValue = formElements.email.value;
        const passwordValue = formElements.password.value;

    if (emailValue === "" || passwordValue === "") {
        window.alert("Всі поля повинні бути заповнені.");
    }
    else {
        const formData = {
        email: emailValue,
        password: passwordValue,
        }
        console.log(formData);
    }
    
   

}