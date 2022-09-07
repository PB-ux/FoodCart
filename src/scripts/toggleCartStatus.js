function toggleCartStatus() {
  const cartEmptyBadge = document.querySelector(".cart-empty");
  const cartItems = document.querySelector(".cart-item");
  const orderForm = document.querySelector(".cart-form");

  if (cartItems.children.length) {
    cartEmptyBadge.classList.add("d-none");
    orderForm.classList.remove("d-none");
  } else {
    cartEmptyBadge.classList.remove("d-none");
    orderForm.classList.add("d-none");
  }
}
