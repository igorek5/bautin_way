const popupMessage = document.querySelector('.popup__message');
const overlay = document.querySelector('.popup__overlay');
const popupClose = document.querySelector('.popup__close');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closeClickHandler = (evt) => {
  evt.preventDefault();
  closeBlock();
};

const documentKeydownHandler = (evt) => {
  evt.preventDefault();
  if (isEscEvent(evt)) {
    closeBlock();
  }
};

const addListeners = () => {
  overlay.addEventListener('click', closeClickHandler);
  popupClose.addEventListener('click', closeClickHandler);
  document.addEventListener('keydown', documentKeydownHandler);
};

function closeBlock() {
  popupMessage.classList.remove('active');
  overlay.classList.remove('active');
  document.removeEventListener('keydown', closeClickHandler);
  document.removeEventListener('click', documentKeydownHandler);
}


const setСontrolPopup = () => {
  popupMessage.classList.add('active');
  overlay.classList.add('active');
  addListeners()
}

export {setСontrolPopup};
