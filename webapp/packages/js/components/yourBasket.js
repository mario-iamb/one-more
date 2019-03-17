export default function yourBasket () {
    const CartIcon = document.querySelector('.header__minicart');
    const addToCart = document.querySelector('.button--add-to-cart');
    const closeMiniCart = document.querySelector('.mini-cart__close');
    const yourCart = document.querySelector('.mini-cart');
    
    const ConvertToString = (value) => {
        return Number(value.replace(/[^0-9.-]+/g,""));
    }

    const minBasketCounter = (value) => {

        if (sessionStorage.miniCartValue) {
            let currentValue = JSON.parse(sessionStorage.getItem('miniCartValue'));
            
            if (value == 'add') {
                currentValue = currentValue + 1;
                sessionStorage.setItem( "miniCartValue", JSON.stringify(currentValue) );

            } else if (value == 'remove') {
                currentValue = currentValue - 1;
                sessionStorage.setItem( "miniCartValue", JSON.stringify(currentValue) );
            }

            document.querySelector('.header__minicart-counter').innerHTML = currentValue;

        }
        else {
            sessionStorage.setItem('miniCartValue', JSON.stringify(0));
            document.querySelector('.header__minicart-counter').innerHTML = '0';
        }
    }

    const createBasket = () => {
        const cartMessage = document.querySelector('.mini-cart__message');
        const cartItems = document.querySelector('.mini-cart__items-holder');
        const cartTotalBlock = document.querySelector('.mini-cart__total');
        const cartSum = document.querySelector('.mini-cart__total-value');

        if (sessionStorage.basket) {
            const BasketData = JSON.parse( sessionStorage.getItem('basket'));
            const BasketTotal = JSON.parse( sessionStorage.getItem('CartTotal'));
            cartItems.innerHTML = "";

            cartMessage.classList.remove('active');

            BasketData.forEach(function(element, index) {
                const cartHtml = "<tr class='prod__item'><td class='prod__name' width='50%'>"+ element.name +"</td><td width='50%'><table width='100%' border='0'><tbody><tr><td class='prod__price'><span>&#36;</span>"+ element.price +"</td></tr><tr><td class='prod__quantity'><span>Qty: </span>"+ element.quantity +"</td></tr><tr><td class='prod__subtotal'><span>Subtotal: &#36;</span>"+ element.subtotal +"</td></tr><tr><td class='prod__remove'><a href='#' class='pdelete' data-product='"+ index +"'>Remove</a></td></tr></tbody></table></td></tr>";
                cartItems.insertAdjacentHTML('afterbegin',cartHtml);
            });

            cartTotalBlock.classList.remove('inactive');
            cartSum.innerHTML = BasketTotal.toFixed(2);

            if (Object.keys(BasketData).length == '0') {
                cartMessage.classList.add('active');
                cartTotalBlock.classList.add('inactive');
            }
            else {
                cartMessage.classList.remove('active');
            }
        } 
        else {
            cartMessage.classList.add('active');
        }
    }

    const deleteFromBasket = () => {
        document.addEventListener('click',function(e){
            if(e.target && e.target.classList == 'pdelete'){
                e.preventDefault();
                const arrayPosition = e.target.dataset.product;
                const MyBasket = JSON.parse(sessionStorage.getItem('basket'));
                let myTotal = JSON.parse(sessionStorage.getItem('CartTotal'));
                const itemSubtotal = MyBasket[arrayPosition].subtotal;
                
                MyBasket.splice(arrayPosition,1);
                myTotal = myTotal - itemSubtotal;
    
                sessionStorage.setItem( "CartTotal", JSON.stringify(myTotal) );
                sessionStorage.setItem('basket', JSON.stringify(MyBasket));
                
                minBasketCounter('remove');
                createBasket();   
            }
        });
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

        minBasketCounter('add');
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
    minBasketCounter();
    deleteFromBasket();
};