import { products } from "./products.js";


const openMenuEl = document.getElementById("bars");
const closemenuEl = document.getElementById("cancel");
const navbarEl = document.querySelector("nav");
const productsContainer = document.querySelector(".products");
let html = "";


openMenuEl.addEventListener("click", () => {
  navbarEl.style.display = "flex";
  openMenuEl.style.display = "none";
  closemenuEl.style.display = "block";
});

closemenuEl.addEventListener("click", () => {
  navbarEl.style.display = "none";
  openMenuEl.style.display = "block";
  closemenuEl.style.display = "none";
});
function generateDynamicHtml() {
  products.forEach((product) => {
      html += `
          <div class="product">
            <img src="${product.productImage}" alt="food-4" />
            <span>${product.productName}</span>
            <span>$${product.productPrice}</span>
            <button data-product-id="${product.id}" class="order-btn">Order Now</button>
          </div>`;
    }
  );
  productsContainer.innerHTML = html;
}
generateDynamicHtml();

const buttons = document.querySelectorAll(".product button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    // const {productId} = button.dataset;
    addToCart(productId);
  });
});
