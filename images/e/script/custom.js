$(function(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 2,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    loop:true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 2,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
    })

    $(function(){
    var navi = $('nav ul li')
    var cont = $('.inner > section')

    navi.click(function () {

      var target = $(this).index();
      // alert(index)
      var page = cont.eq(target)
      var PageTop = page.offset().top
      // alert(PageTop)

      $('html,body').animate({
        scrollTop: PageTop
      }, 500)
    })

    $(window).scroll(function () {
      var Cscroll = $(this).scrollTop()

      cont.each(function(){
        var target = $(this) //. cont>div 스크롤될때
        var index = target.index() //. cont>div의 인수를 받아서 index에 들고있음.

        if (Cscroll >= cont.eq(0).offset().top) {
        navi.removeClass('active')
        navi.eq(0).addClass('active')
        }
      });


      if (Cscroll >= cont.eq(0).offset().top) {
        cont.children().removeClass('show')
        cont.eq(0).children().addClass('show')
      }
      if (Cscroll >= cont.eq(1).offset().top - $(window).height(10000) / 6) {
        cont.children().removeClass('show')
        cont.eq(1).children().addClass('show')
      }
      if (Cscroll >= cont.eq(2).offset().top - $(window).height() / 4) {
        cont.children().removeClass('show')
        cont.eq(2).children().addClass('show')
      }
      if (Cscroll >= cont.eq(3).offset().top - $(window).height() / 4) {
        cont.children().removeClass('show')
        cont.eq(3).children().addClass('show')
      }
      if (Cscroll >= cont.eq(4).offset().top - $(window).height() / 4) {
        cont.children().removeClass('show')
        cont.eq(4).children().addClass('show')
      }
      if (Cscroll >= cont.eq(5).offset().top - $(window).height() / 4) {
        cont.children().removeClass('show')
        cont.eq(5).children().addClass('show')
      }
      if (Cscroll >= cont.eq(6).offset().top) {
        cont.children().removeClass('show')
        cont.eq(6).children().addClass('show')
      }
    })
})

