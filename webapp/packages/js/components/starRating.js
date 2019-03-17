export default function starRating () {
    const starContainer = document.getElementById('stars');
    const stars = Array.prototype.slice.call(starContainer.children);
    const totalStars = stars.length;

    if (sessionStorage.RatingsCounter) {
        const currentTotal = JSON.parse(sessionStorage.getItem('RatingsCounter'));
        const accumulatedScoreTotal = JSON.parse(sessionStorage.getItem('accumulatedScore'));
        const averageRating = (accumulatedScoreTotal / currentTotal).toFixed(2);
        
        document.querySelector('.product__rating-counter').innerHTML = `${currentTotal} votes`;
        document.querySelector('.product__rating-average').innerHTML = `${averageRating} / 5.0`; 
    }
    else {
        document.querySelector('.product__rating-counter').innerHTML = `Be the first to vote!`;
    }

    const minBasketCounter = (count) => {
        if (sessionStorage.RatingsCounter) {
            let currentTotal = JSON.parse(sessionStorage.getItem('RatingsCounter'));
            let accumulatedScoreTotal = JSON.parse(sessionStorage.getItem('accumulatedScore'));
            
            currentTotal = currentTotal + 1;
            accumulatedScoreTotal = accumulatedScoreTotal + count;

            const averageRating = (accumulatedScoreTotal / currentTotal).toFixed(2);
            
            sessionStorage.setItem( "RatingsCounter", JSON.stringify(currentTotal) );
            sessionStorage.setItem( "accumulatedScore", JSON.stringify(accumulatedScoreTotal) );

            document.querySelector('.product__rating-counter').innerHTML = `${currentTotal} votes`;
            document.querySelector('.product__rating-average').innerHTML = `${averageRating} / 5.0`; 
        }
        else {
            sessionStorage.setItem( "RatingsCounter", JSON.stringify(1) );
            sessionStorage.setItem( "accumulatedScore", JSON.stringify(count) );
            document.querySelector('.product__rating-counter').innerHTML = `You're the first to vote!`;
            document.querySelector('.product__rating-average').innerHTML = `${count} / 5.0`;
        }
    }

    starContainer.addEventListener('click', function(e) {
        e.preventDefault();
        const index = stars.indexOf(e.target);
        let count = count = totalStars - index;

        stars.forEach(el => el.classList.remove('is-selected'));
        e.target.classList.add('is-selected');

        minBasketCounter(count);
    })
};