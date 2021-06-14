///variables
let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    openBtn = document.querySelector('.open');

///////////////functions
function creteCart() {

    let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        closeBtn = document.createElement('button');

    cart.classList.add('cart');
    field.classList.add('cart-field');
    closeBtn.classList.add('close');
    heading.textContent = 'Your products';
    closeBtn.textContent = ' close';
    document.body.appendChild(cart);
    cart.appendChild(heading);
    cart.appendChild(field);
    cart.appendChild(closeBtn);
}

creteCart();


let close = document.querySelector('.close');
let cart = document.querySelector('.cart');
field = document.querySelector('.cart-field');
///events
openBtn.addEventListener('click', () => {
    cart.style.display = 'block';
});
close.addEventListener('click', () => {
    cart.style.display = 'none';
});


buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
        let cloneItem = products[i].cloneNode(true),
            btn = cloneItem.querySelector('button');
            

        btn.remove();
        field.appendChild(cloneItem);
        products[i].remove();

    });
});

