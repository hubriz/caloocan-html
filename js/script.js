$(window).load(function() {
  
  // Homepage Banner SLider
  $('div#bannerHome').flexslider({
    animation : 'slide',
    randomize : true,
    controlsContainer : '#bannerHomeControl'
  });
  
  // Open in new tab
  $('#circular a[rel="newTab"]').click(function() {
      window.open($(this).attr('href'));
      return false;
  });
  
  // Welcome Page Roundabout
  $('#circular a img').addClass('cloudcarousel');
  
  $('#circular').CloudCarousel({
      buttonLeft : $('#prev-btn'),
      buttonRight : $('#next-btn'),
      altBox  : $('#alt-text'),
      //titleBox  : $('#title-text'),
      xPos : 270,
      yPos : 64,
      autoRotate : 'left',
      speed : 0.1,
      autoRotateDelay : 2500,
      reflHeight: 36,
      reflGap : 3,
      minScale : 0.4
  });
    
});

