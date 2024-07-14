document.addEventListener('DOMContentLoaded', () => {
    const headingText = "Hi There";
    const headingElement = document.querySelector('.biography h3');
    const paragraphText = `My name is Abdullah Yahya, a 20 years old CS graduate at NNU,
        passionate about programming in different areas, fast learner
        and can work within a team of programmers. Excited to apply my
        skills and gain real-world experience while making a positive impact.`;
    const paragraphElement = document.querySelector('.biography p');
    const contactMe = document.querySelector('.contact-me');

    function typeHeadingText(element, text, index, speed, callback) {
        if (index < text.length) {
            element.innerHTML = text.substring(0, index + 1) + '<span class="cursor"><b>|</b></span>';
            setTimeout(() => {
                typeHeadingText(element, text, index + 1, speed, callback);
            }, speed);
        } else {
            element.innerHTML = text; // Display the text and remove the cursor completely
            if (callback) callback();
        }
    }

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
                showContactMe();
            }
        }, initialDelay);
    }

    function blinkCursor(cursor) {
        setInterval(() => {
            cursor.style.opacity = (cursor.style.opacity == 0 ? 1 : 0);
        }, 500);
    }

    function showContactMe() {
        contactMe.classList.add('show');
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust this value to trigger when .biography is halfway in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeHeadingText(headingElement, headingText, 0, 60, () => {
                    typeParagraphText(paragraphElement, paragraphText, 0, 17, 1000);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    observer.observe(document.querySelector('.biography'));
});
