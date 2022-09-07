const productContainer = document.querySelector(".container-products");

async function getProducts() {
  let res = await fetch("./src/scripts/product.json");
  let products = await res.json();
  renderProductCard(products);
}

getProducts();

function renderProductCard(products) {
  products.forEach((item) => {
    const productHtml = `<div class="col-md-6 products-item">
    <div class="card mb-4" data-id="${item.id}">
      <img
        src="src/img/${item.imgSrc}"
        class="card-img-top"
        alt="${item.title} "
      />
      <div class="card-body text-center">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-volume">${item.volume} шт.</p>
        <div class="details justify-content-center">
          <div class="counter">
            <div class="counter__control minus" data-action="minus">
              -
            </div>
            <div class="counter__current" data-count>1</div>
            <div class="counter__control plus" data-action="plus">
              +
            </div>
          </div>
          <div class="details__price">${item.price} руб.</div>
        </div>
        <button
          type="button"
          class="btn btn-block btn-outline-danger"
          data-cart
        >
          В корзину
        </button>
      </div>
    </div>
  </div>`;
    productContainer.insertAdjacentHTML("afterbegin", productHtml);
  });
}
