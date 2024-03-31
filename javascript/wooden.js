let shopCard = document.querySelector('#ShopCart');
let Cart = document.querySelector('#cart');
let cancel = document.querySelector('#close');




Cart.addEventListener('click', () => {
    shopCard.classList.add('active');
});

cancel.addEventListener('click', () => {
    shopCard.classList.remove('active');
});