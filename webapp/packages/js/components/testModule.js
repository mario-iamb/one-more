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

        const newArray = new Object();
        newArray.item = document.querySelector('.product__title').innerHTML;
        newArray.price = ConvertToString(document.querySelector('.product__price--current').innerHTML);
        newArray.qty = document.querySelector('.product__quantity-holder input').value;
        newArray.subTotal = newArray.price * newArray.qty;

        //console.log(newArray);

        if (sessionStorage.basket) {
            basket = JSON.parse(sessionStorage.getItem('basket'));
        } else {
            var basket = [];
        }

        basket.push(newArray);
        sessionStorage.setItem('basket', JSON.stringify(basket));
        
        

          
        // const keys = Object.keys(newArray);
        // for (const key of keys) {
        //     console.log(key)
        // }

        // const entries = Object.entries(basket);
        // console.log(entries);

    }

    const myArray = [];
    const myItem = {}

    // https://www.telerik.com/blogs/functional-programming-with-javascript-object-arrays

    addToCart.addEventListener('click', (e)=> {
        e.preventDefault();
        myItem.name = document.querySelector('.product__title').innerHTML;
        myItem.price = ConvertToString(document.querySelector('.product__price--current').innerHTML);
        myItem.quantity = document.querySelector('.product__quantity-holder input').value;
        myItem.subtotal = myItem.price * myItem.quantity;

        myArray.push(myItem);
        sessionStorage.setItem( "CartItems", JSON.stringify(myArray) );

        let totalPrice = myArray.map(obj => obj.subtotal).reduce((acc, next) => acc + next);
        sessionStorage.setItem( "CartTotal", JSON.stringify(totalPrice) );

        // const setPrice = document.querySelector('.product__price--current').innerHTML;

        // const myCart = {
        //     item: document.querySelector('.product__title').innerHTML,
        //     price: ConvertToString(setPrice),
        //     qty: document.querySelector('.product__quantity-holder input').value,
        // };

        // sessionStorage.setItem( "Cart Items", JSON.stringify(myCart) );
        // sessionStorage.setItem( "Cart Total", JSON.stringify(ConvertToString(setPrice)) );

        // createArray();
    })
};