import yourBasket from './components/yourBasket';
import quantityCounter from './components/quantityCounter';
import geolocation from './components/geolocation';


class App {

    constructor() {
        this.yourBasket = new yourBasket();
        this.quantityCounter = new quantityCounter();
        this.geolocation = new geolocation();
    }
}

document.addEventListener('DOMContentLoaded', () => new App());