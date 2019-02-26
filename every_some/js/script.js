window.onload = function () {

    let arr = [3, 4, 5, 9];

    // by simple for
    for(let i = 0; i < arr.length; i++) {
        //if(arr[i] < 5 ) console.log(arr[i]);
    }

    // by filter method
    let mass = arr.filter(function (x) {
       //return (x < 5);
    });

    //console.log(mass);

    let c = arr.every(function (b) {
        console.log(b);
        return b < 5;
    });

    console.log(c);

    let d = arr.some(function (v) {
        return v > 5;
    });

    console.log(d);
};
