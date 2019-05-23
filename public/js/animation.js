$(function() {
 // $('body').append('<a href="#" class="hero-btn"> SEE<br>THE<br><span class="str">STARS</span></a>  <h2 id="introText">Take a journey with us into the sky!</h2> <div class="bg"></div><a id="profile-hook" href="https://codepen.io/johnchinjew"><span>Made by </span><img id="intro_img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256705/profile/profile-80_73.jpg"></a>')
  //$('#home').hide()
  $('#wikiSearchDisplay').hide()
  $('.bg1').hide()
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
      $('#home').fadeIn()
  $('.bg1').fadeIn()
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






