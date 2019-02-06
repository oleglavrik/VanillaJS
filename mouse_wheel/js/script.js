let mouse_direction = document.getElementById("mouse_direction");
let mouse_speed = document.getElementById("mouse_speed");
document.onwheel = function (event) {
    //console.log(event);

    if(event.deltaY > 0) {
        mouse_direction.innerHTML = 'Up ';
    }else {
        mouse_direction.innerHTML = 'Down';
    }

    let speed = Math.abs(event.deltaY);
    console.log(speed);

    if(speed < 100) {
        mouse_speed.innerHTML = 'Low';
    } else if (speed < 150) {
        mouse_speed.innerHTML = 'Middle';
    } else if (speed < 250) {
        mouse_speed.innerHTML = 'High';
    } else {
        mouse_speed.innerHTML = 'The Highest';
    }
};

let left = 290;
document.getElementById("test").onwheel = function (event) {
      let line = event.deltaY;
      left = left + (0.2 * line);

      document.getElementById('test2').style.left = left + 'px';

      return false;
};