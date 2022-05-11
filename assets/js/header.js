$(document).ready(function () {
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});


    "use strict";

    $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul),
    //  if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(
        function (e) {
            if ($(window).width() > 943) {
                $(this).children("ul").fadeIn(150);
                e.preventDefault();
            }
        }, function (e) {
            if ($(window).width() > 943) {
                $(this).children("ul").fadeOut(150);
                e.preventDefault();
            }
        }
    );
    //If width is more than 943px dropdowns are displayed on hover

    $(".menu > ul > li").click(function() {
        if ($(window).width() < 943) {
          $(this).children("ul").fadeToggle(150);
        }
    });
    //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)
    
// toggle search icon
    var $searchBar = $(".search-event input.header-search");
    var $searchBtn = $(".search-event label.fa");
    $searchBtn.on('click',()=>{
        $searchBar.val("");
    });
    $searchBar.click(()=>{
        $searchBtn.toggleClass("active");
        $searchBar.focus();
    });
});

// slider section
var heroSlider = new Swiper('.hero-slider .swiper-container', {
    slidesPerView: 3,
    speed: 500,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// company logo slider 
var company_logo_slider = new Swiper('.company-slider .swiper-container', {
    slidesPerView: 5,
    autoplay: true,
    speed: 1500,
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
    }
});

    // product slider 
    var product_slider_3g_2r = new Swiper('.product-slider-3grids-2rows .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 25,
        speed: 1500,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        navigation: {
            nextEl: '.center-slider-nav .button-next',
            prevEl: '.center-slider-nav .button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    var product_slider_3g_1r = new Swiper('.product-slider-3grids-1row .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        speed: 500,
        loop: true,
        autoplay: true,
        navigation: {
            nextEl: '.feature-btns-slider .button-next',
            prevEl: '.feature-btns-slider .button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        }
    });
    var swiper = new Swiper(".review-slider", {
        loop:true,
        grabCursor:true,
        spaceBetween: 20,
        breakpoints: {
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
        },
    });
// *********** price range *********
$(".js-range-slider").ionRangeSlider({
    skin: "round",
    grid: true,
    hide_min_max: true,
   /*  onChange: function (data) {
            // Called every time handle position is changed
    
            console.log(data.from);
        }, */
});

/* pagination */

$(document).on('click', '.prev', function () {
    //1- get first element to check if it has class 'active', 
    // to prevent class 'active' from moving to prev button on click,
    // if explanation isn't clear try removing if(){} to see it.
          const first = $(this).siblings().first();
          if (!first.hasClass('active')) {
    //2- search <li>'s to get the one that has 'active' class.
            const active = $(this).siblings('.active');
    //3- get the previous item of the <li class"active"> to move to.
            const prevItem = active.prev();
    //4- get href of the item to redirect to.
            const link = prevItem.children('a').prop('href');
    //5- remove 'active' class from the current <li> and give it to prev <li>.
            active.removeClass('active');
            prevItem.addClass('active');
    //6- redirect to href of the new <li>.
            window.location.href = link;
            }
});
$(document).on('click', '.next', function () {
  const last = $(this).siblings().last();
  if (!last.hasClass('active')) {
    const active = $(this).siblings('.active');
    const nextItem = active.next();
    const link = nextItem.children('a').prop('href');
    active.removeClass('active');
    nextItem.addClass('active');
    window.location.href = link;
  }
});
