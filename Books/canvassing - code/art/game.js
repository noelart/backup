var Game = require('gameloop-canvas');
var Mouse = require('crtrdg-mouse');
var Keyboard = require('crtrdg-keyboard');

var game = Game({
  canvas: 'game',
  width: window.innerWidth,
  height: window.innerHeight
});

game.backgroundColor = randomRGBA(0, 256, 0, 256, 0, 256, 0.3);

var mouse = new Mouse(game);
var keyboard = new Keyboard(game);
  var keys = keyboard.keysDown;

mouse.on('click', function(e){
  game.backgroundColor = randomRGBA(0, 256, 0, 256, 0, 256, 0.3);
  
  if (sun.exploding) {
    sun.exploding = false;
    sun.explodeSize = 1;
  }
  else {
    sun.exploding = true;
  }
});

game.on('update', function (dt) {
  sun.update();
});

var size = 5;
var columns = game.width / size;
var rows = game.height / size;

game.on('draw', function (c) {
  c.fillStyle = game.backgroundColor;
  c.fillRect(0, 0, game.width, game.height);
  
  sun.draw(c);
  
  for (var h=0; h<rows; h+=randomInt(5, 20)){
    c.save();
    c.translate(game.width / 2, 0);
    c.rotate(Math.PI / randomInt(100, -180));
    c.fillStyle = randomRGBA(100, 255, 200, 255, 200, 255, 0.1);
    c.fillRect(
      -game.width/2-50, 
      size*h-30, 
      game.width+100, 
      randomInt(100, 1000)
    );
    c.restore();
  }
  
  for (var w=0; w<columns; w+=randomInt(5, 20)){
    c.fillStyle = randomRGBA(100, 255, 100, 200, 100, 211, .6);
    c.fillRect(
      size*w, 
      randomInt(0, game.height), 
      randomInt(1, 3), 
      randomInt(1, 3)
    );    
  }
});

var sun = {
  position: { x: 0, y: 0 },
  size: { x: 40, y: 40 },
  speed: 22,
  color: randomRGBA(15, 255, 15, 255, 15, 255, .95),
  exploding: false,
  explodeSize: 1
};

sun.update = function () {
  sun.input();
  sun.boundaries();
};

sun.draw = function (c) {
  if (sun.exploding) sun.explode(c);
  else sun.idle(c);
}

sun.input = function () {
  if ('W' in keys) sun.position.y -= sun.speed;
  if ('S' in keys) sun.position.y += sun.speed;
  if ('A' in keys) sun.position.x -= sun.speed;
  if ('D' in keys) sun.position.x += sun.speed;
}

sun.boundaries = function(){
  if (sun.position.x < -sun.size.x) {
    sun.position.x = game.width;
  }
  if (sun.position.y < -sun.size.y) {
    sun.position.y = game.height;
  }
  if (sun.position.x >= game.width + sun.size.x) {
    sun.position.x = -sun.size.x;
  }
  if (sun.position.y >= game.height + sun.size.y) {
    sun.position.y = -sun.size.y;
  }
}

sun.idle = function(c){
  for (var w=0; w<3; w++){
    c.save();
    c.translate(this.position.x, this.position.y)
    c.rotate(Math.PI/180 * randomInt(-180, 180));
    c.fillStyle = randomRGBA(255, 255, 255, 255, 15, 255, .25);
    c.fillRect(
      -this.size.x/2, 
      -this.size.y/2, 
      this.size.x, 
      this.size.y
    );
    c.restore();
  }
}

sun.explode = function(c) {
  for (var w=0; w<20; w++){
    c.save();
    c.translate(this.position.x, this.position.y)
    c.rotate(Math.PI/20 * randomInt(-20, 20));
    c.fillStyle = randomRGBA(200, 225, 20, 50, 0, 0, .35);
    c.fillRect(
      -this.size.x/2, 
      -this.size.y/2-30, 
      randomInt(10, 80), 
      randomInt(60, this.explodeSize)
    );
    c.restore();
  }
  this.explodeSize += 10;
}

game.start();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGBA(rmin, rmax, gmin, gmax, bmin, bmax, alpha){
  var r = randomInt(rmin, rmax);
  var g = randomInt(gmin, gmax);
  var b = randomInt(bmin, bmax);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}

