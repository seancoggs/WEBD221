document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navUl = document.querySelector('#main-nav ul');

    // Toggle the navigation menu on click
    hamburgerBtn.addEventListener('click', () => {
        if (navUl.style.display === 'none' || navUl.style.display === '') {
            navUl.style.display = 'block';
        } else {
            navUl.style.display = 'none';
        }
    });
});
