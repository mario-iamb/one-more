export default function testModule () {

    const miniCart = document.querySelector('.header__minicart');
  
    // function NewSetCookie(name,value,days) {
    //   let expires = "";
    //   if (days) {
    //       const date = new Date();
    //       date.setTime(date.getTime() + (days*24*60*60*1000));
    //       expires = `; expires=${date.toUTCString()}`;
    //   }
    //   document.cookie = `${name}=${value || ""}${expires}; path=/`;
    // }
  
    // if (document.cookie.indexOf("CookieControl=") < 0) {
    //   FooterBlock.insertAdjacentHTML('afterend','<div class="cookie-consent active"><div class="container-fluid"><div class="row"><div class="col-12 cookie-consent__message"><p>This website uses cookies to ensure you get the best experience on our website. <a class="info" href="/privacy-policies/">More Info</a></p><a id="cookie-close" class="button" href="/">I am happy to accept the cookies</a></div></div></div></div>');
    // }

    miniCart.addEventListener('click', (e)=> {
        e.preventDefault();
        console.log('you clicked basket')
    })
};