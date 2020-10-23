//Responsive Navigation
$(document).ready(function() {
  $('body').addClass('js');
    var $hamburger = $('.site-hamburger');
    var $nav = $('.site-nav');

  $hamburger.click(function(e) {
    e.preventDefault();
    $nav.toggleClass('show-menu');  
    $hamburger.toggleClass('open');
    $('html').toggleClass('no-scroll');
  });
});

// Gallery Active Image
var activeImage = document.querySelector('.gm-active-img .gm-img img');
var imgList = document.querySelectorAll('.gm-img-list .gm-img img');
var imgArray = Array.from(imgList);

imgArray.forEach(function(element){
  element.addEventListener('click',function(e){
    var path = e.currentTarget.src;
    activeImage.src = path;
  });
});

// Gallery Lightbox
var imageModal = document.querySelector('.gm-lightbox');
var expandButton = document.querySelector('.gm-img-hover img');
var cancelButton = document.querySelector('.gm-lightbox .gm-cancel img');
var displayImage = document.querySelector('.gm-lightbox .active-img');
expandButton.addEventListener('click', openImageModal);
cancelButton.addEventListener('click', closeImageModal);
document.querySelector('body').addEventListener('keyup', closeOnEsc);

// Function for open modal
function openImageModal(e){
  e.preventDefault();
  var currentImage = this.parentElement.parentElement.previousElementSibling.children[0];
  displayImage.children[0].src = currentImage.src ;
  imageModal.classList.add("show-lightbox");
  document.querySelector('html').classList.add('no-scroll');
};

// Function to close modal
function closeImageModal(e){
  e.preventDefault();
  imageModal.classList.remove("show-lightbox");
  document.querySelector('html').classList.remove('no-scroll');
};

// Function to close modal on esc button
function closeOnEsc(e){
  e.preventDefault();
  if(e.which === 27){
    imageModal.classList.remove("show-lightbox");
    document.querySelector('html').classList.remove('no-scroll');
  }
};

// Hero Slider
$(document).on('ready', function() {
  $('.sbm-slider').slick({
    dots: true,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    // autoplay: true,
    accessibility: true,
    vertical: true,
    verticalSwiping: true
  });
});

//Dentist Slider
$(document).ready(function (){
  $('.dm-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }
    ]
  })
});

//Services Slider
$(document).ready(function (){
  $('.sm-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }
    ]
  });
});


//Blogs Slider
$(document).ready(function (){
  $('.bm-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }
    ]
  })
});

//Customers Slider
$(document).ready(function (){
  $('.cm-slider').slick({
    arrows: true,
    dots: false,
  });
});

//Case study Slider
$(document).ready(function (){
  $('.csm-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
          slidesToShow: 1,
          slidesToScroll: 1
       }
    }
    ]
  });
});

// ===================================================================================================================


// ipad hover issue
$(document).ready(function() {
  if (!("ontouchstart" in document.documentElement)) {
    document.documentElement.className += " no-touch";
  }

  $(window).on('load orientationchange', function() {
    var wWidth = $(window).width();
    if (wWidth > 960) {
      /*make filters hover behavior switch to tap/clcik on touch screens*/
      if (!$('html').hasClass('no-touch')) { /*Execute code only on a touch screen device*/
        console.log('toucheee');
       
          /*hide  drop-down if it was open*/
          $('.sn-level-1 .menu-item-has-children').bind('touchstart', function(e) {
              $(".sn-level-1 .menu-item-has-children .sub-menu").hide();
              $(this).children(".sub-menu").toggle();
              e.stopPropagation(); //Make all touch events stop at the  container element
          });

           
          $(document).bind('touchstart', function(e) {
            $(".sn-level-1 .menu-item-has-children .sub-menu").fadeOut(300); /*Close filters drop-downs if user taps ANYWHERE in the page*/
          }); 
           
          $('.sn-level-1 .menu-item-has-children .sub-menu').bind('touchstart', function(event){
            event.stopPropagation(); /*Make all touch events stop at the #filter1 ul.children container element*/
          });
       
      }
    }
  });
});


