var radioBtns = document.getElementsByName("jsLib"),
    button = document.getElementById("js-go");

console.log(button);

for(var i = 0; i < radioBtns.length; i++) {
    radioBtns[i].onchange = testRadio;
}

function testRadio() {
    console.log(this.value);
}

button.onclick = radioCheck;

function radioCheck() {
    for(var i = 0; i < radioBtns.length; i++) {
        if(radioBtns[i].checked) {
            alert(radioBtns[i].value);
            break;
        }
    }
}

