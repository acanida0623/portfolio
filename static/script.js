$(document).ready(function() {
  //Set up page and header for reload
  $("body, html").animate({
  scrollTop: $(".cover").position().top
  },function(){
    if($(".home").hasClass('selected') === false) {
      $(".home").toggleClass('selected')
    }
    if($(".projects").hasClass('selected')) {
      $(".projects").toggleClass('selected')
    }
    if($(".contact").hasClass('selected')) {
      $(".contact").toggleClass('selected')
    }
    $(".header").css('visibility','visible').hide().fadeIn('fast');
    $(".design").css('visibility','visible').hide().fadeIn('fast');
    if($('.design2:visible').length !== 0) {
      $(".header2").fadeOut()
      $(".header2_container").fadeOut()
      $(".design2").fadeOut()
    }
      $(".header2_container").css('visibility','hidden')
  });
  //header link animations
  $(".projects").on('click',function(){
    if($(".projects").hasClass('selected') === false) {
      $(".projects").toggleClass('selected')
    }
    if($(".home").hasClass('selected')) {
      $(".home").toggleClass('selected')
    }
    if($(".contact").hasClass('selected')) {
      $(".contact").toggleClass('selected')
    }
    $("body, html").animate({
      scrollTop: $(".projects_page").position().top
    },function(){
      $(".header").fadeOut();
      $(".design").fadeOut();
    });
    if($('.design2:visible').length == 0) {
      $(".header2").css('visibility','visible').hide().fadeIn('fast');
      $(".design2").css('visibility','visible').hide().fadeIn('fast');
      setTimeout(function(){
        $(".design2").addClass('small_logo');
        $(".header2_container").css('visibility','visible').hide().fadeIn('fast');
      },500)
    };
  });

  $(".home").on('click',function(){
    $('.design2').removeClass('small_logo');
    $(".header2").css('visibility','hidden')
    $(".header2_container").css('visibility','hidden')
    $(".design2").css('visibility','hidden')
    if($(".home").hasClass('selected') === false) {
      $(".home").toggleClass('selected')
    }
    if($(".projects").hasClass('selected')) {
      $(".projects").toggleClass('selected')
    }
    if($(".contact").hasClass('selected')) {
      $(".contact").toggleClass('selected')
    }
    $("body, html").animate({
      scrollTop: $(".cover").position().top
    })
  })

  $(".contact").on('click',function(){
    if($('.design:visible').length !== 0) {
      $(".header").fadeOut();
      $(".design").fadeOut();
    };
    if($(".contact").hasClass('selected') === false) {
      $(".contact").toggleClass('selected')
    }
    if($(".home").hasClass('selected')) {
      $(".home").toggleClass('selected')
    }
    if($(".projects").hasClass('selected')) {
      $(".projects").toggleClass('selected')
    }
    $('html, body').animate({scrollTop:$(document).height()});
    if($('.design2:visible').length == 0) {
      $(".header2").css('visibility','visible').hide().fadeIn('fast');
      $(".design2").css('visibility','visible').hide().fadeIn('fast');
      setTimeout(function(){
        $(".design2").addClass('small_logo');
        $(".header2_container").css('visibility','visible').hide().fadeIn('fast');
      },500)
    };
  });

  $(".contact_link").on('click',function(){
    if($('.design:visible').length !== 0) {
      $(".header").fadeOut();
      $(".design").fadeOut();
    };
    if($(".contact").hasClass('selected') === false) {
      $(".contact").toggleClass('selected')
    }
    if($(".home").hasClass('selected')) {
      $(".home").toggleClass('selected')
    }
    if($(".projects").hasClass('selected')) {
      $(".projects").toggleClass('selected')
    }
    $('html, body').animate({scrollTop:$(document).height()});

    if($('.design2:visible').length == 0) {
      $(".header2").css('visibility','visible').hide().fadeIn('fast');
      $(".design2").css('visibility','visible').hide().fadeIn('fast');
      setTimeout(function(){
        $(".design2").addClass('small_logo');
        $(".header2_container").css('visibility','visible').hide().fadeIn('fast');
      },500)
    };
  });
//determines which page is currently in viewport
  $.fn.isOnScreen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
//Change header based on which page is in viewport
$(window).scroll(function() {
  if($('.cover').isOnScreen()) {
    if($('.design:visible').length === 0) {
      $('.design2').fadeOut('fast');
      $('.header2').fadeOut('fast');
      $(".header2_container").fadeOut('fast');
      $('.design2').removeClass('small_logo');
      $(".header").css('visibility','visible').hide().fadeIn('fast');
      $(".design").css('visibility','visible').hide().fadeIn('fast');
      if($(".home").hasClass('selected') === false) {
        $(".home").toggleClass('selected')
      };
      if($(".projects").hasClass('selected')) {
        $(".projects").toggleClass('selected')
      };
      if($(".contact").hasClass('selected')) {
        $(".contact").toggleClass('selected')
      };
    };
  };

  if($('.projects_page').isOnScreen() && $('.cover').isOnScreen() === false) {
    if($('.design2:visible').length === 0) {
      $(".header2").css('visibility','visible').hide().fadeIn('fast');
      if($(".projects").hasClass('selected') === false) {
        $(".projects").toggleClass('selected')
      };
      if($(".home").hasClass('selected')) {
        $(".home").toggleClass('selected')
      };
      if($(".contact").hasClass('selected')) {
        $(".contact").toggleClass('selected')
      };
      $('.design').fadeOut();
      $('.header').fadeOut();
      $(".design2").css('visibility','visible').hide().fadeIn('fast');
      setTimeout(function(){
        $(".design2").addClass('small_logo');
        $(".header2_container").css('visibility','visible').hide().fadeIn('fast');
      },500)


    }

  }

  if($('.contact_page').isOnScreen() && $('.projects_page').isOnScreen() === false) {
    if($(".contact").hasClass('selected') === false) {
      $(".contact").toggleClass('selected')
    }
    if($(".home").hasClass('selected')) {
      $(".home").toggleClass('selected')
    }
    if($(".projects").hasClass('selected')) {
      $(".projects").toggleClass('selected')
    }
  };

  if($('.projects_page').isOnScreen() && $('.contact_page').isOnScreen() === false && $('.cover').isOnScreen() === false) {
    if($(".projects").hasClass('selected') === false) {
      $(".projects").toggleClass('selected')
    }
    if($(".home").hasClass('selected')) {
      $(".home").toggleClass('selected')
    }
    if($(".contact").hasClass('selected')) {
      $(".contact").toggleClass('selected')
    }
  };
});

//Hiding Labels Initially
  $('form li').each(function(){
    $(this).addClass('js-hide-label');
  });

  //Now adding and removing classes on Events - keyup,blur,focus
  $('form li').find('input,textarea').on('keyup blur focus',function(e) {

      var $this = $(this),
          $parent = $this.parent();

      if(e.type=='keyup') {
          if($this.val()==''){
            $parent.addClass('js-hide-label');
          }
          else{
            $parent.removeClass('js-hide-label') ;
          }
      }
    else if(e.type=='blur'){
      if($this.val()==''){
        $parent.addClass('js-hide-label');
      }
      else{
        $parent.removeClass('js-hide-label , js-highlight-label').addClass('js-unhighlight-label');
      }
    }

      else if(e.type=='focus'){

        if($this.val()==''){
          $parent.addClass('js-hide-label');
        }
        else{
        $parent.addClass('js-highlight-label');
        }

      }

  });

});
