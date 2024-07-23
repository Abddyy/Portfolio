function showLoading() {
    console.log('Showing loading GIF');
    document.getElementById('loading').style.display = 'flex';
}

function hideLoading() {
    console.log('Hiding loading GIF');
    document.getElementById('loading').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');

            if (href && !href.startsWith('#') && !link.classList.contains('no-loading') && link.getAttribute('target') !== '_blank') {
                showLoading();

                setTimeout(() => {
                    window.location.href = href;
                }, 100); 

                event.preventDefault();
            }
        });
    });

    window.addEventListener('load', function() {
        console.log('Window load event fired');
        hideLoading();
    });
});
