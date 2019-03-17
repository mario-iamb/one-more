export default function imageZoom () {

    const zoomBoxes = document.querySelectorAll('.product__images-item');

    zoomBoxes.forEach(function (image) {
      const imageCss = window.getComputedStyle(image, false),
      imageUrl = imageCss.backgroundImage.slice(4, -1).replace(/['"]/g, '');

      const imageSrc = new Image();
      imageSrc.onload = function () {
        const imageWidth = imageSrc.naturalWidth, imageHeight = imageSrc.naturalHeight, ratio = imageHeight / imageWidth;
        const percentage = ratio * 100 + '%';
        image.style.paddingBottom = percentage;

        image.onmousemove = function (e) {
          const boxWidth = image.clientWidth, x = e.pageX - this.offsetLeft, y = e.pageY - this.offsetTop, xPercent = x / (boxWidth / 100) + '%', yPercent = y / (boxWidth * ratio / 100) + '%';
          Object.assign(image.style, {
            backgroundPosition: xPercent + ' ' + yPercent,
            backgroundSize: imageWidth + 'px'
          });
        };

        image.onmouseleave = function (e) {
          Object.assign(image.style, {
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          });
        };
      }

      imageSrc.src = imageUrl;
    });
};