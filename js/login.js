document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username !== 'xiaoqvan') {
        alert('用户名或密码错误！');
        return;
    }

    var hashedPassword = '75f97061c05ef39f090b8af856e32dccf2fef7cb7d6642dab4c611165ea87e44';

    if (CryptoJS.SHA256(password).toString() === hashedPassword) {
        // 登录成功，保存认证信息到cookie
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7); // 设置过期时间为一周后
        document.cookie = 'xqhtToken=xiaoqvanht_renzhengzhuangyong; expires=' + expirationDate.toUTCString() + '; SameSite=Strict';
        alert('登录成功！');
        window.location.href = 'https://pan.xiaoqvan.top/admin';
    } else {
        alert('用户名或密码错误！');
        // 清除认证信息
        document.cookie = 'xqhtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict';
    }
});