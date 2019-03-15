// https://www.w3resource.com/javascript-exercises/javascript-array-exercise-10.php
// http://jsfiddle.net/greenrhino/rS3Qf/
// https://www.telerik.com/blogs/functional-programming-with-javascript-object-arrays
// https://stackoverflow.com/questions/28606841/session-storage-how-to-store-multiple-objects

export default function testModule () {
    const CartIcon = document.querySelector('.header__minicart');
    const addToCart = document.querySelector('.button--add-to-cart');
    const closeMiniCart = document.querySelector('.mini-cart__close');
    const yourCart = document.querySelector('.mini-cart');
    
    const ConvertToString = (value) => {
        return Number(value.replace(/[^0-9.-]+/g,""));
    }

    const clickHandler = () => {
        console.log('you clicked button');
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
            console.log('you clicked');
        }
    });

    

    
    // these are dinamically inserted buttons so they need to have appropriate behaviour 
        // deleteButtons.forEach(function(element) {
        //     element.addEventListener('click', function (e) {
                
        //         e.preventDefault();
        //         // const arrayPosition = element.dataset.product;
        //         // const MBasketData = JSON.parse(sessionStorage.getItem('basket'));

        //         console.log('clicked delete button');
                
        //         //MBasketData.splice(arrayPosition,1);
        //         //sessionStorage.setItem('basket', JSON.stringify(MBasketData));

        //         // e.stopPropagation();

        //         // const cartItems = document.querySelector('.shopping__cart-items');
        //         // cartItems.innerHTML = "";

        //         //createBasket();

                
                
        //     });
        // });


    const deleteFromBasket = () => {
        
        // const deleteButtons = document.querySelectorAll('.pdelete');
        
        // deleteButtons.forEach(function(element) {
        //     element.addEventListener('click', (e) => {
        //         e.preventDefault();
        //         console.log('clicked close');
        //     });
        // });

        
        // deleteButtons.forEach(function(element) {
        //     element.addEventListener('click', function (e) {
                
        //         e.preventDefault();
        //         const arrayPosition = element.dataset.product;
        //         const MBasketData = JSON.parse(sessionStorage.getItem('basket'));

        //         //console.log(MBasketData);
                
        //         MBasketData.splice(arrayPosition,1);
        //         sessionStorage.setItem('basket', JSON.stringify(MBasketData));

        //         // e.stopPropagation();

        //         // const cartItems = document.querySelector('.shopping__cart-items');
        //         // cartItems.innerHTML = "";

        //         //createBasket();

                
                
        //     });
        // });
    }

    
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
    deleteFromBasket();
};