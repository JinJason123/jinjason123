const canvas = document.getElementById('sceneCanvas');
const ctx = canvas.getContext('2d');

const background = new Image();
background.src = 'images/red.jpg';

const foreground1 = new Image();
foreground1.src = 'images/Porsche.jpg';

const foreground2 = new Image();
foreground2.src = 'images/images.jpg';

background.onload = function() {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    foreground1.onload = function() {
        ctx.drawImage(foreground1, 300, 100, 800, 450);
    };

    foreground2.onload = function() {
        ctx.drawImage(foreground2, 0, 50, 200, 200);
    };

    drawText();
};

function drawText() {
    ctx.font = '25px Arial';
    ctx.fillStyle = 'red';
    ctx.fillText('Jason Jin ', 20, 450);
    ctx.fillText('Race Scene', 20, 480);
}
