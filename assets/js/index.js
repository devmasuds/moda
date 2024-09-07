  
  const toTop=document.querySelector(".top-bottom");
  window.addEventListener("scroll",()=>{
      if(window.pageYOffset >200){
          toTop.classList.add("active");
      }else{
          toTop.classList.remove("active");
      }
  });
  $(window).scroll(function(){
    var sticky = $('.header-section'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 300) sticky.addClass('menu-fixed');
    else sticky.removeClass('menu-fixed');
  });

  $(".menu-opner ,.header-close").click(function(){
    $(".header-text").toggleClass("active")
  });

  var swiper = new Swiper(".mybanner", {
    loop: true,
    pagination: {
      el: ".pagina-tion",
      clickable: true,
    },
  });

  var swiper = new Swiper(".myabout", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });
  var swiper = new Swiper(".mybestseller", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".clients-prev",
        prevEl: ".clients-next",
      },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // $('.coundown-best').countdown({
  //   date: '12/24/2024 23:59:59'
  //   }, function () {
  //     alert('Merry Christmas!');
  //   });
  var swiper = new Swiper(".myloved", {
    slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
    navigation: {
      nextEl: ".client-prev",
      prevEl: ".client-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".myfresh", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".clientsf-prev",
        prevEl: ".clientsf-next",
      },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  var swiper = new Swiper(".myCgkmst", {
    slidesPerView: 1,
    spaceBetween: 10,
    rewind: true,
    loop: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

  $(".opne-menu ,.header-close").click(function(){
    $(".menu-list ,.head-scr").toggleClass("active")
  });

  $(".opne-menu2 ,.header-close2").click(function(){
    $(".head-scr").toggleClass("active")
  });
