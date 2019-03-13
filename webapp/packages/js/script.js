import testModule from './components/testModule';


class App {
    // static breakpoints = {
    //     lg: 'screen and (min-width: 992px)',
    //     md: 'screen and (min-width: 768px) and (max-width: 991px)',
    //     sm: 'screen and (max-width: 767px)',
    // };

    constructor() {
        this.testModule = new testModule();
    }
}

document.addEventListener('DOMContentLoaded', () => new App());