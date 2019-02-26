window.onload = function () {
    // ES5
    function summ() {
        console.log('Hello' + ' World!!!');
    }

    summ();

    //ES6 arrows functions
    let x = () => { // () necessary when we have not passed arguments or we have 1 and more argument
        console.log('This is arrow function witch available in ES6.');
    };

    x();

    // with 1 argument
    let y = arg => { // () is not necessary when we have 1 argument
        console.log(arg * 10);
    };

    y(10);

    // default view for return
    let l = (a, b) => {
        return (a*b);
    };

    console.log(l(2,4));

    // short view for return
    let z = (a, b) => (a*b);

    console.log(z(2,2));
};