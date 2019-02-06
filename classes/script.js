var p = document.getElementsByTagName('p');
var one = document.getElementsByClassName('one');

for(var i = 0; i < p.length; i++) {
    p[i].onclick = f1;
}

for(var i = 0; i < one.length; i++) {
    one[i].onclick = f2;
}

function f1() {
    this.style.background = 'green';
    this.style.color = '#fff';
}

function f2() {
    this.style.background = '#ff0000';
    this.style.color = '#fff';
    this.style.fontWeight = '700';
}