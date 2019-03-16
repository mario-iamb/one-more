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
                const cartHtml = "<tr><td class ='product-name'>"+ element.name +"</td><td class ='product-price'>"+ element.price +"</td><td class ='product-quantity'>"+ element.quantity +"</td><td class ='product-subtotal'>"+ element.subtotal +"</td><td class ='product-remove'><a href='#' class='pdelete' data-product='"+ index +"'>Remove</a></td></tr>";
                cartItems.insertAdjacentHTML('afterbegin',cartHtml);
            });

            cartSum.innerHTML = BasketTotal.toFixed(2);

        }
        else {
            shoppingBasket.innerHTML = "You have no items in your cart";
        }

    }

    document.addEventListener('click',function(e){
        if(e.target && e.target.classList == 'pdelete'){
            e.preventDefault();
            const arrayPosition = e.target.dataset.product;
            const MyBasket = JSON.parse(sessionStorage.getItem('basket'));
            let myTotal = JSON.parse(sessionStorage.getItem('CartTotal'));
            const itemSubtotal = MyBasket[arrayPosition].subtotal; // subtotal of item to be removed.
            
            MyBasket.splice(arrayPosition,1);
            myTotal = myTotal - itemSubtotal;

            sessionStorage.setItem( "CartTotal", JSON.stringify(myTotal) );
            sessionStorage.setItem('basket', JSON.stringify(MyBasket));

            createBasket();   
        }
    });


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
    //deleteFromBasket();
};