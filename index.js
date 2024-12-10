let likeButtons = document.querySelectorAll('.element__like');
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('element__like_active');
  });
});

const editPopup = document.querySelector('.popup');
const editProfileButton = document.querySelector('.profile__edit-button');
const closePopupButton = document.querySelector('.popup__close-button');
const savePopupButton = document.querySelector('.popup__save-button');

const userNameElement = document.querySelector('.profile__author-name');
const userOccupationElement = document.querySelector('.profile__author-job');

const userNameInput = document.querySelector('.popup__input_name');
const userOccupationInput = document.querySelector('.popup__input_job');

userNameInput.value = userNameElement.textContent;
userOccupationInput.value = userOccupationElement.textContent;

function openPopup(popup) {
  popup.classList.add('popup_open');
}

function closePopup(popup) {
  popup.classList.remove('popup_open');
}

editProfileButton.addEventListener('click', function () {
  userNameInput.value = userNameElement.textContent;
  userOccupationInput.value = userOccupationElement.textContent;
  openPopup(editPopup);
});

closePopupButton.addEventListener('click', function () {
  closePopup(editPopup);
});

savePopupButton.addEventListener('click', function (event) {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userOccupationElement.textContent = userOccupationInput.value;
  closePopup(editPopup);
});
