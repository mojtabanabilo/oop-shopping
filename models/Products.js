export default class Products {
  constructor(element, data, cart) {
    this.element = element;
    this.data = data;
    this.element.addEventListener("click", this);
    this.productId = "";
    this.cart = cart.product;
  }

  showProducts() {
    this.data.forEach((data) => this.createCards(data));
  }

  createCards(data) {
    const container = document.createElement("div");

    container.innerHTML = this.createImg(data);
    container.innerHTML += this.createInfo(data);

    this.element.appendChild(container);
  }

  createImg(data) {
    const { image, alt } = data;
    const imgJSX = `<img src=${image} alt=${alt}/>`;
    return imgJSX;
  }

  createInfo(data) {
    const { name, price, id } = data;
    const infoJSX = `
    <div id="product-info">
        <h3>${name}</h3>
        <div>
            <span>${price}</span>
            <button data-id=${id}>+</button>
        </div>
    </div>`;
    return infoJSX;
  }

  handleEvent() {
    if (event.target.tagName === "BUTTON") {
      this.addToCart(event.target.dataset.id);
    }
  }

  addToCart(id) {
    const currentProduct = this.data.find(item => item.id === +id);
    this.cart.push(currentProduct);
  }
}
