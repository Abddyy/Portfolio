function typeParagraphText(element, text, index, speed, initialDelay) {
    setTimeout(() => {
        if (index < text.length) {
            element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"><b>|</b></span>';
            setTimeout(() => {
                typeParagraphText(element, text, index + 1, speed, 0);
            }, speed);
        } else {
            element.innerHTML = text + '<span class="cursor"><b>|</b></span>'; // Maintain the cursor after the text
            blinkCursor(element.querySelector('.cursor'));
        }
    }, initialDelay);
}

function blinkCursor(cursor) {
    setInterval(() => {
        cursor.style.opacity = (cursor.style.opacity == 0 ? 1 : 0);
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const paragraphText = `My name is Abdullah Yahya, a 20 years old CS graduate at NNU,
    passionate about programming in different areas, fast learner
    and can work within a team of programmers. Excited to apply my
    skills and gain real-world experience while making a positive impact.`;
    const paragraphElement = document.querySelector('.biography p');
    typeParagraphText(paragraphElement, paragraphText, 0, 20, 1000); // Faster typing speed and delayed start
});
