export default function testModule () {

    
    const miniCart = document.querySelector('.header__minicart');
    const addToCart = document.querySelector('.button--add-to-cart');
    
    // Convert to String
    const ConvertToString = (value) => {
        return Number(value.replace(/[^0-9.-]+/g,""));
    }

    // https://www.w3resource.com/javascript-exercises/javascript-array-exercise-10.php
    // http://jsfiddle.net/greenrhino/rS3Qf/
    // Set up basket items array
    const createArray = () => {

        // 2 version
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
    // Get items from seesion storage
    // https://stackoverflow.com/questions/38083241/sessionstorage-into-array-and-print-all-values-in-the-array

    addToCart.addEventListener('click', (e)=> {
        e.preventDefault();

        // const myItem = {}
        // myItem.name = document.querySelector('.product__title').innerHTML;
        // myItem.price = ConvertToString(document.querySelector('.product__price--current').innerHTML);
        // myItem.quantity = document.querySelector('.product__quantity-holder input').value;
        // myItem.subtotal = myItem.price * myItem.quantity;

        // myArray.push(myItem);
        // sessionStorage.setItem( "CartItems", JSON.stringify(myArray) );

        // let totalPrice = myArray.map(obj => obj.subtotal).reduce((acc, next) => acc + next);
        // sessionStorage.setItem( "CartTotal", JSON.stringify(totalPrice) );

        createArray();
    })
};