// click đầu trang web
$(document).ready(function () {
    $('.tab').removeClass('active');
    $('.tabb').hide();
    $('.mon').hide();

    $('.mon-an .menu').click(function (e) {
        e.preventDefault();

        $('.tab').removeClass('active');
        $('.tabb').hide();

        const menuId = $(this).attr('id').replace('menu-', '');
        $('#tab-' + menuId).addClass('active');
        $('.' + menuId).show();

        $('.mon').hide();
        $('.mon-tat-ca').show();

        $('.mon-an .menu').css('background-color', '');
        $(this).css('background-color', '#f9e3c7');

        const menuItem = $('#tab-' + menuId + ' .menu.active');
        if (menuItem.length) {
            menuItem.click();
        }

        console.log("Đang thử click vào #menu-active");
        $('#menu-active').click();
        console.log("Đang thử click vào #menu-active");
        $('#menu-active').css('border-bottom', '2px solid orange');
    });

    $('.tab .menu').click(function (e) {
        e.preventDefault();

        $('.tab .menu').removeClass('active');
        $('.tab .menu').css('border-bottom', '');

        $(this).addClass('active');
        $(this).css('border-bottom', '2px solid orange');

        if ($(this).attr('id') === 'menu-active') {
            $(this).css('border-bottom', '2px solid orange');
        }

        let index = $(this).index();

        $('.mon').hide();

        if (index === 0) {
            $('.mon-tat-ca').show();
        } else {
            $('.mon' + index).show();
        }
    });
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
$(document).ready(function () {
    $('.menu-the-i').hide();

    $('.fa-ellipsis').on('click', function (e) {
        e.stopPropagation();
        var menu = $(this).closest('.thong-tin-nguoi-dung').find('.menu-the-i');
        $('.menu-the-i').not(menu).hide();
        menu.toggle();
    });

    $(document).on('click', function () {
        $('.menu-the-i').hide();
    });
});

//shear
const shareButton = document.getElementById("shareButton");
const subMenuShear = document.querySelector(".sub-menu-shear ul");

shareButton.addEventListener("click", () => {
    if (subMenuShear) {
        const isSubMenuVisible = subMenuShear.style.display === "block";
        if (isSubMenuVisible) {
            subMenuShear.style.display = "none";
        } else {
            subMenuShear.style.display = "block";
        }
    }
});

//lưu món
const saveButton = document.getElementById("saveButton");

saveButton.addEventListener("click", () => {
    alert("Món ăn đã được lưu!");
});
function openModal() {
    var modal = document.getElementById("myModal");
    var img = document.querySelector(".img-1");
    var modalImg = document.getElementById("img01");

    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.getElementById("printButton").addEventListener("click", function () {
    window.print();
});

// Chọn nút Gửi Cooksnap và input file
const cooksnapButton = document.querySelector('.cooksnap-button');
const imageInput = document.getElementById('imageInput');
cooksnapButton.addEventListener('click', () => {
    imageInput.click();
});

// hieen thị menu con
const moreOptions = document.querySelector('.more-options');
const reportText = document.querySelector('.reportText');

let isReportTextVisible = false; // Biến theo dõi trạng thái hiển thị

moreOptions.addEventListener('click', () => {
    if (isReportTextVisible) {
        reportText.style.display = 'none';
    } else {
        reportText.style.display = 'block';
    }
    isReportTextVisible = !isReportTextVisible;
});