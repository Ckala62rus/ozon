import postData from "./postData";
import renderCart from "./renderCart";

const cart = () => {
    const cartButton = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseButton = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const goods = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');

    cartButton.addEventListener('click', (e) => {
        const cart = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart'))
                : [];
        cartModal.style.display = 'flex';

        renderCart(cart);
        cartTotal.textContent = cart.reduce((sum, goodItem)=>{
            return sum + goodItem.price;
        }, 0)
    })
    cartCloseButton.addEventListener('click', () => {
        cartModal.style.display = '';
    })
    goods.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-primary')) {
            const card = e.target.closest('.card');
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem('goods'));

            const cart = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart'))
                : [];

            const goodItem = goods.find(item => {
                return item.id === +key
            })

            cart.push(goodItem);

            localStorage.setItem('cart', JSON.stringify(cart));
        }
    })
    cartWrapper.addEventListener('click', (e)=>{
        if (e.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart'))
                : [];

            const card = e.target.closest('.card');
            const key = card.dataset.key;
            const index = cart.findIndex(item => {
                return item.id === +key;
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart));
            renderCart(cart);
            cartTotal.textContent = cart.reduce((sum, goodItem)=>{
                return sum + goodItem.price;
            }, 0)
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart')
                ? JSON.parse(localStorage.getItem('cart'))
                : [];

        console.log('send send');

        postData(cart).then(() => {
            localStorage.removeItem('cart');

            renderCart([]);

            cartTotal.textContent = 0
        })
    })
}

export default cart