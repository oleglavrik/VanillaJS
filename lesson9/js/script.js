// let man = {
//     "name": "oleh",
//     "age" : "30",
//     "id"  : "111111d",
//     "year" : function () {
//         let year = new Date();
//         year = year.getFullYear();
//
//         return year = year - this.age;
//     }
// }
//
// console.log(man.year());
//
// let obj = {
//     "mas" : [5, 6],
//     "sum" : function () {
//         let sum = 0;
//
//         // variant 1
//         // for(let i= 0; i < this.mas.length; i++){
//         //     sum = sum + this.mas[i];
//         // }
//
//         // variant 2
//         this.mas.forEach(function (item) {
//             sum = sum + item;
//         })
//
//         return sum;
//     }
// };
//
// console.log(obj.sum());
//
// let goods = {
//     "00001" : {
//         "name" : "Goods 1",
//         "price" : "120",
//         "img" : "https://cdn4.iconfinder.com/data/icons/jetflat-2-fruits/60/002_014_banana_banan_plant_herb_fruit_food-512.png",
//         "instock" : "yes"
//     },
//     "00002" : {
//         "name" : "Goods 2",
//         "price" : "100",
//         "img" : "https://cdn3.iconfinder.com/data/icons/education-209/64/apple-fruit-science-school-512.png",
//         "instock" : "no"
//     }
// };
//
//
// let out = '';
//
// for( key in goods) {
//     out += "<li>";
//     out += "Name: " + goods[key].name + "<br>";
//     out += "Price: " + goods[key].price + "<br>";
//     out += "Instock: " + goods[key].instock + "<br>";
//     out += '<img src="' + goods[key].img + '">' + "<br>"
//     out += "</li>";
// }
//
// document.getElementById("out").innerHTML = out;

// task 5
let day = {
    "d1" : "Понедельник",
    "d2" : "Вторник",
    "d3" : "Среда",
    "d4" : "Четверг"
};

let result = '';
for(key in day) {
    result += key + " - " + day[key] + "<br>";
}

document.getElementById("result").innerHTML = result;





