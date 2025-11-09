/* --- Star Cursor Effect --- */

const star1 = document.createElement('div');
const star2 = document.createElement('div');
star1.className = 'star';
star2.className = 'star';
document.body.appendChild(star1);
document.body.appendChild(star2);

let star1Pos = { x: -100, y: -100 };
let star2Pos = { x: -100, y: -100 };
let mousePos = { x: -100, y: -100 };

window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
});

function updateCursor() {
    star1Pos.x += (mousePos.x - star1Pos.x) * 0.15;
    star1Pos.y += (mousePos.y - star1Pos.y) * 0.15;
    star1.style.transform = `translate(${star1Pos.x}px, ${star1Pos.y}px)`;

    star2Pos.x += (star1Pos.x - star2Pos.x) * 0.15;
    star2Pos.y += (star1Pos.y - star2Pos.y) * 0.15;
    star2.style.transform = `translate(${star2Pos.x}px, ${star2Pos.y}px) scale(0.6)`;

    requestAnimationFrame(updateCursor);
}

updateCursor();


/* --- Scroll Animation (Intersection Observer) --- */

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
}, {
    threshold: 0.1
});

const textElements = document.querySelectorAll('.animate-on-scroll');
textElements.forEach((el) => observer.observe(el));

const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.05}s`;
    observer.observe(item);
});

// All modal logic is removed.