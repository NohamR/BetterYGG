hideSidebar();

window.addEventListener('resize', function () {
    hideSidebar();
});

function hideSidebar() {
    if (window.innerWidth < 1750) {
        document.querySelectorAll('#cat, .back-cat').forEach(el => el.classList.remove('active'));
    } else {
        document.querySelectorAll('#cat, .back-cat').forEach(el => el.classList.add('active'));
    }
}
