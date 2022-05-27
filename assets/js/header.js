$(document).ready(function () {
document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});
"use strict";

var $window = $(window), $body = $('body');


// ***************** sticky menu **********
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
        $(".sticky-header").removeClass("sticky");
    }
    else {
        $(".sticky-header").addClass("sticky");
    }
});

// var header = document.getElementsByClassName("header-action-wishlist");
// var tooltip = new bootstrap.Tooltip(header, options);

// humberger menu dropdown
$('.dropdown').on('show.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});
$('.dropdown').on('hide.bs.dropdown', function () {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

// offcanvas menu toggle drop down
function mobileOffCanvasMenu() {
    var $offCanvasNav = $('.offcanvas-menu'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.mobile-sub-menu');

    $offCanvasNavSubMenu.parent().prepend('<div class="offcanvas-menu-expand"></div>');

    $offCanvasNav.on('click', 'li a, .offcanvas-menu-expand', function (e) {
        var $this = $(this);
        if ($this.attr('href') === '#' || $this.hasClass('offcanvas-menu-expand')) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length) {
                $this.parent('li').removeClass('active');
                $this.siblings('ul').slideUp();
                $this.parent('li').find('li').removeClass('active');
                $this.parent('li').find('ul:visible').slideUp();
            }
            else {
                $this.parent('li').addClass('active');
                $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                $this.closest('li').siblings('li').find('ul:visible').slideUp();
                $this.siblings('ul').slideDown();
            }
        }
    });
}
mobileOffCanvasMenu();



    // "use strict";

    // $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    // //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    // $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    // //Checks if drodown menu's li elements have anothere level (ul),
    // //  if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    // $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

    // //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    // //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    // //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    // //Done this way so it can be used with wordpress without any trouble

    // $(".menu > ul > li").hover(
    //     function (e) {
    //         if ($(window).width() > 943) {
    //             $(this).children("ul").fadeIn(150);
    //             e.preventDefault();
    //         }
    //     }, function (e) {
    //         if ($(window).width() > 943) {
    //             $(this).children("ul").fadeOut(150);
    //             e.preventDefault();
    //         }
    //     }
    // );
    // //If width is more than 943px dropdowns are displayed on hover

    // $(".menu > ul > li").click(function() {
    //     if ($(window).width() < 943) {
    //       $(this).children("ul").fadeToggle(150);
    //     }
    // });
    // //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

    // $(".menu-mobile").click(function (e) {
    //     $(".menu > ul").toggleClass('show-on-mobile');
    //     e.preventDefault();
    // });
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
            576: {
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
            576: {
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
    var swiper = new Swiper(".review-slider .swiper-container", {
        loop:true,
        autoplay: true,
        grabCursor:true,
        slidesPerView: 3,
        speed: 500,
        spaceBetween: 20,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
        },
    });

    // scroll to top 
    function scrollToTop() {
        var $scrollUp = $("#scroll-to-top"),
            $lastScrollTop = 0,
            $window = $(window);
        $window.on('scroll', function () {
            var st = $(this).scrollTop();
            if (st > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 120) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = st;
        });
        $scrollUp.on('click', function (evt) {
            $('html, body').animate({
                scrollTop: 0
            }, 50);
            evt.preventDefault();
        });
    }
    scrollToTop();
    // ***********nice select for dropdown 
$('select').niceSelect();

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

// $(document).on('click', '.prev', function () {
//     //1- get first element to check if it has class 'active', 
//     // to prevent class 'active' from moving to prev button on click,
//     // if explanation isn't clear try removing if(){} to see it.
//           const first = $(this).siblings().first();
//           if (!first.hasClass('active')) {
//     //2- search <li>'s to get the one that has 'active' class.
//             const active = $(this).siblings('.active');
//     //3- get the previous item of the <li class"active"> to move to.
//             const prevItem = active.prev();
//     //4- get href of the item to redirect to.
//             const link = prevItem.children('a').prop('href');
//     //5- remove 'active' class from the current <li> and give it to prev <li>.
//             active.removeClass('active');
//             prevItem.addClass('active');
//     //6- redirect to href of the new <li>.
//             window.location.href = link;
//             }
// });
// $(document).on('click', '.next', function () {
//   const last = $(this).siblings().last();
//   if (!last.hasClass('active')) {
//     const active = $(this).siblings('.active');
//     const nextItem = active.next();
//     const link = nextItem.children('a').prop('href');
//     active.removeClass('active');
//     nextItem.addClass('active');
//     window.location.href = link;
//   }
// });
$(document).ready(function () {
    function getPageList(totalPages, page, maxLength) {
        function range(start, end) {
          return Array.from(Array(end - start + 1), (_, i) => i + start);
        }
  
        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  
        if (totalPages <= maxLength) {
          return range(1, totalPages);
        }
  
        if (page <= maxLength - sideWidth - 1 - rightWidth) {
          return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
  
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
          return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }
  
        return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
      }
    // jquery start
    // newFunction(getPageList);
    $(function () {
        var numberofItems = $(".product-shop-list-items-con .product-shop-list-items-each").length;
        var limitPerPage = 15;
        var totalPages = Math.ceil(numberofItems / limitPerPage);
        var paginationSize = 7; //How many page element visible in the pagination
        var currentPage;
    
        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false
    
            currentPage = whichPage;
    
            $(".product-shop-list-items-con .product-shop-list-items-each").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
            $(".page-pagination li").slice(1, -1).remove();
            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots").toggleClass("active", item === currentPage).append($("<a>")
                    .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".icon-direction--next");
            });
            $(".icon-direction--prev").toggleClass("disable", currentPage === 1);
            $(".icon-direction--next").toggleClass("disable", currentPage === totalPages);
            return true;
        }
        $(".page-pagination").append(
            $("<li>").addClass("page-item").addClass("icon-direction").addClass("icon-direction--prev").append($("<a>").addClass("prev")
                .attr({ href: "javascript:void(0)" }).append($("<span>").addClass("material-icons-outlined").text("arrow_left"))),
            $("<li>").addClass("page-item").addClass("icon-direction").addClass("icon-direction--next").append($("<a>").addClass("next")
                .attr({ href: "javascript:void(0)" }).append($("<span>").addClass("material-icons-outlined").text("arrow_right")))
        );
        $(".product-shop-list-items-con").show();
        console.log(showPage(2));

        $(document).on("click", ".page-pagination li.current-page:not(.active)", function () {
            return showPage(+$(this).text());
          });
    
          $(".icon-direction--next").on("click", function () {
            return showPage(currentPage + 1);
          });
    
          $(".icon-direction--prev").on("click", function () {
            return showPage(currentPage - 1);
          });
    });
});
