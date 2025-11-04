const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}
function addItem() {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (name === '' || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }
  
  const li = document.createElement('li');
  li.classList.add('cart-item');
  li.dataset.price = price;

  li.innerHTML = `
    <span>${name} - $${price.toFixed(2)}</span>
    <input type="number" class="quantity" value="1" min="1">
    <button class="remove-btn">Remove</button>
  `;

  li.querySelector('.remove-btn').addEventListener('click', removeItem);
  li.querySelector('.quantity').addEventListener('input', updateQuantity);

  cart.appendChild(li);

  updateTotalPrice();
  productNameInput.value = '';
  productPriceInput.value = '';
}