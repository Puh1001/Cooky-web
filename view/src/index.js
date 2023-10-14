// search-option
$(document).ready(function () {
  const $searchElement = $('.search-bar');
  const $searchOptions = $('.search-option');

  let isOptionsVisible = false;

  $searchElement.on('click', function (event) {
    event.stopPropagation();
    if (isOptionsVisible) {
      $searchOptions.hide();
      isOptionsVisible = false;
    } else {
      $searchOptions.show();
      isOptionsVisible = true;
    }
  });

  $(document).on('click', function (event) {
    if (isOptionsVisible && !$searchElement.is(event.target) && $searchElement.has(event.target).length === 0) {
      $searchOptions.hide();
      isOptionsVisible = false;
    }
  });
});
// slide bar
$(document).ready(function () {
  $('.banner-slider').slick({
    // Enables auto play of slides
    autoplay: true,

    // Auto play change interval
    autoplaySpeed: 3000,
    // Current slide indicator dots
    dots: true,
  });
});