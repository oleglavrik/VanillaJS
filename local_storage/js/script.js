window.onload = function () {
    var color = '';

    if(localStorage.getItem("bgcolor") !== null) {
        color = localStorage.getItem("bgcolor");
        document.getElementsByTagName("body")[0].style.background = color;
    }

    document.getElementById('green').onclick = function () {
        // change bg for tag body
        document.getElementsByTagName("body")[0].style.background = 'green';
        localStorage.setItem("bgcolor", "green");
    };

    document.getElementById('red').onclick = function () {
        // change bg for tag body
        document.getElementsByTagName("body")[0].style.background = 'red';
        localStorage.setItem("bgcolor", "red");
    };
};