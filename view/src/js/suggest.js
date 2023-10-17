
$(document).ready(function () {
    // Ẩn tất cả các .tab và .tabb
    $('.tab').removeClass('active');
    $('.tabb').hide();
    $('.mon').hide();

    // Sự kiện click cho .menu trong .mon-an
    $('.mon-an .menu').click(function (e) {
        e.preventDefault();

        // Ẩn tất cả các .tab và .tabb
        $('.tab').removeClass('active');
        $('.tabb').hide();

        // Hiển thị .tab và .tabb tương ứng với .menu được nhấn
        const menuId = $(this).attr('id').replace('menu-', '');
        $('#tab-' + menuId).addClass('active');
        $('.' + menuId).show();

        // Mặc định hiển thị .mon-tat-ca
        $('.mon').hide();
        $('.mon-tat-ca').show();

        // Đặt màu nền cho menu được chọn
        $('.mon-an .menu').css('background-color', '');
        $(this).css('background-color', '#f9e3c7');

        // Kích hoạt menu tương ứng trong .tab
        const menuItem = $('#tab-' + menuId + ' .menu.active');
        if (menuItem.length) {
            menuItem.click();
        }

        // Tự động click vào #menu-active
        console.log("Đang thử click vào #menu-active");
        $('#menu-active').click();
        console.log("Đang thử click vào #menu-active");
        $('#menu-active').css('border-bottom', '2px solid orange');
    });

    // Sự kiện click cho .menu trong .tab
    $('.tab .menu').click(function (e) {
        e.preventDefault();

        // Xóa class 'active' và 'active-border' khỏi tất cả các mục .menu
        $('.tab .menu').removeClass('active');
        $('.tab .menu').css('border-bottom', '');  // Loại bỏ border-bottom từ tất cả các mục

        // Thêm class 'active' cho mục .menu được nhấn
        $(this).addClass('active');
        $(this).css('border-bottom', '2px solid orange');  // Thêm border-bottom màu cam

        // Nếu mục được nhấn là #menu-active, đặt lại border-bottom cho nó
        if ($(this).attr('id') === 'menu-active') {
            $(this).css('border-bottom', '2px solid orange');
        }

        let index = $(this).index();

        $('.mon').hide(); // Ẩn tất cả các .mon

        if (index === 0) {
            $('.mon-tat-ca').show(); // Hiển thị .mon-tat-ca khi "Tất cả" được chọn
        } else {
            $('.mon' + index).show(); // Hiển thị .mon tương ứng dựa trên chỉ số
        }
    });
    // Tự động click vào #menu-thit và #menu-active khi trang web tải xong
    $('#menu-thit').click();
});


//like
const likeButtons = document.querySelectorAll(".likeButton");
const timButtons = document.querySelectorAll(".timButton");
const votayButtons = document.querySelectorAll(".votayButton");

likeButtons.forEach((button, index) => {
    let likeCount = 0;
    let likeFlag = false;
    const likeCountElement = document.querySelectorAll(".likeCount")[index];

    button.addEventListener("click", () => {
        likeFlag = !likeFlag;
        likeCount = likeFlag ? likeCount + 1 : likeCount - 1;
        likeCountElement.textContent = likeCount;
    });
});

timButtons.forEach((button, index) => {
    let timCount = 0;
    let timFlag = false;
    const timCountElement = document.querySelectorAll(".timCount")[index];

    button.addEventListener("click", () => {
        timFlag = !timFlag;
        timCount = timFlag ? timCount + 1 : timCount - 1;
        timCountElement.textContent = timCount;
    });
});

votayButtons.forEach((button, index) => {
    let votayCount = 0;
    let votayFlag = false;
    const votayCountElement = document.querySelectorAll(".votayCount")[index];

    button.addEventListener("click", () => {
        votayFlag = !votayFlag;
        votayCount = votayFlag ? votayCount + 1 : votayCount - 1;
        votayCountElement.textContent = votayCount;
    });
});
// load header, footer
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('header');
});
document.addEventListener('DOMContentLoaded', function () {
    loadComponent('footer');
});
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
