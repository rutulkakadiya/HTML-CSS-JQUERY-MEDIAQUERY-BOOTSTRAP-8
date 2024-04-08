$(document).ready(function(){
    $("#icon1").click(function(){
        $(".block").toggle("on")
    })

    $("#icon2").click(function(){
        $(".block").toggle("on")
    })
})

$(document).ready(function(){
    $(".accordian").click(function() {
      $(this).nextAll(".content:first").slideToggle("fast");
      $(this).find(".accordian-arrow").toggleClass("less");
    });
  });

  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
})

jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.mySwiper1', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {  
      '480': {
        slidesPerView: 2,
        spaceBetween: 40,},
      '768': {
        slidesPerView: 2,
        spaceBetween: 50, },
      '992': {
            slidesPerView: 3,
            spaceBetween: 50, },
      '1200': {
                slidesPerView: 3.5,
                spaceBetween: 50, },
    },
      // Optional parameters   
       freeMode: true,
      loop: false,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
  
  });





  
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".next1",
        prevEl: ".prev1",
      },
})

jQuery(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.mySwiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {  
      '480': {
        slidesPerView: 1,
        spaceBetween: 40,},
      '768': {
        slidesPerView: 1,
        spaceBetween: 50, },
      '992': {
            slidesPerView: 2,
            spaceBetween: 50, },
      '1200': {
                slidesPerView: 2,
                spaceBetween: 50, },
    },
      // Optional parameters   
       freeMode: true,
      loop: false,
      scrollbar: {
          el: '.swiper-scrollbar',
          hide: true,},
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', },
  
  })
})

var a = 0;
$(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-number");
            $({
                countNum: $this.text()
            }).animate(
                {
                    countNum: countTo
                },

                {
                    duration: 850,
                    easing: "swing",
                    step: function () {
                        //$this.text(Math.ceil(this.countNum));
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                    },
                    complete: function () {
                        $this.text(
                            Math.ceil(this.countNum).toLocaleString("en")
                        );
                        //alert('finished');
                    }
                }
            );
        });
        a = 1;
    }
});


var swiper = new Swiper(".mySwiper3", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
});








var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 2.5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
      nextEl: ".next1",
      prevEl: ".prev1",
    },
})

jQuery(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.mySwiper4', {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {  
    '480': {
      slidesPerView: 1,
      spaceBetween: 40,},
    '768': {
      slidesPerView: 2,
      spaceBetween: 50, },
    '992': {
          slidesPerView: 2.5,
          spaceBetween: 50, },
    '1200': {
              slidesPerView: 2.5,
              spaceBetween: 50, },
  },
    // Optional parameters   
     freeMode: true,
    loop: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,},
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev', },

})
})





document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
          accordionContent.style.maxHeight = 0;
      }

      // Close other open accordion items
      document.querySelectorAll('.accordion-header').forEach(otherButton => {
          if (otherButton !== button) {
              otherButton.classList.remove('active');
              otherButton.nextElementSibling.style.maxHeight = 0;
          }
      });
  });
});
