function addStep() {
    let container = document.querySelector('.steps-container');

    let step = document.createElement('div');
    step.classList.add('step');

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Cắt một củ hành tây, hăy dùng một con dao và cắt nó thành 2 nửa');

    let upload = document.createElement('input');
    upload.setAttribute('type', 'file');
    upload.classList.add('file-input');

    let uploadLabel = document.createElement('label');
    uploadLabel.classList.add('upload-label2');
    uploadLabel.addEventListener('click', function() {
        upload.click();
    });

    upload.addEventListener('change', function(e) {
    if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = function(event) {
            // Cập nhật hình ảnh 
            uploadLabel.style.backgroundImage = 'url(' + event.target.result + ')';
        }
        reader.readAsDataURL(e.target.files[0]);}
    });

    let deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '...';
    deleteBtn.addEventListener('click', function() {
        container.removeChild(step);
    });

    step.appendChild(input);
    step.appendChild(upload);
    step.appendChild(uploadLabel);
    step.appendChild(deleteBtn);
    container.appendChild(step);
}
// load header
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header'); 
  });