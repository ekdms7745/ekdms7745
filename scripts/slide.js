
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

/*
  function visualslider(){
  $('.center').slick({
    //autoplay:ture,
    //autoplaySpeed: 1000,
    prevArrow : $('.slick-prev'),
    nextArrow: $('.slick-next'),
    dots:true
  });
}
  */