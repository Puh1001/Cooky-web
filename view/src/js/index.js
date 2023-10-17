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
  $('.popup-toggle-btn').click(function () {
    $('.popup-toggle-btn').toggleClass("effect");
    $('.popup-list').toggleClass("effect");
  });
});
// get suggest-bar from suggest.html
document.addEventListener('DOMContentLoaded', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'suggest.html', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var responseText = xhr.responseText;
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = responseText;
      var targetElement = tempDiv.querySelector('.suggest-bar');
      document.querySelector('.suggest-bar').innerHTML = targetElement.innerHTML;
      
      loadAndAddCSS('../css/suggest.css');
      loadAndAddJS('../js/suggest.js');
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
// click menu-item$(document).ready(function(){
  $(document).ready(function(){
    // Khi tải trang, kiểm tra xem có mục nào được lưu trong localStorage không
    var selectedItem = localStorage.getItem('selectedItem');
    if (selectedItem) {
        $('#' + selectedItem).find('.icon, p').css('color', 'orange');
    }

    $('.menu-item').click(function(){
        $('.menu-item .icon, .menu-item p').css('color', ''); // Reset màu sắc cho tất cả các mục
        $(this).find('.icon, p').css('color', 'orange'); // Đặt màu sắc cho mục được nhấp

        // Lưu id của mục được chọn vào localStorage
        localStorage.setItem('selectedItem', $(this).attr('id'));
    });

    // Kiểm tra xem trang hiện tại có phải là trang chủ không
    if (window.location.pathname.endsWith('index.html')) {
        // Nếu đúng, xóa mục đã chọn từ localStorage và reset màu sắc
        localStorage.removeItem('selectedItem');
        $('.menu-item .icon, .menu-item p').css('color', '');
    }
});


