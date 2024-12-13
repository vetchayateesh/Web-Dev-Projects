let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    if (cartCount) cartCount.textContent = cart.length;
    if (cartItems) cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        if (cartItems) cartItems.appendChild(li);
    });

    if (totalPrice) totalPrice.textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
