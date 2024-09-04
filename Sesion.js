
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

function validateForm() {
    let isValid = true;

    // Validar nombre
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validar email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'El email es obligatorio.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailError.textContent = 'El email no es válido.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    submitBtn.disabled = !isValid;
}
submitBtn.addEventListener("click", () => {
    alert("Gracias por registrarte!")
    window.location.href = "./index.html"});

nameInput.addEventListener('input', validateForm);
emailInput.addEventListener('input', validateForm);

