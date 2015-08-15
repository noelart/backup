var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var glitchCanvas = document.createElement('canvas');
var glitchContext = glitchCanvas.getContext('2d');

glitchCanvas.width = canvas.width = window.innerWidth;
glitchCanvas.height = canvas.height = window.innerHeight;

sourceVideo = document.getElementById('source-video');

sourceVideo.addEventListener('playing', function (e) {
  console.log(e)
  copyFrame(this);
},false);

function copyFrame (video) {
  glitchContext.drawImage(video, 0, 0, canvas.width, canvas.height);
  var data = glitchContext.getImageData(0, 0, canvas.width, canvas.height);
  var options = { amount: 10, seed: 11, iterations: 10, quality: 50 };
  glitch(data, options, function (glitchData) {
    context.putImageData(glitchData, 0, 0);
    setTimeout(copyFrame,20,video);
  });
}