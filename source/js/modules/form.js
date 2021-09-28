import { setСontrolPopup } from './popup.min.js';

const form = document.querySelector('.connection__form');
const inputPhone = document.querySelector('.connection__input--phone');
const inputEmail = document.querySelector('.connection__input--email');

let storageEmail = "";
let storagePhone = "";
let isStorageSupport = true;

try {
  storageEmail = localStorage.getItem("email");
  storagePhone = localStorage.getItem("phone");
} catch (err) {
    isStorageSupport = false;
}


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

const setFormSubmit = () => {
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (validateInputs()) {
      setСontrolPopup();
      form.reset();
    } else {
      /*Ошибка формы*/
    }
  });
}

export { setFormSubmit };


