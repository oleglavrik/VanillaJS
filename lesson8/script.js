let arr = {
  "one" : "first line",
  "two" : "second line",
  "three" : "third line",
  "four" : "fourth line",
};

let arr2 = [1,2,3,4,5,6,7,8,9,10];

out = document.getElementById("out");
for (let key in arr) {
    out.innerHTML += "'" + key + "'" + " : " + "'" + arr[key] + "'" + "<br>";
}

arr2.forEach(function (item) {
   console.log(item);
})