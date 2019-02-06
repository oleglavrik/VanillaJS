document.onmousemove = function () {
    // insert img inside body
    document.getElementsByTagName('body')['0'].insertAdjacentHTML('beforeEnd','<img src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-05-48.png" alt="" id="cat">');

    //find cat
    let cat = document.getElementById("cat");

    // add img some css styles
    cat.style.position = 'fixed';

    // overwrite onmousemove function
    document.onmousemove = function (event) {
        cat.style.left =  event.clientX + 20 + "px";
        cat.style.top =  event.clientY + 20 + "px";
    };
};