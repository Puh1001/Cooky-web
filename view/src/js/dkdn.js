function loginWithProvider(provider) {
    const auth = firebase.auth();
    let authProvider;

    // Chọn nhà cung cấp dựa trên provider (ví dụ: 'facebook', 'google')
    switch (provider) {
      case 'facebook':
        authProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case 'google':
        authProvider = new firebase.auth.GoogleAuthProvider();
        break;
      // Thêm xử lý cho các nhà cung cấp khác ở đây
    }

    // Mở cửa sổ đăng nhập
    auth.signInWithPopup(authProvider)
      .then((result) => {
        // Xử lý sau khi đăng nhập thành công
        console.log('Đăng nhập thành công:', result);
      })
      .catch((error) => {
        // Xử lý lỗi đăng nhập
        console.error('Lỗi đăng nhập:', error);
      });
  }