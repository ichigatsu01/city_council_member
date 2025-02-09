const hamBtnOpen = document.querySelector('#hamburger-btn-open')
const hamBtnClose = document.querySelector('#hamburger-btn-close')
const hamMenu = document.querySelector('#hamburger-menu')
const menuOpen = hamBtnOpen.addEventListener('click', () => {
    hamMenu.animate(
        {
            translate: ['0 -50vh', 0]
        },
        {
            duration: 800,
            fill:"forwards",
            easing: 'ease-out',
        },
    );
});
const menuClose = hamBtnClose.addEventListener('click', () => {
    hamMenu.animate(
        {
            translate: [0, '0 -50vh']
        },
        {
            duration: 800,
            fill:"forwards",
            easing: 'ease-out',
        },
    );
});