jQuery(document).ready(function($) {  
  console.log('query working');
  // site preloader -- also uncomment the div in the header and the css style for #preloader
  $(window).on('load', function() { // makes sure the whole site is loaded 
    console.log('function working');
    $('#preloader').delay(1000).fadeOut('slow', function(){// will first fade out the loading animation 
    console.log('next function working');
    // $('#preloader').delay(2000)
      $(this).remove();
    }); // will fade out the white DIV that covers the website. 
    // $('body').delay(1000).css({
    //   'overflow-x':'visible'
  });

  (function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $(".navbar").removeClass("d-none");
    })
var initialText = $(".splitText").text();
var type = splitLetters(initialText);

$(document).ready(function(){
$("#letters").on('click',function(){
    
  
    $(".splitText").empty();
    $(".splitText").html(type);
    explodeLetters();
  });
  
  $("#reverse").on('click',function(){
    threeDTimeline.reverse();
  });
  
});

// function explodeLetters(){
  
//   threeDTimeline = new TimelineLite({align:'start'});
  
//   var children = $('.letter').children().length;
//   for(var i=0;i<children;i++){
         
//          for(var i=0;i<children;i++){
          
//           var element = $(".letter").children().eq(i);
//           var pos = element.offset();
//           element.css({'left':pos.left,'top':pos.top});
          
//           threeDTimeline.insert(TweenMax.to(element,1.5, {
//           'position':'absolute', 
//           left:Math.random() * 650 - 100, 
//           top:Math.random() * 350 - 100,
//           ease:Quad.easeIn,
//           fontSize: '+=35',
//           autoAlpha:0}));  
//     }
//     threeDTimeline.play();
//   } 
// }
// function splitLetters(userInput){
//   var a;
//   var arr = userInput.split("");
  
//   for(var i=0;i<arr.length;i++) { 
    
//     if(arr[i] == " "){
//         arr[i] = '<div class="letter-measure blank">' + arr[i] + '</div>';
//     }
//     else{
      
//           if(!arr[i].match(/\s\n\t\r/g) && arr[i]!="") arr[i] = '<div class="letter-measure">' + arr[i] + '</div>';
     
//       }
//    }
   
//    //$(this).html(arr.join(" "));
   
//    return arr.join(" ");
  
// }

  })(jQuery); // End of use strict
});