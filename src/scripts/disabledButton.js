function disabledButton() {
  const buttonCard = document.querySelector("[data-cart]");

  if (!buttonCard.disabled) {
    buttonCard.disabled = true;
  } else {
    buttonCard.disabled = false;
  }
}
