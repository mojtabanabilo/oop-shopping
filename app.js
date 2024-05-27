import { fetchData } from "./utils/httpReq.js";
import Products from "./models/Products.js";
import Cart from "./models/Cart.js";

// DOM
const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  const productData = await fetchData();
  const CartInstance = new Cart(cartListNode, totalPriceNode);
  const ProductInstance = new Products(productsNode, productData, CartInstance);
  ProductInstance.showProducts();
}

window.addEventListener("DOMContentLoaded", render);
