// Show the loading GIF
function showLoading() {
    console.log('Showing loading GIF');
    document.getElementById('loading').style.display = 'flex';
}

// Hide the loading GIF
function hideLoading() {
    console.log('Hiding loading GIF');
    document.getElementById('loading').style.display = 'none';
}

// Show the loading GIF when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            const href = link.getAttribute('href');

            // Check if the link should trigger the loading GIF
            if (href && !href.startsWith('#') && !link.classList.contains('no-loading') && link.getAttribute('target') !== '_blank') {
                // Show loading GIF
                showLoading();

                // Delay navigation to show the loading GIF
                setTimeout(() => {
                    window.location.href = href;
                }, 100); // Adjust the delay as needed

                // Prevent the default action to control the navigation
                event.preventDefault();
            }
        });
    });

    // Hide the loading GIF when the page loads
    window.addEventListener('load', function() {
        console.log('Window load event fired');
        hideLoading();
    });
});
