// Function to type text with a cursor
function typeText(element, text, index, speed, callback) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"><b>|</b></span>';
        setTimeout(() => {
            typeText(element, text, index + 1, speed, callback);
        }, speed);
    } else {
        element.innerHTML = text; // Display the text and remove the cursor completely
        if (callback) callback(); // Call the callback function if provided
    }
}

// Function to start the typing effects
function startTypingEffect() {
    const headingElement = document.querySelector('.biography h3');
    const headingText = "Hi There";
    typeText(headingElement, headingText, 0, 60, () => {
        setTimeout(() => {
            const paragraphElement = document.querySelector('.biography p');
            const paragraphText = `My name is Abdullah Yahya, a 20 years old CS graduate at NNU,
            passionate about programming in different areas, fast learner
            and can work within a team of programmers. Excited to apply my
            skills and gain real-world experience while making a positive impact.`;
            typeText(paragraphElement, paragraphText, 0, 17, () => {
                blinkCursor(paragraphElement.querySelector('.cursor')); // Start blinking the cursor after paragraph is typed
            });
        }, 500); // Delay before starting the paragraph typing
    });
}

// Function to blink the cursor
function blinkCursor(cursor) {
    setInterval(() => {
        cursor.style.opacity = (cursor.style.opacity == 0 ? 1 : 0);
    }, 500);
}

// Event listener to trigger typing effect on scroll
let hasStartedTyping = false;
window.addEventListener('scroll', () => {
    if (!hasStartedTyping && window.scrollY > 100) {
        startTypingEffect();
        hasStartedTyping = true; // Ensure the typing effect starts only once
    }
});
