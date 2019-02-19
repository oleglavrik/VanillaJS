window.onload = function () {
    var left   = document.querySelector('.left'),
        right  = document.querySelector('.right'),
        leftH  = 0,
        rightH = 0,
        max    = 0;

    function equalHeight() {
        // allow ability to get blocks height by own content
        left.style.height = 'auto';
        right.style.height = 'auto';

        // get height
        leftH = left.offsetHeight;
        rightH = right.offsetHeight;

        // get max value
        max = Math.max(leftH, rightH);

        // set equal height for both block
        left.style.height = max + 'px';
        right.style.height = max + 'px';
    }

    // onload event
    equalHeight();

    // onresize event
    window.onresize = equalHeight;
};