$(document).ready(function(){
    $('.intMainSlider').slick({
        autoplaySpeed: 2000,
        arrows: true,
        dots:true,
        infinite: true,
        autoplay: false,  
        slidesToShow: 3,
        dotsClass:'cePagination',
        appendDots: $('.pagiContainer'),
        prevArrow:'<div class="slick-prev cePrevBtn ceArrw"><i class="fas fa-angle-double-left"></i></div>',
        nextArrow:'<div class="slick-next ceNextBtn ceArrw"><i class="fas fa-angle-double-right"></i></div>',
        responsive: [{
            breakpoint: 1024,
            settings: {
            slidesToShow: 1
        }},{
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            arrows:false
            }
        }]
    });
});