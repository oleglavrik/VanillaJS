window.onload = function () {
    let a = {
        name : "Oleh",
        surname : "Lavryk",
    };

    const lineSeparator = '---------------------------';

    console.log("This is object a");
    console.log(a);
    console.log(lineSeparator);

    let b = a;
    console.log("This is object b created by link to a");
    console.log(b);
    b.age = '30';
    console.log(lineSeparator);
    console.log("This is object a");
    console.log(a);
    console.log(lineSeparator);
    console.log("This is object b created by link to a");
    console.log(b);
    console.log(lineSeparator);

    // create object clone

    let c = {};

    for(let key in a) {
        c[key] = a[key];
    }

    console.log("This is object c cloned from a");
    console.log(a);
};