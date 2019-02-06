window.onload = function () {
    var game = document.getElementById("game"),
        step = 0,
        colorLine = 'green';
        allBlock = document.getElementsByClassName('block');

    for (var i = 0; i < 9; i++) {
        game.innerHTML +=
            '<div class="block"></div>';
    }

    game.onclick = function (event) {
        //console.log(event);
        if(event.target.className == 'block') {

            if(step%2 == 0) {
                event.target.innerHTML = 'x';
            } else {
                event.target.innerHTML = '0';
            }
            step++;

            // check winner
            checkWinner();
        }
    };

    /**
     * Function what sign is winner
     * @returns {boolean}
     */
    function checkWinner() {
        /* Checkin for sign "X" */
        checkSign('x');
        /* Checkin for sign "0" */
        checkSign('0');

        return true;
    }

    /**
     * Additional function check what is sign winner by simple way
     * @param sign
     * @returns {boolean}
     */
    function checkSign(sign) {
        // 0 1 2
        // 3 4 5
        // 6 7 8

        // horizontal line level 1
        if(
            allBlock[0].innerHTML == sign &&
            allBlock[1].innerHTML == sign &&
            allBlock[2].innerHTML == sign
        ) {
            // change line color
            allBlock[0].style.background = colorLine;
            allBlock[1].style.background = colorLine;
            allBlock[2].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // horizontal line level 2
        if(
            allBlock[3].innerHTML == sign &&
            allBlock[4].innerHTML == sign &&
            allBlock[5].innerHTML == sign
        ) {
            // change line color
            allBlock[3].style.background = colorLine;
            allBlock[4].style.background = colorLine;
            allBlock[5].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // horizontal line level 3
        if(
            allBlock[6].innerHTML == sign &&
            allBlock[7].innerHTML == sign &&
            allBlock[8].innerHTML == sign
        ) {
            // change line color
            allBlock[6].style.background = colorLine;
            allBlock[7].style.background = colorLine;
            allBlock[8].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // vertical line 1
        if(
            allBlock[0].innerHTML == sign &&
            allBlock[3].innerHTML == sign &&
            allBlock[6].innerHTML == sign
        ) {
            // change line color
            allBlock[0].style.background = colorLine;
            allBlock[3].style.background = colorLine;
            allBlock[6].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // vertical line 2
        if(
            allBlock[1].innerHTML == sign &&
            allBlock[4].innerHTML == sign &&
            allBlock[7].innerHTML == sign
        ) {
            // change line color
            allBlock[1].style.background = colorLine;
            allBlock[4].style.background = colorLine;
            allBlock[7].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // vertical line 3
        if(
            allBlock[2].innerHTML == sign &&
            allBlock[5].innerHTML == sign &&
            allBlock[8].innerHTML == sign
        ) {
            // change line color
            allBlock[2].style.background = colorLine;
            allBlock[5].style.background = colorLine;
            allBlock[8].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // diagonal line 1
        if(
            allBlock[0].innerHTML == sign &&
            allBlock[4].innerHTML == sign &&
            allBlock[8].innerHTML == sign
        ) {
            // change line color
            allBlock[0].style.background = colorLine;
            allBlock[4].style.background = colorLine;
            allBlock[8].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }

        // diagonal line 2
        if(
            allBlock[2].innerHTML == sign &&
            allBlock[4].innerHTML == sign &&
            allBlock[6].innerHTML == sign
        ) {
            // change line color
            allBlock[2].style.background = colorLine;
            allBlock[4].style.background = colorLine;
            allBlock[6].style.background = colorLine;

            alert("Winner is " + sign);
            return true;
        }
    }
};