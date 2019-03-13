// class quantityCounter {
//     constructor() {
//         this.root = document.querySelectorAll('.qty-input i');

//         if(this.root) {
            
//         }
//     }
// }

// export default quantityCounter;

export default function quantityCounter () {
    const qtyButton = document.querySelectorAll('.qty-input i');

    qtyButton.forEach(function(e) {
        e.addEventListener('click', (e)=> {
            e.preventDefault();
            const currentValue = document.querySelector('.qty-input input').value;
            let val = parseInt(currentValue);

            if (e.target.classList.contains('less')) {
                val = val - 1;
            } else if (e.target.classList.contains('more')) {
                val = val + 1;
            }

            if (val < 1) {
                val = 1;
            }

            document.querySelector('.qty-input input').value = val;
        })
    });
};