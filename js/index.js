// 검색창 Toggle
$('#search-btn').click(function () {
    $('#search-form').stop().slideDown(300);
});
$('#search-close').click(function () {
    $('#search-form').stop().slideUp(300);
});

// 프로모션 Slick
$('.promotion-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// 제품 안내 Slick
$('.products-list').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-angle-right'></i></button>",
    responsive: [
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// 브랜드 사이트 Toggle
$('.selector').click(function () {
    $('.links').stop().slideToggle(300);
    if ($('.selector-icon').hasClass('fa-caret-up')) {
        $('.selector-icon').removeClass('fa-caret-up').addClass('fa-caret-down');
    } else {
        $('.selector-icon').removeClass('fa-caret-down').addClass('fa-caret-up');
    }
});

// 모바일 nav
let mobileNav = document.getElementById('mobile-nav');
let body = document.querySelector('body');
document.getElementById('hamburger-btn').addEventListener('click', function () {
    mobileNav.style.display = 'block';
    body.style.overflow = 'hidden';
});
document.getElementById('hamburger-close').addEventListener('click', function () {
    mobileNav.style.display = 'none';
    body.style.overflow = 'visible';
});

// 모바일 Nav 제품 안내 Toggle
$('.mobile-sub-btn').click(function (e) {
    e.preventDefault();
    $('.mobile-sub-menu').stop().slideToggle(300);
    if ($('.mobile-sub-icon').hasClass('fa-angle-down')) {
        $('.mobile-sub-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
    } else {
        $('.mobile-sub-icon').removeClass('fa-angle-up').addClass('fa-angle-down');
    }
});

// Aside 탑버튼
$('#top-btn').click(function () {
    $('html,body').stop().animate({ scrollTop: 0 }, 300);
    return false;
});