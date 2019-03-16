export default function quantityCounter () {
    const qtyButton = document.querySelectorAll('.product__quantity-holder i');

    qtyButton.forEach(function(e) {
        e.addEventListener('click', (e)=> {
            e.preventDefault();
            const currentValue = document.querySelector('.product__quantity-holder input').value;
            let val = parseInt(currentValue);

            if (e.target.classList.contains('less')) {
                val = val - 1;
            } else if (e.target.classList.contains('more')) {
                val = val + 1;
            }

            if (val < 1) {
                val = 1;
            }

            document.querySelector('.product__quantity-holder input').value = val;
        })
    });
};