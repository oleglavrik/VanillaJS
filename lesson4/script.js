var arr = [1, 2, 3, 'Hello', 'Test string'];

function renderArray() {
    var out = document.getElementById('out'),
        str = '';

    for(var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i] + "<br>\n\t";
    }

    out.innerHTML = str;
}

function pushItem() {
    var newItem = document.getElementById('addItem');
    arr.push(newItem.value);
    renderArray();

    newItem.value = '';
}

function popItem() {
    arr.pop();
    renderArray();
}

renderArray();