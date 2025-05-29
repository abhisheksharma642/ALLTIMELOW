const products = [
    { id: 1, name: 'T-Shirt', price: 19.99, image: 'tshirt.jpg' },
    { id: 2, name: 'Jeans', price: 49.99, image: 'jeans.jpg' },
    { id: 3, name: 'Jacket', price: 89.99, image: 'jacket.jpg' },
    { id: 4, name: 'Sneakers', price: 69.99, image: 'sneakers.jpg' }
];

const cart = [];

function updateCart() {
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = `Cart (${cart.length})`;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function displayProducts() {
    const productList = document.querySelector('.product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCart();
});
