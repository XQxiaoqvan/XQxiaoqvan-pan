document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username !== 'xiaoqvan') {
        alert('用户名不正确！');
        return;
    }

    var hashedPassword = 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3';

    if (CryptoJS.SHA256(password).toString() === hashedPassword) {
        // 登录成功，保存认证信息到LocalStorage
        localStorage.setItem('xqhtToken', 'xiaoqvanht_renzhengzhuangyong'); // 这里用一个示例认证信息
        alert('登录成功！');
        window.location.href = 'https://pan.xiaoqvan.top/admin';
    } else {
        alert('密码错误！');
        // 清除认证信息
        localStorage.removeItem('xqhtToken');
    }
});