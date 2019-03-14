export default function testModule () {

    const miniCart = document.querySelector('.header__minicart');
    const addToCart = document.querySelector('.button--add-to-cart');
    
    // sessionStorage.setItem( "total", 120 );
    //const total = sessionStorage.getItem( "total" );
  
    // miniCart.addEventListener('click', (e)=> {
    //     e.preventDefault();
    //     var total = parseInt( sessionStorage.getItem( "total" ) );
    //     var quantity = 2;
    //     var updatedTotal = total * quantity;
    //     sessionStorage.setItem( "total", updatedTotal );
    //     console.log(total); 
    // })

    // miniCart.addEventListener('click', (e)=> {
    //     sessionStorage.setItem( "total", 120 );
    // })



    // Storing OBJECT
    // http://jsfiddle.net/greenrhino/rS3Qf/
    // var cart = {
    //     item: "Product 1",
    //     price: 35.50,
    //     qty: 2
    // };

    // var jsonStr = JSON.stringify( cart );

    // miniCart.addEventListener('click', (e)=> {
    //     sessionStorage.setItem( "cart", jsonStr );
    // })


    // Convert to String
    const ConvertToString = (value) => {
        return Number(value.replace(/[^0-9.-]+/g,""));
    }

    
    // Set up basket itemsarray
    const createArray = () => {
        const newArray = new Object();
        newArray.item = document.querySelector('.product__title').innerHTML;
        newArray.price = ConvertToString(document.querySelector('.product__price--current').innerHTML);
        newArray.qty = document.querySelector('.product__quantity-holder input').value;
        newArray.subTotal = newArray.price * newArray.qty;

        if (sessionStorage.basket) {
            basket = JSON.parse(sessionStorage.getItem('basket'));
        } else {
            var basket = [];
        }

        basket.push(newArray);
        sessionStorage.setItem('basket', JSON.stringify(basket));
    }



    addToCart.addEventListener('click', (e)=> {
        e.preventDefault();

        
        // const setPrice = document.querySelector('.product__price--current').innerHTML;

        // const myCart = {
        //     item: document.querySelector('.product__title').innerHTML,
        //     price: ConvertToString(setPrice),
        //     qty: document.querySelector('.product__quantity-holder input').value,
        // };

        // sessionStorage.setItem( "Cart Items", JSON.stringify(myCart) );
        // sessionStorage.setItem( "Cart Total", JSON.stringify(ConvertToString(setPrice)) );

        createArray();
        // createStudent();
    })
};