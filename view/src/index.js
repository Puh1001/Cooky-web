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

// contract us popup
$(document).ready(function () {
  $('.menu-toggle-btn').click(function () {
    $('.menu-toggle-btn').toggleClass("effect");
    $('.menu-list').toggleClass("effect");
  });
});
// get suggest-bar from suggest.html
document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../../xây dựng web/cap-nhat.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseText = xhr.responseText;
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = responseText;
      var targetElement = tempDiv.querySelector('.suggest-bar');
      document.querySelector('.suggest-bar').innerHTML = targetElement.innerHTML;
      
      loadAndAddCSS('../../xây dựng web/main.css');
      loadAndAddJS('../../xây dựng web/main.js');
    }
  };
  xhr.send();
});

function loadAndAddCSS(url) {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}

function loadAndAddJS(url) {
  var script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}
