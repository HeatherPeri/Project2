$(function() {
  var API = (function(window, document, undefined) {

    // Canvas vars
    var canvas = document.getElementById('canvas'),
      ctx = canvas.getContext("2d"),
      cH, cW; // Canvas height / Canvas width
  
    function initCanvas() {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
  
      cH = canvas.height;
      cW = canvas.width;
    }
  
    var colors = {
      circle: "white"
    };
  
    window.onresize = function() {
      initCanvas();
      initScene();
    };
    initCanvas();
  
    var velocity = 0.3;
    var util = {
      getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      getRandomVelocity: function() {
        return (velocity - (Math.random() * 0.5));
      }
    };
    // Math.root
    Math.root = function(val) {
      return val * val;
    };
  
    // Points class
    var basePointSize = 0.5;
    var Point = function(x, y) {
      var _x = x || util.getRandomInt(0, cW),
        _y = y || util.getRandomInt(0, cH),
        _radius = basePointSize + util.getRandomInt(0, 4);
  
      var _vx = util.getRandomVelocity(),
        _vy = util.getRandomVelocity();
  
      // Draw point
      this.drawPoint = function() {
        ctx.beginPath();
        ctx.arc(
          _x,
          _y,
          _radius,
          0,
          2 * Math.PI
        );
        ctx.fill();
      };
  
      // Getters
      this.x = function() {
        return _x
      };
      this.y = function() {
        return _y;
      };
      this.size = function() {
        return _radius;
      };
  
      // Animate
      this.animate = function() {
        if (_y < _radius || _y > (cH - _radius)) {
          _vy = -1 * _vy;
        } else if (_x < _radius || _x > (cW - _radius)) {
          _vx = -1 * _vx;
        }
        _x += _vx;
        _y += _vy;
      };
  
      return this;
    };
  
    // Line between 2 points
    var Line = function(point1, point2, distance) {
  
      var t1 = minDist * (point1.size() / 2),
        t2 = minDist * (point2.size() / 2);
  
      var threShould = t1 > t2 ? t1 : t2;
  
      if (distance < threShould) {
  
        var opacity = (1 - distance / threShould * 1.2);
        ctx.strokeStyle = "rgba(255, 255,255," + opacity + ")";
  
        ctx.beginPath();
        ctx.moveTo(point1.x(), point1.y());
        ctx.lineTo(point2.x(), point2.y());
        ctx.stroke();
      }
    };
  
    // Number of generated pointsm points array, min dits between points
    var pointsNumber,
      points,
      minDist;
  
    var refValue = {
      surface: 736000,
      dotsNumber: 260,
      minDistBetweenDots: 80
    };
  
    var passedVal;
    // Create Points
    function initScene(dotCount) {
      passedVal = passedVal || dotCount;
  
      pointsNumber = passedVal || Math.floor(refValue.dotsNumber * (cH * cW) / refValue.surface);
      minDist = refValue.minDistBetweenDots;
  
      points = [];
      for (var i = 0; i < pointsNumber; i++) {
        points.push(new Point());
        points[i].drawPoint();
      }
  
      ctx.fillStyle = colors.circle;
      ctx.lineWidth = 0.5;
    }
  
    // Update values and redraw
    function updateScene() {
      ctx.clearRect(0, 0, cW, cH);
  
      // For all points
      for (var i = 0; i < pointsNumber; i++) {
  
        // Move points
        points[i].animate();
  
        for (var j = i; j < pointsNumber; j++) {
          // Make line between 2 points
          new Line(
            points[i],
            points[j],
            Math.sqrt((Math.root(points[j].x() - points[i].x()) + Math.root(points[j].y() - points[i].y())))
          )
  
        }
  
        // Draw point last to overlad lines
        points[i].drawPoint();
      }
    }
  
    // Add point at given coordinate
    function bindClickToAddPoint() {
  
      function addPoint(x, y) {
        ++pointsNumber;
        points.push(new Point(x, y));
      }
  
      canvas.addEventListener('click', function(event) {
        var rect = canvas.getBoundingClientRect();
        addPoint(event.clientX - rect.left, event.clientY - rect.top);
      });
    }
  
    return {
      init: initScene,
      update: updateScene,
      bindClick: bindClickToAddPoint
    }
  
  })(window, document);
  
  (function() {
    API.init();
    API.bindClick();
  
    (function animate() {
      API.update();
      requestAnimationFrame(animate);
    })();
  })();

 // $('body').append('<a href="#" class="hero-btn"> SEE<br>THE<br><span class="str">STARS</span></a>  <h2 id="introText">Take a journey with us into the sky!</h2> <div class="bg"></div><a id="profile-hook" href="https://codepen.io/johnchinjew"><span>Made by </span><img id="intro_img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256705/profile/profile-80_73.jpg"></a>')
  //$('#home').hide()
  $('#wikiSearchDisplay').hide()
  //$('.bg1').hide()
  //$('.navbar').hide()
  $('#introText').hide()
  $('.hero-btn').mouseenter(function(){
      $('#introText').delay( 50 ).fadeIn(1000)
      
  
  })
  $('.hero-btn').mouseleave(function(){
    $('#introText').fadeOut()
  })
  $('.hero-btn').on('click', function(){
      $('.hero-btn').remove();
      $('#introText').remove();
      $('#profile-hook').remove();
      $('.bg').remove()
      $('.navbar').fadeIn(2000)
      //$('#home').fadeIn()
  //$('.bg1').fadeIn()
  })
  $('#asteroids').on('click', function(){

  })
  $('#searchImg').on('click', function(){
    $('#wikiSearchDisplay').fadeIn()
  })
  })
  /*<a href="#" class="hero-btn">
        SEE<br>THE<br><span class="str">STARS</span>
      </a>
      <h2 id="introText">Take a journey with us into the sky!</h2>
      <div class="bg"></div>
      
      <a id="profile-hook" href="https://codepen.io/johnchinjew">
        <span>Made by </span>
        <img id="intro_img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256705/profile/profile-80_73.jpg">
      </a> */






