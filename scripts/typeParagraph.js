
function typeText(element, text, index, speed, callback, removeCursor = false) {
    if (index < text.length) {
        element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"><b>|</b></span>';
        setTimeout(() => {
            typeText(element, text, index + 1, speed, callback, removeCursor);
        }, speed);
    } else {
        element.innerHTML = text + (removeCursor ? '' : '<span class="cursor"><b>|</b></span>'); 
        if (callback) callback(); 
    }
}


function startTypingEffect() {
    const headingElement = document.querySelector('.biography h3');
    const headingText = "Hi There";
    typeText(headingElement, headingText, 0, 60, () => {
        headingElement.innerHTML = headingText; 
        setTimeout(() => {
            const paragraphElement = document.querySelector('.biography p');
            const paragraphText = `My name is Abdullah Yahya, a 20 years old CS graduate at NNU,
            passionate about programming in different areas, fast learner
            and can work within a team of programmers. Excited to apply my
            skills and gain real-world experience while making a positive impact.`;
            typeText(paragraphElement, paragraphText, 0, 17, () => {
                const cursor = paragraphElement.querySelector('.cursor'); 
                blinkCursor(cursor); 
            });
        }, 500); 
    }, true); 
}

function blinkCursor(cursor) {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity == '0' ? '1' : '0';
    }, 500);
}

let hasStartedTyping = false;
window.addEventListener('scroll', () => {
    if (!hasStartedTyping && window.scrollY > 100) {
        startTypingEffect();
        hasStartedTyping = true; 
    }
});
