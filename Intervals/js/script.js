let
    block = document.getElementById('block'),
    timer,
    time = 10,
    out = document.getElementById('out'),
    moveStep = 0;

//moveElement(block);

function moveElement() {
    block.style.marginLeft = moveStep + 'px';
    moveStep += 3;

    timer = setTimeout(moveElement,50);
}

// let time = setInterval(function () {
//     moveElement(block);
// }, 50);

document.getElementById("stop-btn").onclick = function () {
    //clearInterval(time);
    clearTimeout(timer);
};


obr();
function obr() {
    out.innerHTML = time;
    time--;

    if(time < 0) {
       clearTimeout(timer);
       alert('Stop Timer');
    }else {
        timer = setTimeout(obr, 1000);
    }
}

