const bar1 = document.querySelector('#Bar1');
const bar2 = document.querySelector('#Bar2');
const bar3 = document.querySelector('#Bar3');
const icnMenu = document.querySelector('.menu-icon');
let isMenuOpen = false;

icnMenu.addEventListener('click', () => {
    if (isMenuOpen) {
        bar1.classList.remove('bar1');
        bar3.classList.remove('bar3');
        bar2.classList.remove('hide-bar2');
        isMenuOpen = false;
    } else {
        bar1.classList.add('bar1');
        bar2.classList.add('hide-bar2');
        bar3.classList.add('bar3');
        isMenuOpen = true;
    }
});