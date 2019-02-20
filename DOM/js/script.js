window.onload = function () {
    var p = document.createElement('p'),
        out = document.querySelector('#out');

    // Paste new html element
    document.body.insertBefore(p, out);

    // change text and classes
    p.innerHTML = 'This is new paragraph created by JavaScript';
    p.classList.add('main', 'green');
};