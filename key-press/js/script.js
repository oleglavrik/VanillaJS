document.getElementById('input').onkeypress = function (event) {
    //console.log(event);

    if(event.keyCode < 48 || event.keyCode > 57) {
        return false;
    }
};
