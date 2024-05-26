export default class Products {
  constructor(element, data) {
    this.element = element;
    this.data = data;
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
    const { name, price } = data;
    const infoJSX = `
    <div>
        <h3>${name}</h3>
        <div>
            <span>${price}</span>
            <button>+</button>
        </div>
    </div>`;
    return infoJSX;
  }
}
