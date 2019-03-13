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


    miniCart.addEventListener('click', (e)=> {
        e.preventDefault();

        var myCart = {
            item: document.querySelector('.product__title').innerHTML,
            price: document.querySelector('.product__price--current').innerHTML,
            qty: document.querySelector('.qty-input input').value
        };

        var NewjsonStr = JSON.stringify( myCart );
        sessionStorage.setItem( "cart", NewjsonStr );
    })
};