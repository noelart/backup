var random = function(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//150 - 50
var gauge = function() {
    var expandRight = random(150, 25);
    var expandRightTeal = random(140, 75);
    $('.red-bar').find('img').animate({width : expandRight, height : '10px'}, 400);
    $('.teal-bar').find('img').animate({width : expandRightTeal, height : '10px'}, 900);
};

var wavelet = function() {
  var expandRight = random(600, 200);
  $('.wavelet').find('img').animate({width : expandRight, height : '18px'}, 1000);
};

var bellows = function() {
  $('.machine-bellows').find('img').animate({width : '100px', height : '51px'}, 1000)
                                    .animate({width : '80px', height : '51px'}, 1000);
};

var  bulbs = function() {
  if ($('.bulb-red').hasClass('bulb-glow-red')) {
      $('.bulb-red').removeClass('bulb-glow-red', 800, 'easeInQuint');
      $('.bulb-teal').addClass('bulb-glow-teal', 800, 'easeInQuint');
  } else {
      $('.bulb-teal').removeClass('bulb-glow-teal', 800, 'easeInQuint');
      $('.bulb-red').addClass('bulb-glow-red', 800, 'easeInQuint');
  }
};

var rotateLever = function() {
  var angle = -45;
  var $lever = $('.machine-lever').find('img');
  $lever.rotate(angle);
};


var rotation = function(image, duration) {
  var angle = 0;
  setInterval(function() {
    angle+=3;
    $(image).rotate(angle);
  }, duration);
};

var factory = function(array) {
  var i = random(0, 3);
  var $gift = $('<div class="gift"><img src="' + array[i] + '"></div>');
  return  $gift;
};

var giftsArray = [ 'assets/ball.png',
                   'assets/train.png',
                  'assets/drums.png'
                ];

var giftsWrappedArray = ['assets/ball-packed.png',
                         'assets/train-packed.png',
                          'assets/drums-packed.png'
                        ];


var xrayGiftsArray = ['assets/ball-xray.png',
                      'assets/train-xray.png',
                      'assets/drums-xray.png'
                      ];

var cloudsArray = [ 'assets/cloud-group1.png',
                    'assets/cloud-group2.png',
                    'assets/cloud-group3.png'
                  ];

var productionGifts = function() {
  for (var i = 0; i <=30; i++) {
      setTimeout(function() {
        return  function() {
          var $gift = $('.gifts-unwrapped');
          $gift.css('paddingLeft', 0);
          $gift.prepend(factory(giftsArray));
          var startingPos = -$gift.find('img').width();
          $gift.css('paddingLeft', startingPos);
          $gift.animate({paddingLeft : '200px'}, 800);
        };
      }(i), 1500 * i);
  }
};

var productionGiftsWrapped = function() {
  for (var i = 0; i <=30; i++) {
      setTimeout(function() {
        return  function() {
          var $gift = $('.gifts-wrapped');
          $gift.css('paddingLeft', 0);
          $gift.prepend(factory(giftsWrappedArray));
          var startingPos = -$gift.find('img').width();
          $gift.css('paddingLeft', startingPos);
          $gift.animate({paddingLeft : '200px'}, 1000);
        };
      }(i), 2000 * i);
  }
};

var productionXrayGifts = function() {
    for (var i = 0; i <=30; i++) {
      setTimeout(function() {
        return  function() {
          var $gift = $('.xray');
          $gift.css('paddingLeft', 0);
          $gift.prepend(factory(xrayGiftsArray)).css('opacity', 0.1);
          $gift.fadeTo(1000, 1);
          $gift.find('img').animate({paddingLeft : '70px'}, 1500).animate({paddingTop : '180px'}, 1500);
        };
      }(i), 3000 * i);
  }
};

var productionClouds = function() {
     for (var i = 0; i <=30; i++) {
      setTimeout(function() {
        return  function() {
          var $gift = $('.clouds');
          $gift.css('paddingLeft', 0);
          $gift.prepend(factory(cloudsArray));
          /*$gift.fadeTo(2000, 1);*/
          $gift.find('img').animate({paddingLeft : '1300px'}, 15000);
        };
      }(i), 7000 * i);
  }
};

var counter = function() {
  var count = 0;
  for (var i = 0; i <=98; i++) {
      setTimeout(function() {
        return  function() {
          count ++ ;
          $('.counter').text(count + '%');
          $('.progress-bar').find('img').animate({width : count + '%', height : '27px'}, 1500);
          $('.bulb-yellow').find('.big-glow').toggleClass('yellow-glow');
          $('.bulb-orange').find('.small-glow').toggleClass('orange-glow');
        };
      }(i), 1000 * i);
  }
};

var endMessage = function() {
  var $header = $('.list').find('.header');
  var $string = $('.list').find('.string2');
    $header.animate({'opacity' : '1'}, 1500, function() {
      $string.animate({'opacity' : '1'}, 1500, function() {
        $('.list').find('.logo').animate({'opacity' : '1'}, 1500);
      });
    });
};

var scroll = function() {
  var leftPosition = $('body').scrollLeft();
  $('body').animate({scrollLeft: leftPosition + 9300}, 65000, 'easeInSine');
};

var start = function() {
  setTimeout(rotateLever, 200);
  setInterval(bulbs, 400);
  setInterval(gauge, 500);
  setInterval(wavelet, 900);
  setInterval(bellows, 1000);
  setTimeout(rotation(".water img", 50), 1000);
  setTimeout(rotation(".cog-rotation img", 20), 2500);
  setTimeout(counter());
  setTimeout(productionGifts, 2000);
  setTimeout(productionGiftsWrapped, 2500);
  setTimeout(productionXrayGifts, 2500);
  setTimeout(productionClouds, 3000);
  setTimeout(scroll, 2000);
  setTimeout(endMessage, 60000);
};



$(document).ready(function() {
  $('.machine-lever').on('click', function() {
    start();
  });
});