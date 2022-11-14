const formLogin = document.querySelector('.login-form');
formLogin.addEventListener('submit', formSubmit)


function formSubmit(event) {
    
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const emailForm = formEl.email.value;
    const passwordForm = formEl.password.value
    ? (emailForm !== "" || passwordForm !== "") : alert('Заповніть будь ласка поля');

    const formData = new FormData(event.currentTarget)
    formData.forEach((value, name) => {
        console.log(`${name} - ${value}`);
    });
    formLogin.reset()
}
