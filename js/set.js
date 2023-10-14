// 用于部分场景下视频没有自动播放
// 设置背景视频自动播放
window.onload = function() {
    // 获取视频元素
    var video = document.querySelector('video');

    // 隐藏播放器界面

    // 在页面加载后播放视频
    video.play();
}