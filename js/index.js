var pic = document.querySelector('img');

// mousemove鼠标移动就触发
document.addEventListener('mousemove', function (e) {
    var x = e.pageX;
    var y = e.pageY;

    // 注意，定位时的位置要加单位px的，所以得在后面拼接一个px
    pic.style.left = x - 35 + 'px';
    pic.style.top = y - 40 + 'px';
})