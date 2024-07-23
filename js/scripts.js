/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 


const headings = [
    "Software Engineer",
    "Web and Application Developer",
    "Tech Enthusiast",
    "Continuous Learner",
    "Problem Solver"
];

let currentIndex = 1;

function updateHeading() {
    const headingElement = document.getElementById("dynamic-heading");
    headingElement.classList.add('fade-out');
    setTimeout(() => {
        headingElement.textContent = headings[currentIndex];
        headingElement.classList.remove('fade-out');
        currentIndex = (currentIndex + 1) % headings.length;
    }, 1000); // Matches the CSS transition duration
}

setInterval(updateHeading, 2000); 


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
