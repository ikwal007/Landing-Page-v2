const toggleMenu = document.querySelector('.toggle');
const navigationMenu = document.querySelector('.navigation');

toggleMenu.onclick = function () {
    toggleMenu.classList.toggle('active-toggle');
    navigationMenu.classList.toggle('active-navigation')
}

window.onload = () => {
    const switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < switchers.length; i++) {
        const tab_switcher = switchers[i];

    tab_switcher.addEventListener('click', () => {
        document.querySelector('a.active').classList.remove('active');
        tab_switcher.classList.add('active');
    });
        
    }
}