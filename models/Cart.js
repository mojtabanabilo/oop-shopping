export default class Cart {
  constructor(element, price) {
    this.element = element;
    this.price = price;
    this.product = [];
    this.duplicateArray = [];
    this.element.addEventListener("click", this);
  }

  showProducts() {
    this.duplicateArray = [...new Set(this.product)];
    if (this.product.length === 0) this.element.innerHTML = `<h5>Empty</h5>`;
    this.price.innerText = `$ ${this.product.reduce(
      (acc, cur) => acc + cur.price,
      0
    )}`;
    if (this.duplicateArray.length > 0) this.element.innerHTML = "";
    this.duplicateArray.forEach((item) => {
      const qty = this.product.filter((p) => p.id === item.id).length;
      this.productSlice(item, qty);
    });
  }

  productSlice(data, qty) {
    const cardElement = document.createElement("div");

    cardElement.innerHTML = this.productImg(data);
    cardElement.innerHTML += this.productInfo(data);
    cardElement.innerHTML += this.productControls(data, qty);

    this.element.appendChild(cardElement);
  }

  productImg(data) {
    const { image, alt } = data;

    const imgJSX = `<img src=${image} alt=${alt}/>`;

    return imgJSX;
  }

  productInfo(data) {
    const { name, id } = data;
    const sunProductPrice = this.product
      .filter((item) => item.id === id)
      .reduce((acc, cur) => acc + cur.price, 0);

    const infoJSX = `
      <div id="cart-info">
        <h4>${name}</h4>
        <p>$ ${sunProductPrice}</p>
      </div>
    `;

    return infoJSX;
  }

  productControls(data, qty) {
    const { id } = data;

    const controlsJSX = `
      <div id="cart-control">
        <div>
          <button data-id=${id}>-</button>
          <span>${qty}</span>
          <button data-id=${id}>+</button>
        </div>
        <button data-id=${id}>Remove</button>
      </div>
    `;

    return controlsJSX;
  }

  handleEvent() {
    const id = event.target.dataset.id;
    const type = event.target.innerText;
    if (event.target.tagName === "BUTTON") {
      switch (type) {
        case "+":
          const increase = this.product.find((item) => item.id === +id);
          this.product.push(increase);
          this.showProducts();
          break;
        case "-":
          this.product.filter((item) => item.id === +id);
          const decrease = this.product.findIndex((item) => item.id === +id);
          this.product.splice(decrease, 1);
          this.showProducts();
          break;
        case "Remove":
          const remove = this.product.filter((item) => item.id !== +id);
          this.product = remove;
          this.showProducts();
          break;
      }
    }
  }
}
