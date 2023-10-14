// 用于续订登录状态
(function() {
    const xqhtToken = "xiaoqvanht_renzhengzhuangyong";

    if (xqhtToken === "xiaoqvanht_renzhengzhuangyong") {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);

        const currentDate = new Date();

        const timeDifference = expirationDate.getTime() - currentDate.getTime();
        const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 2) {
            const newExpirationDate = new Date();
            newExpirationDate.setDate(newExpirationDate.getDate() + 7);
        }
    }
})();