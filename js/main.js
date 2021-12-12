const hotelSwiper = new Swiper('.hotel-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-button-next',
    prevEl: '.hotel-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
const reviewsSwiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

$(window).scroll(function(){
  $('.newsletter').bgscroll({
      direction: 'bottom', // направление bottom или top
      bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
      debug: false, // Режим отладки
      min:0, // минимальное положение (в %) на которое может смещаться фон
      max:100 // максимальное положение (в %) на которое может смещаться фон
  });
})
var myMap;
ymaps.ready(function(){
    // Указывается идентификатор HTML-элемента.
    var moscow_map = new ymaps.Map("map", {
        center: [37.796059, -122.395892],
        zoom: 16
    });
});
//form validate
// $('.footer__form').validate ({
//     rules: {
//         fullname: {
//             required: true,
//             email: true
//         },
//         number: {
//             required: true
//         },
//         message: {
//             required: true
//         }
//     },
//     messages: {
//         fullname: {
//             required: 'enter a name'
//         },
//         number: {
//             required: 'Enter the phone number'
//         },
//         message: {
//             required: 'enter a message'
//         }
//     },
//     submitHandler: function (from) {
//   ajaxFormSubmit();
// },
// })
//sending form
function ajaxFormSubmit() {
    let string = $(".footer__form").serialize();
    $.ajax({
        type: "POST",
        url: "libs/php/mail.php",
        data: string,
        success: function (html) {
            $(".result").html(html);
        },
    });
    return false;
}
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function() {
  console.log("click or button");
  document
  .querySelector('.header-menu')
  .classList.toggle('header-menu--mobile');

});
