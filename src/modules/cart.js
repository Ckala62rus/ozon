const cart = () => {
    const cartButton = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseButton = cartModal.querySelector('.cart-close');

    cartButton.addEventListener('click', (e)=>{
        cartModal.style.display = 'flex';
    })
    cartCloseButton.addEventListener('click', ()=>{
        cartModal.style.display = '';
    })
}

export default cart