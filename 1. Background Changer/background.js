var colors = ["red", "yellow", "green", "blue"]

const background = document.getElementById('changeBg');
let colorIndex = 0;

changeBg.addEventListener('click', () => {
    document.body.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length
});