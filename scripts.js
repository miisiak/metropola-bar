document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const menuPopup = document.getElementById('menuPopup');

    menuButton.addEventListener('click', () => {
        menuPopup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        menuPopup.style.display = 'none';
    });
});
