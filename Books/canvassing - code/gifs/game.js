var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var glitchCanvas = document.createElement('canvas');
var glitchContext = glitchCanvas.getContext('2d');

glitchCanvas.width = canvas.width = window.innerWidth;
glitchCanvas.height = canvas.height = window.innerHeight;

sourceVideo = document.getElementById('source-video');

sourceVideo.addEventListener('playing', function (e) {
  copyFrame(this);
},false);

var gif = new GIF({
  width: canvas.width,
  height: canvas.height
});

gif.on('finished', function(blob) {
  window.open(URL.createObjectURL(blob));
});

var frames = 0;

function copyFrame (video) {
  glitchContext.drawImage(video, 0, 0, canvas.width, canvas.height);
  var data = glitchContext.getImageData(0, 0, canvas.width, canvas.height);
  var options = { amount: 3, seed: 41, iterations: 2, quality: 50 };
  glitch(data, options, function (glitchData) {
    context.putImageData(glitchData, 0, 0);
    
    if (frames < 10) {
      frames++;
      gif.addFrame(context, { copy: true, delay: 10 });
      setTimeout(copyFrame,20,video);
    }
    else gif.render();
  });
}