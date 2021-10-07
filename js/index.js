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
// navToggle.addEventListener('click', () => {
//     document.body.classList.toggle('nav-open');
//     document.getElementById('navthreebars').innerHTML = "&#x2715;";
// });

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