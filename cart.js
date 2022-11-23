const cartButton = document.querySelector('.add-cart-button');
const cartIcon = document.querySelector('.cart-icon');
const cartBox = document.querySelector('.cart-box');
const noItemInCart = document.querySelector('.no-item-present')
const itemInCart = document.querySelector('.item-present');
const deleteFromCart = document.querySelector('.remove-item svg');
let totalItem = document.querySelectorAll('.total-item');
let totalPrice = document.querySelector('.final-price');
const increaseItem = document.querySelector('.increase');
const decreaseItem = document.querySelector('.decrease');
let itemCount = totalItem[0].textContent;
body.addEventListener('click', (e) => {
    if (cartIcon.contains(e.target)) {
        displayCart(cartBox);
    }
    listenForCloseCart(e);
    if (deleteFromCart.contains(e.target)) {
        itemCount = 0;

        totalItem[0].innerHTML = itemCount;
        totalItem[1].innerHTML = itemCount;
        totalItem[2].innerHTML = itemCount;
        displayCart(cartBox);
    }
    if (increaseItem.contains(e.target)) {
        itemCount++;
        totalItem[2].innerHTML = itemCount;
        totalItem[0].innerHTML = itemCount;
    }
    if (decreaseItem.contains(e.target)) {
        if (itemCount > 0)
            itemCount--;
        totalItem[2].innerHTML = itemCount;
        totalItem[0].innerHTML = itemCount;
    }
    if (cartButton.contains(e.target)) {

        addToCart(itemCount);
        displayCart(cartBox);
    }
    
});
function displayCart(cartBox) {
    cartBox.classList.remove('hidden');
    if (itemCount <= 0) {
        noItemInCart.classList.remove('hidden');
        itemInCart.classList.add('hidden');
    }
    else {
        noItemInCart.classList.add('hidden');
        itemInCart.classList.remove('hidden');
    }
}

function listenForCloseCart(e) {
    cartBox.addEventListener('mouseleave', function (e) {
        cartBox.classList.add('hidden');
        // isCartOpened=false;
    });

}
function addToCart(itemCount) {
    totalPrice.textContent = Number(125 * itemCount).toFixed(2);
    totalItem[1].innerHTML = itemCount;
}