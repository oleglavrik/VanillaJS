window.onload = function () {
    var sec = 0,
        min = 0;

    setInterval(fTime, 1000);
    
    function fTime() {
        // get second & min arrows
        document.querySelector("#sec").style.transform = 'rotate('+ sec +'deg)';
        document.querySelector("#min").style.transform = 'rotate('+ min +'deg)';

        // count seconds & minutes
        if(sec+6 == 366) {
            sec = 0;

            if(min+6 == 366) {
                min = 0;
            } else  {
                min +=6;
            }
        } else {
            sec +=6;
        }
    }
};