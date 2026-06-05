const words = [
"AI Engineer",
"Java Developer",
"Full Stack Learner",
"Machine Learning Enthusiast",
"Data Science Enthusiast"
];

typeEffect();

/* SCROLL ANIMATION */

const cards = document.querySelectorAll(
'.skill-card, .project-card, .timeline-item, .certificate-card'
);

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let deleting = false;

function typeEffect(){

currentWord = words[wordIndex];

if(!deleting){
document.getElementById("typing").textContent =
currentWord.substring(0,charIndex++);
}else{
document.getElementById("typing").textContent =
currentWord.substring(0,charIndex--);
}

if(charIndex === currentWord.length + 1){
deleting = true;
setTimeout(typeEffect,1000);
return;
}

if(charIndex === 0){
deleting = false;
wordIndex++;

if(wordIndex === words.length){
wordIndex = 0;
}
}

setTimeout(typeEffect,deleting ? 50 : 120);
}

typeEffect();