        // 在访问页面时，检查是否存在正确的认证信息
        var authToken = localStorage.getItem('xqhtToken');
        if (authToken !== 'xiaoqvanht_renzhengzhuangyong') {
            alert('未经授权的访问！');
            window.location.href = 'https://xiaoqvan.top';
        } else {
            document.body.style.display = 'block';
        }
        