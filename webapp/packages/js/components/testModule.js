export default function testModule () {
    const CartIcon = document.querySelector('.header__minicart');
    const addToCart = document.querySelector('.button--add-to-cart');
    const closeMiniCart = document.querySelector('.mini-cart__close');
    const yourCart = document.querySelector('.mini-cart');
    
    const ConvertToString = (value) => {
        return Number(value.replace(/[^0-9.-]+/g,""));
    }

    const createBasket = () => {
        const shoppingBasket = document.querySelector('.cartMessage');
        const cartItems = document.querySelector('.shopping__cart-items');
        const cartSum = document.querySelector('.stotal');

        if (sessionStorage.basket) {
            const BasketData = JSON.parse( sessionStorage.getItem('basket'));
            const BasketTotal = JSON.parse( sessionStorage.getItem('CartTotal'));
            cartItems.innerHTML = "";
            
            BasketData.forEach(function(element, index) {
                const cartHtml = "<tr><td>"+ element.name +"</td><td>"+ element.price +"</td><td>"+ element.quantity +"</td><td>"+ element.subtotal +"</td></tr>";
                cartItems.insertAdjacentHTML('afterbegin',cartHtml);
            });

            cartSum.innerHTML = BasketTotal.toFixed(2);

        }
        else {
            shoppingBasket.innerHTML = "You have no items in your cart";
        }

    }

    // https://www.w3resource.com/javascript-exercises/javascript-array-exercise-10.php
    // http://jsfiddle.net/greenrhino/rS3Qf/
    
    const addToBasket = () => {

        const myItem = {};
        myItem.name = document.querySelector('.product__title').innerHTML;
        myItem.price = ConvertToString(document.querySelector('.product__price--current').innerHTML);
        myItem.quantity = document.querySelector('.product__quantity-holder input').value;
        myItem.subtotal = myItem.price * myItem.quantity;

        if (sessionStorage.basket) {
            basket = JSON.parse(sessionStorage.getItem('basket'));
        } else {
            var basket = [];
        }

        basket.push(myItem);
        sessionStorage.setItem('basket', JSON.stringify(basket));

        let totalPrice = basket.map(obj => obj.subtotal).reduce((acc, next) => acc + next);
        sessionStorage.setItem( "CartTotal", JSON.stringify(totalPrice) );
    }

    // https://www.telerik.com/blogs/functional-programming-with-javascript-object-arrays
    // https://stackoverflow.com/questions/28606841/session-storage-how-to-store-multiple-objects

    addToCart.addEventListener('click', (e)=> {
        e.preventDefault();
        addToBasket();
        createBasket();
    });

    CartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        yourCart.style.transform = "translateX(0)";
    });

    closeMiniCart.addEventListener('click', (e) => {
        e.preventDefault();
        yourCart.style.transform = 'translateX(100%)';
    });

    createBasket();
};