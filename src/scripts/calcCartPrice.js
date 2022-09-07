function calcCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item__top");

  let total = 0;
  const cartTotal = document.querySelector(".cart-total__price > span");

  cartItems.forEach((item) => {
    const priceEl = item.querySelector(".details__price");
    const price = priceEl.innerText;

    const amountEl = item.querySelector("[data-count]");
    const amount = amountEl.innerText;

    total += parseInt(amount) * parseInt(price);
  });
  cartTotal.innerText = total + " руб.";
}
