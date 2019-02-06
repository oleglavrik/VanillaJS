let block = document.getElementById('test'),
    leftStep = 0,
    rightStep = 0,
    bottomStep = 0,
    topStep = 0;

document.onkeydown = function (event) {

    if(event.key == 'ArrowRight') {
        block.style.right = rightStep + 'px';
        rightStep++;
    }

    if(event.key == 'ArrowLeft') {
        block.style.left = leftStep + 'px';
        leftStep++;
    }
};
