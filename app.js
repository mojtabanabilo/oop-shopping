import { fetchData } from "./utils/httpReq.js";
import Products from "./models/Products.js";

// DOM
const productsNode = document.getElementById("products");

async function render() {
    const productData = await fetchData();
    const ProductInstance = new Products(productsNode, productData);
    ProductInstance.showProducts();
}

window.addEventListener("DOMContentLoaded", render);
