const emojis = ['🍺', '💊', '🔞', '🤮'];
function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
}
setInterval(createEmoji, 300);
