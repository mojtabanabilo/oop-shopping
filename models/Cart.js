export default class Cart {
  constructor(element, price) {
    this.element = element;
    this.price = price;
    this.product = [];
    this.duplicateArray = [];
  }

  showProducts() {
    this.duplicateArray = [...new Set(this.product)];
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
    const { name, price } = data;

    const infoJSX = `
      <div>
        <h4>${name}</h4>
        <p>${price}</p>
      </div>
    `;

    return infoJSX;
  }

  productControls(data, qty) {
    const { id } = data;

    const controlsJSX = `
      <div>
        <div>
          <button>-</button>
          <span>${qty}</span>
          <button>+</button>
        </div>
        <button>Remove</button>
      </div>
    `;

    return controlsJSX;
  }
}
