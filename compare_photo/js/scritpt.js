let parrent = document.getElementById('myslide');

parrent.onmousemove = function (event) {
    let x =  event.offsetX;

    document.getElementById("two").style.width = x + 'px';
};


parrent.onmouseleave = function () {
    document.getElementById("two").style.width = parrent.offsetWidth + 'px';
};