const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

var navToggleState = true
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    if (navToggleState == true) {
        document.getElementById('navthreebars').innerHTML = "&#x2715;";
        navToggleState = false;
    } else {
        document.getElementById('navthreebars').innerHTML = "&#9776;";
        navToggleState = true;
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        document.getElementById('navthreebars').innerHTML = "&#9776;";
    })
})

function close_window() {
    if (window.confirm('You sure you want to exit? Look around some more!')) {
        window.location = 'https://google.com';
    }

}

document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var images = ['url("../img/RivianSlideShow/1.jpg")', 'url("../img/RivianSlideShow/2.jpg")', 'url("../img/RivianSlideShow/3.jpg")', 'url("../img/RivianSlideShow/4.jpg")', 'url("../img/RivianSlideShow/5.jpg")', 'url("../img/RivianSlideShow/6.jpg")', 'url("../img/RivianSlideShow/7.jpg")', 'url("../img/RivianSlideShow/8.jpg")']; // Add your image URLs here
    var myServices = document.querySelector('.my-services');
    var leftButton = document.querySelector('.my-services__button--left');
    var rightButton = document.querySelector('.my-services__button--right');

    function changeBackgroundImage() {
        myServices.style.backgroundImage = images[currentIndex];
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        changeBackgroundImage();
    }

    function previousImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        changeBackgroundImage();
    }

    leftButton.addEventListener('click', previousImage);
    rightButton.addEventListener('click', nextImage);

    setInterval(nextImage, 5000); // Change image every 5 seconds
    changeBackgroundImage(); // Set the initial image
});