//Smooth Scroll - Detects a #hash on-page link and will smooth scroll to that position. Will not affect regular links.
$(function() {
  $('.smooth-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//Slide in CTA
$(function() {
    var findEl = $('#slidebox').length;
    if (findEl <= 0) {
        // do nothing
    } else {
        var slidebox = $('#slidebox');
        if (slidebox) {
            $(window).scroll(function() {
                var distanceTop = $('#last').offset().top - $(window).height();
                if ($(window).scrollTop() > distanceTop)
                    slidebox.animate({
                        'right': '0px'
                    }, 300);
                else
                    slidebox.stop(true).animate({
                        'right': '-430px'
                    }, 100);
            });
            $('#slidebox .close').on('click', function() {
                $(this).parent().remove();
            });
        }
    }
});


// include span tags around all navigation elements
$("#hs_menu_wrapper_primary_nav ul li a").each(function( index ) {
  var navText = $( this ).html(); $( this ).html("<span>" + navText + "</span>");
});


//Styles
// $(document).ready(function() {
//  $('.site-content *').removeAttr("style");
// });

$('.main-content').addClass('more height');

var wWidth = $(window).width();
if(wWidth <= 639 ){
  $( ".main-content" ).after( "<div class='link'><a id='readmore' href='javascript:changeheight()'>Show More</a></div>" );
}

$(window).resize(function() {
  var wWidth = $(window).width();
  if (wWidth < 640) {
    var addedDiv = $(".link");
    var length1= addedDiv.length;
    if (addedDiv.length == 0) {
      $(".link").remove();
      $( ".main-content" ).after( "<div class='link'><a id='readmore' href='javascript:changeheight()'>Show More</a></div>" );
    }
  }
  else if (wWidth > 639){
    $(".link").remove();
  }
   $(function() {
       var curHeight = $('.more').height();
       if (curHeight == 250)
           $('#readmore').show();
       else
           $('#readmore').hide();
   });
});
$(function() {
   var curHeight = $('.more').height();
   if (curHeight == 250)
       $('#readmore').show();
   else
       $('#readmore').hide();
});
$(window).on('resize', function() {
   $(function() {
       var curHeight = $('.more').height();
       if (curHeight == 250)
           $('#readmore').show();
       else
           $('#readmore').hide();
   });
});

function changeheight() {
   var readmore = $('#readmore');
   if (readmore.text() == 'Show More') {
       readmore.text("Show Less");
   } else {
       readmore.text("Show More");
   }

   $('.height').toggleClass("heightAuto");
};



// Accessible Website
/*============== Focus on tab =============*/
(function($) {
  $(document).on('keyup keydown', function(e) {
    var code = e.keyCode || e.which;
    if (code == '9') {

      //Click to Expand on Focus
      $('.aof-title-wrap > a').focus(function(){
          var target = $(this).parent('.aof-title-wrap').parent().children('.aof-content');
          target.slideDown(500);
          $(this).parent('.aof-title-wrap').addClass('active');
         // $(this).parent('.aof-title-wrap').parent().addClass('active');
      }); 

      $('.aof-content li:last-of-type > a').blur(function(){
        var target = $(this).closest('.aof-item');
        target.children('.aof-title-wrap').removeClass('active');
        target.children('.aof-content').slideUp();
      });
         
        $('.site-nav .menu-item-has-children > a').focus(function(){
            $(this).parent('.menu-item-has-children').children('.sub-menu').show();
        });

       $('.site-nav .menu-item-has-children > .sub-menu li:last-of-type > a').blur(function(){

          if (!$(this).parent().children().hasClass('sub-menu') && $(this).parent().is(':last-child')) {
            $(this).parent().parent('.sub-menu').hide();
            if ($(this).parent('li').parent('.sub-menu').parent('li').next().length <= 0) {
                $(this).parent('li').parent('.sub-menu').parent('li').parent('.sub-menu').hide();
            }
            
            if ($(this).parent().next().length <= 0 && $(this).parent('li').parent('.sub-menu').parent('li').next().length <= 0 && $(this).parent('li').parent('.sub-menu').hasClass('sn-level-3')) {
              $('.sub-menu').hide();
            }
          }
          
       });

       if (code == '9' && e.shiftKey) {
         if ($(document.activeElement).parent().hasClass('menu-item-has-children')) {
           $(document.activeElement).parent().children('.sub-menu').hide();
         }
         $('.site-nav .menu-item-has-children > .sub-menu li:last-of-type a').blur(function(){
           $(this).closest('.sub-menu').show();
         });
   
       }

       $(document).click(function(e) {
          if (!$(e.target).is('.site-nav .menu-item-has-children a')) {
            $('.site-nav .sub-menu').hide();
          }
          if (!$(e.target).is('a') || !$(e.target).is('button') || !$(e.target).is('input')) {

            $('a, button, input').removeClass('tse-remove-border');
          }
       });
    }
  });

  
  $(document).ready(function () {
    $("#skipToContent").on('click', function(e){
      $('body').toggleClass('changeCursor');
      e.stopPropagation();
      e.preventDefault();
        $('.site-header').after('<a href="javascript:void(0)" tabindex="-1" id="siteContentFocusable"></a>');
        $(this).blur();
        if ( window.location.pathname == '/' ){
          $('html, body').animate({
              scrollTop: $("#siteContentFocusable").offset().top
          }, 1000);
        } else {
            $('html, body').animate({
              scrollTop: 0
          }, 1000);
        }
        $('#siteContentFocusable').trigger('focus');
    });

    $('body').on('click contextmenu drag auxclick', 'a, button, input, select', function() {
      $('a, button, input, select, [tabindex="0"]').removeClass('tse-remove-border');
      $(this).addClass('tse-remove-border');
    }).on('blur', function(e) {
      $(this).removeClass('tse-remove-border');
      if (e.which == 2) {
        $(this).addClass('tse-remove-border');
      } 
    });

    $('[tabindex="0"]').on('click contextmenu drag auxclick', function() {
      $('a, button, input, select, [tabindex="0"]').removeClass('tse-remove-border');
      $(this).addClass('tse-remove-border');
    }).on('blur', function(e) {
      $(this).removeClass('tse-remove-border');
      if (e.which == 2) {
        $(this).addClass('tse-remove-border');
      } 
    });

    $('select, button, input').on('mousemove', function(event) {
      //$('a, button, input, select').removeClass('tse-remove-border');
      $(this).addClass('tse-remove-border');
    });

    $("a[href*='tel'], [href*='mailto']").on('click contextmenu drag auxclick', function() {
      $('a, button, input').removeClass('tse-remove-border');
      $(this).addClass('tse-remove-border');
    }).on('blur', function() {
      $(this).addClass('tse-remove-border');
    });

    $("a:not([href*='tel']), a:not([href*='mailto'])").on('blur', function() {
      $("[href*='mailto'], [href*='tel']").removeClass('tse-remove-border');
    });

    // Dynamically Generated buttons
    $('.flexslider .flex-control-nav a').attr('href', 'javascript:void(0)');

    $('.flexslider').on('click', '.flex-control-nav a, .flex-direction-nav a',function() {
      $('a, button, input, select').removeClass('tse-remove-border');
      $(this).addClass('tse-remove-border');
    }).on('blur', function() {
      $(this).removeClass('tse-remove-border');
    }).on('mousemove', '.flex-control-nav a, .flex-direction-nav a', function(event) {
      $(this).addClass('tse-remove-border');
    });

    $('.flexslider .flex-control-nav li').each(function(index, value) {
      $(this).children('a').attr('aria-lable', 'Slide Dot ' + (index+1));
    });

    // Dynamically Generated buttons
    // $('.owl-carousel').on('click', '.owl-prev, .owl-next, .owl-dot',function() {
    //   $('a, button, input').removeClass('tse-remove-border');
    //   $(this).addClass('tse-remove-border');
    // }).on('blur', function() {
    //   $(this).removeClass('tse-remove-border');
    // }); 

  });

    // Flex slider accessibility
    setTimeout(function() {
        // $('.flexslider .flex-viewport li').attr('tabindex', 0);
        $('.flexslider .clone a').attr('tabindex', '-1');
    }, 500);
    $(document.documentElement).on('keyup', function(event) {
        if ($(".flexslider a, .flexslider li, .flex-direction-nav a").is(":focus")) {

            var flexslider = $(document.activeElement).closest(".flexslider");
            // flexslider.flexslider("play") //Play slideshow
            // flexslider.flexslider("pause") //Pause slideshow
            flexslider.flexslider("stop") //Stop slideshow
            
            
            // handle cursor keys
            if (event.keyCode == 37) {
                // go left
                flexslider.flexslider("prev") //Go to previous slide
                // flexslider.find('.flex-prev').trigger('click');

            } else if (event.keyCode == 39) {
                // go right
                flexslider.flexslider("next") //Go to next slide
                // flexslider.find('.flex-next').trigger('click');
            }
        }
    });

    // Owl carousel ADA
    // setTimeout(function() {
    //   $('.owl-carousel .owl-item.cloned a').attr('tabindex', '-1');
    // }, 1000);
    // $(document.documentElement).on('keyup', function (event) {
    //   if ($(".owl-carousel a, .owl-nav button, .owl-dots button").is(":focus")) {

    //     var owlCarousel = $(document.activeElement).closest(".owl-carousel");
          // owlCarousel.trigger('stop.owl.autoplay');
    //     // handle cursor keys
    //     if (event.keyCode == 37) {
    //        // go left
    //       owlCarousel.trigger('prev.owl.carousel');

    //     } else if (event.keyCode == 39) {
    //        // go right
    //        owlCarousel.trigger('next.owl.carousel');
    //     }
    //   }
    // });

    $(window).on('blur', function() {
        $(document.activeElement).addClass('tse-remove-border');
    });
}(jQuery));