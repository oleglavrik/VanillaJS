window.onload = function () {

    function first(call_back) {
        console.log('1');
        call_back();
    }

    function second() {
        console.log('2');
    }

    function third(a,b) {
        console.log(a*b);
    }
    // call back without arguments
    first(second);

    // call back with arguments
    first(function () {
       third(1,10);
    });
};