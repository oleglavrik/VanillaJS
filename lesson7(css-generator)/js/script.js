document.getElementById("r1").oninput = cssGenerator;

function cssGenerator() {
    var div = document.getElementById("test"),
        out = document.getElementById("out");


    div.style.borderRadius = this.value + 'px';
    out.innerText = '-web-kit-border-radius: ' + this.value + 'px;\n';
    out.innerText += 'border-radius: ' + this.value + 'px;';
}