/*
var Game = require('gameloop-canvas');
var Mouse = require('crtrdg-mouse');
var Keyboard = require('crtrdg-keyboard');

var game = new Game({
  canvas: 'game',
  width: window.innerWidth,
  height: window.innerHeight
});

game.backgroundColor = randomRGBA(0, 256, 0, 256, 0, 256, 0.3);

var mouse = new Mouse(game);
var keyboard = new Keyboard(game);
var keys = keyboard.keysDown;

mouse.on('click', function(e){
  game.backgroundColor = randomRGBA(0, 256, 0, 256, 0, 256, 0.3);
  
  if (sun.exploding) {
    sun.exploding = false;
    sun.explodeSize = 1;
  }
  else {
    sun.exploding = true;
  }
});

game.on('update', function(interval){
  sun.update();
});

var size = 5;
var columns = game.width / size;
var rows = game.height / size;

game.on('draw', function(c){
  c.fillStyle = game.backgroundColor;
  c.fillRect(0, 0, game.width, game.height);
  
  for (var h=0; h<rows; h+=randomInt(5, 20)){
    c.save();
    c.translate(game.width / 2, 0);
    c.rotate(Math.PI / randomInt(100, -180));
    c.fillStyle = randomRGBA(100, 255, 200, 255, 200, 255, 0.1);
    c.fillRect(
      -game.width/2-50, 
      size*h-30, 
      game.width+100, 
      randomInt(100, 1000)
    );
    c.restore();
  }
  
  sun.draw(c);

  for (var w=0; w<columns; w+=randomInt(5, 20)){
    c.fillStyle = randomRGBA(100, 255, 100, 200, 100, 211, .6);
    c.fillRect(
      size*w, 
      randomInt(0, game.height), 
      randomInt(1, 3), 
      randomInt(1, 3)
    );    
  }
});

var sun = {
  position: { x: 0, y: 0 },
  size: { x: 40, y: 40 },
  speed: 22,
  color: randomRGBA(15, 255, 15, 255, 15, 255, .95),
  exploding: false,
  explodeSize: 1
};

sun.update = function () {
  sun.input();
  sun.boundaries();
};

sun.draw = function (c) {
  if (sun.exploding) sun.explode(c);
  else sun.idle(c);
}

sun.input = function () {
  if ('W' in keys) sun.position.y -= sun.speed;
  if ('S' in keys) sun.position.y += sun.speed;
  if ('A' in keys) sun.position.x -= sun.speed;
  if ('D' in keys) sun.position.x += sun.speed;
}

sun.boundaries = function(){
  if (sun.position.x < -sun.size.x) {
    sun.position.x = game.width;
  }
  if (sun.position.y < -sun.size.y) {
    sun.position.y = game.height;
  }
  if (sun.position.x >= game.width + sun.size.x) {
    sun.position.x = -sun.size.x;
  }
  if (sun.position.y >= game.height + sun.size.y) {
    sun.position.y = -sun.size.y;
  }
}

sun.explode = function(c) {
  for (var w=0; w<20; w++){
    c.save();
    c.translate(this.position.x, this.position.y)
    c.rotate(Math.PI/20 * randomInt(-20, 20));
    c.fillStyle = randomRGBA(200, 225, 20, 50, 0, 0, .35);
    c.fillRect(
    	-this.size.x/2, 
    	-this.size.y/2-30, 
    	randomInt(10, 80), 
    	randomInt(60, this.explodeSize)
    );
    c.restore();
  }
  this.explodeSize += 10;
}

sun.idle = function(c){
	for (var w=0; w<3; w++){
    c.save();
    c.translate(this.position.x, this.position.y)
    c.rotate(Math.PI/180 * randomInt(-180, 180));
    c.fillStyle = randomRGBA(255, 255, 255, 255, 15, 255, .25);
    c.fillRect(
    	-this.size.x/2, 
    	-this.size.y/2, 
    	this.size.x, 
    	this.size.y
    );
    c.restore();
  }
}


game.start();

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomRGBA(rmin, rmax, gmin, gmax, bmin, bmax, alpha){
  var r = randomInt(rmin, rmax);
  var g = randomInt(gmin, gmax);
  var b = randomInt(bmin, bmax);
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
}
*/