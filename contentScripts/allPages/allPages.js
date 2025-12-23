/* Inject scripts don't forget to add them to web_accessible_resources in manifest */
injectScript(chrome.runtime.getURL('/contentScripts/allPages/accessAllPages.js'), 'head');

/* disable annoying fuckn popup */
var popup = document.querySelector('div.ad-alert-wrapper');
if (popup && popup.style.display !== "none") {
    document.querySelector('button.ad-alert-message-continue-btn').click();
}

/* Remove "Compte Actif" premium status element */
var compteActifElement = document.querySelector('li a[href="https://www.yggtorrent.org/user/donate"]');
if (compteActifElement) {
    var liElement = compteActifElement.closest('li');
    if (liElement) {
        liElement.remove();
    }
}

/* Remove download limits and Turbo promotion */
var downloadLimits = document.querySelectorAll('small');
downloadLimits.forEach(function(small) {
    if (small.textContent.includes('Téléchargements restants aujourd\'hui')) {
        small.remove();
    }
});

var turboLinks = document.querySelectorAll('a[href="https://www.yggtorrent.org/user/turbo"]');
turboLinks.forEach(function(link) {
    if (link.querySelector('.ico_bolt')) {
        link.remove();
    }
});

/* Remove "Bonus Go & Freeleech" promotion link */
var bonusGoLink = document.querySelector('a.donate.pulse[href="https://www.yggtorrent.org/user/donate"]');
if (bonusGoLink) {
    bonusGoLink.remove();
}

/* Retrieve credentials from Google Storage*/
chrome.storage.sync.get(['searchOrder', 'searchSort'], function (value) {
    /* Update links to order and filter them with our values */
    if (value.searchOrder && value.searchSort) {
        var elements = document.querySelectorAll('a[href$="do=search"]');
        for (var i = 0; i < elements.length; i++) {
            elements[i].href += '&order=' + value.searchOrder + '&sort=' + value.searchSort;
        }
    }
});
