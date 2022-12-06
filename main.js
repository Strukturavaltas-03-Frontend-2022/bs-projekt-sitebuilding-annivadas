window.addEventListener('DOMContentLoaded', event => {

    let stickyMenu = function () {
        const pageOffset = document.body.querySelector('.sticky');
        if (!pageOffset) {
            return;
        }
        if (window.scrollY === 0) {
            pageOffset.classList.remove('shrink')
        } else {
            pageOffset.classList.add('shrink')
        }

    };

    stickyMenu();

    document.addEventListener('scroll', stickyMenu);
});