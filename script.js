// 获取弹窗元素和按钮
const popup = document.getElementById('popup');
const readButton = document.getElementById('readButton');

// 页面滚动监听
window.addEventListener('scroll', function () {
    // 判断是否滚动到底部
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // 延迟3秒后弹出弹窗
        setTimeout(function () {
            popup.classList.add('show');
        }, 3000);
    }
});

// 点击“我已阅读”按钮后跳转到表单页面
readButton.addEventListener('click', function () {
    window.location.href = 'index_form.html';  // 跳转到表单页面
});
