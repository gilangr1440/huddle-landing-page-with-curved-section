function emailValidation() {
  const input = document.getElementsByClassName("footer__input-field")[0];
  const inputValue = document.getElementsByClassName("footer__input-field")[0].value;
  const validationText = document.getElementsByClassName("footer__validation")[0];
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (inputValue.match(pattern) || inputValue == "") {
    input.classList.remove("footer__input-field_error");
    validationText.classList.remove("footer__validation_error");
  } else {
    input.classList.add("footer__input-field_error");
    validationText.classList.add("footer__validation_error");
  }
}
