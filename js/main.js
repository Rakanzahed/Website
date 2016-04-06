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

  $('.navbar-right li > a').click(function(){
      $('.navbar-right').find('.active').removeClass("active");
      $(this).parent().addClass("active");
  });

  $('.feature-left').waypoint(function() {
     $('.feature-left').addClass('fadeInLeft');
  }, { offset: '100%'});

  $('.feature-right').waypoint(function() {
     $('.feature-right').addClass('fadeInRight');
  }, { offset: '100%'});

  $('.about-left').waypoint(function() {
     $('.about-left').addClass('fadeInLeft');
  }, { offset: '100%'});

  $('.about-right').waypoint(function() {
     $('.about-right').addClass('fadeInRight');
  }, { offset: '100%'});

  $('.fixit-works-left').waypoint(function() {
     $('.fixit-works-left').addClass('fadeInLeft');
  }, { offset: '100%'});

  $('.fixit-works-right').waypoint(function() {
     $('.fixit-works-right').addClass('fadeInRight');
  }, { offset: '100%'});

  
  $('.service-left').waypoint(function() {
     $('.service-left').addClass('fadeInLeft');
  }, { offset: '100%'});

  $('.service-right').waypoint(function() {
     $('.service-right').addClass('fadeInRight');
  }, { offset: '100%'});


});
