// Lấy các trường nhập liệu từ trang HTML
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Lấy nút đăng ký từ trang HTML
const signUpButton = document.getElementById("ttk");

// Thêm sự kiện click cho nút đăng ký
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // Lấy giá trị từ các trường nhập liệu
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Kiểm tra xem mật khẩu và mật khẩu xác nhận có khớp nhau không
  if (password !== confirmPassword) {
    alert("Mật khẩu và mật khẩu xác nhận không khớp!");
    return;
  }

  // Đăng ký người dùng mới với email và mật khẩu
  createUserWithEmailAndPassword(auth ,email, password)
    .then((userCredential) => {
      console.log(userCredential)
      // Người dùng đã đăng ký thành công
      const user = userCredential.user;

      // Cập nhật tên hiển thị cho người dùng
      user.updateProfile({
        displayName: name,
      }).then(() => {
        // Cập nhật tên hiển thị thành công
        alert("Đăng ký thành công!");
      }).catch((error) => {
        // Xử lý lỗi cập nhật tên hiển thị
        console.error(error);
        alert("Có lỗi xảy ra khi cập nhật tên hiển thị!");
      });
    })
    .catch((error) => {
      // Xử lý lỗi đăng ký
      console.error(error);
      alert("Có lỗi xảy ra khi đăng ký!");
    });
});