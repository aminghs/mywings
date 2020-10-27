/*============================================================
    .navbar-responsive
============================================================*/


(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".button").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('ul');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('ul').show();
                    }
                }
            });
            cssmenu.find('li ul').parent().addClass('has-sub');
            multiTg = function () {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    $(this).toggleClass('submenu-opened');
                    if ($(this).siblings('ul').hasClass('open')) {
                        $(this).siblings('ul').removeClass('open').slideToggle();
                    } else {
                        $(this).siblings('ul').addClass('open').slideToggle();
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            resizeFix = function () {
                var mediasize = 1000;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').show();
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').hide().removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $("#cssmenu").menumaker({
            format: "multitoggle"
        });
    });
})(jQuery);




// Slider Height
var slideHeight = $(window).height();
$('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height', slideHeight);

$(window).resize(function () {
    'use strict',
    $('#home-carousel .carousel-inner .item, #home-carousel .video-container').css('height', slideHeight);
});




/*============================================================
    video-popup
============================================================*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('middle-video-video', {
        events: {
            'onReady': onPlayerReady,
        }
    });
}


function onPlayerReady(event) {

    var playBtn = $('.middle-video__play');
    var closeBtn = $('.middle-video__close');
    var overlay = $('.middle-video__overlay');
    var modal = $('.middle-video__modal');

    $(playBtn).click(function (e) {
        $(overlay).css('left', 0);
        $(overlay).addClass('middle-video__overlay--active');
        // player.api("play");
        player.playVideo();

        e.preventDefault();
    });

    $.merge(closeBtn, overlay).click(function (e) {
        $(overlay).removeClass('middle-video__overlay--active');
        setTimeout(function () {
            $(overlay).css('left', '-100%');
        }, 300);
        player.stopVideo();

        e.preventDefault();

    });

    // Used for the full width videos
    $(modal).fitVids();
}





/*============================================================
    .flexslider
============================================================*/

 $(window).load(function() {
  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 80,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});






/*============================================================
    owl-item-Slider
============================================================*/

$(document).ready(function() {

      var owl = $("#owl-demo2");

      owl.owlCarousel({ 
        itemsCustom : [
          [0, 1],
          [450, 2],
          [600, 2],
          [700, 2],
          [1000, 3],
          [1200, 3],
          [1400, 3],
          [1600, 4]
        ],
        items : 3,
        lazyLoad : true,
        navigation : true,
         pagination : false,
//          scrollPerPage: true
      });
$( ".owl-prev").html('<i class="fa fa-chevron-left fa-1x"></i>');
 $( ".owl-next").html('<i class="fa fa-chevron-right fa-1x"></i>');
    });



