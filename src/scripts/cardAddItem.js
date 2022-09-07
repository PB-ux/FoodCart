window.addEventListener("click", (event) => {
  // Увелечения количества товара в карточке
  let count;
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counter = event.target.closest(".counter");
    count = counter.querySelector("[data-count]");
  }

  if (event.target.dataset.action === "plus") {
    count.innerText = ++count.innerText;
  }

  if (event.target.dataset.action === "minus") {
    if (parseInt(count.innerText) > 1) {
      count.innerText = --count.innerText;
    } else if (event.target.closest(".cart-item")) {
      const cartItem = event.target.closest(".cart-item__top");
      cartItem.remove();

      // После удаления товара из корзины, возвращаем кнопке свойствой disabled = false
      let card;
      const cards = document.querySelectorAll(".products-item > .card");

      cards.forEach((item) => {
        if (item.dataset.id === cartItem.dataset.id) {
          card = item;
        }
      });

      const btnCard = card.querySelector("[data-cart]");
      btnCard.disabled = false;
    } else {
      count.innerText = 1;
    }
  }
});
