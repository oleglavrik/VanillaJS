/**
 * Created by oleh.lavryk on 1/4/2019.
 */
var left = 0,
    line = document.getElementById("line"),
    timer;

// init autoSlider
autoSlider();

function autoSlider() {
    timer = setTimeout(function () {
        left += -128;
        if(left < -512) {
            left = 0;
            clearTimeout(timer);
        }
        line.style.left = left + 'px';
        autoSlider();
    }, 2000)
}

