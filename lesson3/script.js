var prNum;
prNum = Math.floor(Math.random() * 10) + 1;
console.log(prNum);

function  checkNum() {
    var myNum, out;

    myNum = document.getElementById('myNum').value;
    myNum = parseInt(myNum);

    out = document.getElementById('out');

    if(myNum > prNum) {
        out.innerHTML = 'Ви ввели більше число.';
    } else if (myNum < prNum) {
        out.innerHTML = 'Ви ввели менше число.';
    } else {
        out.innerHTML = 'Ви вгадали!!!.';
    }


}