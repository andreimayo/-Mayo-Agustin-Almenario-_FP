document.addEventListener('DOMContentLoaded', loadCart);

let cart = [];

function addToCart(shoe, price, image, size) {
    const selectedSize = document.querySelector('.shoe-sizes').value;
    cart.push({ shoe, price, image, size: selectedSize });
    alert(`${shoe} (Size: ${selectedSize}) added to cart at $${price}`);
    updateCart();
}



function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    if (cartItemsDiv) {
        cartItemsDiv.innerHTML = '';
        let totalPrice = 0;
        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.shoe}">
                <h3>${item.shoe} (Size ${item.size})</h3>
                <p>$${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsDiv.appendChild(cartItemDiv);
            totalPrice += item.price;
        });
        totalPriceElem.textContent = `Total: $${totalPrice}`;
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    displayCart();
    alert('Item removed from cart!');
}


function clearCart() {
    cart = [];
    updateCart();
    displayCart();
    alert('Cart checked out!');
}

function goBackToMerchant() {
    window.location.href = 'home.html';
}

function purchaseComplete() {
    const purchaseMessage = document.getElementById('purchase-message');
    if (purchaseMessage) {
        purchaseMessage.style.display = 'block';
    }
    const cartItemsDiv = document.getElementById('cart-items');
    if (cartItemsDiv) {
        cartItemsDiv.innerHTML = '';
    }
    const totalPriceElem = document.getElementById('total-price');
    if (totalPriceElem) {
        totalPriceElem.textContent = 'Total: $0';
    }
}

function buyNow(name, price) {
    alert(`Buying now: ${name} for $${price}`);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('purchase-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const notice = document.createElement('p');
        notice.textContent = 'Updated!';
        notice.style.color = 'green';
        notice.style.marginTop = '10px';
        document.getElementById('purchase-form').appendChild(notice);

        
        setTimeout(function() {
            notice.style.display = 'none';
        }, 3000);
    });
});



