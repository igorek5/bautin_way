const form = document.querySelector('.connection__form');

const inputPhone = document.querySelector('.connection__input--phone');
const inputEmail = document.querySelector('.connection__input--email');

const regexPhone = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
const regexMail = /^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$/;

const validateInput = (field, regex, value) => {

  if (!regex.test(value) || !value) {
    field.classList.add('is-invalid');
    return false
  }
  field.classList.remove('is-invalid');
  return true;
}

const validatePhone = () => {
  return validateInput(inputPhone, regexPhone, '+7' + inputPhone.value);
};
const validateMail = () => {
  return validateInput(inputEmail, regexMail, inputEmail.value);
}

const validateInputs = () => {
  validatePhone();
  validateMail();
  return validatePhone() && validateMail();
}

const setFormValidation = () => {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validateInputs()) {
      console.log('Отправлено')
      form.reset();
    } else {
      console.log('нет');
    }
  });
}

export { setFormValidation };


