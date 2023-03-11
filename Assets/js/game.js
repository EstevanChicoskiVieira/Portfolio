var x = 0;
var y = 0;
var vel = 40;

var obj = document.getElementById("player");

window.addEventListener('keydown', (event) => {
    var tecla = event.keyCode;

    if (tecla == '68') {
        x = x + vel;
        obj.style.left = x + "px";
    } else if (tecla == '65') {
        x = x - vel
        obj.style.left = x + "px"
    }
});