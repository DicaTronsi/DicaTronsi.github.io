const context = canvas.getContext('2d');

context.scale(20,20);

function drawEnemy(x, y, type) {
  context.fillStyle = 'white';
  context.fillRect(x, y, 1, 1);
  
}
 
drawEnemy(1, 1, 2);
