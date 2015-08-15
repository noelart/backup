var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.beginPath();

/* H */
context.moveTo(20, 20);
context.lineTo(20, 50);

context.moveTo(20, 35);
context.lineTo(35, 35);

context.moveTo(35, 20);
context.lineTo(35, 50);

/* I */
context.moveTo(50, 20);
context.lineTo(65, 20);

context.moveTo(57, 20);
context.lineTo(57, 50);

context.moveTo(50, 50);
context.lineTo(65, 50);

context.lineWidth = 10;
context.strokeStyle = '#ff0000';

context.stroke();