const toggleButton = document.getElementById('toggleSidebarButton');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('menu-open');
    content.classList.toggle('menu-open');
});
