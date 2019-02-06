var count = 3,
    number = Math.floor(10 * Math.random()) + 1;
    userNumber = document.getElementById("user-number").value,
    out = document.getElementById("out");
    console.log(userNumber);
document.getElementById("check").onclick = function () {
    if(count > 0) {

        if(userNumber === number) {
            out.innerHTML = 'You are Win!!!';
        }

        count--;
    }
};