$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$('.carousel').carousel({
  interval: 5000
})

$(function() {
  // Cache the window object
  var $window= $(window);
  
  // Parallax background effect
  $('div[data-type="background"]').each(function() {
    
    var $bgobj = $(this); // assigning the object
    
    $(window).scroll(function() {
      
      //scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP
      
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      
      // Put together our final background position
      
      var coords = '50% '+ yPos + 'px';
      
      // Move the background
      
      $bgobj.css({ backgroundPosition: coords });
      
    });
  });
});