window.addEventListener("click", (event) => {
  if (event.target.hasAttribute("data-cart")) {
    const card = event.target.closest(".card");

    // Устанавливаем свойство disabled = true кнопки товара, после добавление его в корзину
    const btnCard = event.target;
    if (!btnCard.disabled) {
      btnCard.disabled = true;
    }

    const product = {
      id: card.dataset.id,
      imgSrc: card.querySelector("img").getAttribute("src"),
      title: card.querySelector(".card-title").innerText,
      volume: card.querySelector(".card-volume").innerText,
      price: card.querySelector(".details__price").innerText,
      counter: card.querySelector("[data-count]").innerText,
    };

    const cartItemHtml = `
    <div class="cart-item__top d-flex" data-id="${product.id}">
      <div class="cart-item__img">
        <img src="${product.imgSrc}" alt="${product.title} " />
      </div>
      <div class="cart-item__info">
        <div class="cart-item__title">${product.title}</div>
        <div class="cart-item__volume">${product.volume}</div>
        <div class="details">
          <div class="counter counter_small">
            <div class="counter__control minus small_control" data-action="minus">
              -
            </div>
            <div class="counter__current" data-count>${product.counter}</div>
            <div class="counter__control plus small_control" data-action="plus">
              +
            </div>
          </div>
          <div class="details__price">${product.price}</div>
        </div>
      </div>    
    </div> 
    `;
    const cartItem = document.querySelector(".cart-item");
    cartItem.innerHTML += cartItemHtml;
  }
  toggleCartStatus();
  calcCartPrice();
});
