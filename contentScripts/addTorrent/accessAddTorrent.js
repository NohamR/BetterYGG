var downloadButton = document.querySelector('a.butt');
if (downloadButton) {
    downloadButton.onclick = function() { window.location.href = this.href; };
}
