//* Add PayPal Email
simpleCart({
  checkout: {
    type: "PayPal",
    email: "aminebenzid29@gmail.com"
  }
});


//* Add shopping cart dropdown in header
jQuery(document).ready(function () {
  $('.showCart').on('click', function () {
    $('#cartPopover').slideToggle('fast');
    $('.showCart span.dropdown').toggleClass('fa-chevron-circle-down fa-chevron-circle-up');
  })
});

