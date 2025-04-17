$(document).ready(function () {
  $(".nurture").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".logo").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".testimonial").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });

  $(".woocom").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });


  var tabButtons = document.querySelectorAll(".mytablinks");

  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
      var tabName = this.dataset.tab;
      var tabContent = document.getElementById(tabName);
      var allTabContent = document.querySelectorAll(".mytabcontent");
      var allTabButtons = document.querySelectorAll(".my_tablinks");
 
      for (var j = 0; j < allTabContent.length; j++) {
        allTabContent[j].style.display = "none";
      }
 
      for (var k = 0; k < allTabButtons.length; k++) {
        allTabButtons[k].classList.remove("active");
      }
 
      tabContent.style.display = "block";
      tabContent.classList.add("active");
  
    });
  }
 
   document.querySelector(".mytablinks").click();


  var tabButtons = document.querySelectorAll(".tablinks");

  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].addEventListener("click", function () {
      var tabName = this.dataset.tab;
      var tabContent = document.getElementById(tabName);
      var allTabContent = document.querySelectorAll(".tabcontent");
      var allTabButtons = document.querySelectorAll(".tablinks");

      for (var j = 0; j < allTabContent.length; j++) {
        allTabContent[j].style.display = "none";
      }

      for (var k = 0; k < allTabButtons.length; k++) {
        allTabButtons[k].classList.remove("active");
      }

      tabContent.style.display = "block";
      this.classList.add("active");
    });
  }

  document.querySelector(".tablinks").click();
});

// (function ($) {
//     "use strict";

//     // Spinner
//     var spinner = function () {
//         setTimeout(function () {
//             if ($('#spinner').length > 0) {
//                 $('#spinner').removeClass('show');
//             }
//         }, 1);
//     };
//     spinner();

//     // Initiate the wowjs
//     new WOW().init();

//     // Sticky Navbar
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 45) {
//             $('.navbar').addClass('sticky-top shadow-sm');
//         } else {
//             $('.navbar').removeClass('sticky-top shadow-sm');
//         }
//     });

//     // Dropdown on mouse hover
//     const $dropdown = $(".dropdown");
//     const $dropdownToggle = $(".dropdown-toggle");
//     const $dropdownMenu = $(".dropdown-menu");
//     const showClass = "show";

//     $(window).on("load resize", function() {
//         if (this.matchMedia("(min-width: 992px)").matches) {
//             $dropdown.hover(
//             function() {
//                 const $this = $(this);
//                 $this.addClass(showClass);
//                 $this.find($dropdownToggle).attr("aria-expanded", "true");
//                 $this.find($dropdownMenu).addClass(showClass);
//             },
//             function() {
//                 const $this = $(this);
//                 $this.removeClass(showClass);
//                 $this.find($dropdownToggle).attr("aria-expanded", "false");
//                 $this.find($dropdownMenu).removeClass(showClass);
//             }
//             );
//         } else {
//             $dropdown.off("mouseenter mouseleave");
//         }
//     });

//     // Back to top button
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 100) {
//             $('.back-to-top').fadeIn('slow');
//         } else {
//             $('.back-to-top').fadeOut('slow');
//         }
//     });
//     $('.back-to-top').click(function () {
//         $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
//         return false;
//     });

//    //Counter Js Started//
// $(document).ready(function() {

// $('.counter').each(function () {
// $(this).prop('Counter',0).animate({
// Counter: $(this).text()
// }, {
// duration: 4000,
// easing: 'swing',
// step: function (now) {
// $(this).text(Math.ceil(now));
// }
// });
// });

// });
// // Counter Js Ends //

// })(jQuery);

/*--feqsecton--*/

let feqbody = document.querySelectorAll(".accordion-item-title");

feqbody.forEach((myvalue) => {
  myvalue.addEventListener("click", () => {
    for (mylist of feqbody) {
      mylist.classList.remove("myStyle");
    }
    myvalue.classList.toggle("myStyle");
  });
});


/*---filtertooggle----*/

 let filterbtn = document.querySelector(".filtertext");

filterbtn.addEventListener("click",()=>{
  var opacity = 0; 
  let filterbox= document.querySelector(".filterbox");
  setTimeout(function(){

    let filterbox= document.querySelector(".filterbox");

    filterbox.classList.toggle("mytoggle");
    filterbox.style.opacity = 1;

  },400)
  
//   var intervalID = setInterval(function() { 
          
//     if (opacity < 1) { 
//         opacity = opacity + 0.1 
//         filterbox.style.opacity = opacity; 
//         // filterbox.classList.toggle("mytoggle");
//     } else { 
//         clearInterval(intervalID); 
//         opacity = opacity - 0.1 ;
//     } 
// }, 200); 



 })



 

