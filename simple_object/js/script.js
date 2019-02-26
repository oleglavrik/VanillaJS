window.onload = function () {
    "use strict";

    const hotel = {
        "name" : "Near Home",
        "stars" : 3,
        "adv" : function () {
            console.log( `${this.name} - best home hotel with ${this.stars} stars`); //work only ES6
        },
        'und': undefined
    };

    console.log(hotel.name);
    hotel.adv();

    let a = {};
    a.name = 'Test';
    console.log(a);

    let x = 'und' in hotel;
    console.log(x);

    // delete object key
    console.log(hotel);
    delete hotel.und;
    console.log(hotel);
};