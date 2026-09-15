const starsContainer = document.getElementById('stars-container');

for (let i = 0; i < 500; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    
    let size = Math.random() * 3.5;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    
    star.style.animationDuration = (Math.random() * 3 + 1.5) + 's';
    star.style.animationDelay = Math.random() * 5 + 's';
    
    starsContainer.appendChild(star);
}

const svg = document.getElementById('svg');
const animations = svg.querySelectorAll('animate');

const phrases = ["Te Amo", "My Love", "Mi Amor", "Eres mi universo", "Siempre tú", "Preciosa"];

let phraseInterval = null;

function spawnPhrase() {
    const phraseEl = document.createElement('div');
    phraseEl.className = 'floating-phrase';
    phraseEl.innerText = phrases[Math.floor(Math.random() * phrases.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 150 + Math.random() * 250; 
    
    const tx = Math.cos(angle) * distance + 'px';
    const ty = Math.sin(angle) * distance + 'px';

    phraseEl.style.setProperty('--tx', tx);
    phraseEl.style.setProperty('--ty', ty);

    document.body.appendChild(phraseEl);

    setTimeout(() => {
        phraseEl.remove();
    }, 3500);
}

svg.addEventListener('mouseenter', () => {
    animations.forEach(anim => anim.beginElement());
    
    if(!phraseInterval) {
        spawnPhrase(); 
        phraseInterval = setInterval(spawnPhrase, 800);
    }
});