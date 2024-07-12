function typeHeadingText(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"><b>|</b></span>';
        setTimeout(() => {
            typeHeadingText(element, text, index + 1, speed);
        }, speed);
    } else {
        element.innerHTML = text; // Display the text and remove the cursor completely
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const headingText = "Hi There";
    const headingElement = document.querySelector('.biography h3');
    typeHeadingText(headingElement, headingText, 0, 60); // Set the speed for typing the heading
});
