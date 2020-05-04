const canvas = document.getElementById('back');

context.scale(20,20);

function drawEnemy(x, y, type) {
  const context = canvas.getContext('2d');
  context.fillRect(20,20,100,100);
}
 
drawEnemy(1, 1, 2);
