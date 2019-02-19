window.onload =function () {
    var out = document.querySelector('#out');

    if(
        navigator.userAgent.match('iPhone') ||
        navigator.userAgent.match('Android') ||
        navigator.userAgent.match('Tablet') ||
        navigator.userAgent.match('iPad')
    ) {
        out.innerHTML = 'You are use mobile device!';
    } else {
        out.innerHTML = 'You are use desktop device!';
    }
};