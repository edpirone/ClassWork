for (i = 10; i >= 1; i--) {
    var loop = 10;
    setTimeout(function() {
        console.log('* '.repeat(loop) + ' ' + loop);
        loop = loop - 1;
    }, 500 * i);
}
