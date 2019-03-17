import yourBasket from './components/yourBasket';
import quantityCounter from './components/quantityCounter';
import geolocation from './components/geolocation';
import imageZoom from './components/imageZoom';


class App {
    constructor() {
        this.yourBasket = new yourBasket();
        this.quantityCounter = new quantityCounter();
        this.geolocation = new geolocation();
        this.imageZoom = new imageZoom();
    }
}

document.addEventListener('DOMContentLoaded', () => new App());