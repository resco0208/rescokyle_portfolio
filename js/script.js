/* This code is for active links */
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.links');

    function changeActiveLink() {
        let index = sections.length;

        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});

document.addEventListener('contextmenu', event => {
    event.preventDefault();
});

//Show & Hide Sidebar
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').style.display = "flex";
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.sidebar').style.display = "none";
});

function hide_sideNav() {
    document.querySelector('.sidebar').style.display = "none";
}

//Scroll Left on Click
document.querySelector('#scrollLeft').addEventListener('click', () => {
    document.querySelector('#carousel').scrollBy(-450, 0);
});
//Scroll Right on Click
document.querySelector('#scrollRight').addEventListener('click', () => {
    document.querySelector('#carousel').scrollBy(450, 0);
});